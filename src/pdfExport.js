// src/pdfExport.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export async function exportAssessmentPdf({
  title,
  payload,
  pathRows,
  groupedMissing,
  labels = {},
  locale = 'de',
}) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', compress: true });

  const marginX = 40;
  const marginY = 42;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - marginX * 2;

  const fileName = `${safeFilePart(labels.fileNamePrefix || 'Entscheidungsbaum_Prüfung')}-${safeFilePart(payload?.assessmentId || 'export')}.pdf`;

  const headStylesNeutral = {
    fontStyle: 'bold',
    fillColor: [255, 255, 255],
    textColor: [20, 20, 20],
    lineWidth: 0.5,
    lineColor: [210, 210, 210],
  };

  let y = marginY;

  // ---- Header ----
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(normalizeText(title), marginX, y);
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  const metaLine = [
    `${labels.metaVersion || 'Version'}: ${normalizeText(payload?.assessmentId || '')}`,
    `${labels.metaCreator || 'Ersteller'}: ${normalizeText(payload?.createdBy || 'Unbekannt')}`,
    `${labels.metaUpdatedAt || 'Bearbeitungszeitpunkt'}: ${formatDate(payload?.lastUpdated, locale)}`,
  ].join('  •  ');

  doc.text(metaLine, marginX, y);
  y += 18;

  // ---- Abschnitt: Pfad ----
  y = ensureSpace(doc, y, pageHeight, marginY, 110);
  y = drawSectionTitle(doc, labels.pathSection || 'Pfad', marginX, y);

  y = drawThreeColTable(doc, {
    startY: y,
    marginX,
    contentWidth,
    head: [
      labels.stepColumn || 'Schritt',
      labels.questionColumn || 'Frage',
      labels.answerColumn || 'Antwort',
    ],
    body: (pathRows || []).map(([step, q, a]) => [
      stripUrls(String(step ?? '')),
      stripUrls(String(q ?? '')),
      stripUrls(String(a ?? '')),
    ]),
    colFracs: [0.10, 0.62, 0.28],
    headStyles: headStylesNeutral,
  });

  // ---- Abschnitt: Fehlende Anforderungen ----
  const hasMissing =
    Array.isArray(groupedMissing) &&
    groupedMissing.some(
      (r) =>
        Array.isArray(r?.articles) &&
        r.articles.some((a) => Array.isArray(a?.items) && a.items.length > 0)
    );

  if (hasMissing) {
    y = ensureSpace(doc, y, pageHeight, marginY, 110);
    y = drawSectionTitle(doc, labels.missingSection || 'Fehlende Anforderungen', marginX, y);

    for (const reg of groupedMissing) {
      const regLabel = normalizeText(reg?.regulation || labels.unknownRegulation || 'Unbekannte Verordnung');

      y = ensureSpace(doc, y, pageHeight, marginY, 70);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      drawWrappedText(doc, stripUrls(regLabel), marginX, y, contentWidth, 14);
      y = doc.__lastWrappedY ?? (y + 10);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);

      for (const article of reg?.articles || []) {
        const items = article?.items || [];
        if (!items.length) continue;

        const articleTitleRaw = normalizeText(article?.article || labels.noArticleReference || 'Ohne Artikel/Referenz');
        const articleTitle = stripUrls(articleTitleRaw);

        const body = items.map((r) => {
          const mainRaw = normalizeText(r?.todo || r?.question || '');
          const main = stripUrls(mainRaw);
          return [main, '', ''];
        });

        y = ensureSpace(doc, y, pageHeight, marginY, 130);

        const w0 = Math.floor(contentWidth * 0.55);
        const w1 = Math.floor(contentWidth * 0.25);
        const w2 = contentWidth - w0 - w1;
        const columnWidths = [w0, w1, w2];

        autoTable(doc, {
          startY: y,
          margin: { left: marginX, right: marginX },
          tableWidth: contentWidth,
          theme: 'grid',
          head: [
            [
              {
                content: articleTitle,
                colSpan: 3,
                styles: {
                  ...headStylesNeutral,
                },
              },
            ],
            [
              labels.missingRequirementColumn || 'Fehlende Anforderung',
              labels.performedByColumn || 'Durchgeführt durch',
              labels.controlledByColumn || 'Kontrolliert durch',
            ],
          ],
          body,
          styles: {
            font: 'helvetica',
            fontSize: 9,
            cellPadding: 3,
            valign: 'top',
            overflow: 'linebreak',
            lineWidth: 0.5,
            lineColor: [220, 220, 220],
          },
          headStyles: headStylesNeutral,
          columnStyles: {
            0: { cellWidth: w0 },
            1: { cellWidth: w1 },
            2: { cellWidth: w2 },
          },
          rowPageBreak: 'avoid',
          pageBreak: 'auto',
          didParseCell: (data) => {
            if (!data?.cell) return;
          
            const raw = Array.isArray(data.cell.text)
              ? data.cell.text.join('\n')
              : String(data.cell.text ?? '');
          
            const clean = stripUrls(raw);
          
            const innerWidth = getHookInnerWidth(data, columnWidths, contentWidth);
            const fontSize = Number(data.cell.styles?.fontSize ?? 9);
          
            const lines = wrapTextToWidth(doc, clean, innerWidth, fontSize);
          
            data.cell.text = lines.length ? lines : [''];
            data.cell.styles.overflow = 'linebreak';
          },                      
        });

        y = doc.lastAutoTable.finalY + 20;
      }
    }
  }

  doc.save(fileName);
}

function drawSectionTitle(doc, text, x, y) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text(normalizeText(text), x, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  return y + 12;
}

function drawThreeColTable(doc, { startY, marginX, contentWidth, head, body, colFracs, headStyles }) {
  const w0 = Math.floor(contentWidth * colFracs[0]);
  const w1 = Math.floor(contentWidth * colFracs[1]);
  const w2 = contentWidth - w0 - w1;
  const columnWidths = [w0, w1, w2];

  autoTable(doc, {
    startY,
    margin: { left: marginX, right: marginX },
    tableWidth: contentWidth,
    theme: 'grid',
    head: [head],
    body,
    styles: {
      font: 'helvetica',
      fontSize: 9,
      cellPadding: 3,
      valign: 'top',
      overflow: 'linebreak',
      lineWidth: 0.5,
      lineColor: [220, 220, 220],
    },
    headStyles,
    columnStyles: {
      0: { cellWidth: w0 },
      1: { cellWidth: w1 },
      2: { cellWidth: w2 },
    },
    rowPageBreak: 'avoid',
    pageBreak: 'auto',
    didParseCell: (data) => {
        if (!data?.cell) return;
      
        const raw = Array.isArray(data.cell.text)
          ? data.cell.text.join('\n')
          : String(data.cell.text ?? '');
      
        const clean = stripUrls(raw);
      
        const innerWidth = getHookInnerWidth(data, columnWidths, contentWidth);
        const fontSize = Number(data.cell.styles?.fontSize ?? 9);
      
        const lines = wrapTextToWidth(doc, clean, innerWidth, fontSize);
      
        data.cell.text = lines.length ? lines : [''];
        data.cell.styles.overflow = 'linebreak';
      },               
  });

  return doc.lastAutoTable.finalY + 20;
}

function _drawBulletList(doc, { x, y, maxWidth, items, bulletIndent, lineHeight, pageHeight, marginY }) {
    const bullet = '•';
    const textX = x + bulletIndent;
    const textWidth = Math.max(60, maxWidth - bulletIndent - 2);
    const fontSize = getCurrentFontSize(doc);
  
    for (const raw of items) {
      const clean = stripUrls(String(raw ?? ''));
      const lines = wrapTextToWidth(doc, clean, textWidth, fontSize);
  
      const needed = lineHeight * Math.max(1, lines.length) + 6;
      y = ensureSpace(doc, y, pageHeight, marginY, needed);
  
      doc.text(bullet, x, y);
      if (lines.length > 0) doc.text(lines[0], textX, y);
  
      for (let i = 1; i < lines.length; i += 1) {
        y += lineHeight;
        y = ensureSpace(doc, y, pageHeight, marginY, lineHeight + 2);
        doc.text(lines[i], textX, y);
      }
  
      y += lineHeight + 2;
    }
  
    return y;
  }  

  function drawWrappedText(doc, text, x, y, maxWidth, lineHeight) {
    const fontSize = getCurrentFontSize(doc);
    const lines = wrapTextToWidth(doc, text, maxWidth, fontSize);
  
    for (let i = 0; i < lines.length; i += 1) {
      doc.text(lines[i], x, y);
      y += lineHeight;
    }
  
    doc.__lastWrappedY = y;
    return y;
  }  

function ensureSpace(doc, y, pageHeight, marginY, needed) {
  if (y + needed <= pageHeight - marginY) return y;
  doc.addPage();
  return marginY;
}

function normalizeText(v) {
  return String(v ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function stripUrls(input) {
  const s = normalizeText(input);
  if (!s) return '';

  let out = s.replace(/\s*\(\s*https?:\/\/[^\s)]+\s*\)/g, '');
  out = out.replace(/https?:\/\/[^\s)]+/g, '');
  out = out.replace(/[ \t]{2,}/g, ' ').trim();
  return out;
}

function getCellHPadding(cell) {
  const cp = cell?.styles?.cellPadding ?? 0;

  if (typeof cp === 'number') return cp * 2;

  if (Array.isArray(cp)) {
    if (cp.length === 4) return (cp[1] ?? 0) + (cp[3] ?? 0);
    if (cp.length === 2) return (cp[1] ?? 0) * 2;
  }

  if (cp && typeof cp === 'object') {
    return (cp.left ?? 0) + (cp.right ?? 0);
  }
  return 0;
}

function getHookInnerWidth(data, columnWidths, tableWidthFallback) {
    const cell = data?.cell;
  
    // 1) bevorzugt: echte Breite aus autoTable (wenn vorhanden)
    const wFromColumn = Number(data?.column?.width);
    const wFromCell = Number(cell?.width);
  
    let width = 0;
  
    if (Number.isFinite(wFromColumn) && wFromColumn > 0) width = wFromColumn;
    else if (Number.isFinite(wFromCell) && wFromCell > 0) width = wFromCell;
    else {
      // 2) Fallback: unsere eigene Breite aus columnStyles (sicher!)
      const colIndex = Number(data?.column?.index);
      if (Number.isFinite(colIndex) && Array.isArray(columnWidths) && columnWidths[colIndex] > 0) {
        width = columnWidths[colIndex];
      } else if (Number(cell?.colSpan) > 1 && Number.isFinite(tableWidthFallback) && tableWidthFallback > 0) {
        // z.B. Artikel-Zeile mit colSpan=3
        width = tableWidthFallback;
      }
    }
  
    const padding = getCellHPadding(cell);
  
    // Textbreite nur minimal schmaler als Spalte
    // (zusätzlich -2pt als Sicherheitsabstand)
    const inner = width - padding - 2;
  
    // NICHT auf 10pt runterclampen -> das erzeugt "hochkant"
    // Mindestbreite moderat, damit selbst Header nicht vertikal wird
    return Math.max(60, inner);
  }  

/**
 * Robust: echtes Wrapping anhand maxWidth, inkl. Splitting sehr langer Tokens.
 * Ergebnis ist ein Array von Zeilen => autoTable rendert NUR innerhalb der Zelle.
 */
function getCurrentFontSize(doc) {
    if (typeof doc.getFontSize === 'function') return Number(doc.getFontSize());
    const v = doc?.internal?.getFontSize?.();
    return Number(v ?? 10);
  }
  
  function measureTextWidth(doc, text, fontSize) {
    const prev = getCurrentFontSize(doc);
    if (Number.isFinite(fontSize) && fontSize > 0 && fontSize !== prev) doc.setFontSize(fontSize);
    const w = doc.getTextWidth(text);
    if (Number.isFinite(fontSize) && fontSize > 0 && fontSize !== prev) doc.setFontSize(prev);
    return w;
  }
  
  /**
   * Word-Wrap (Wortgrenzen). Character-Split nur wenn ein einzelnes Token breiter als maxWidth ist.
   * Wichtig: Messen immer mit der tatsächlichen fontSize der Zelle => kein vertikales Rendering.
   */
  function wrapTextToWidth(doc, text, maxWidth, fontSize) {
    const s = normalizeText(text);
    if (!s) return [''];
  
    const paragraphs = s.split('\n');
    const out = [];
  
    for (let p = 0; p < paragraphs.length; p += 1) {
      const para = paragraphs[p].trim();
      if (!para) {
        out.push('');
        continue;
      }
  
      const lines = wrapParagraphToWidth(doc, para, maxWidth, fontSize);
      out.push(...lines);
  
      if (p < paragraphs.length - 1) out.push('');
    }
  
    while (out.length > 1 && out[out.length - 1] === '') out.pop();
    return out.length ? out : [''];
  }
  
  function wrapParagraphToWidth(doc, paragraph, maxWidth, fontSize) {
    const tokens = paragraph.split(/\s+/).filter(Boolean);
    const lines = [];
    let current = '';
  
    const pushLine = () => {
      if (current) lines.push(current);
      current = '';
    };
  
    for (const token of tokens) {
      const tokenWidth = measureTextWidth(doc, token, fontSize);
  
      const tokenParts =
        tokenWidth <= maxWidth
          ? [token]
          : splitTokenByWidth(doc, token, maxWidth, fontSize);
  
      for (const part of tokenParts) {
        if (!current) {
          current = part;
          continue;
        }
  
        const candidate = `${current} ${part}`;
        if (measureTextWidth(doc, candidate, fontSize) <= maxWidth) {
          current = candidate;
        } else {
          pushLine();
          current = part;
        }
      }
    }
  
    pushLine();
    return lines.length ? lines : [''];
  }
  
  function splitTokenByWidth(doc, token, maxWidth, fontSize) {
    // Nur für echte Monster-Tokens, sonst keine Char-Wraps.
    const parts = [];
    let buf = '';
  
    for (const ch of token) {
      const candidate = buf + ch;
      if (buf && measureTextWidth(doc, candidate, fontSize) > maxWidth) {
        parts.push(buf);
        buf = ch;
      } else {
        buf = candidate;
      }
    }
  
    if (buf) parts.push(buf);
    return parts.length ? parts : [token];
  }
  

function safeFilePart(s) {
  return String(s)
    .replace(/[^\w.-]+/g, '_')
    .replace(/_+/g, '_')
    .slice(0, 80);
}

function formatDate(isoOrDate, locale = 'de') {
  try {
    const d = isoOrDate ? new Date(isoOrDate) : null;
    if (!d || Number.isNaN(d.getTime())) return '';
    return d.toLocaleString(locale === 'en' ? 'en-US' : 'de-DE');
  } catch {
    return '';
  }
}
