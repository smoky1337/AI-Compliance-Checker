import { DEFAULT_LOCALE, getModelMessages } from './i18n';

// Link-Lookups für Rechtsgrundlagen
export const EU_AI_ACT_LINKS_DE = {
  ART_3:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_3',
  ART_4:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_4',
  ART_5:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_5',
  ART_6:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_6',
  ART_9:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_9',
  ART_10: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_10',
  ART_11: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_11',
  ART_12: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_12',
  ART_13: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_13',
  ART_14: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_14',
  ART_15: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_15',
  ART_16: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_16',
  ART_25: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_25',
  ART_26: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_26',
  ART_27: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_27',
  ART_43: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_43',
  ART_48: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_48',
  ART_49: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_49',
  ART_50: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_50',
  ART_51: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_51',
  ART_52: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_52',
  ART_55: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_55',
  ART_60: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_60',
  ART_72: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_72',
  ART_73: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#art_73',
  ANHANG_III: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#anx_III',
  ANHANG_4:   'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=OJ:L_202401689#anx_IV',
};

// Platzhalter: kann später durch englische Fundstellen ersetzt werden.
export const EU_AI_ACT_LINKS_ENG = {
  ART_3:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_3',
  ART_4:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_4',
  ART_5:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_5',
  ART_6:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_6',
  ART_9:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_9',
  ART_10: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_10',
  ART_11: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_11',
  ART_12: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_12',
  ART_13: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_13',
  ART_14: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_14',
  ART_15: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_15',
  ART_16: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_16',
  ART_25: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_25',
  ART_26: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_26',
  ART_27: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_27',
  ART_43: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_43',
  ART_48: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_48',
  ART_49: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_49',
  ART_50: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_50',
  ART_51: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_51',
  ART_52: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_52',
  ART_55: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_55',
  ART_60: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_60',
  ART_72: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_72',
  ART_73: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#art_73',
  ANHANG_III: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#anx_III',
  ANHANG_4:   'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=OJ:L_202401689#anx_IV',
};

export const DORA_LINKS_DE = {
  ART_2:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_2',
  ART_3:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_3',
  ART_4:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_4',
  ART_5:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_5',
  ART_6:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_6',
  ART_8:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_8',
  ART_9:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_9',
  ART_10:  'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_10',
  ART_11: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_11',
  ART_12: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_12',
  ART_13: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_13',
  ART_14: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_14',
  ART_16: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_16',
  ART_17: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_17',
  ART_18: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_18',
  ART_19: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_19',
  ART_20: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_20',
  ART_23: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_23',
  ART_24: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_24',
  ART_25: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_25',
  ART_26: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_26',
  ART_27: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_27',
  ART_28: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_28',
  ART_29: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_29',
  ART_30: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_30',
  ART_31: 'https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32022R2554#art_31',
};

// Platzhalter: kann später durch englische Fundstellen ersetzt werden.
export const DORA_LINKS_ENG = {
  ART_2:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_2',
  ART_3:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_3',
  ART_4:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_4',
  ART_5:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_5',
  ART_6:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_6',
  ART_8:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_8',
  ART_9:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_9',
  ART_10:  'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_10',
  ART_11: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_11',
  ART_12: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_12',
  ART_13: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_13',
  ART_14: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_14',
  ART_16: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_16',
  ART_17: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_17',
  ART_18: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_18',
  ART_19: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_19',
  ART_20: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_20',
  ART_23: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_23',
  ART_24: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_24',
  ART_25: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_25',
  ART_26: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_26',
  ART_27: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_27',
  ART_28: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_28',
  ART_29: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_29',
  ART_30: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_30',
  ART_31: 'https://eur-lex.europa.eu/legal-content/ENG/TXT/HTML/?uri=CELEX:32022R2554#art_31',
};

const EU_AI_ACT_LINKS = EU_AI_ACT_LINKS_DE;
const DORA_LINKS = DORA_LINKS_DE;

const LEGAL_LINK_GROUPS_BY_LOCALE = {
  de: {
    EU_AI_ACT: EU_AI_ACT_LINKS_DE,
    DORA: DORA_LINKS_DE,
  },
  en: {
    EU_AI_ACT: EU_AI_ACT_LINKS_ENG,
    DORA: DORA_LINKS_ENG,
  },
};

const LEGAL_LINK_REVERSE_INDEX = buildLegalLinkReverseIndex();

/**
 * Baut einen Reverse-Index von Basis-URL auf Framework und Artikel-Key.
 */
function buildLegalLinkReverseIndex() {
  const index = new Map();

  for (const [frameworkKey, links] of Object.entries(LEGAL_LINK_GROUPS_BY_LOCALE.de)) {
    for (const [articleKey, url] of Object.entries(links)) {
      index.set(url, { frameworkKey, articleKey });
    }
  }

  return index;
}

/**
 * Liefert die Link-Sets für eine Sprache mit deutschem Fallback.
 */
export function getLegalLinkGroupsForLocale(locale = DEFAULT_LOCALE) {
  return LEGAL_LINK_GROUPS_BY_LOCALE[locale] ?? LEGAL_LINK_GROUPS_BY_LOCALE.de;
}

/**
 * Löst eine Basis-URL auf die sprachspezifische Fundstelle auf.
 */
export function localizeLegalReferenceUrl(referenceUrl, locale = DEFAULT_LOCALE) {
  if (!referenceUrl) return referenceUrl ?? null;

  const match = LEGAL_LINK_REVERSE_INDEX.get(referenceUrl);
  if (!match) return referenceUrl;

  const localizedGroups = getLegalLinkGroupsForLocale(locale);
  return localizedGroups?.[match.frameworkKey]?.[match.articleKey] ?? referenceUrl;
}


const baseObligationsCatalog = {
/**
 * Struktur eines Pflichtenpakets:
 * - label/regulation/articles: Metadaten für nachvollziehbare Referenzierung im Export/Review
 * - items: Liste konkreter Anforderungen; jedes Item enthält i. d. R. (id, question, reference)
 * Hinweis: items werden später linearisiert (Requirement-Chain) und als Ja/Nein abgefragt
 */

// EU AI Act: Scope/Klassifikation & Kernpflichten
  AI_ACT_NICHT_ZUTREFFEND: {
    label: 'EU AI Act: Nicht anwendbar – Basis-Hinweise',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 3'],
    items: [
      {
        id: 'KI_NZ_KLASSIFIZIERUNGSHINWEIS',
        question:
          'Ist dokumentiert, warum das System nicht als KI-System nach EU AI Act gilt (Definition/Abgrenzung)?',
        todo: 
          'Dokumentieren, warum das System nicht als KI-System nach EU AI Act gilt (Geltungsbereich, Systembeschreibung, Abgrenzung).',
        reference: 'EU AI Act (2024), Art. 3',
        referenceUrl: EU_AI_ACT_LINKS.ART_3,
        info:
          'Die Begründung sollte nachvollziehbar erklären, warum die Definition nach Art. 3 EU AI Act nicht erfüllt ist.',
        examples: [
          'Notiz enthält Abgrenzung zu regelbasierten Entscheidungstabellen ohne Modell.',
          'Systembeschreibung nennt Inputs/Outputs und begründet fehlende KI-Definitionselemente.',
        ],
      },
      {
        id: 'KI_NZ_GOVERNANCE_BASIS',
        canonicalId: 'KI_GOV_FREIGABEPROZESS',
        question:
          'Sind trotz Nicht-Anwendbarkeit des EU AI Act interne Governance- und Freigabekontrollen für das System definiert?',
        todo: 
          'Interne Governance- und Freigabekontrollen für das System festlegen und dokumentieren.',
        reference: 'EU AI Act (2024) – Governance-Basis (intern)',
        info:
          'Auch wenn der EU AI Act nicht anwendbar ist, reduzieren Basis-Kontrollen Risiken.',
        examples: [
          'Es gibt einen dokumentierten Freigabeprozess mit Verantwortlichen und Prüfschritten.',
          'RACI ist festgelegt (Verantwortlicher, IT-Sicherheit, Datenschutz, Compliance).',
        ],
      },
    ],
  },

  KI_VERBOTENE_PRAKTIKEN: {
    label: 'EU AI Act: Verbotene Praktiken – Sofortmaßnahmen & Eskalation',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 5'],
    items: [
      {
        id: 'KI_VERB_STOPP_INBETRIEBNAHME',
        question:
          'Wurde die Nutzung bzw. (geplante) Inbetriebnahme des Systems gestoppt und als Maßnahme dokumentiert?',
        todo: 
          'Nutzung/Inbetriebnahme des Systems stoppen und den Stopp als Maßnahme nachvollziehbar dokumentieren.',
        reference: 'EU AI Act (2024), Art. 5',
        referenceUrl: EU_AI_ACT_LINKS.ART_5,
        info:
          'Der Stopp sollte technisch und organisatorisch wirksam sein (z. B. Feature deaktiviert, Zugriff gesperrt, Rücksetzung/Deaktivierung im Betrieb).',
        examples: [
          'Ticket-ID dokumentiert Deaktivierung und Zeitpunkt.',
          'Betriebsfreigabe entzogen und im Freigabegremium protokolliert.',
        ],
      },
      {
        id: 'KI_VERB_ESKALATION',
        question:
          'Wurde eine formale Eskalation an Compliance/Risikomanagement durchgeführt und dokumentiert?',
        todo: 
          'Formale Eskalation an Compliance/Risikomanagement durchführen und als Fallakte dokumentieren.',
        reference: 'EU AI Act (2024), Art. 5',
        referenceUrl: EU_AI_ACT_LINKS.ART_5,
        info:
          'Die Eskalation sollte eine eindeutige Fallakte haben (Fall-ID) und die Entscheidungskompetenz muss klar geregelt sein.',
        examples: [
          'Eskalationsmail mit Fall-ID und Zusammenfassung der verbotenen Praxis.',
          'Review-Protokoll dokumentiert Entscheidung und Verantwortliche.',
        ],
      },
      {
        id: 'KI_VERB_ENTSCHEID_SANIERUNG',
        question:
          'Liegt eine dokumentierte Entscheidung vor, ob das Vorhaben abgebrochen oder regelkonform neu zugeschnitten wird?',
        todo: 
          'Dokumentierte Entscheidung herbeiführen und festhalten: Vorhaben abbrechen oder regelkonform neu zuschneiden.',
        reference: 'EU AI Act (2024), Art. 5',
        referenceUrl: EU_AI_ACT_LINKS.ART_5,
        info:
          'Wenn „neu zuschneiden“: klarer neuer Geltungsbereich, aktualisierte Anforderungen, erneute Einstufung und formale Freigabe.',
        examples: [
          'Managemententscheidung: Abbruch inkl. Begründung und Lessons Learned.',
          'Maßnahmenplan beschreibt neue Systemgrenzen und erneute Klassifikation.',
        ],
      },
    ],
  },

  KI_ROLLENKLAERUNG_NACHWEIS_BASIS: {
    label: 'EU AI Act: Rollenklärung – Basis',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 25'],
    items: [
      {
        id: 'KI_RK_ROLLEN_DEFINIERT',
        canonicalId: 'KI_GOV_ROLLEN_VERANTWORTLICHKEITEN',
        question:
          'Sind Rollen (Anbieter/Betreiber) und Verantwortlichkeiten im Dokumentationspaket eindeutig beschrieben?',
        todo:
          'Rollen (Anbieter/Betreiber) und Verantwortlichkeiten eindeutig definieren und im Dokumentationspaket nachvollziehbar festhalten.',
        reference: 'EU AI Act (2024), Art. 25',
        referenceUrl: EU_AI_ACT_LINKS.ART_25,
        info:
          'Ziel ist eine auditfeste, eindeutige Rollen- und Pflichtenzuordnung (auch bei SaaS-Konstellationen).',
        examples: [
          'RACI nennt Anbieter/Betreiber und die jeweiligen Pflichten.',
          'Vertrag/Leistungsbeschreibung grenzt Hosting, Änderungen, Artefakte und Betrieb klar ab.',
        ],
      },
    ],
  },

  KI_KENNTNIS_ART_4: {
    label: 'EU AI Act: KI-Kenntnis (Schulung & Befähigung)',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 4'],
    items: [
      {
        id: 'KI_LIT_TRAININGSPLAN',
        question:
          'Gibt es einen dokumentierten Trainingsplan für KI-relevante Rollen?',
        todo:
          'Trainingsplan für KI-relevante Rollen erstellen/aktualisieren.',
        reference: 'EU AI Act (2024), Art. 4',
        referenceUrl: EU_AI_ACT_LINKS.ART_4,
        info:
          'Der Plan sollte rollenbasiert sein und Mindestumfang definieren.',
        examples: [
          'Rollen: Entwickler, IT-Betrieb, Product Owner, Compliance, Risikomanagement, Support.',
          'Mindestumfang: Onboarding + jährliche Auffrischung; ad hoc bei größeren Releases/Regelwerksänderungen.',
        ],
      },
      {
        id: 'KI_LIT_ROLLENMATRIX',
        question:
          'Ist eine Rollen-/Skill-Matrix vorhanden, die erforderliche KI-Kompetenzen je Rolle und Systemkontext abbildet?',
        todo:
          'Rollen-/Skill-Matrix definieren.',
        reference: 'EU AI Act (2024), Art. 4',
        referenceUrl: EU_AI_ACT_LINKS.ART_4,
        info:
          'Die Matrix sollte pro Rolle Mindestkompetenzen und Verantwortlichkeiten enthalten.',
        examples: [
          'Dev: Datenqualität, Bias, Tests, Überwachung; Compliance: Pflichtenpakete/Review-Gates.',
        ],
      },
      {
        id: 'KI_LIT_TEILNAHME_LOGS',
        question:
          'Werden Trainings-Teilnahmen nachvollziehbar protokolliert und rollenbezogen ausgewertet?',
        todo:
          'Teilnahme-Logs einführen/auswerten.',
        reference: 'EU AI Act (2024), Art. 4',
        referenceUrl: EU_AI_ACT_LINKS.ART_4,
        info:
          'Teilnahmen sollten auditfähig (wer/was/wann) erfasst und bei Lücken über einen definierten Prozess nachverfolgt werden.',
        examples: [
          'LMS-Export + monatlicher Report an Team Leads; Eskalation bei Pflichttrainings.'
        ],
      },
      {
        id: 'KI_LIT_WISSENSCHECK',
        question:
          'Gibt es einen Wissenscheck/Quiz oder eine ähnliche Wirksamkeitsprüfung, inkl. Mindestscore?',
        todo:
          'Wissenscheck einführen.',
        reference: 'EU AI Act (2024), Art. 4',
        referenceUrl: EU_AI_ACT_LINKS.ART_4,
        info:
        'Ein Wissenscheck belegt Wirksamkeit (nicht nur Teilnahme) und erleichtert Nachweise im Audit.',
        examples: [
          'Kurzquiz nach Training; Mindestscore 80%; Wiederholung binnen 2 Wochen.'
        ],
      },
      {
        id: 'KI_LIT_AUFFRISCHUNG',
        question:
          'Ist eine regelmäßige Auffrischung definiert und werden Inhalte bei wesentlichen Änderungen aktualisiert?',
        todo:
          'Auffrischungszyklus festlegen und Inhalte bei wesentlichen Änderungen/Incidents aktualisieren.',
        reference: 'EU AI Act (2024), Art. 4',
        referenceUrl: EU_AI_ACT_LINKS.ART_4,
        info:
          'Lege Zyklus und Auslöser fest und dokumentiere die Aktualisierung nachvollziehbar.',
        examples: [
          'Mögliche Auslöser: Wichtige Veröffentlichung, neue Risikofeststellung, Vorfall/Nachbesprechung, Änderung der Anbieterrichtlinie.',
        ],
      },
    ],
  },

  KI_GPAI_SCREENING_ART_51_52: {
    label: 'EU AI Act: GPAI-Screening & Lieferkettentransparenz',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 51–52'],
    items: [
      {
        id: 'GPAI_SCR_MODELLIDENTITAET',
        question:
          'Ist dokumentiert, ob ein KI-Modell mit allgemeinem Verwendungszweck (GPAI) genutzt wird?',
        todo:
          'GPAI-Nutzung dokumentieren.',
        reference: 'EU AI Act (2024), Art. 51–52',
        referenceUrl: EU_AI_ACT_LINKS.ART_51,
        info:
          'Erfasse mindestens Anbieter, Modellname/-ID, Version, Region und Zugriffspfad (API/Endpunkt), damit das Screening nachvollziehbar bleibt.',
        examples: [
          'Modellregistrierung: Anbieter, Modell-ID, Region, SLA, Datenverarbeitungsbedingungen.',
        ],
      },
      {
        id: 'GPAI_SCR_MODELLKARTE_ATTEST',
        question:
          'Liegt eine Modellkarte vor?',
        todo:
          'Modellkarte vom Anbieter einholen und intern ablegen; Lücken dokumentieren und mitigieren.',
        reference: 'EU AI Act (2024), Art. 51–52',
        referenceUrl: EU_AI_ACT_LINKS.ART_52,
        info:
          'Die Modellkarte sollte u. a. Bestimmungsgemäße Verwendung, bekannte Einschränkungen/Risiken sowie empfohlene Sicherheitsmaßnahmen abdecken; fehlende Angaben als Risiko/Offenpunkt dokumentieren.',
      },
      {
        id: 'GPAI_SCR_TRAINING_COMPUTE',
        question:
          'Sind ausreichende Trainings-Informationen dokumentiert, um beurteilen zu können, ob das GPAI ein systemisches Risiko haben könnte?',
        todo:
          'Training-Indikatoren dokumentieren (falls verfügbar); ansonsten Info + Ersatzindikatoren begründen.',
        reference: 'EU AI Act (2024), Art. 51–52',
        referenceUrl: EU_AI_ACT_LINKS.ART_51,
        info:
          'Wenn der Anbieter keine Zahlen liefert: dokumentierte Anfrage + Ersatzindikatoren.',
        examples: [
          'Ersatzindikatoren: Modellfamilie/Größenklasse, veröffentlichte Sicherheitsbericht, Anbieterrichtlinie zu Risikokontrollen.',
        ],
      },
      {
        id: 'GPAI_SCR_EINSTUFUNG_NOTIZ',
        question:
          'Gibt es eine Einstufungs-Notiz: „GPAI ja/nein“ und „systemisches Risiko betroffen ja/nein“ inkl. Begründung und Freigabe?',
        todo:
          'Einstufungs-Notiz erstellen (GPAI + systemisches Risiko), inkl. Begründung, Review/Freigabe.',
        reference: 'EU AI Act (2024), Art. 51–52',
        referenceUrl: EU_AI_ACT_LINKS.ART_51,
        info:
          'Lege die Entscheidungsgrundlage (Inputs, Annahmen, Unsicherheiten) und die Freigabe (Owner/Datum) auditfest ab.',
        examples: [
          'Kurznotiz mit Entscheidung, Begründung, und offenen Punkten.',
        ],
      },
      {
        id: 'GPAI_SCR_LIEFERKETTE_TRANSPARENZ',
        question:
          'Ist die Lieferkette transparent dokumentiert (Subanbieter, Hosting, Subprozessoren, Artefakt-Verantwortung, etc.)?',
        todo:
          'Lieferkette dokumentieren (Subanbieter, Hosting, Subprozessoren, Artefakt-Verantwortung, etc.).',
        reference: 'EU AI Act (2024), Art. 51–52',
        referenceUrl: EU_AI_ACT_LINKS.ART_51,
        info:
          'Dokumentiere Verantwortlichkeiten und Schnittstellen, damit Pflichten und Erwartungen gegenüber dem Anbieter eindeutig bleiben.',
        examples: [
          'Subprozessorliste + RACI: Hosting (wer), Modellupdates (wer), Konformitätsartefakte (wer), Vorfall-Kommunikation (wie).',
        ],
      },
    ],
  },

  KI_GPAI_SYSTEMISCHES_RISIKO_ART_55: {
    label: 'EU AI Act: GPAI (systemisches Risiko) – Modellbewertung',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 55'],
    items: [
      {
        id: 'GPAI_SYS_REDTEAM',
        question:
          'Sind Angriffstests oder äquivalente Modellbewertungen geplant/durchgeführt und dokumentiert?',
        todo:
          'Modellbewertungen durchführen und dokumentieren (Scope, Feststellungen, etc.).',
        reference: 'EU AI Act (2024), Art. 55',
        referenceUrl: EU_AI_ACT_LINKS.ART_55,
        info:
          'Der Testumfang sollte Risiken aus dem konkreten Einsatzkontext abdecken und eine Wiederholungstest-Strategie enthalten.',
        examples: [
          'Prompt-Injection, Datenexfiltration, Jailbreaks, Umgehung von Richtlinien, Missbrauch von Tools.',
        ],
      },
      {
        id: 'GPAI_SYS_RISIKOREGISTER',
        question:
          'Gibt es ein Risiko-Register inkl. Maßnahmen zur Risikominderung?',
        todo:
          'Risiko-Register führen (Risiken, Maßnahmen, Owner, Fristen, Wirksamkeit) und regelmäßig reviewen.',
        reference: 'EU AI Act (2024), Art. 55',
        referenceUrl: EU_AI_ACT_LINKS.ART_55,
        info:
          'Das Register sollte Owner, Fristen und Wirksamkeitsnachweise enthalten und mit Feststellungen aus Tests/Vorfällen rückgekoppelt werden.',
        examples: [
          'Eintrag pro Risiko mit Status (offen/in Arbeit/geschlossen) und Verweis.',
        ],
      },
      {
        id: 'GPAI_SYS_INCIDENT_LOG',
        question:
          'Existiert ein Incident-Log mit Lessons Learned und Kommunikationswegen?',
        todo:
          'Incident-Log etablieren (Klassifikation, SLA, Eskalation, Lessons Learned, Anbieter-Schnittstelle).',
        reference: 'EU AI Act (2024), Art. 55',
        referenceUrl: EU_AI_ACT_LINKS.ART_55,
        info:
          'Erfasse sicherheitsrelevante Vorfälle inkl. Ursache, Einfluss, Maßnahmen und Kommunikation nachvollziehbar.',
        examples: [
          'Grundursache, Zeitachse, Behebung, Nachverfolgung; Ticket-Referenz.',
        ],
      },
      {
        id: 'GPAI_SYS_CYBER_CONTROLS',
        question:
          'Sind Cyber-Schutzmaßnahmen für GPAI-Nutzung definiert und nachweisbar umgesetzt?',
        todo:
          'Cyber-Controls für GPAI-Nutzung umsetzen und nachweisen.',
        reference: 'EU AI Act (2024), Art. 55',
        referenceUrl: EU_AI_ACT_LINKS.ART_55,
        info:
          'Belege Kontrollen entlang Zugriff, Schlüssel, Überwachung/Warnungen und Missbrauchsprävention sowie sichere Betriebsprozesse.',
        examples: [
          'Least Privilege, Schlüssel-Rotation, Anomalie-Erkennung, getrennte Umgebungen.',
        ],
      },
    ],
  },

  KI_HR_ANBIETER: {
    label: 'EU AI Act: Hochrisiko-KI – Kernpflichten (Anbieter)',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 9–15'],
    items: [
      {
        id: 'KI_HR_RM_PROZESS',
        question:
          'Gibt es einen dokumentierten KI-Risikomanagementprozess, der Risiken identifiziert, bewertet und Maßnahmen festlegt?',
        todo: 
          'KI-Risikomanagementprozess definieren, dokumentieren und in Kraft setzen (Identifikation, Bewertung, Maßnahmen, Verantwortlichkeiten).',
        reference: 'EU AI Act (2024), Art. 9',
        referenceUrl: EU_AI_ACT_LINKS.ART_9,
        info:
          'Der Prozess sollte KI-spezifische Risiken (z. B. Fehlklassifikation, Bias, Datenqualität, Modellveränderung als Leistungs-/Datenverschiebung) abdecken und Verantwortlichkeiten klar zuweisen.',
        examples: [
          'Risiko-Register enthält KI-Risiken, Bewertung und Maßnahmen inkl. Verantwortlichen.',
          'Freigabeprotokoll dokumentiert akzeptierte Restrisiken.',
        ],
      },
      {
        id: 'KI_HR_RM_LEBENSZYKLUS',
        question:
          'Werden KI-Risiken vor der Produktivsetzung bewertet und während des Betriebs bei relevanten Änderungen regelmäßig überprüft?',
        todo: 
          'Regelmäßige Risiko-Reviews vor Produktivsetzung und im Betrieb etablieren (inkl. Review bei relevanten Änderungen).',
        reference: 'EU AI Act (2024), Art. 9',
        referenceUrl: EU_AI_ACT_LINKS.ART_9,
        info:
          '„Relevante Änderungen“ sind z. B. Modellwechsel, Neutraining/Feinabstimmung, neue Datenquellen, neue Nutzergruppe oder Prozessänderungen.',
        examples: [
          'Überwachungsbericht zeigt regelmäßige Reviews.',
        ],
      },
      {
        id: 'KI_HR_DATENHERKUNFT_RECHTE',
        question:
          'Sind Datenquellen, Datenherkunft und Nutzungsrechte für Training und Test dokumentiert?',
        todo: 
          'Datenquellen, Datenherkunft und Nutzungsrechte für Training und Test vollständig dokumentieren und nachvollziehbar nachweisen.',
        reference: 'EU AI Act (2024), Art. 10',
        referenceUrl: EU_AI_ACT_LINKS.ART_10,
        info:
          'Dokumentation sollte Herkunft, Erhebung, Zweckbindung, Rechtsgrundlage und Lizenz-/Vertragslage abdecken.',
        examples: [
          'Datenkatalogeintrag mit Quelle, Zweck, Eigentümer, Rechtsgrundlage.',
          'Verträge/Lizenzen sind versioniert im Repository abgelegt.',
        ],
      },
      {
        id: 'KI_HR_DATENQUALITAET_KRITERIEN',
        question:
          'Gibt es definierte Kriterien zur Datenqualität und werden diese vor Einsatz des Modells nachweisbar geprüft?',
        todo: 
          'Kriterien zur Datenqualität festlegen und die Datenqualität vor Modell-Einsatz nachweisbar prüfen.',
        reference: 'EU AI Act (2024), Art. 10',
        referenceUrl: EU_AI_ACT_LINKS.ART_10,
        info:
          'Kriterien umfassen typischerweise Vollständigkeit, Aktualität, Konsistenz, Repräsentativität sowie Umgang mit fehlenden Werten und Ausreißern.',
        examples: [
          'Datenqualitätsbericht enthält definierte Schwellenwerte und Ergebnisse.',
          'Freigabeentscheidung referenziert Prüfprotokoll und Abweichungen.',
        ],
      },
      {
        id: 'KI_HR_BIAS_MINDERUNG',
        question:
          'Sind Maßnahmen zur Erkennung und Reduktion von Bias in Trainings- und Testdaten dokumentiert und umgesetzt?',
        todo: 
          'Maßnahmen zur Bias-Erkennung und -Reduktion definieren, dokumentieren und umsetzen (Trainings- und Testdaten).',
        reference: 'EU AI Act (2024), Art. 10',
        referenceUrl: EU_AI_ACT_LINKS.ART_10,
        info:
          'Bias-Checks sollten für relevante Gruppen/Segmente nachvollziehbar sein.',
        examples: [
          'Fairness-Bericht vergleicht Metriken zwischen Gruppen und dokumentiert Maßnahmen.',
          'Maßnahmenplan beschreibt Sampling, Feature-Review oder Nachbearbeitung.',
        ],
      },
      {
        id: 'KI_HR_TECH_DOKU_AKTUELL',
        canonicalId: 'KI_DOK_TECH_AKTUELL',
        question: 
          'Wurde eine technische Dokumentation erstellt und wird sie bei Änderungen aktuell gehalten?',
        todo: 
          'Technische Dokumentation erstellen und bei Änderungen konsequent aktuell halten (versioniert, nachvollziehbar).',
        reference: 'EU AI Act (2024), Art. 11',
        referenceUrl: EU_AI_ACT_LINKS.ART_11,
        info:
          'Technische Dokumentation sollte Modell, Daten, Schnittstellen, Betrieb, Tests, Risiken und Governance abdecken und versioniert sein.',
        examples: [
          'Versionshistorie verknüpft Releases mit Änderungsanträgen.',
          'Dokumentationspaket enthält Architekturdiagramm und Modellbeschreibung.',
        ],
      },
      {
        id: 'KI_HR_PROTOKOLLIERUNG_FAEHIGKEIT',
        canonicalId: 'KI_PROTOKOLLIERUNG_PRUEFPFAD',
        question:
          'Sind Protokollierungsfunktionen für relevante Systemereignisse vorgesehen und technisch möglich?',
        todo:
          'Protokollierungsfähigkeit für relevante Systemereignisse sicherstellen und dokumentieren (Audit-Tauglichkeit, Modellversion, IDs).',
        reference: 'EU AI Act (2024), Art. 12',
        referenceUrl: EU_AI_ACT_LINKS.ART_12,
        info:
          'Protokolle sollten für Audit- und Vorfallanalyse geeignet sein (z. B. Modellversion, Eingabe-/Ausgabe-Referenzen, Nutzer-/Systemaktionen) unter Beachtung des Datenschutzes.',
        examples: [
          'Spezifikation definiert Pflichtfelder (Zeitstempel, Request-ID, Modellversion).',
          'Architektur beschreibt, wo Protokolle erzeugt/weitergeleitet werden (z. B. an ein SIEM).',
        ],
      },
      {
        id: 'KI_HR_INFO_FUER_BETREIBER_BEREITGESTELLT',
        question:
          'Werden Betreibern ausreichende Informationen zur sicheren Nutzung bereitgestellt?',
        todo:
          'Betriebs-/Nutzungsinformationen für eine sichere Nutzung bereitstellen (Zweck, Grenzen, Betriebsvoraussetzungen).',
        reference: 'EU AI Act (2024), Art. 13',
        referenceUrl: EU_AI_ACT_LINKS.ART_13,
        info:
          'Mindestens: Zweckbestimmung, bekannte Grenzen, erforderliche Datenqualität, geeignete Nutzerrollen, Fehlerszenarien und sichere Betriebsparameter.',
        examples: [
          'Handbuch enthält Abschnitt „Zweck & Grenzen“ sowie sichere Betriebsparameter.',
          'Versionshinweise nennen Änderungen und Risiken pro Release.',
        ],
      },
      {
        id: 'KI_HR_MENSCHLICHE_AUFSICHT_MECHANISMEN',
        question:
          'Sind Mechanismen zur menschlichen Aufsicht im Systemdesign vorgesehen?',
        todo:
          'Mechanismen für menschliche Aufsicht im Systemdesign vorsehen und dokumentieren (Eingriff, manuelle Prüfung, Abschalt-/Überschreibungs-Möglichkeit).',
        reference: 'EU AI Act (2024), Art. 14',
        referenceUrl: EU_AI_ACT_LINKS.ART_14,
        info:
          'Aufsicht muss praktisch durchführbar sein (z. B. Überschreibungsprozess, klare Kriterien für Eingriffe, Zuständigkeiten und Schulung).',
        examples: [
          'Überschreibungs-/Stopp-Funktion ist beschrieben und technisch vorgesehen.',
          'UX/Prozess zeigt, wie ein Mensch Entscheidungen prüfen/übersteuern kann.',
        ],
      },
      {
        id: 'KI_HR_LEISTUNGSTESTS',
        question:
          'Sind messbare Leistungskennzahlen definiert und durch Tests vor der Produktivsetzung belegt?',
        todo:
          'Leistungskennzahlen definieren und durch Tests vor der Produktivsetzung nachweisbar belegen (inkl. Akzeptanzkriterien).',
        reference: 'EU AI Act (2024), Art. 15',
        referenceUrl: EU_AI_ACT_LINKS.ART_15,
        info:
          'Kennzahlen müssen Anwendungsfall-spezifisch sein (z. B. Fehlerquote, SLA/SLO) und Akzeptanzkriterien enthalten.',
        examples: [
          'Testbericht zeigt Metriken vs. Akzeptanzkriterien und Freigabe.',
          'Freigabeprotokoll enthält Risikobewertung bei Grenzfällen.',
        ],
      },
      {
        id: 'KI_HR_ROBUSTHEITSTESTS',
        question:
          'Wurde Robustheit gegen typische Stör- und Fehlerszenarien getestet und dokumentiert?',
        todo:
          'Robustheitstests gegen typische Stör- und Fehlerszenarien durchführen und dokumentieren (inkl. Maßnahmen bei Feststellungen).',
        reference: 'EU AI Act (2024), Art. 15',
        referenceUrl: EU_AI_ACT_LINKS.ART_15,
        info:
          'Typisch: fehlerhafte Eingaben, Ausreißer, fehlende Daten, Verteilungsänderung, Systemausfälle.',
        examples: [
          'Testplan enthält negative Tests und Abbruch-/Rueckfall-Verhalten.',
          'Maßnahmenplan beschreibt gefundene Schwachstellen.',
        ],
      },
      {
        id: 'KI_HR_SICHERHEITSBEWERTUNG',
        question:
          'Wurde eine Cybersecurity-/Sicherheitsbewertung für die KI-Komponente durchgeführt und dokumentiert?',
        todo: 
          'Sicherheitsbewertung (Cybersecurity) der KI-Komponente durchführen, dokumentieren und Maßnahmen nachverfolgen.',
        reference: 'EU AI Act (2024), Art. 15',
        referenceUrl: EU_AI_ACT_LINKS.ART_15,
        info:
          'Umfang: Bedrohungsmodell, Zugriffspfade, Datenabfluss, Lieferkette, Modellangriffe (z. B. Prompt-Injection bei LLM-Anwendungsfälle).',
        examples: [
          'Bedrohungsmodell und Maßnahmen sind dokumentiert und umgesetzt.',
          'Penetrationstest umfasst relevante Schnittstellen und Rollen.',
        ],
      },
    ],
  },

  KI_HR_BETREIBER: {
    label: 'EU AI Act: Hochrisiko-KI – Pflichten (Betreiber) inkl. Art. 26',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 26 i. V. m. Art. 12–14'],
    items: [
      {
        id: 'KI_HR_BETRIEB_GEMAESS_ZWECKBESTIMMUNG',
        canonicalId: 'KI_HR_BETRIEB_GEMAESS_ZWECKBESTIMMUNG',
        question:
          'Wird das Hochrisiko-KI-System gemäß Zweckbestimmung und Betriebsanleitung eingesetzt?',
        todo:
          'Sicherstellen und dokumentieren, dass das System gemäß Zweckbestimmung/Betriebsanleitung eingesetzt wird (zulässige Nutzung, Grenzen, Voraussetzungen). Abweichungen nur nach formaler Prüfung/Freigabe.',
        reference: 'EU AI Act (2024), Art. 26 i. V. m. Art. 13',
        referenceUrl: EU_AI_ACT_LINKS.ART_26,
        info:
          'Art. 26 ist im Audit der Kern: Betrieb „wie vorgesehen“ plus dokumentierte Abweichungen (inkl. Kontrollen/Gates).',
        examples: [
          'SOP beschreibt zulässige Anwendungsfälle, Inputs, Schwellenwerte, Grenzen und Eskalation.',
          'Nutzung außerhalb des Geltungsbereichs ist verboten oder erfordert formale Freigabe.',
        ],
      },
      {
        id: 'KI_HR_BETRIEB_MENSCHLICHE_AUFSICHT',
        canonicalId: 'KI_HR_BETRIEB_MENSCHLICHE_AUFSICHT',
        question:
          'Ist menschliche Aufsicht im Betrieb umgesetzt?',
        todo:
          'Menschliche Aufsicht im Betrieb umsetzen und nachweisen: Rollen/RACI, Eingriffskriterien, Schulung, Überschreibungs-/Abschaltprozess sowie Kriterien für Stopp-Entscheidungen.',
        reference: 'EU AI Act (2024), Art. 26 i. V. m. Art. 14',
        referenceUrl: EU_AI_ACT_LINKS.ART_14,
        info:
          '„Human in the loop“ muss im Betrieb wirksam sein und nicht nur als Richtlinie. Besonders wichtig bei Automatisierungs-Bias.',
        examples: [
          'Definierte Rolle darf Empfehlungen überstimmen und dokumentiert Abweichungen.',
          'Klare Stopp-Regeln bei Veränderung, Datenfehlern und Ausfällen.',
        ],
      },
      {
        id: 'KI_HR_BETRIEB_PROTOKOLLIERUNG_AKTIV',
        canonicalId: 'KI_HR_BETRIEB_PROTOKOLLIERUNG_AKTIV',
        question:
          'Sind Protokollierungen im Betrieb aktiviert und werden sie angemessen aufbewahrt/ausgewertet?',
        todo:
          'Protokollierungen aktivieren, Aufbewahrung festlegen und Auswertung für Betrieb/Vorfälle sicherstellen. Zugriff auf Protokolle regeln.',
        reference: 'EU AI Act (2024), Art. 26 i. V. m. Art. 12',
        referenceUrl: EU_AI_ACT_LINKS.ART_12,
        info:
          'Auditfähig wird es erst, wenn Protokolle tatsächlich verfügbar sind (Kontrolle, Aufbewahrungsfrist, Zugriff) und zur Überwachung genutzt werden.',
        examples: [
          'Protokolle enthalten Inputs/Outputs, Versionen, Überschreibungen und Fehlerzustände.',
          'SIEM-Regeln/Alarme für Anomalien, Ausfälle und Richtlinienverstöße.',
        ],
      },
      {
        id: 'KI_HR_BETRIEB_UEBERWACHUNG',
        canonicalId: 'KI_HR_BETRIEB_UEBERWACHUNG',
        question:
          'Gibt es eine laufende Überwachung im Betrieb inkl. klarer Reaktions- und Eskalationsprozesse?',
        todo:
          'Betriebsüberwachung definieren und umsetzen (Qualität, Verfügbarkeit, Datenanomalien, Vorfallprozess). Reaktionszeiten, Eskalation und Abhilfemaßnahmen dokumentieren.',
        reference: 'EU AI Act (2024), Art. 26',
        referenceUrl: EU_AI_ACT_LINKS.ART_26,
        info:
          'Art. 26 verlangt „Betrieb unter Kontrolle“. Ohne Überwachung ist der Nachweis im Audit schwach.',
        examples: [
          'Veränderungs-Checks mit Schwellenwerten plus automatischem Stopp.',
          'Vorfall-Betriebshandbuch inkl. Kommunikation an Anbieter/Stakeholder.',
        ],
      },
      {
        id: 'KI_HR_BETRIEB_VORFAELLE_BEHOERDEN_ZUSAMMENARBEIT',
        canonicalId: 'KI_HR_BETRIEB_VORFAELLE_BEHOERDEN_ZUSAMMENARBEIT',
        question:
          'Sind Prozesse zur Behandlung schwerwiegender Vorfälle und zur Zusammenarbeit mit Behörden/Anbieter definiert?',
        todo:
          'Prozess für schwerwiegende Vorfälle definieren (Klassifikation, Eskalation, Informationsweitergabe an Anbieter, ggf. Behördenkommunikation) und im Betrieb üben. Verantwortlichkeiten und Fristen festlegen.',
        reference: 'EU AI Act (2024), Art. 26',
        referenceUrl: EU_AI_ACT_LINKS.ART_26,
        info:
          'Auch wenn Art. 73 primär Anbieter betrifft: als Betreiber benötigt es einer auditfähigen Eskalation und einer klaren Lieferanten-Schnittstelle.',
        examples: [
          'Eskalationsmatrix (kritisch/hoch/mittel) plus Kontaktpunkte beim Anbieter.',
        ],
      },
      {
        id: 'KI_HR_BETRIEB_DSFA_GRFA_VERZAHNUNG',
        canonicalId: 'KI_HR_BETRIEB_DSFA_GRFA_VERZAHNUNG',
        question:
          'Ist die Governance-Verzahnung zu DSFA/GRFA/Risiko-Reviews dokumentiert?',
        todo:
          'Verzahnung dokumentieren: Datenschutz-Folgenabschätzung (DSFA), ggf. Grundrechte-/Risikoanalysen, Freigaben/Reviews und Auflagen im Betrieb.',
        reference: 'EU AI Act (2024), Art. 26',
        referenceUrl: EU_AI_ACT_LINKS.ART_26,
        info:
          'In der Praxis erwarten Prüfer eine konsistente Kette: Risikoanalyse -> Freigabe -> Betriebskontrollen -> Überwachung/Vorfälle.',
        examples: [
          'Feststellungen aus DSFA/Reviews sind als Auflagen im Betriebshandbuch verankert.',
          'Regelmäßige Reviews inkl. Änderungen und Vorfällen.',
        ],
      },
    ],
  },

  KI_TRANSPARENZ_ART_50: {
    label: 'EU AI Act: Transparenzpflichten',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 50'],
    items: [
      {
        id: 'KI_TP_INTERAKTIONSHINWEIS',
        question:
          'Erhalten Nutzer einen klaren Hinweis, dass sie mit einem KI-System interagieren?',
        todo: 
          'Einen klaren, sichtbaren Hinweis zur KI-Interaktion in der Benutzeroberfläche bereitstellen und formal freigeben lassen.',
        reference: 'EU AI Act (2024), Art. 50',
        referenceUrl: EU_AI_ACT_LINKS.ART_50,
        info:
          'Der Hinweis sollte verständlich, sichtbar und kontextnah sein (nicht nur in Fußnoten).',
        examples: [
          'UI zeigt deutlich „KI-gestützt“/„KI-System“ beim relevanten Schritt.',
          'Freigabe des Hinweistexts ist dokumentiert.',
        ],
      },
      {
        id: 'KI_TP_GENERATIVE_OUTPUTS',
        question:
          'Erzeugt das System Inhalte (Text, Bild, Audio oder Video), die an Nutzer ausgegeben werden?',
        todo: 
          'Prüfen und dokumentieren, ob das System Inhalte generiert, die an Nutzer ausgegeben werden (Text/Bild/Audio/Video).',
        reference: 'EU AI Act (2024), Art. 50',
        referenceUrl: EU_AI_ACT_LINKS.ART_50,
        info:
          'Relevant sind sowohl vollständig generierte Inhalte als auch KI-unterstützte Zusammenfassungen/Umformulierungen.',
        examples: [
          'Chatbot generiert Antworttexte für Kunden.',
          'System erzeugt automatisch Zusammenfassungen aus Dokumenten.',
        ],
      },
      {
        id: 'KI_TP_INHALTSKENNZEICHNUNG',
        question:
          'Werden KI-generierte Inhalte in den relevanten Fällen eindeutig gekennzeichnet?',
        todo: 
          'Kennzeichnung für KI-generierte Inhalte definieren und in allen relevanten Fällen konsistent umsetzen.',
        reference: 'EU AI Act (2024), Art. 50',
        referenceUrl: EU_AI_ACT_LINKS.ART_50,
        info:
          'Kennzeichnung sollte konsistent sein (Vorlagen/Richtlinien) und die Fälle definieren, in denen Labeling erforderlich ist.',
        examples: [
          'Output enthält Label „KI-generiert“ im UI/Export.',
          'Inhaltsrichtlinie beschreibt Ausnahmen und Kennzeichnungsregeln.',
        ],
      },
      {
        id: 'KI_TP_ZWECKINFO',
        question: 
          'Ist der Zweck des KI-Systems für Nutzer dokumentiert und verfügbar?',
        todo: 
          'Zweck des KI-Systems für Nutzer dokumentieren und leicht zugänglich bereitstellen (UI/Handbuch/Intranet).',
        reference: 'EU AI Act (2024), Art. 50',
        referenceUrl: EU_AI_ACT_LINKS.ART_50,
        info:
          'Der Zweck sollte nicht nur intern beschrieben sein, sondern dort verfügbar sein, wo Nutzer Entscheidungen treffen.',
        examples: [
          'Kurzbeschreibung im UI plus detaillierter Abschnitt im Handbuch.',
          'Intranet-Seite mit Zweck, Kontakt und Verantwortlichen.',
        ],
      },
      {
        id: 'KI_TP_GRENZEN_INFO',
        question: 
          'Sind bekannte Grenzen und Limitierungen des Systems dokumentiert und verfügbar?',
        todo: 
          'Bekannte Grenzen und Limitierungen des Systems dokumentieren und für Nutzer verfügbar machen (inkl. Aktualisierung bei Änderungen).',
        reference: 'EU AI Act (2024), Art. 50',
        referenceUrl: EU_AI_ACT_LINKS.ART_50,
        info:
          'Einschränkungen sollten praktisch nutzbar sein (z. B. „nicht für X geeignet“, „nur bei Y zuverlässig“).',
        examples: [
          'Abschnitt „Bekannte Einschränkungen“ im Handbuch und in Versionshinweisen.',
          'Dokumentierte Fehlertypen und empfohlene Kontrollen.',
        ],
      },
      {
        id: 'KI_TP_ZULAESSIGE_NUTZUNG',
        question: 
          'Sind Vorgaben zur zulässigen Nutzung (erlaubt/unzulässig) dokumentiert und verfügbar?',
        todo: 
          'Vorgaben zur zulässigen und unzulässigen Nutzung dokumentieren und für Nutzer bereitstellen (inkl. Beispiele).',
        reference: 'EU AI Act (2024), Art. 50',
        referenceUrl: EU_AI_ACT_LINKS.ART_50,
        info:
          '„Erlaubt/unzulässig“ sollte konkrete Beispiele enthalten (z. B. Datenarten, Nutzerrollen, Entscheidungsarten).',
        examples: [
          'Richtlinie listet erlaubte Datenquellen und verbotene Inhalte.',
          'Schulung enthält Fallbeispiele und Prüf-/Freigabeschritte.',
        ],
      },
    ],
  },

  KI_KONFORMITAET_UND_DOKU: {
    label: 'EU AI Act: Konformitätsbewertung & Technische Dokumentation',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 16 ff., Art. 43 ff., Anhang IV'],
    items: [
      {
        id: 'KI_KONF_PFLICHT_GEPRUEFT',
        question:
          'Wurde dokumentiert festgestellt, ob für das System eine Konformitätsbewertung erforderlich ist?',
        todo: 
          'Erforderlichkeit einer Konformitätsbewertung prüfen, begründen und dokumentieren (inkl. Verweis auf relevante Artikel/Anhänge).',
        reference: 'EU AI Act (2024), Art. 43 ff.',
        referenceUrl: EU_AI_ACT_LINKS.ART_43,
        info:
          'Die Entscheidung sollte die Einstufung (z. B. Hochrisiko) und die einschlägigen Artikel/Anhänge referenzieren.',
        examples: [
          'Notiz enthält Verweis auf relevante Artikel/Anhang und Begründung.',
          'Freigabe ist nachvollziehbar dokumentiert.',
        ],
      },
      {
        id: 'KI_KONF_DURCHGEFUEHRT',
        question:
          'Wurde die Konformitätsbewertung durchgeführt und liegt ein dokumentiertes Ergebnis vor?',
        todo: 
          'Konformitätsbewertung durchführen, Ergebnis dokumentieren und formale Freigabeentscheidung festhalten.',
        reference: 'EU AI Act (2024), Art. 43 ff.',
        referenceUrl: EU_AI_ACT_LINKS.ART_43,
        info:
          'Der Bericht sollte Umfang, Methodik, Ergebnisse, Abweichungen und Maßnahmen enthalten.',
        examples: [
          'Konformitätsbericht ist versioniert und freigegeben.',
          'Abweichungen sind mit Maßnahmen und Verantwortlichen hinterlegt.',
        ],
      },
      {
        id: 'KI_KONF_PLAN_FALLS_OFFEN',
        question:
          'Gibt es einen datierten Plan mit Verantwortlichen, falls die Konformitätsbewertung noch aussteht?',
        todo: 
          'Datieren und dokumentieren: Plan zur ausstehenden Konformitätsbewertung erstellen (Meilensteine, Verantwortliche, Freigabegates).',
        reference: 'EU AI Act (2024), Art. 43 ff.',
        referenceUrl: EU_AI_ACT_LINKS.ART_43,
        info:
          'Der Plan sollte konkrete Meilensteine und Verantwortliche enthalten und ein Risiko- bzw. Go/No-Go-Kriterium definieren.',
        examples: [
          'Projektplan mit Terminen, Verantwortlichen, Abhängigkeiten und Freigabegates.',
          'RACI definiert Entscheidungsgremium und Prüffunktionen.',
        ],
      },
      {
        id: 'KI_DOK_ANHANG_IV_MINDESTUMFANG',
        canonicalId: 'KI_DOK_TECH_VOLLSTAENDIGKEIT',
        question:
          'Deckt die technische Dokumentation mindestens Zweck, Modellbeschreibung, Daten, Tests, Risiken und Betriebsvoraussetzungen ab?',
        todo: 
          'Technische Dokumentation gemäß Mindestanforderungen (Anhang IV) erstellen/prüfen und Vollständigkeit dokumentieren.',
        reference: 'EU AI Act (2024), Anhang IV',
        referenceUrl: EU_AI_ACT_LINKS.ANHANG_4,
        info:
          'Praktisch hilft eine Indexliste, die Anhang-IV-Punkte auf konkrete Dokumente/Abschnitte abbildet.',
        examples: [
          'Indexliste verlinkt auf Doku-Abschnitte/Dateien pro Anhang-IV-Punkt.',
          'Dokumentationspaket enthält Testberichte, Risikoanalyse und Betriebsanforderungen.',
        ],
      },
      {
        id: 'KI_ROLLEN_DEFINIERT',
        canonicalId: 'KI_GOV_ROLLEN_VERANTWORTLICHKEITEN',
        question:
          'Sind Rollen (Anbieter/Betreiber) und Verantwortlichkeiten im Dokumentationspaket eindeutig beschrieben?',
        todo: 
          'Rollen (Anbieter/Betreiber) und Verantwortlichkeiten eindeutig definieren und im Dokumentationspaket nachvollziehbar festhalten.',
        reference: 'EU AI Act (2024), Art. 16 ff.',
        referenceUrl: EU_AI_ACT_LINKS.ART_16,
        info:
          'Bei externen Parteien sollten Verantwortlichkeiten auch vertraglich klar geregelt sein (z. B. Leistungsbeschreibung, SLAs).',
        examples: [
          'RACI nennt Anbieter/Betreiber und deren Pflichten.',
          'Vertrag beschreibt Verantwortlichkeiten und Liefergegenstände.',
        ],
      },
      {
        id: 'KI_AENDERUNGSMANAGEMENT_DOKU',
        question:
          'Gibt es einen dokumentierten Änderungsprozess, der Modelländerungen (Neutraining/Feinabstimmung) vor der Produktivsetzung freigibt?',
        todo: 
          'Änderungsmanagement für Modelländerungen etablieren und dokumentieren (Auswirkungsanalyse, Freigabe, Rücksetzung/Überwachung).',
        reference: 'EU AI Act (2024), Art. 11–12 (i. V. m. Governance)',
        referenceUrl: EU_AI_ACT_LINKS.ART_11,
        info:
          'Der Änderungsprozess sollte Risiko-/Auswirkungsanalyse, Freigabe sowie Rücksetzung und Überwachung beinhalten.',
        examples: [
          'Protokoll dokumentiert Freigabe der Modelländerung.',
          'Versionshinweise referenzieren Tests/Auswirkungen und Freigabe.',
        ],
      },
    ],
  },

  KI_REGISTRIERUNG_UND_KENNZEICHNUNG: {
    label: 'EU AI Act: Registrierung & Kennzeichnung',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 49 ff., Art. 60'],
    items: [
      {
        id: 'KI_REG_PFLICHT_GEPRUEFT',
        question:
          'Wurde geprüft und dokumentiert, ob das System registrierungspflichtig ist?',
        todo:   
          'Registerpflicht des Systems prüfen, begründen und dokumentieren (inkl. Entscheidung zur Registrierungspflicht).',
        reference: 'EU AI Act (2024), Art. 60',
        referenceUrl: EU_AI_ACT_LINKS.ART_60,
        info:
          'Die Entscheidung sollte die Einstufung und die Kriterien zur Registerpflicht nachvollziehbar dokumentieren.',
        examples: [
          'Notiz enthält Entscheidung inkl. Begründung und Quellen.',
          'Registerpflicht-Entscheidung ist freigegeben und versioniert.',
        ],
      },
      {
        id: 'KI_REG_DURCHGEFUEHRT',
        question:
          'Wurde die Registrierung durchgeführt und ist die Registrierungs-ID nachvollziehbar dokumentiert?',
        todo: 
          'Registrierung durchführen und Registrierungs-ID inkl. Ablageort revisionssicher dokumentieren.',
        reference: 'EU AI Act (2024), Art. 60',
        referenceUrl: EU_AI_ACT_LINKS.ART_49,
        info:
          'Der Ablageort sollte zugriffsgeschützt und revisionssicher sein (inkl. Zeitpunkt der Registrierung).',
        examples: [
          'Screenshot/PDF der Registrierung liegt im Repository.',
          'Registrierungs-ID ist in Systemdokumentation und Freigabeakte referenziert.',
        ],
      },
      {
        id: 'KI_REG_EU_DB_URL',
        canonicalId: 'KI_REG_EU_DB_URL',
        question: 
          'Ist die EU-Datenbank-Referenz (URL/Eintrag) für das System dokumentiert und auffindbar?',
        todo: 
          'EU-DB-URL bzw. Referenz auf den Registereintrag dokumentieren (inkl. Ablageort/Verantwortliche) und in der Systemdokumentation verlinken.',
        reference: 'EU AI Act (2024), Art. 60',
        referenceUrl: EU_AI_ACT_LINKS.ART_49,
        info:
          'Die Referenz muss eindeutig sein (URL oder Eintrags-ID) und der Ablageort muss revisionssicher definiert sein.',
        examples: [
          'Systemdokumentation enthält einen Link auf den EU-Registereintrag inkl. Datum des Abrufs.',
          'Ablageort und Verantwortliche für Pflege/Updates sind dokumentiert.',
        ],
      },
      {
        id: 'KI_REG_GRFA_ZUSAMMENFASSUNG_VERFUEGBAR',
        canonicalId: 'KI_REG_GRFA_ZUSAMMENFASSUNG_VERFUEGBAR',
        question: 
          'Ist (falls erforderlich) eine GRFA-Zusammenfassung als bereitstellbare Information erstellt und abgelegt?',
        todo: 
          'GRFA-Zusammenfassung erstellen (falls GRFA erforderlich) und bereitstellbar ablegen (Ablageort, Version, Freigabe).',
        reference: 'EU AI Act (2024), Art. 27 (i. V. m. Register-/Anhang-Informationen)',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Die Zusammenfassung sollte den Freigabestatus, die Version und den Bereitstellungsweg eindeutig nennen.',
        examples: [
          'Dokument enthält Version, Datum und Freigabevermerk.',
          'Ablagepfad ist dokumentiert und zugriffsgeschützt.',
        ],
      },
      {
        id: 'KI_REG_DSFA_ZUSAMMENFASSUNG_VERFUEGBAR',
        canonicalId: 'KI_REG_DSFA_ZUSAMMENFASSUNG_VERFUEGBAR',
        question:
          'Falls bereits eine DSFA existiert oder datenschutzrechtlich erforderlich ist: ist eine bereitstellbare Zusammenfassung erstellt und abgelegt?',
        todo:
          'Nur wenn eine DSFA bereits existiert oder erforderlich ist: eine bereitstellbare Zusammenfassung erstellen/ablegen (Ablageort, Version, Freigabe). Wenn keine DSFA erforderlich ist, dokumentiere diese Entscheidung (kurze Begründung + Verantwortliche).',
        reference:
          'EU AI Act (2024), Art. 27',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Der EU AI Act verlangt hier keine DSFA. Wenn sie jedoch existiert/erforderlich ist, sollte eine bereitstellbare, nicht-sensitive Zusammenfassung verfügbar sein.',
        examples: [
          'Zusammenfassung ist freigegeben und bereitstellbar (ohne sensible Details).',
          'Alternativ: Entscheidung „DSFA nicht erforderlich“ inkl. kurzer Begründung und Freigabe ist abgelegt.',
        ],
      },    
      {
        id: 'KI_KENNZEICHNUNG_PFLICHT_PRUEFUNG',
        question:
          'Wurde geprüft und dokumentiert, ob eine Kennzeichnung erforderlich ist?',
        todo: 
          'Prüfen und dokumentieren, ob eine Kennzeichnung (z. B. CE) erforderlich ist.',
        reference: 'EU AI Act (2024), Art. 49 ff.',
        referenceUrl: EU_AI_ACT_LINKS.ART_49,
        info:
          'Bei integrierten Systemen sollte die Produktkonformität/CE-Logik mitbetrachtet werden.',
        examples: [
          'Compliance-Notiz beschreibt Bewertung der Kennzeichnungspflicht.',
          'Konformitätsunterlagen sind abgelegt und referenziert.',
        ],
      },
      {
        id: 'KI_UNTERLAGEN_REPOSITORY',
        canonicalId: 'KI_DOK_UNTERLAGEN_REPO_VERSIONIERUNG',
        question:
          'Sind Registrierungs- und Kennzeichnungsunterlagen versioniert, zugriffsgeschützt und auffindbar abgelegt?',
        todo: 
          'Registrierungs- und Kennzeichnungsunterlagen versioniert, zugriffsgeschützt und eindeutig auffindbar ablegen.',
        reference: 'EU AI Act (2024), Art. 49 ff.',
        referenceUrl: EU_AI_ACT_LINKS.ART_49,
        info:
          'Auffindbarkeit heißt: klarer Ablagepfad plus eindeutige Namenskonvention plus Zugriffskonzept.',
        examples: [
          'Repository-Link ist im Klassifikationsnotiz referenziert.',
          'Versionshistorie zeigt Änderungen an Unterlagen über die Zeit.',
        ],
      },
    ],
  },

  KI_GRFA_PFLICHTPRUEFUNG_ART_27: {
    label: 'EU AI Act: GRFA – Pflichtprüfung (Art. 27) – Nachweis',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 27'],
    items: [
      {
        id: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
        canonicalId: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
        question:
          'Wurde geprüft und dokumentiert, ob GRFA erforderlich ist (inkl. Geltungsbereich/Begründung)?',
        todo:
          'GRFA-Pflicht prüfen und dokumentieren (inkl. Geltungsbereich/Begründung, betroffene Gruppen, Prozesskontext, Anhang-III-Zuordnung).',
        reference: 'EU AI Act (2024), Art. 27',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Die Prüfung sollte Kriterien, Geltungsbereich und Zuordnung zu Anhang III nachvollziehbar festhalten. ' +
          'Wichtig: GRFA ist nicht auf Finanzfälle beschränkt; sie ist kontextabhängig zu prüfen.',
        examples: [
          'Notiz dokumentiert Entscheidung zur GRFA-Pflicht inkl. Anhang-III-Bezug.',
          'Geltungsbereich benennt betroffene Gruppen und Prozesskontext.',
        ],
      },
    ],
  },

  KI_HR_GRUNDRECHTE_FOLGENABSCHAETZUNG_ART_27: {
    label: 'EU AI Act: Hochrisiko – Grundrechts-Folgenabschätzung (GRFA) im Betrieb',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 27'],
    items: [
      {
        id: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
        canonicalId: 'KI_GRFA_PFLICHT_GEPRUEFT_UND_ABGEGRENZT',
        question:
          'Wurde geprüft und dokumentiert, ob GRFA erforderlich ist (inkl. Geltungsbereich/Begründung?',
        todo:
          'GRFA-Pflicht prüfen und dokumentieren (inkl. Geltungsbereich/Begründung, betroffene Gruppen, Prozesskontext, Anhang III-Zuordnung).',
        reference: 'EU AI Act (2024), Art. 27',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Die Prüfung sollte Kriterien, Geltungsbereich und Zuordnung zu Anhang III nachvollziehbar festhalten.',
        examples: [
          'Notiz dokumentiert Entscheidung zur GRFA-Pflicht inkl. Anhang III-Bezug.',
          'Geltungsbereich benennt betroffene Gruppen und Prozesskontext.',
        ],
      },
      {
        id: 'KI_GRFA_DOKUMENTIERT',
        canonicalId: 'KI_GRFA_DOKUMENTIERT',
        question: 
          'Liegt eine GRFA dokumentiert vor?',
        todo:
          'GRFA durchführen und dokumentieren (Risiken/Betroffenheit, Maßnahmen, Restrisiko, Verantwortlichkeiten, Umsetzungsplan).',
        reference: 'EU AI Act (2024), Art. 27',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Dokument muss Risiken, betroffene Grundrechte, Kontrollen und Restrisiko klar darstellen.',
        examples: [
          'GRFA enthält Maßnahmenplan mit Verantwortlichen und Terminen.',
          'Risiko-/Kontrollmapping verlinkt auf konkrete Kontrollen im Betrieb.',
        ],
      },
      {
        id: 'KI_GRFA_UEBERPRUEFUNG_UND_FREIGABE',
        canonicalId: 'KI_GRFA_UEBERPRUEFUNG_UND_FREIGABE',
        question: 
          'Wurde die GRFA reviewed und formal freigegeben?',
        todo:
          'GRFA-Review und formale Freigabe durchführen (Rollen/RACI, Entscheidung, Auflagen, Abhilfemaßnahmen) und versioniert ablegen.',
        reference: 'EU AI Act (2024), Art. 27',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Freigabe muss Rollen, Entscheidung und Auflagen eindeutig dokumentieren.',
        examples: [
          'Review-Protokoll dokumentiert Entscheidung, Auflagen und Verantwortliche.',
        ],
      },
      {
        id: 'KI_GRFA_MASSNAHMEN_NACHVERFOLGT',
        canonicalId: 'KI_GRFA_MASSNAHMEN_NACHVERFOLGT',
        question: 
          'Werden GRFA-Maßnahmen im Betrieb nachverfolgt?',
        todo:
          'GRFA-Maßnahmen operationalisieren und nachverfolgen (Kontrollen, Überwachung, Beschwerde-/Feedback-Kanal, Wirksamkeitsreview).',
        reference: 'EU AI Act (2024), Art. 27',
        referenceUrl: EU_AI_ACT_LINKS.ART_27,
        info:
          'Nachverfolgung muss Status, Wirksamkeit und offene Punkte nachvollziehbar zeigen.',
        examples: [
          'Maßnahmen-Tracking enthält Status, Verantwortlicher, Termin und Wirksamkeitskriterium.',
          'Beschwerde-/Feedback-Kanal ist dokumentiert und wird ausgewertet.',
        ],
      },
    ],
  },

  KI_UEBERWACHUNG_NACH_INVERKEHRBRINGEN_ART_72: {
    label: 'EU AI Act: Überwachung nach dem Inverkehrbringen',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 72'],
    items: [
      {
        id: 'KI_UEBERWACHUNGS_PLAN',
        canonicalId: 'KI_UEBERWACHUNGS_PLAN',
        question: 
          'Gibt es einen dokumentierten Plan zur Überwachung nach dem Inverkehrbringen?',
        todo:
          'Plan zur Überwachung nach dem Inverkehrbringen erstellen (Datenquellen, KPIs, Rollen/RACI, Review-Frequenz, Eskalationspfade, Maßnahmenlogik).',
        reference: 'EU AI Act (2024), Art. 72',
        referenceUrl: EU_AI_ACT_LINKS.ART_72,
        info:
          'Der Plan sollte Datenquellen, KPIs, Schwellenwerte, Verantwortlichkeiten und Review-Zyklen konkret benennen.',
        examples: [
          'Überwachungs-Plan enthält Review-Frequenz und Eskalationspfade.',
          'KPI-Definitionen sind versioniert und freigegeben.',
        ],
      },
      {
        id: 'KI_UEBERWACHUNGS_KPIS_UND_SCHWELLENWERTE',
        canonicalId: 'KI_UEBERWACHUNGS_KPIS_UND_SCHWELLENWERTE',
        question: 
          'Sind KPIs/Schwellenwerte definiert inkl. Auslöser?',
        todo:
          'KPIs und Schwellenwerte definieren inkl. Auslöser/Eskalation.',
        reference: 'EU AI Act (2024), Art. 72',
        referenceUrl: EU_AI_ACT_LINKS.ART_72,
        info:
          'Schwellenwerte müssen messbar sein und klare Auslöser für Eskalation, Maßnahmen oder Stopp enthalten.',
        examples: [
          'Auslöser-Matrix verknüpft KPI-Schwellen mit Eskalationsstufen.',
          'KPI-Katalog enthält Definition, Datenquelle, Frequenz und Verantwortlicher.',
        ],
      },
      {
        id: 'KI_PMM_UEBERPRUEFUNGEN_DURCHGEFUEHRT',
        canonicalId: 'KI_PMM_UEBERPRUEFUNGEN_DURCHGEFUEHRT',
        question: 
          'Werden Reviews tatsächlich durchgeführt und dokumentiert?',
        todo:
          'Reviews durchführen, Feststellungen dokumentieren, Maßnahmen ableiten und Nachverfolgung sicherstellen (inkl. Verantwortlichkeiten/Fristen).',
        reference: 'EU AI Act (2024), Art. 72',
        referenceUrl: EU_AI_ACT_LINKS.ART_72,
        info:
          'Reviews müssen Datum, Teilnehmer, Feststellungen, Entscheidungen und Maßnahmen inklusive Tracking enthalten.',
        examples: [
          'Review-Protokoll enthält Feststellungen, Verantwortlicher, Termin und Status.',
          'Änderungsunterlagen verlinken auf Reviews und Überwachungs-Reports.',
        ],
      },
    ],
  },

  KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73: {
    label: 'EU AI Act: Meldung schwerwiegender Vorfälle – Auslöser, Prozess, Nachweis',
    regulation: 'EU AI Act',
    articles: ['EU AI Act (2024), Art. 73'],
    items: [
      {
        id: 'KI_SVV_TRIGGER_DEFINIERT',
        canonicalId: 'KI_SVV_TRIGGER_DEFINIERT',
        question: 
          'Sind Auslöser für „schwerwiegende Vorfälle“ definiert und organisatorisch verankert?',
        todo:
          'Auslöser-Definition für „schwerwiegende Vorfälle“ erstellen (Beispiele, Schweregrade, Abgrenzung zu normalen Vorfällen) und kommunizieren.',
        reference: 'EU AI Act (2024), Art. 73',
        referenceUrl: EU_AI_ACT_LINKS.ART_73,
        info:
          'Auslöser müssen klar abgrenzen, wann ein Vorfall als „schwerwiegend“ gilt, und wer entscheidet.',
        examples: [
          'Beispielkatalog enthält typische Fälle und Schweregrade.',
          'Schulungsnachweis dokumentiert Kommunikation an relevante Rollen.',
        ],
      },
      {
        id: 'KI_SVV_PROZESS_UND_ROLLEN',
        canonicalId: 'KI_SVV_PROZESS_UND_ROLLEN',
        question: 
          'Gibt es einen dokumentierten Meldeprozess?',
        todo:
          'Meldeprozess definieren (Rollen/RACI, Fristen, Behördenkontakt, Eskalation, Zusammenarbeit mit Anbieter/Betreiber) und testen.',
        reference: 'EU AI Act (2024), Art. 73',
        referenceUrl: EU_AI_ACT_LINKS.ART_73,
        info:
          'Der Prozess sollte Kontaktpunkte, Fristen, Informationsumfang und Eskalationsstufen konkret festlegen.',
        examples: [
          'Kontaktliste enthält Rollen, Stellvertretung und Erreichbarkeit.',
          'Test-Protokoll belegt getestete Abläufe und identifizierte Lücken.',
        ],
      },
      {
        id: 'KI_SVV_PROTOKOLLIERUNG_UND_UNTERLAGEN',
        canonicalId: 'KI_SVV_PROTOKOLLIERUNG_UND_UNTERLAGEN',
        question: 
          'Werden Vorfälle/Meldungen revisionssicher protokolliert?',
        todo:
          'Vorfallsregister inkl. Ursachenanalyse, Maßnahmen und Abschlussdokumentation etablieren (auditfähig, versioniert, nachvollziehbar).',
        reference: 'EU AI Act (2024), Art. 73',
        referenceUrl: EU_AI_ACT_LINKS.ART_73,
        info:
          'Revisionssicherheit heißt: unveränderbare Historie, klare Versionen und nachvollziehbarer Abschluss je Vorfall.',
        examples: [
          'Ursachenanalyse dokumentiert Ursachen, beitragende Faktoren und Kontrollen.',
          'Maßnahmenlog enthält Verantwortliche, Termine und Wirksamkeitsprüfung.',
        ],
      },
    ],
  },

  // DORA: IKT-Risiko, Drittanbieter, Betrieb/Überwachung, Tests, Incident Management

  DORA_BASIS: {
    label: 'DORA: IKT-Risikomanagement – Basis',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16'],
    items: [
      {
        id: 'DORA_GOV_ROLLEN',
        question:
          'Sind IKT-Governance und Verantwortlichkeiten für die KI-relevanten Systeme definiert und dokumentiert?',
        todo:
          'IKT-Governance sowie Verantwortlichkeiten für die KI-relevanten Systeme verbindlich definieren und dokumentieren (inkl. Vertretungen und Eskalationswege).',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Die Governance sollte klar machen, wer fachlich, technisch und risikoseitig verantwortlich ist (inkl. Vertretungen, Eskalation und Entscheidungswegen).',
        examples: [
          'RACI benennt Verantwortlicher, IT-Betrieb, IT-Sicherheit, Risikomanagement/Compliance und Datenschutz.',
          'Governance-Dokument beschreibt Gremien, Freigaben und Eskalationspfade.',
        ],
      },
      {
        id: 'DORA_IKT_RMF',
        question:
          'Gibt es ein dokumentiertes IKT-Risikomanagement-Rahmenwerk inklusive Rollen, Kontrollen und akzeptablem Risikoniveau?',
        todo:
          'IKT-Risikomanagement-Rahmenwerk dokumentieren und verabschieden (Rollen, Kontrollen) und KI-relevante Risiken explizit abdecken.',
        reference: 'DORA (2022), Art. 6',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Das Rahmenwerk sollte KI-relevante Risiken explizit abdecken (z. B. Modellbetrieb, Datenpipelines, externe KI-Dienste, Abhängigkeiten von Drittanbietern).',
        examples: [
          'Kontrollkatalog enthält IKT-Kontrollen für Modellbetrieb, Überwachung und Änderungsmanagement.',
          'Risikomethodik ist dokumentiert und genehmigt.',
        ],
      },
      {
        id: 'DORA_GOV_DIG_RESILIENZ_STRATEGIE',
        canonicalId: 'DORA_GOV_DIG_RESILIENZ_STRATEGIE',
        question:
          'Gibt es eine vom Leitungsorgan genehmigte digitale operationelle Resilienzstrategie und wird sie regelmäßig überprüft?',
        todo:
          'Digitale operationelle Resilienzstrategie erstellen, vom Leitungsorgan genehmigen lassen und regelmäßig (mind. jährlich bzw. bei wesentlichen Änderungen) überprüfen. Abgleich mit IKT-RMF, Risikoprofil, kritischen/wichtigen Funktionen, Toleranzen sowie Maßnahmen-/Investitionsplan dokumentieren.',
        reference: 'DORA (2022), Art. 5 i. V. m. Art. 6',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Auditfähig wird es durch klare Governance (Genehmigung/Review) und Konsistenz zur tatsächlichen IKT-Risikolage (inkl. KI-relevanter Abhängigkeiten).',
        examples: [
          'Strategie enthält Ziele, Prioritäten, akzeptables Risikoniveau, Verantwortlichkeiten und Ressourcen.',
          'Protokoll belegt Genehmigung und periodischen Review inkl. Entscheidungen/Nachverfolgungen.',
        ],
      },
      {
        id: 'DORA_GOV_IKT_AUDITPLAN',
        canonicalId: 'DORA_GOV_IKT_AUDITPLAN',
        question:
          'Gibt es einen vom Leitungsorgan genehmigten IKT-Audit-/Prüfplan (inkl. IKT-RMF/KI-relevanter Systeme) und wird die Umsetzung nachverfolgt?',
        todo:
          'IKT-Audit-/Prüfplan (intern/extern) festlegen, vom Leitungsorgan genehmigen lassen, Durchführung dokumentieren und Feststellungen/Maßnahmen inkl. Nachverfolgung (Fristen, Verantwortliche, Wirksamkeitsprüfung).',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Plan sollte KI-relevante IKT-Komponenten (Modelle, Datenpipelines, Schnittstellen, Drittanbieter) explizit enthalten.',
        examples: [
          'Auditplan enthält Geltungsbereich, Frequenz, Prüffelder, Verantwortliche und Zeitplan.',
          'Maßnahmen-Register zeigt Feststellungen, Owner, Frist, Status und Wirksamkeitsnachweis.',
        ],
      },    
      {
        id: 'DORA_JAHRESBERICHT_IKT_AN_LEITUNGSORGAN',
        canonicalId: 'DORA_JAHRESBERICHT_IKT_AN_LEITUNGSORGAN',
        question:
          'Wird dem Leitungsorgan mindestens jährlich ein Bericht zum IKT-Risikomanagement und Resilienzstatus vorgelegt?',
        todo:
          'Jährliches Reporting an das Leitungsorgan etablieren und dokumentieren: Status IKT-Risikolage, wesentliche Vorfälle, KPI/KRI, Top-Risiken, Maßnahmen/Roadmap, Wirksamkeit der Kontrollen. Bericht/Präsentation versioniert ablegen.',
        reference: 'DORA (2022), Art. 6',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Es geht um nachvollziehbare Information des Leitungsorgans und ggf. Beschlüsse/Nachverfolgung.',
        examples: [
          'Unterlagen enthalten KPI/KRI (Vorfälle, Wiederherstellungszeiten, Feststellungen, Patch-/Schwachstellenstatus, Anbieter-Risiken).',
          'Protokoll dokumentiert Diskussion/Entscheidungen und Nachverfolgung.',
        ],
      },
      {
        id: 'DORA_SCHULUNGS_AWARENESS_PROGRAMM',
        canonicalId: 'DORA_SCHULUNGS_AWARENESS_PROGRAMM',
        question:
          'Gibt es ein regelmäßiges Schulungs-/Awareness-Programm zu IKT-Risiken und operativer Resilienz?',
        todo:
          'Schulungs-/Awareness-Programm definieren und durchführen: Zielgruppen, Inhalte, Frequenz, Pflichtquoten, Wirksamkeitskontrolle.',
        reference: 'DORA (2022), Art. 13–14',
        referenceUrl: DORA_LINKS.ART_13,
        info:
          'Damit verhindern Sie reine Papierkontrollen: Awareness muss messbar sein (Teilnahme, Tests, Wiederholung).',
        examples: [
          'Pflichttraining jährlich plus rollenspezifische Vertiefungen (BCM, Cloud-Betrieb).',
          'Teilnahmequote >X% und dokumentierte Nachschulungen.',
        ],
      },
      {
        id: 'DORA_TECHNOLOGIE_BEOBACHTUNGSPROZESS',
        canonicalId: 'DORA_TECHNOLOGIE_BEOBACHTUNGSPROZESS',
        question:
          'Gibt es einen dokumentierten Prozess zur Technologiebeobachtung, der neue Bedrohungen/Technologien bewertet und Richtlinien/Kontrollen regelmäßig aktualisiert?',
        todo:
          'Prozess zur Technologiebeobachtung etablieren: Quellen, Bewertungsmethodik, Verantwortliche, Entscheidungs- und Update-Zyklus, Änderungsprotokoll und Kommunikation an betroffene Teams.',
        reference: 'DORA (2022), Art. 6 i. V. m. Art. 13',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Auditfähig wird es durch geschlossene Nachweiskette: Beobachtung -> Bewertung -> Entscheidung -> Update -> Kommunikation -> Nachweis.',
        examples: [
          'Monatliches Review von Warnmeldungen mit dokumentierten Entscheidungen.',
          'Richtlinien-Updates sind versioniert und kommuniziert (z. B. Update-Richtlinie, Cloud-Basis).',
        ],
      },
      {
        id: 'DORA_IKT_ASSET_INVENTAR',
        question:
          'Gibt es ein aktuelles Inventar der IKT-Assets, die für das KI-System genutzt werden?',
        todo:
          'Inventar der KI-relevanten IKT-Assets vollständig erfassen, aktuell halten und nachvollziehbar dokumentieren (inkl. Datenquellen, Modelle, Pipelines, Schnittstellen).',
        reference: 'DORA (2022), Art. 6-9',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Wichtig ist, dass nicht nur Server/Cloud-Ressourcen, sondern auch Datenquellen, Modellartefakte, Pipelines, Schnittstellen und Betriebswerkzeuge erfasst sind.',
        examples: [
          'CMDB/Asset-Register listet Modellservice, Datenpipeline, Storage, Secrets, Protokollierung/SIEM.',
          'Architekturdiagramm verlinkt auf die zugehörigen Asset-IDs.',
        ],
      },
      {
        id: 'DORA_SEC_IAM_MINIMALE_RECHTE',
        canonicalId: 'DORA_SEC_IAM_MINIMALE_RECHTE',
        question:
          'Sind Zugriffe auf KI-relevante Komponenten nach dem Prinzip minimaler Rechte umgesetzt?',
        todo:
          'Prinzip minimaler Rechte umsetzen und nachweisen: Rollen- und Rechtekonzept definieren, privilegierte Konten minimieren, Trennung von Aufgaben (Entwicklung/Betrieb/Review) etablieren, regelmäßige Rezertifizierung durchführen.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Auditfähig wird das erst durch nachvollziehbare Rollenmodelle, Rezertifizierung und klare Trennung von Aufgaben.',
        examples: [
          'Rezertifizierung der Rollenrechte mindestens quartalsweise dokumentiert.',
          'Keine geteilten Admin-Konten; Notfallzugriff ist definiert und protokolliert.',
        ],
      },
      {
        id: 'DORA_SEC_UPDATE_SCHWACHSTELLENMANAGEMENT',
        canonicalId: 'DORA_SEC_UPDATE_SCHWACHSTELLENMANAGEMENT',
        question:
          'Gibt es ein wirksames Schwachstellen- und Update-Management für KI-relevante Systeme?',
        todo:
          'Schwachstellen- und Update-Management etablieren: regelmäßige Scans, Priorisierung, Update-SLAs, Ausnahmen dokumentieren, Abhilfemaßnahmen nachverfolgen.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Update-Management umfasst auch Container-Images, Drittbibliotheken und KI-Abhängigkeiten.',
        examples: [
          'Kritische Feststellungen werden innerhalb definierter SLAs behoben.',
          'Ausnahmen sind befristet, begründet und genehmigt.',
        ],
      },
      {
        id: 'DORA_SEC_HAERTUNG_BASIS',
        canonicalId: 'DORA_SEC_HAERTUNG_BASIS',
        question:
          'Gibt es eine Sicherheitsbasis/Härtung für KI-relevante Komponenten und wird sie geprüft?',
        todo:
          'Härtungsbasis definieren und durchsetzen: sichere Konfigurationen (z. B. CIS/BSI), Netzwerksegmentierung, regelmäßige Konfigurationsprüfungen.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Auditfähig wird es durch eine definierte Basis plus regelmäßige Compliance-Messung.',
        examples: [
          'Konfigurationsveränderung wird erkannt und behoben.',
        ],
      },
      {
        id: 'DORA_SEC_GEHEIMNISSE_MANAGEMENT',
        canonicalId: 'DORA_SEC_GEHEIMNISSE_MANAGEMENT',
        question:
          'Sind Zugangsdaten für KI-relevante Systeme so verwaltet, dass sie nicht unbefugt ausgelesen oder missbraucht werden können?',
        todo:
          'Management von Geheimnissen umsetzen: zentrale Ablage, Rotation, kurze Laufzeiten, Zugriff nach Need-to-know, kein Hardcoding in Code/Konfigurationen, Protokollierung für Zugriffe auf Geheimnisse.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Management von Geheimnissen ist ein häufiger Audit-Fund: Rotation und Zugriffsnachweise sind entscheidend.',
        examples: [
          'Rotation für API-Keys mindestens alle X Tage (richtlinienbasiert) dokumentiert.',
          'Repository-Scans verhindern Leaks von Geheimnissen.',
        ],
      },
      {
        id: 'DORA_SEC_PROTOKOLLIERUNG_SIEM',
        canonicalId: 'DORA_SEC_PROTOKOLLIERUNG_SIEM',
        question:
          'Sind sicherheitsrelevante Protokolle für KI-relevante Systeme vollständig, manipulationsgeschützt und zentral auswertbar?',
        todo:
          'Protokollierung/SIEM sicherstellen: Authentifizierungs- und Admin-Aktionen, Datenzugriffe, Modell- und Konfigurationsänderungen protokollieren, Aufbewahrungsfristen definieren, zentrale Korrelation/Alarmierung, Zugriffsschutz auf Protokolle.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Für Audit zählt: „Was wird protokolliert?“, „Wie lange?“, „Wer wertet aus?“ und „Welche Alarme gibt es?“.',
        examples: [
          'Admin-Aktionen und Modellbereitstellungen sind nachvollziehbar (wer/wann/was).',
          'Alarme für ungewöhnliche Datenabflüsse und fehlgeschlagene Logins sind aktiv.',
        ],
      },
      {
        id: 'DORA_SEC_SDLC_AENDERUNGSGATES',
        canonicalId: 'DORA_SEC_SDLC_AENDERUNGSGATES',
        question:
          'Gibt es sichere Freigabegates im Änderungsmanagement für KI-relevante Änderungen inkl. Vier-Augen-Prinzip?',
        todo:
          'Freigabegates definieren: Code-Reviews, Freigaben für Bereitstellungen, Trennung von Entwicklung/Produktion, Nachvollziehbarkeit, Notfallprozess geregelt.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Gerade bei KI ist Änderung nicht nur Code: Modellversionen, Features, Datenquellen und Prompt-/Richtlinien-Änderungen gehören dazu.',
        examples: [
          'Jede Bereitstellung hat Ticket-Referenz und Freigabe.',
          'Bereitstellungen in Produktion sind nur durch freigegebene Rollen möglich.',
        ],
      },
      {
        id: 'DORA_RESILIENZMAßNAHMEN',
        question:
          'Sind Resilienzmaßnahmen für die KI-relevanten Komponenten definiert?',
        todo:
          'Resilienzmaßnahmen für KI-relevante Komponenten festlegen und dokumentieren (Redundanz, Umschaltung/Failover, Kapazitätsplanung, definierte Rückfalls).',
        reference: 'DORA (2022), Art. 11–12',
        referenceUrl: DORA_LINKS.ART_11,
        info:
          'Resilienz umfasst auch definierte Rückfalls (z. B. manuelle Prozesse) und Kapazitätsplanung bei Lastspitzen.',
        examples: [
          'DR-Konzept beschreibt RTO/RPO, Wiederanlauf und Zuständigkeiten.',
          'Failover-/Umschalt-Testprotokoll dokumentiert Erfolg und Lessons Learned.',
        ],
      },
      {
        id: 'DORA_BACKUP_WIEDERHERSTELLUNG_TESTS',
        question:
          'Werden Sicherungs- und Wiederherstellungsverfahren für die KI-relevanten Systeme regelmäßig getestet und dokumentiert?',
        todo:
          'Backup- und Wiederherstellungsverfahren für KI-relevante Systeme regelmäßig testen und dokumentieren (inkl. Daten, Modellartefakte, Konfigurationen und Schlüssel).',
        reference: 'DORA (2022), Art. 11–12',
        referenceUrl: DORA_LINKS.ART_12,
        info:
          'Tests sollten die Wiederherstellung der relevanten Komponenten umfassen (Daten, Modellartefakte, Konfigurationen, Schlüssel)',
        examples: [
          'Testbericht zeigt Wiederherstellung von Modellartefakten und Konfiguration.',
          'Protokolle dokumentieren Testdatum, Ergebnis, Abweichungen und Maßnahmen.',
        ],
      },
    ],
  },

  DORA_KRITISCHE_FUNKTION_SCOPE: {
    label: 'DORA: Kritische/wichtige Funktion (Art. 8)',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 8'],
    items: [
      {
        id: 'DORA_KF_SCOPE_IMPACT_ANALYSE',
        canonicalId: 'DORA_KF_SCOPE_IMPACT_ANALYSE',
        question:
          'Liegt eine Auswirkungsanalyse vor, die begründet, warum der Prozess als kritisch/wichtig gilt?',
        todo:
          'Auswirkungsanalyse erstellen/aktualisieren: betroffene Geschäftsprozesse/Services, Kundenauswirkungen, regulatorische Pflichten, Schwellenwerte und Begründung der Kritikalität.',
        reference: 'DORA (2022), Art. 8',
        referenceUrl: DORA_LINKS.ART_8,
        info:
          'Die Analyse muss Kritikalität nachvollziehbar begründen (Auswirkungen, Schwellenwerte, betroffene Services/Outputs).',
        examples: [
          'Dokument nennt betroffene Services, Kundenauswirkungen und relevante Schwellenwerte.',
          'Gremienunterlage dokumentiert die Einstufung und den Review-Zyklus.',
        ],
      },
      {
        id: 'DORA_KF_ABHAENGIGKEITEN_KARTE',
        canonicalId: 'DORA_KF_ABHAENGIGKEITEN_KARTE',
        question:
          'Sind Abhängigkeiten für den kritischen/wichtigen Prozess dokumentiert?',
        todo:
          'Abhängigkeitskarte erstellen/aktualisieren: Systeme, Datenflüsse, Schnittstellen, Drittanbieter, gemeinsame Ausfall-Domänen, manuelle Schritte.',
        reference: 'DORA (2022), Art. 8',
        referenceUrl: DORA_LINKS.ART_8,
        info:
          'Abhängigkeiten müssen End-to-End nachvollziehbar sein (Systeme, Datenflüsse, Schnittstellen, Drittanbieter, manuelle Schritte).',
        examples: [
          'Datenflussdiagramm zeigt Schnittstellen inkl. Drittanbietern.',
          'Schnittstellenliste ist versioniert und referenziert die betroffenen Systeme.',
        ],
      },
      {
        id: 'DORA_KF_TOLERANZEN_RTO_RPO',
        canonicalId: 'DORA_KF_TOLERANZEN_RTO_RPO',
        question:
          'Sind Stoßtoleranzen und Wiederanlaufziele (RTO/RPO bzw. MTPD) definiert, abgestimmt und konsistent mit BCM?',
        todo:
          'Stoßtoleranzen und RTO/RPO definieren und mit BCM verknüpfen (inkl. Annahmen, Messmethodik, Abnahmekriterien).',
        reference: 'DORA (2022), Art. 8',
        referenceUrl: DORA_LINKS.ART_8,
        info:
          'Definitionen müssen messbar sein und mit BCM konsistent bleiben (Annahmen, Messmethodik, Abnahmekriterien).',
        examples: [
          'RTO/RPO sind im Katalog dokumentiert und auf den Prozess gemappt.',
          'Testprotokolle belegen, dass Ziele erreichbar sind oder Abweichungen adressiert werden.',
        ],
      },
      {
        id: 'DORA_KF_FORMALE_FREIGABE',
        canonicalId: 'DORA_KF_FORMALE_FREIGABE',
        question:
          'Ist die Einstufung inkl. Geltungsbereich/Abhängigkeiten/Toleranzen formal freigegeben und versioniert abgelegt?',
        todo:
          'Formale Freigabe einholen und versioniert dokumentieren (Verantwortlicher, Risikomanagementk/BCM, ggf. Leitungsorgan/Gremium) inkl. Auflagen und Review-Zyklus.',
        reference: 'DORA (2022), Art. 8',
        referenceUrl: DORA_LINKS.ART_8,
        info:
          'Freigabe muss Entscheidung, Version, Verantwortliche und Auflagen eindeutig dokumentieren.',
        examples: [
          'Freigabeprotokoll enthält Version, Datum, Teilnehmende und Auflagen.',
          'Entscheidungsprotokoll verlinkt auf Geltungsbereich, Abhängigkeiten und Toleranzen.',
        ],
      },
    ],
  },

  DORA_DRITTANBIETER_STANDARD: {
    label: 'DORA: IKT-Drittanbieter – Standardanforderungen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 28–30'],
    items: [
      {
        id: 'DORA_ANBIETER_REGISTER_RISIKO',
        question:
          'Werden IKT-Drittanbieter in einem Register geführt und risikobasiert bewertet?',
        todo:
          'IKT-Drittanbieter in einem Register führen, KI-relevante Leistungen eindeutig abbilden und risikobasierte Bewertungen regelmäßig durchführen und dokumentieren.',
        reference: 'DORA (2022), Art. 28',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Das Register sollte die KI-relevanten Leistungen eindeutig abbilden (Service, Datenzugriff, Kritikalität) und regelmäßig aktualisiert werden.',
        examples: [
          'Register enthält Servicebeschreibung, Kritikalität, Verantwortlicher, Datenarten, Region/Hosting.',
          'Review-Protokoll dokumentiert die (Neu-)Bewertung und Maßnahmen.',
        ],
      },
      {
        id: 'DORA_VERTRAGSREGISTER_MINDESTFELDER',
        question:
          'Enthält das Vertragsregister Mindestangaben zu Service, Kritikalität, Datenzugriff, Subdienstleistern und Laufzeiten?',
        todo:
          'Vertragsregister um verbindliche Mindestfelder ergänzen und sicherstellen, dass alle KI-relevanten Services vollständig gepflegt sind (Service, Kritikalität, Datenzugriff, Subdienstleister, Laufzeiten).',
        reference: 'DORA (2022), Art. 28–29',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Mindestfelder helfen, Abhängigkeiten und Risiken schnell zu identifizieren (z. B. Datenlokation, Unterbeauftragte, Ausstiegs-Optionen).',
        examples: [
          'Vorlage enthält Felder zu Datenzugriff, Subdienstleistern und Vertragslaufzeiten.',
          'Register-Auszug zeigt vollständige Einträge für KI-relevante Services.',
        ],
      },
      {
        id: 'DORA_VERTRAG_MINDESTKLAUSELN',
        question:
          'Enthalten Drittanbieter-Verträge Mindestklauseln zu Sicherheit, Audit-Rechten und Vorfallmeldung?',
        todo:
          'Drittanbieter-Verträge um Mindestklauseln zu Sicherheit, Audit-/Prüfrechten und Vorfallmeldungen ergänzen und die Durchsetzbarkeit (Fristen/Geltungsbereich/Ansprechpartner) sicherstellen.',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Klauseln sollten praktisch durchsetzbar sein (Fristen, Ansprechpartner, Nachweispflichten, Audit-Umfang, Unterauftragnehmer-Regeln).',
        examples: [
          'Vertragsanhang regelt Audit-Rechte, Sicherheitsanforderungen und Meldefristen.',
          'Leistungsbeschreibung definiert Betriebs- und Sicherheitsleistungen.',
        ],
      },
      {
        id: 'DORA_AUSSTIEGSSTRATEGIE',
        canonicalId: 'DORA_AUSSTIEGSSTRATEGIE_MIGRATION_DATEN_RUECKGABE',
        question:
          'Gibt es eine dokumentierte Ausstiegsstrategie inklusive Datenrückgabe/-löschung und Übergangsplan?',
        todo:
          'Ausstiegsstrategie dokumentieren und testbar machen (Datenrückgabe/-löschung, Übergangsplan, Migration/Portabilität).',
        reference: 'DORA (2022), Art. 28–30',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Der Ausstieg sollte testbar sein (z. B. Migration/Portabilität) und einen „Plan B“ für kritische Ausfälle oder Anbieterwechsel beinhalten.',
        examples: [
          'Ausstiegsplan beschreibt Datenexportformat, Löschbestätigung und Übergangsfristen.',
          'Migrations-Betriebshandbuch enthält Schritte, Verantwortliche und Abhängigkeiten.',
        ],
      },
    ],
  },

  DORA_DRITTANBIETER_ERWEITERT: {
    label: 'DORA: (Pot.) kritischer IKT-Drittanbieter - Erweiterte Anforderungen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 31–44'],
    items: [
      {
        id: 'DORA_KONZENTRATIONSRISIKO',
        question:
          'Wurde das Konzentrationsrisiko (Single Point of Failure) für den Anbieter bewertet und dokumentiert?',
        todo:
          'Konzentrationsrisiko (Single Point of Failure) für den Anbieter bewerten, dokumentieren und eine Risikoentscheidung (inkl. Restrisiken/Auflagen) festhalten.',
        reference: 'DORA (2022), Art. 28–29 (i. V. m. Governance)',
        referenceUrl: DORA_LINKS.ART_29,
        info:
          'Konzentrationsrisiko umfasst technische, organisatorische und marktbezogene Abhängigkeiten (z. B. ein Cloud-Anbieter für mehrere kritische Services).',
        examples: [
          'Analyse zeigt Abhängigkeiten und Auswirkung.',
          'Risikoentscheidung dokumentiert akzeptierte Restrisiken und Auflagen.',
        ],
      },
      {
        id: 'DORA_KONZENTRATIONSRISIKO_MINDERUNG',
        question:
          'Gibt es eine dokumentierte Strategie zur Reduktion des Konzentrationsrisikos?',
        todo:
          'Strategie zur Reduktion des Konzentrationsrisikos definieren, dokumentieren und freigeben (z. B. Zweitanbieter, Ausstiegs-Optionen).',
        reference: 'DORA (2022), Art. 28–30',
        referenceUrl: DORA_LINKS.ART_29,
        info:
          'Strategie sollte konkrete Maßnahmen enthalten (z. B. Multi-Anbieter, Vertragsoptionen, standardisierte Schnittstellen).',
        examples: [
          'Multi-Anbieter-Strategie definiert Kriterien und Zielbild (z. B. mindestens zwei Anbieter).',
          'Management-Freigabe dokumentiert Budget, Zeitplan und Verantwortliche.',
        ],
      },
      {
        id: 'DORA_SUBDIENSTLEISTER',
        question:
          'Sind Subdienstleister identifiziert, vertraglich geregelt und werden sie risikobasiert überprüft?',
        todo:
          'Subdienstleister identifizieren, vertraglich regeln und risikobasiert regelmäßig überprüfen (inkl. Transparenz zu Zugriff/Standort/Wechseln).',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Wichtig ist Transparenz über Unterauftragnehmer und deren Zugriff auf Daten/Systeme sowie Wechsel- und Zustimmungspflichten.',
        examples: [
          'Subdienstleister-Liste nennt Leistungen, Standort/Region und Datenzugriff.',
          'Review dokumentiert Risikobewertung und ggf. Maßnahmen.',
        ],
      },
      {
        id: 'DORA_ANBIETER_UEBERWACHUNG',
        question:
          'Werden Anbieter anhand definierter KPIs/SLAs regelmäßig überwacht?',
        todo:
          'Anbieter regelmäßig anhand definierter KPIs/SLAs überwachen und Eskalation bei Schwellenwertverletzungen sicherstellen.',
        reference: 'DORA (2022), Art. 28–30',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Überwachung sollte sowohl Leistungs- als auch Sicherheitskennzahlen umfassen, inklusive Schwellenwerten und Eskalationsprozess.',
        examples: [
          'SLA-Report zeigt Verfügbarkeit und Reaktionszeiten.',
          'Sicherheitsbericht zeigt Update-/Schwachstellenstatus und Feststellungen.',
        ],
      },
      {
        id: 'DORA_AUFSICHTS_BEREITSCHAFT',
        question:
          'Sind interne Prozesse definiert, um Aufsichtsanforderungen zu kritischen IKT-Drittanbietern zu erfüllen?',
        todo:
          'Interne Prozesse für Aufsichtsanforderungen zu kritischen IKT-Drittanbietern definieren und umsetzen (Anfragen, Audits, Auskünfte, Fristen, Artefakte).',
        reference: 'DORA (2022), Art. 31–44',
        referenceUrl: DORA_LINKS.ART_31,
        info:
          'Es sollte klar sein, wer Anfragen koordiniert, welche Unterlagen vorzuhalten sind und wie Fristen/Schnittstellen gehandhabt werden.',
        examples: [
          'Prozessbeschreibung definiert Rollen, Freigaben und Ablageorte für Nachweise.',
          'Audit-Betriebshandbuch enthält Checkliste und Standardantworten/Artefakte.',
        ],
      },
    ],
  },

  DORA_KRITISCHE_IKT_DRITTANBIETER_AUFSICHTSREGIME: {
    label: 'DORA: Kritische IKT-Drittanbieter',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 31–44'],
    items: [
      {
        id: 'DORA_CTPP_STATUS_UEBERWACHUNG',
        canonicalId: 'DORA_CTPP_STATUS_UEBERWACHUNG',
        question:
          'Wird der Status des Dienstleisters als (potenziell) kritischer IKT-Drittanbieter fortlaufend überwacht und in Beschaffung/Outsourcing berücksichtigt?',
        todo:
          'Benennungsbewusstsein umsetzen: Anbieterstatus/Beobachtungsliste pflegen (inkl. Verantwortliche, Datenquellen, Review-Zyklus) und in Outsourcing-/Beschaffungs-Kontrollen verankern.',
        reference: 'DORA (2022), Art. 31–44',
        referenceUrl: DORA_LINKS.ART_31,
        info:
          'Ziel: nicht nur „kritisch ja/nein“, sondern laufend nachhalten, ob ein Anbieter als kritischer IKT-Drittanbieter benannt ist/werden könnte und welche internen Kontrollen dadurch ausgelöst werden.',
        examples: [
          'Regelmäßiger Review einer Anbieter-Beobachtungsliste durch Outsourcing/Risikomanagement.',
        ],
      },
      {
        id: 'DORA_CTPP_AUFSICHTS_INTERAKTION_BETRIEBSHANDBUCH',
        canonicalId: 'DORA_CTPP_AUFSICHTS_INTERAKTION_BETRIEBSHANDBUCH',
        question:
          'Gibt es ein Betriebshandbuch für Aufsichtsinteraktionen bei (kritischen) IKT-Drittanbietern?',
        todo:
          'Betriebshandbuch erstellen: Rollen/Ansprechpartner (inkl. Stellvertretung), Daten-/Dokumentenbereitstellung, interne Freigaben, Zeitvorgaben, Kommunikationskanäle; in Übungen validieren.',
        reference: 'DORA (2022), Art. 31–44',
        referenceUrl: DORA_LINKS.ART_31,
        info:
          'Damit vermeiden Sie Audit-Lücken: Anbieter ist kritisch (oder wird kritisch), aber Rollen, Fristen und Dokumentenwege sind nicht umgesetzt.',
        examples: [
          'Kontaktliste enthält interne Verantwortlicher plus externe Anbieter-Kontakte.',
          'Dokumentenliste: Verträge, DD-Reports, Ausstiegsplan, Konzentrationsanalyse, BCM-Mapping inkl. Ablageort.',
        ],
      },
    ],
  },

  DORA_DATENUEBERMITTLUNG_EXTERNE_KI_SCHUTZ: {
    label: 'DORA: Datenübermittlung an externe KI – Schutzmaßnahmen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16 (i. V. m. IKT-Kontrollen)'],
    items: [
      {
        id: 'DORA_DATENKLASSIFIKATION_UND_FREIGABE',
        question:
          'Gibt es eine Datenklassifizierung und eine dokumentierte Freigabe für die Übermittlung an externe KI-Dienste?',
        todo:
          'Datenklassifizierung anwenden und eine dokumentierte Freigabe für die Übermittlung an externe KI-Dienste einholen (Datenarten, Zweck, Empfänger, Schutzmaßnahmen, Kanäle).',
        reference: 'DORA (2022), Art. 6–9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Freigabe sollte Datenarten, Zweck, Empfänger, Schutzmaßnahmen und zulässige Übermittlungskanäle abdecken.',
        examples: [
          'Freigabeprotokoll nennt Klassifizierung (z. B. vertraulich) und erlaubte Kanäle.',
          'Richtlinie beschreibt, welche Daten niemals an externe KI übertragen werden.',
        ],
      },
      {
        id: 'DORA_VERSCHLUESSELUNG',
        question:
          'Werden Daten bei Übertragung und Speicherung für externe KI-Dienste verschlüsselt?',
        todo:
          'Verschlüsselung für Datenübertragung und Speicherung bei externen KI-Diensten umsetzen und dokumentieren (TLS, Verschlüsselung ruhender Daten, Schlüsselmanagement).',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Wichtig sind Transportverschlüsselung (TLS), Verschlüsselung ruhender Daten sowie geregeltes Schlüsselmanagement (Rotation/Zugriff).',
        examples: [
          'Architekturdiagramm zeigt TLS-Endpunkte und Verschlüsselung im Storage.',
          'Schlüsselmanagement-Dokumentation beschreibt Rotation und Rollenrechte.',
        ],
      },
      {
        id: 'DORA_PSEUDONYMISIERUNG',
        question:
          'Werden sensible Daten vor Übermittlung an externe KI-Dienste pseudonymisiert, sofern erforderlich?',
        todo:
          'Sensible Daten vor Übermittlung an externe KI-Dienste pseudonymisieren (sofern erforderlich) und die Umsetzung im Datenfluss dokumentieren.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Pseudonymisierung sollte nachvollziehbar sein (Mapping-/Schlüsselschutz) und im Datenfluss berücksichtigt werden.',
        examples: [
          'Datenflussdiagramm zeigt, wo Pseudonymisierung erfolgt und wo Klartext verhindert wird.',
          'Konzept beschreibt Mapping-/Schlüsselschutz und Zugriffskontrollen.',
        ],
      },
      {
        id: 'DORA_DLP_KONTROLLEN',
        question:
          'Sind Kontrollen zur Verhinderung von Datenverlust für relevante Kanäle aktiv, um Datenabfluss bei Nutzung externer KI zu verhindern?',
        todo:
          'Kontrollen zur Verhinderung von Datenverlust für relevante Kanäle aktivieren, testen und überwachen, um Datenabfluss bei Nutzung externer KI zu verhindern (inkl. Ausnahmen/Freigaben).',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Die Verhinderung von Datenverlust sollte insbesondere Upload-/Prompt-Kanäle, Exporte (E-Mail/Download/API) und Ausnahmen/Freigaben berücksichtigen.',
        examples: [
          'Regelsets blockieren/warnen bei sensiblen Datenmustern (z. B. IBAN, Kundendaten).',
          'Testprotokoll dokumentiert Wirksamkeit inkl. Faslch Positiv/Negativ.',
        ],
      },
      {
        id: 'DORA_VERTRAG_DATENLOKATION',
        question:
          'Ist Datenlokation oder Hostingregion für externe KI-Dienste vertraglich festgelegt?',
        todo:
          'Datenlokation/Hostingregion für externe KI-Dienste vertraglich festlegen und Änderungen zustimmungspflichtig regeln.',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Vertrag sollte Regionen klar benennen und Änderungen (z. B. neue Regionen) zustimmungspflichtig machen.',
        examples: [
          'Hosting-Nachtrag listet Regionen und Subdienstleister-Standorte.',
          'Vertrag enthält Änderungsklausel für Region.',
        ],
      },
      {
        id: 'DORA_VERTRAG_LOESCHUNG_RUECKGABE',
        question:
          'Sind Datenrückgabe und Löschung nach Vertragsende vertraglich geregelt?',
        todo:
          'Datenrückgabe und Löschung nach Vertragsende vertraglich regeln (Fristen, Nachweise/Löschbestätigung, Rückgabeformate) und ein Löschkonzept dokumentieren.',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Regelung sollte Fristen, Nachweise (Löschbestätigung) und Formate für Datenrückgabe umfassen.',
        examples: [
          'Vertrag beschreibt Löschfristen und verpflichtende Löschbestätigung.',
          'Löschkonzept beschreibt Datenklassen, Speicherorte und Verantwortliche.',
        ],
      },
      {
        id: 'DORA_VERTRAG_SUBPROZESSOREN',
        question:
          'Sind Subprozessoren transparent benannt und ist deren Einsatz vertraglich geregelt?',
        todo:
          'Subprozessoren transparent benennen und deren Einsatz vertraglich regeln (Informationsfristen, Zustimmung/Widerspruch, gleichwertige Sicherheitsstandards).',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Transparenz umfasst auch Änderungen (Wechsel/Neuaufnahme) und die Verpflichtung, gleichwertige Sicherheitsstandards sicherzustellen.',
        examples: [
          'Subprozessoren-Liste ist versioniert und wird bei Änderungen aktualisiert.',
          'Vertrag regelt Zustimmungs-/Widerspruchsrechte und Informationsfristen.',
        ],
      },
    ],
  },

  DORA_GENERATIVE_KI_LLM_ALS_DIENST_KONTROLLEN: {
    label: 'DORA: Generative KI/LLM als Dienst – Zusätzliche Kontrollen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 9', 'DORA (2022), Art. 28–30'],
    items: [
      {
        id: 'DORA_GENAI_DATENMINIMIERUNG_SCHWAERZUNG',
        question:
          'Werden Eingaben an den LLM-Dienst nach dem Prinzip der Datenminimierung gestaltet?',
        todo:
          'Datenminimierung und Schwärzung/Maskierung vor LLM-Aufrufen umsetzen und dokumentieren.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Ziel: keine unnötigen sensiblen Daten an externe Dienste für generative KI übertragen; Schwärzung/Maskierung muss technisch erzwungen und testbar sein.',
        examples: [
          'Maskierung personenbezogener Daten vor Prompt-Versand; Klartext ist in Protokollen/Exporten unterbunden.',
          'Positivliste: Nur definierte, freigegebene Felder dürfen in Prompts eingebracht werden.',
        ],
      },
      {
        id: 'DORA_GENAI_AUFBEWAHRUNG_UND_LOESCHUNG',
        question:
          'Sind Aufbewahrung und Löschung für Prompts/Antworten/Protokolle beim Anbieter und intern definiert und technisch umgesetzt?',
        todo:
          'Aufbewahrungs- und Löschkonzept für GenAI-Eingaben/Ausgaben festlegen und umsetzen: Aufbewahrungsfristen, Löschpfade, Zugriffsschutz, Nachweise/Löschbestätigungen.',
        reference: 'DORA (2022), Art. 9 i. V. m. Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Typische Audit-Fragen: „Wie lange existieren Prompts/Antworten? Wo und wer kann darauf zugreifen?“',
        examples: [
          'Anbieter-Einstellungen: keine/geringe Aufbewahrung bzw. definierte Aufbewahrung aktiviert und vertraglich fixiert.',
          'Interne Protokolle werden nach X Tagen automatisch gelöscht oder anonymisiert.',
        ],
      },
      {
        id: 'DORA_GENAI_Anbieter_ZUSICHERUNG_KEIN_TRAINING',
        question:
          'Sind vertragliche Zusicherungen vorhanden, dass Kundendaten/Prompts nicht zum Training oder zur Feinabstimmung verwendet werden?',
        todo:
          'Vertragliche Zusicherungen kein Training/keine Feinabstimmung mit Kundendaten sicherstellen und in Einkauf/Auslagerungssteuerung verankern.',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Gerade bei generativer KI ist kein Training mit Kundendaten ein zentraler Kontrollpunkt inkl. Subdienstleistern und Änderungen der Vertragsbedingungen.',
        examples: [
          'Vertragsanhang enthält kein Training plus Nachweispflichten; Änderungen sind zustimmungspflichtig.',
          'Subdienstleister sind transparent benannt; Wechsel löst eine Neubewertung aus.',
        ],
      },
      {
        id: 'DORA_GENAI_VERSIONIERUNG_UND_AENDERUNGSMITTEILUNGEN',
        question:
          'Ist Modell-/Endpunkt-Versionierung geregelt und gibt es einen Prozess für Änderungen des Anbieters',
        todo:
          'Versionierung und Änderungsmanagement für LLM-Anbieter etablieren: feste Modell-IDs/Endpunkte, Überwachung von Änderungsmitteilungen, Auswirkungsanalyse, Wiederholungstests, Freigabe-Gate, Rücksetz-/Rollback-Optionen.',
        reference: 'DORA (2022), Art. 9 i. V. m. Art. 28–29',
        referenceUrl: DORA_LINKS.ART_29,
        info:
          'LLM-Anbieter ändern Modelle häufig. Ohne Versionierung/Änderungsprozess entstehen stille Risikoänderungen.',
        examples: [
          'Nur Nutzung expliziter Modellversionen; automatische Upgrades sind verboten oder freigabepflichtig.',
          'Änderungsmitteilung triggert Regressionstests und Risiko-Review vor Umschaltung.',
        ],
      },
      {
        id: 'DORA_GENAI_PROMPT_ANTWORT_PROTOKOLLIERUNG',
        question:
          'Ist die Protokollierung von Prompts/Antworten risikobasiert geregelt und auditfähig umgesetzt?',
        todo:
          'Protokollierungskonzept für generative KI definieren: wann wird protokolliert, welche Felder (maskiert), Zugriffskontrollen, Aufbewahrung, SIEM-Überwachung, Nachweisbarkeit für Vorfälle.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Zielkonflikt: genug Protokollierung für Audit/Vorfälle, aber datensparsam. Lösung: Metadaten plus selektive, maskierte Nutzdaten-Protokollierung.',
        examples: [
          'Standard: nur Metadaten (Request-ID, Modellversion, Token-Anzahl, Richtlinien-ID); Nutzdaten nur nach Debug-/Fehleranalyse-Freigabe.',
          'Zugriff auf Protokolle ist restriktiv und wird protokolliert.',
        ],
      },
      {
        id: 'DORA_GENAI_SICHERHEITSFILTER_UND_RICHTLINIENDURCHSETZUNG',
        question:
          'Sind Sicherheitsfilter und Richtliniendurchsetzung umgesetzt und werden sie getestet?',
        todo:
          'Sicherheitskontrollen implementieren: Eingabevalidierung, Prompt-Injection-Abwehr, Richtlinienprüfungen, regelmäßige Tests und Nachverfolgung von Feststellungen.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Generative KI bringt neue Angriffsflächen. Ohne Leitplanken entstehen Sicherheits- und Compliance-Risiken.',
        examples: [
          'System-Prompt ist geschützt; Tool-Aufrufe sind auf erlaubte Tools beschränkt; Outputs werden gegen Richtlinien geprüft.',
        ],
      },
      {
        id: 'DORA_GENAI_MISSBRAUCHSPRAEVENTION_RATENBEGRENZUNG',
        question:
          'Sind Maßnahmen zur Missbrauchsprävention umgesetzt?',
        todo:
          'Missbrauchsprävention umsetzen: Ratenbegrenzung/Kontingente, Anomalieerkennung, Authentifizierung/Autorisierung je Nutzer/Rolle, Missbrauchsprozesse, Alarmierung und Nachweiskette.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Schützt vor Prompt-Stuffing, Datenabfluss, Kostenexplosion und unerlaubter Nutzung.',
        examples: [
          'Kontingente pro Nutzer/Rolle; Anomaliealarme bei ungewöhnlichen Promptmustern oder Datenvolumen.',
          'Missbrauchsprozess enthält Sperrung, Forensik, Kommunikation und Lessons Learned/Lerneffekte.',
        ],
      },
    ],
  },

  DORA_MODELLBETRIEB_UEBERWACHUNG: {
    label: 'DORA: Modellbetrieb – Überwachung, Änderungsmanagement und Kontrollen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16'],
    items: [
      {
        id: 'DORA_MODELLAENDERUNG_Auswirkung',
        question:
          'Gibt es einen dokumentierten Änderungsprozess, der Modelländerungen nur nach Risiko- und Auswirkungsanalyse freigibt?',
        todo:
          'Änderungsprozess für Modelländerungen etablieren und dokumentieren, der Freigaben nur nach Risiko- und Auswirkungsanalyse erlaubt.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Der Prozess sollte Auslöser definieren (z. B. Neutraining/Feinabstimmung, neue Features, neue Datenquelle) und Re-Tests/Überwachungsauflagen enthalten.',
        examples: [
          'Auswirkungsanalyse bewertet Sicherheits-, Resilienz- und Compliance-Auswirkungen.',
          'Freigabeprotokoll verlinkt auf Tests, Überwachung und Rücksetzungsplan.',
        ],
      },
      {
        id: 'DORA_UEBERWACHUNG_LEISTUNG',
        question:
          'Werden Leistungskennzahlen des Modells im Betrieb überwacht und gibt es definierte Schwellenwerte für Eskalation?',
        todo:
          'Leistungskennzahlen im Betrieb überwachen und Schwellenwerte inkl. Eskalations- und Reaktionsprozess definieren (inkl. Rückfall/Degradationsmodus).',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Definieren Sie Metriken, Schwellenwerte, Verantwortliche und Reaktionszeiten (inkl. Rückfall/Degradationsmodus).',
        examples: [
          'Dashboard zeigt Metriken (z. B. Fehlerquote, Latenz, Abbruchrate) mit Schwellenwerten.',
          'Alarmregeln eskalieren an Rufbereitschaft und Verantwortlicher.',
        ],
      },
      {
        id: 'DORA_UEBERWACHUNG_DRIFT',
        question:
          'Wird Modelländerung überwacht und sind Maßnahmen bei Überschreitung von Schwellenwerten definiert?',
        todo:
          'Modelländerung überwachen sowie Maßnahmen bei Schwellenwertüberschreitung definieren und umsetzen (Warnung, Analyse, Mitigation, Rücksetzung/Neutraining).',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Änderungsüberwachung sollte sowohl Datenverteilung als auch Modellleistung berücksichtigen; Maßnahmen reichen von Warnung bis Rücksetzung/Neutraining.',
        examples: [
          'Änderungs-Bericht zeigt Verteilungsänderungen und betroffene Features.',
          'Betriebshandbuch beschreibt Schritte bei Änderung (Analyse, Mitigation, Neutraining, Freigabe).',
        ],
      },
      {
        id: 'DORA_UEBERWACHUNG_SICHERHEIT',
        question:
          'Gibt es Sicherheitsüberwachung für KI-relevante Komponenten?',
        todo:
          'Sicherheitsüberwachung für KI-relevante Komponenten einrichten und betreiben (APIs, Modellendpunkte, Datenzugriffe, Secrets) inkl. Alarmierung und Nachverfolgung.',
        reference: 'DORA (2022), Art. 10',
        referenceUrl: DORA_LINKS.ART_10,
        info:
          'Sicherheitsüberwachung sollte relevante Angriffsflächen abdecken (APIs, Modellendpunkte, Datenzugriffe, Secrets) und nachvollziehbar auswertbar sein.',
        examples: [
          'SIEM-Anwendungsfälle erkennt untypische Zugriffsmuster auf Modellendpunkte.',
          'Alarmierung löst Tickets aus und dokumentiert Bearbeitung/Abschluss.',
        ],
      },
      {
        id: 'DORA_BETRIEBSHANDBUCH_MODELLVORFAELLE',
        question:
          'Gibt es Notbetriebshandbücher für Modellfehler inklusive Eskalationskette?',
        todo:
          'Notbetriebshandbücher für Modellfehler erstellen, testen und pflegen (Diagnose, Abschalten/Rückfall/Rücksetzung) inkl. klarer Eskalationskette und Entscheidungsbefugnissen.',
        reference: 'DORA (2022), Art. 17',
        referenceUrl: DORA_LINKS.ART_17,
        info:
          'Notbetriebshandbücher sollten klare Diagnose- und Entscheidungswege haben (z. B. Abschalten, Rückfall, Rücksetzung) und Verantwortlichkeiten je Stufe.',
        examples: [
          'Betriebshandbuch enthält Checkliste: Symptome, Ursachen, Maßnahmen, Kommunikationsvorlage.',
          'Eskalationsmatrix benennt Level 1/2/3 und Entscheidungsbefugnisse.',
        ],
      },
      {
        id: 'DORA_BETRIEBSHANDBUCH_CYBER_IKT_VORFAELLE',
        question:
          'Gibt es Notbetriebshandbücher für Cyber- und IKT-Vorfälle in den KI-Komponenten inklusive Eskalationskette?',
        todo:
          'Notbetriebshandbücher für Cyber- und IKT-Vorfälle in KI-Komponenten erstellen, üben und pflegen (Erkennung, Eindämmung, Wiederherstellung, Kommunikation/Meldepflichten).',
        reference: 'DORA (2022), Art. 17',
        referenceUrl: DORA_LINKS.ART_17,
        info:
          'Cyber-Notbetriebshandbücher sollten Erkennung, Eindämmung, Wiederherstellung sowie Kommunikations- und Meldepflichten berücksichtigen.',
        examples: [
          'Betriebshandbuch beschreibt Eindämmung, Forensik, Wiederanlauf und Lessons Learned.',
          'Übungen sind dokumentiert, Feststellungen werden nachverfolgt.',
        ],
      },
    ],
  },

  DORA_KOMMUNIKATIONSPLAENE: {
    label: 'DORA: Kommunikation',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 14; Art. 17'],
    items: [
      {
        id: 'DORA_KOMM_PLAN',
        canonicalId: 'DORA_KOMM_PLAN',
        question:
          'Gibt es einen Kommunikationsplan für schwerwiegende IKT-Vorfälle/Schwachstellen?',
        todo:
          'Kommunikationsplan erstellen/aktualisieren: Schweregrade, Auslöser, Freigabeprozess, Kundeninformation, verantwortungsbewusste Offenlegung gegenüber Öffentlichkeit/anderen Finanzunternehmen; inkl. Kontaktlisten und Eskalationswegen.',
        reference: 'DORA (2022), Art. 14',
        referenceUrl: DORA_LINKS.ART_14,
        info:
          'Der Plan muss Auslöser, Freigaben, Zielgruppen, Inhalte und Kanäle je Schweregrad nachvollziehbar festlegen.',
        examples: [
          'Definierte Kriterien: wann Kunden aktiv informiert werden (z. B. Serviceausfall > X, Datenabfluss).',
          'Freigabekette ist dokumentiert.',
        ],
      },
      {
        id: 'DORA_KOMM_STRATEGIE',
        canonicalId: 'DORA_KOMM_STRATEGIE',
        question:
          'Gibt es eine Kommunikationsstrategie für interne Mitarbeitende und externe Stakeholder?',
        todo:
          'Kommunikationsstrategie umsetzen: interne/externe Zielgruppen definieren, Rollen und Verantwortlichkeiten festlegen, Informationskanäle und Inhalte je Zielgruppe standardisieren.',
        reference: 'DORA (2022), Art. 14',
        referenceUrl: DORA_LINKS.ART_14,
        info:
          'Die Strategie muss Zielgruppen, Rollen, Kanäle sowie Mindestinhalte pro Lagebild definieren und versioniert pflegen.',
        examples: [
          'Externe Stakeholder: Kunden, Partner, Aufsicht, Medien, Dienstleister.',
        ],
      },
      {
        id: 'DORA_KOMM_ANSPRECHPERSON',
        canonicalId: 'DORA_KOMM_ANSPRECHPERSON',
        question:
          'Ist mindestens eine verantwortliche Person für die Umsetzung der Kommunikationsstrategie benannt?',
        todo:
          'Kommunikationsverantwortung festlegen: benannte Rolle/Person (inkl. Stellvertretung) für externe Kommunikation/Medien, eingebettet in Vorfalls- und Krisenorganisation.',
        reference: 'DORA (2022), Art. 14',
        referenceUrl: DORA_LINKS.ART_14,
        info:
          'Benennung muss Rolle, Stellvertretung, Erreichbarkeit und Freigabebefugnisse eindeutig dokumentieren.',
        examples: [
          'Krisensprecher:in plus Stellvertretung benannt und erreichbar.'
        ],
      },
      {
        id: 'DORA_KOMM_VORLAGEN',
        canonicalId: 'DORA_KOMM_VORLAGEN',
        question:
          'Gibt es vorgefertigte Kommunikationsbausteine/Vorlagen und sind diese getestet/geübt?',
        todo:
          'Vorlagen erstellen und üben: Kundenbenachrichtigung, Statusseiten-Update, interne Lageupdates, FAQ',
        reference: 'DORA (2022), Art. 14 i. V. m. Art. 17',
        referenceUrl: DORA_LINKS.ART_14,
        info:
          'Vorlagen müssen freigegeben, aktuell und in Übungen erprobt sein (inkl. Nachweis der Freigabekette).',
        examples: [
          'Übung „Cloud-Ausfall“: Kommunikationskette und Freigaben wurden durchlaufen.',
        ],
      },
    ],
  },

  DORA_VEREINFACHTE_BASIS: {
    label: 'DORA: Vereinfachter IKT-Risikomanagementrahmen (Art. 16) – Minimalanforderungen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 16'],
    items: [
      {
        id: 'DORA_ART16_EIGNUNG_DOKU',
        canonicalId: 'DORA_ART16_EIGNUNG_DOKU',
        question:
          'Ist die Anwendbarkeit von Art. 16 (Geltungsbereich/Eignung) nachvollziehbar begründet und dokumentiert?',
        todo:
          'Art.-16-Eignung dokumentieren: Unternehmenstyp/Geltungsbereich prüfen, Begründung festhalten, Entscheidung versionieren (inkl. Verantwortlicher/Datum).',
        reference: 'DORA (2022), Art. 16',
        referenceUrl: DORA_LINKS.ART_16,
        info:
          'Die Dokumentation muss Geltungsbereich, Kriterien und Entscheidung (inkl. Datum/Verantwortlicher) eindeutig nachweisen.',
        examples: [
          'Entscheidungsvorlage enthält Geltungsbereich, Begründung, Datum und Verantwortliche.',
          'Richtlinienauszug referenziert die Anwendung des vereinfachten Rahmens.',
        ],
      },
      {
        id: 'DORA_ART16_RMF_MINDESTUMFANG',
        canonicalId: 'DORA_ART16_RMF_MINDESTUMFANG',
        question:
          'Ist ein vereinfachter IKT-RMF (Rollen, Richtlinien, Mindestkontrollen) definiert und im Betrieb verankert?',
        todo:
          'Vereinfachten IKT-RMF definieren: Rollen/Verantwortlichkeiten, Richtlinien/Standards, Mindestkontrollen und Betriebsprozesse festlegen.',
        reference: 'DORA (2022), Art. 16',
        referenceUrl: DORA_LINKS.ART_16,
        info:
          'Der Mindestumfang muss Rollen, Richtlinien, Kontrollen und Betriebsprozesse abdecken und versioniert gepflegt werden.',
        examples: [
          'RMF-Dokument referenziert Rollen/RACI und Mindestkontrollen.',
          'Kontrollkatalog ist abgestimmt und im Betrieb verankert.',
        ],
      },
      {
        id: 'DORA_ART16_DIG_RESILIENZ_STRATEGIE',
        canonicalId: 'DORA_GOV_DIG_RESILIENZ_STRATEGIE',
        question:
          'Ist der Einsatz der KI mit der digitalen operationalen Resilienzstrategie abgestimmt und vom Leitungsorgan genehmigt bzw. regelmäßig überprüft?',
        todo:
          'Nachweisen, dass der KI-Einsatz in der digitalen operationalen Resilienzstrategie berücksichtigt ist und dass Genehmigung bzw. regelmäßiger Review durch das Leitungsorgan dokumentiert ist.',        reference: 'DORA (2022), Art. 5 i. V. m. Art. 6',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Auch bei Art. 16 sollte das Leitungsorgan die strategische Ausrichtung zur operativen Resilienz nachvollziehbar genehmigen/überprüfen.',
        examples: [
          'Kurzstrategie ist versioniert; Genehmigung/Review ist protokolliert.',
        ],
      },
      {
        id: 'DORA_ART16_IKT_AUDITPLAN',
        canonicalId: 'DORA_GOV_IKT_AUDITPLAN',
        question:
          'Gibt es einen IKT-Audit-/Prüfplan mit Genehmigung durch das Leitungsorgan und dokumentierter Nachverfolgung?',
        todo:
          'Minimalen Audit-/Prüfplan festlegen, genehmigen lassen und Nachverfolgung der Festtellungen/Maßnahmen nachweisen (Owner/Frist/Wirkung).',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Minimalanforderung = planbar + nachvollziehbar: Prüfungen sind terminiert, dokumentiert und führen zu nachverfolgten Maßnahmen.',
        examples: [
          'Jährlicher Review des RMF + dokumentierte Stichprobenprüfungen im Jahr.',
        ],
      },    
      {
        id: 'DORA_ART16_UEBERWACHUNG',
        canonicalId: 'DORA_ART16_UEBERWACHUNG',
        question:
          'Gibt es fortlaufende Überwachung der IKT-Risiken und einen Review-Zyklus?',
        todo:
          'Überwachung und Review-Zyklus definieren: KPIs/KRIs, regelmäßige Reviews, änderungsgetriebene Neubewertungen, Feststellungen-Tracking.',
        reference: 'DORA (2022), Art. 16',
        referenceUrl: DORA_LINKS.ART_16,
        info:
          'Review-Zyklus muss Frequenz, Verantwortliche, Inputs (KPIs/KRIs) und Nachverfolgung von Feststellungen festlegen.',
        examples: [
          'Review-Protokoll enthält KPI/KRI-Status und Entscheidungen.',
          'Backlog dokumentiert Feststellungen mit Verantwortlicher, Frist und Status.',
        ],
      },
      {
        id: 'DORA_ART16_CIA_SCHUTZ',
        canonicalId: 'DORA_ART16_CIA_SCHUTZ',
        question:
          'Sind Mindestmaßnahmen zum Schutz von Vertraulichkeit/Integrität/Verfügbarkeit umgesetzt?',
        todo:
          'Mindestmaßnahmen umsetzen: Zugriffssteuerung (minimale Rechte), Protokollierung, Backup/Wiederherstellung.',
        reference: 'DORA (2022), Art. 16',
        referenceUrl: DORA_LINKS.ART_16,
        info:
          'Mindestmaßnahmen müssen umgesetzt und auditfähig nachweisbar sein (Konfiguration, Aufbewahrung, Wiederherstellungstests).',
        examples: [
          'IAM-Konzept zeigt Rollen, Rezertifizierung und Trennung von Aufgaben.',
          'Backup-Plan enthält Wiederherstellungstests und dokumentierte Ergebnisse.',
        ],
      },
      {
        id: 'DORA_ART16_VORFALLBEHANDLUNG',
        canonicalId: 'DORA_ART16_VORFALLBEHANDLUNG',
        question:
          'Ist ein minimaler Vorfallprozess inkl. Eskalation/Notbetriebshandbuch/Verantwortlichkeiten definiert?',
        todo:
          'Minimalen Vorfallprozess definieren: Schweregrade/Eskalation, Notbetriebshandbücher, Rollen, Lessons Learned und Nachverfolgung.',
        reference: 'DORA (2022), Art. 16',
        referenceUrl: DORA_LINKS.ART_16,
        info:
          'Der Prozess muss Schweregrade, Eskalation, Zuständigkeiten und Nachweise je Vorfall festlegen.',
        examples: [
          'Eskalationsmatrix benennt Verantwortliche und Reaktionszeiten.',
        ],
      },
    ],
  },

  DORA_VORFALLMANAGEMENT: {
    label: 'DORA: IKT-Vorfallmanagement & Meldeprozesse',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 17–23'],
    items: [
      {
        id: 'DORA_VORFALL_PROZESS',
        question:
          'Gibt es einen dokumentierten Prozess zur Erfassung, Klassifikation und Bearbeitung von IKT-Vorfällen?',
        todo:
          'Prozess zur Erfassung, Klassifikation und Bearbeitung von IKT-Vorfällen definieren, dokumentieren und in den Betrieb integrieren (inkl. KI-spezifischer Vorfälle).',
        reference: 'DORA (2022), Art. 17',
        referenceUrl: DORA_LINKS.ART_17,
        info:
          'Der Prozess sollte auch KI-spezifische Vorfälle berücksichtigen (z. B. systematische Fehlentscheidungen, Modellveränderungen, Datenqualitätsvorfälle). ' +
          'Art. 17 verweist auf Kommunikationspläne nach Art. 14',
        examples: [
          'Ticket-Workflow enthält Kategorien/Schweregrade und SLA-Reaktionszeiten.',
          'Rollen sind definiert (Verantwortlicher, IT-Sicherheit, Kommunikation).',
        ],
      },
      {
        id: 'DORA_VORFALL_SCHWELLENWERTE',
        question:
          'Sind Kriterien und Schwellenwerte für meldepflichtige IKT-Vorfälle dokumentiert und verbindlich kommuniziert?',
        todo:
          'Kriterien und Schwellenwerte für meldepflichtige IKT-Vorfälle festlegen, dokumentieren und verbindlich an relevante Teams kommunizieren.',
        reference: 'DORA (2022), Art. 18–19',
        referenceUrl: DORA_LINKS.ART_18,
        info:
          'Schwellenwerte sollten konkret und operationalisiert sein (z. B. Nutzerauswirkung, Dauer, Datenverlust, kritische Services).',
        examples: [
          'Richtlinie enthält Entscheidungsmatrix (Schweregrad/Materialität).',
          'Schulungsnachweis zeigt, dass relevante Teams die Kriterien kennen.',
        ],
      },
      {
        id: 'DORA_VORFALL_MELDUNG_AUFSICHT',
        question:
          'Gibt es einen dokumentierten Meldeprozess an die zuständige Aufsicht inklusive Fristen, Rollen und Vorlagen?',
        todo:
          'Meldeprozess an die zuständige Aufsicht dokumentieren und umsetzen (Fristen, Rollen, Vorlagen, Freigaben, Informationsquellen).',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_19,
        info:
          'Prozess sollte Verantwortlichkeiten (wer meldet?), Fristen und Informationsquellen für die Meldung klar definieren.',
        examples: [
          'Vorlagen enthalten Mindestinformationen und Ansprechpartner.',
          'RACI definiert Freigabe durch Compliance vor Versand.',
        ],
      },
      {
        id: 'DORA_VORFALL_MELDEVORLAGEN_VERSIONIERUNG',
        canonicalId: 'DORA_VORFALL_MELDEVORLAGEN_VERSIONIERUNG',
        question:
          'Sind Meldevorlagen gepflegt und versioniert, sodass stets die aktuellen Inhalte genutzt werden?',
        todo:
          'Meldevorlagen etablieren und governancefähig machen: Verantwortlicher, Freigabeprozess, Versionierung/Änderungsprotokoll, Ablageort, regelmäßige Reviews; ' +
          'Sicherstellen, dass Vorfall- und Aufsichtsmeldungen konsistent die geforderten Datenfelder abdecken.',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_19,
        info:
          'Audit-Falle: Vorlage existiert, ist aber veraltet/ungeprüft. Hier geht es explizit um Version-Governance und Nachvollziehbarkeit.',
        examples: [
          'Vorlagen liegen zentral (z. B. im Sharepoint) inkl. Versionsnummer.',
          'Änderungen sind freigegeben und nachvollziehbar.',
        ],
      },
      {
        id: 'DORA_VORFALL_MELDEFRISTEN_PHASEN',
        canonicalId: 'DORA_VORFALL_MELDEFRISTEN_PHASEN',
        question:
          'Sind Meldefristen als Phasen (Erst-/Zwischen-/Abschlussmeldung) umgesetzt?',
        todo:
          'Fristen umsetzen: Definition der Phasen (Erst-/Zwischen-/Abschlussmeldung), Auslöser je Phase, interne Timer/SLA, Verantwortlichkeiten und Eskalation; ' +
          'Betriebshandbuch so gestalten, dass bekannte/noch unbekannte Informationen sauber getrennt und nachgereicht werden können.',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_20,
        info:
          'Die häufigste Lücke ist nicht keine Meldung, sondern Fristen/Phasen nicht beherrscht (wer liefert wann welche Inhalte).',
        examples: [
          'Betriebshandbuch enthält Checkliste: Inhalte Erstmeldung vs. Zwischenmeldung vs. Abschluss.',
          'Eskalation, wenn Informationen nicht rechtzeitig vorliegen.',
        ],
      },
      {
        id: 'DORA_VORFALL_NACHBEREITUNG',
        canonicalId: 'DORA_VORFALL_NACHBEREITUNG',
        question:
          'Werden schwerwiegende IKT-Vorfälle mit Abschlussbericht, Ursachenanalyse und Maßnahmenplan dokumentiert?',
        todo:
          'Für schwerwiegende IKT-Vorfälle Nachbereitungen durchführen und dokumentieren (Abschlussbericht, Ursachenanalyse, Maßnahmenplan inkl. Verantwortlicher/Frist/Wirksamkeitsprüfung).',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_20,
        info:
          'Nachbereitungen sollten messbare Maßnahmen enthalten (Verantwortlicher, Frist, Erfolgskriterium) und Rückkopplung in Kontrollen/Überwachung sicherstellen.',
        examples: [
          'Abschlussbericht enthält Timeline, Grundursache, Auswirkung und Lessons Learned.',
          'Maßnahmen-Tracker dokumentiert Umsetzung und Wirksamkeitsprüfung.',
        ],
      },
    ],
  },

  DORA_MELDUNG_ERHEBLICHER_CYBERBEDROHUNGEN: {
    label: 'DORA: (Freiwillige) Meldung erheblicher Cyberbedrohungen',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 19–20'],
    items: [
      {
        id: 'DORA_BEDROHUNGSMELDUNG_KRITERIEN',
        canonicalId: 'DORA_BEDROHUNGSMELDUNG_KRITERIEN',
        question:
          'Sind Kriterien definiert, wann eine erhebliche Cyberbedrohung (ohne eingetretenen Vorfall) gemeldet wird?',
        todo:
          'Kriterien/Schwellen für (freiwillige) Bedrohungsmeldungen definieren: Bedrohungskategorien, Relevanzkriterien, Abgrenzung zum Vorfall; ' +
          'Entscheidungsmatrix dokumentieren und den relevanten Teams kommunizieren.',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_19,
        info:
          'Ziel: Cyber-Bedrohungsaufklärung und Vorwarnungen governancefähig machen und nicht jeden Kompromittierungsindikator melden, sondern nachvollziehbar entscheiden.',
        examples: [
          'Kriterien: hohe Wahrscheinlichkeit plus hohe Auswirkung plus potenziell sektorweite Relevanz.',
        ],
      },
      {
        id: 'DORA_BEDROHUNGSMELDUNG_PROZESS',
        canonicalId: 'DORA_BEDROHUNGSMELDUNG_PROZESS',
        question:
          'Gibt es einen dokumentierten Prozess für Bedrohungsmeldungen?',
        todo:
          'Prozess für Bedrohungsmeldungen dokumentieren: Rollen (Vorfallsmanager, Compliance), Freigaben, Meldekanal, ' +
          'Inhaltsminimum, Vertraulichkeitsprüfung und Abstimmung mit parallel laufenden Behördenprozessen.',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_19,
        info:
          'Der Prozess muss Rollen, Freigaben, Kanal/Format, Dokumentation und Nachverfolgung eindeutig festlegen.',
        examples: [
          'Betriebshandbuch enthält Go/No-Go-Gate plus Freigabe durch Compliance.',
          'Klarer Kanal/Format (wer sendet, wer empfängt, wie wird dokumentiert).',
        ],
      },
      {
        id: 'DORA_BEDROHUNGSMELDUNG_NACHWEISE',
        canonicalId: 'DORA_BEDROHUNGSMELDUNG_NACHWEISE',
        question:
          'Werden Entscheidungen und Meldungen zu Cyberbedrohungen nachvollziehbar dokumentiert?',
        todo:
          'Nachweisführung etablieren: Entscheidungsprotokoll inkl. Begründung, Zeitpunkt, Inhalt, Freigaben; Rückmeldungen/Nachverfolgung dokumentieren; ' +
          'Lessons Learned in Bedrohungs- und Vorfallprozesse zurückspielen.',
        reference: 'DORA (2022), Art. 19–20',
        referenceUrl: DORA_LINKS.ART_19,
        info:
          'Auditfähig ist die Dokumentation nur, wenn auch Nicht-Meldungen und deren Begründung nachvollziehbar erfasst sind.',
        examples: [
          'Entscheidungsprotokoll zeigt auch Fälle, in denen bewusst nicht gemeldet wurde (mit Begründung).',
        ],
      },
    ],
  },

  DORA_TESTPROGRAMM: {
    label: 'DORA: IKT-Testprogramm (ohne TLPT)',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 24–25'],
    items: [
      {
        id: 'DORA_TESTPLAN',
        question:
          'Gibt es ein dokumentiertes IKT-Testprogramm?',
        todo:
          'Testprogramm definieren: Testarten-Mix (z. B. Schwachstellenmanagement/Penetrationstests, Szenario-Tests), Frequenzen, Rollen, Unabhängigkeit/Kompetenz und Abhilfemaßnahmen-Governance festlegen.',
        reference: 'DORA (2022), Art. 24–25',
        referenceUrl: DORA_LINKS.ART_24,
        info:
          'Auditfähig = Plan -> Durchführung -> Feststellungen -> Abhilfemaßnahmen -> Wirksamkeitsprüfung (geschlossene Nachweiskette).',
        examples: [
          'Testkalender ist abgestimmt, versioniert und wird eingehalten.',
          'Testarten decken relevante Komponenten ab (Modell, Datenpipeline, Infrastruktur/Cloud).',
        ],
      },
      {
        id: 'DORA_TESTUMFANG_ABHAENGIGKEITEN',
        question:
          'Deckt der Testumfang auch kritische Abhängigkeiten und Schnittstellen (inkl. IKT-Drittanbieter) ab?',
        todo:
          'Testumfang so festlegen, dass Drittanbieter-Schnittstellen und kritische Abhängigkeiten einbezogen sind (vertragliche Mitwirkung, Geltungsbereich, Berichtserhalt).',
        reference: 'DORA (2022), Art. 25',
        referenceUrl: DORA_LINKS.ART_25,
        info:
          'Der Geltungsbereich muss Schnittstellen, Abhängigkeiten und Mitwirkung von Drittanbietern nachvollziehbar regeln.',
        examples: [
          'Test-Geltungsbereich benennt Drittanbieter-Schnittstellen und kritische Pfade.',
          'Vertragsklauseln regeln Berichtserhalt und Mitwirkungspflichten.',
        ],
      },
      {
        id: 'DORA_FESTSTELLUNGEN_NACHVERFOLGUNG',
        question:
          'Gibt es einen Prozess, der Test-Feststellungen priorisiert, Maßnahmen zuweist und fristgerecht nachverfolgt?',
        todo:
          'Prozess zur Priorisierung, Zuweisung und fristgerechten Nachverfolgung von Feststellungen etablieren (Schweregrad, Verantwortlicher, Fristen, Wirksamkeitsprüfung).',
        reference: 'DORA (2022), Art. 25',
        referenceUrl: DORA_LINKS.ART_25,
        info:
        'Governance-Hinweis: Feststellungen sind regelmäßig zu reviewen, bei Fristüberschreitungen zu eskalieren und nach Umsetzung ist die Wirksamkeit der Maßnahme zu belegen.',
        examples: [
          'Feststellungen-Tracker enthält Schweregrad, Verantwortlicher, Fälligkeit und Status.',
          'Statusreport wird regelmäßig im Gremium reviewed und eskaliert bei Verzug.',
        ],
      },
    ],
  },

  DORA_TLPT: {
    label: 'DORA: TLPT (Threat-Led Penetration Testing)',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 26–27'],
    items: [
      {
        id: 'DORA_TLPT_SCOPE_PRUEFUNG',
        question:
          'Wurde geprüft und dokumentiert, ob das KI-System bzw. seine Infrastruktur in den TLPT-Geltungsbereich fällt?',
        todo:
          'TLPT-Geltungsbereich prüfen und dokumentieren: Systemgrenzen, kritische Pfade, Abhängigkeiten (inkl. IKT-Drittanbieter) und Kriterien/Begründung festhalten.',
        reference: 'DORA (2022), Art. 26–27',
        referenceUrl: DORA_LINKS.ART_26,
        info:
          'TLPT ist institutsspezifisch. Entscheidend ist die dokumentierte Geltungsbereich-/Pfad-Definition und die Nachvollziehbarkeit der Begründung.',
        examples: [
          'Geltungsbereich wird durch Risikomanagement/BCM/IT abgestimmt und versioniert abgelegt.',
          'Abhängigkeiten zu kritischen IKT-Drittanbietern sind im Geltungsbereich berücksichtigt.',
        ],
      },
    ],
  },

  DORA_DRITTANBIETER_SORGFALTSPRUEFUNG: {
    label: 'DORA: Drittanbieter – Sorgfaltsprüfung, Verträge und Überwachung',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 28–30, 31–44'],
    items: [
      {
        id: 'DORA_SORGFALTSPRUEFUNG_MINDESTUMFANG',
        question:
          'Umfasst die Sorgfaltsprüfung mindestens Sicherheit, Resilienz, Subdienstleister und Datenverarbeitung und ist sie dokumentiert?',
        todo:
          'Sorgfaltsprüfung risikobasiert durchführen und dokumentieren (Sicherheit, Resilienz, Subdienstleister, Datenverarbeitung, Abhängigkeiten).',
        reference: 'DORA (2022), Art. 28–29',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Eine Sorgfaltsprüfung ist die strukturierte, dokumentierte Vorab- und Regelprüfung eines IKT-Dienstleisters, um dessen Eignung und die relevanten Risiken für Ihr Unternehmen zu bewerten.',
        examples: [
          'Sorgfaltspflicht-Report bewertet Sicherheit/Resilienz, Subdienstleister und Datenzugriff.',
          'Risikoentscheidung dokumentiert akzeptierte Risiken und Auflagen.',
        ],
      },
      {
        id: 'DORA_VERTRAG_AUDIT_RECHTE',
        canonicalId: 'DORA_VERTRAG_AUDIT_UND_ZUGRIFFSRECHTE',
        question:
          'Sind Audit- und Prüfrechte gegenüber dem Anbieter vertraglich geregelt?',
        todo:
          'Audit- und Prüfrechte vertraglich regeln (inkl. Unterauftragnehmer) und klare Nachweispflichten, Fristen, Geltungsbereich und Abhilfemaßnahmen festlegen.',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Audit-Rechte sollten auch Unterauftragnehmer einschließen und klare Nachweispflichten/Fristen definieren.',
        examples: [
          'Vertrag regelt Geltungsbereich, Vorankündigung, Berichtserhalt und Abhilfemaßnahmen.',
          'Klausel umfasst Zugriff auf relevante Nachweise (z. B. Reports, Logs, Richtlinien).',
        ],
      },
      {
        id: 'DORA_VERTRAG_SICHERHEIT_SLA',
        question:
          'Sind Sicherheitsanforderungen vertraglich geregelt?',
        todo:
          'Messbare Sicherheitsanforderungen vertraglich festlegen (KPIs/SLAs, Schwellenwerte, Reporting-Frequenz, Eskalation) und deren Überprüfbarkeit sicherstellen.',
        reference: 'DORA (2022), Art. 30',
        referenceUrl: DORA_LINKS.ART_30,
        info:
          'Anforderungen sollten messbar und überprüfbar sein (KPI/SLA, Schwellenwerte, Reporting-Frequenz, Eskalation).',
        examples: [
          'Sicherheits-Nachtrag definiert Mindeststandards (z. B. Update-Zeiten, MFA, Protokollierung).',
          'SLA-Anhang enthält Kennzahlen, Reports und Eskalationsstufen.',
        ],
      },
      {
        id: 'DORA_AUSTIEGSPLAN',
        canonicalId: 'DORA_AUSSTIEGSSTRATEGIE_MIGRATION_DATEN_RUECKGABE',
        question:
          'Ist eine Ausstiegsstrategie inklusive Datenmigration und Übergangsbetrieb dokumentiert?',
        todo:
          'Ausstiegsstrategie inkl. Datenmigration und Übergangsbetrieb dokumentieren und umsetzen.',
        reference: 'DORA (2022), Art. 28–30',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Ausstieg sollte auch Übergangsbetrieb (Parallelbetrieb) und Rückfalloptionen (Rücksetzung) berücksichtigen.',
        examples: [
          'Ausstiegsplan enthält Schritte, Fristen, Verantwortlicher und notwendige Zugänge/Artefakte.',
          'Migrations-Betriebshandbuch beschreibt Tests und Abnahme.',
        ],
      },
      {
        id: 'DORA_ANBIETER_PRUEF_FREQUENZ',
        question:
          'Werden Drittanbieter risikobasiert regelmäßig anhand definierter KPIs überprüft und neu bewertet?',
        todo:
          'Risikobasierte Prüf-Frequenz für Drittanbieter festlegen und regelmäßige KPI-Reviews inkl. Neubewertung bei Änderungen durchführen und dokumentieren.',
        reference: 'DORA (2022), Art. 28–30',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Die Prüf-Frequenz sollte vom Risiko abhängen (kritischer Anbieter = häufiger) und Feststellungen/Maßnahmen nachverfolgen.',
        examples: [
          'Review-Protokoll dokumentiert KPI-Trends, Vorfälle und Maßnahmen.',
          'Neubewertung wird bei Änderungen ausgelöst.',
        ],
      },
    ],
  },

  DORA_BASIS_KRITIKALITAET: {
    label: 'DORA: IKT-Risikomanagement – Basisanforderungen nach Kritikalität',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 5–16'],
    items: [
      {
        id: 'DORA_LIGHT_MINDESTKONTROLLEN',
        question:
          'Sind risikobasierte Mindestkontrollen definiert und dokumentiert?',
        todo:
          'Risikobasierte Mindestkontrollen passsend zur Kritikalität definieren, dokumentieren und in den Betrieb übernehmen (Zugriff, Protokollierung, Backup).',
        reference: 'DORA (2022), Art. 6',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Art. 6 verlangt einen gut dokumentierten IKT-Risikomanagementrahmen, der u. a. Strategien/Richtlinien, Verfahren sowie Protokolle/Tools umfasst, um Informations- und IKT-Assets angemessen zu schützen.',
        examples: [
          'Es gibt einen versionierten „Baseline-Control-Katalog“ mit Kritikalitätsstufen und Muss-Kontrollen pro Stufe.',
          'Jede KI-relevante Komponente (Modell, Pipeline, Schnittstelle, Infrastruktur) ist einer Kritikalitätsstufe zugeordnet und begründet.',
          'Für jede Baseline-Kontrolle ist klar definiert, wie der Nachweis aussieht (z. B. IAM-Export, Log-Aufbewahrungseinstellungen, Backup-Report, Restore-Testprotokoll).',
          'Patch-/Schwachstellenmanagement: Regelmäßige Scans laufen; SLAs je Kritikalität sind dokumentiert und Abweichungen werden nachverfolgt.',
          'Backups/Wiederherstellung: Mindestens ein erfolgreicher Wiederherstellungstest je kritischer Komponente ist dokumentiert (Datum, Ergebnis, Maßnahmen).',
        ],
      },
      {
        id: 'DORA_LIGHT_VERANTWORTLICHKEITEN',
        question:
          'Sind Verantwortlichkeiten für Betrieb und Sicherheit der KI-relevanten Systeme festgelegt?',
        todo:
          'Verantwortlichkeiten für Betrieb und Sicherheit der KI-relevanten Systeme festlegen und dokumentieren.',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Auch bei kleinerem Umfang sollten Zuständigkeiten eindeutig sein, inkl. Eskalation.',
        examples: [
          'RACI benennt Verantwortlicher, Betrieb, IT-Sicherheit und Stellvertretungen.',
          'Rollenbeschreibung enthält Aufgaben und Entscheidungsrechte.',
        ],
      },
      {
        id: 'DORA_LIGHT_DIG_RESILIENZ_STRATEGIE',
        canonicalId: 'DORA_GOV_DIG_RESILIENZ_STRATEGIE',
        question:
          'Gibt es eine digitale operationelle Resilienzstrategie mit Genehmigung/Review durch das Leitungsorgan?',
        todo:
          'Resilienzstrategie in angemessenem Umfang dokumentieren: Ziele/Prioritäten, wesentliche IKT-/KI-Abhängigkeiten, akzeptiertes Risikoniveau und Maßnahmenplan. Genehmigung/Review durch Leitungsorgan nachweisen (mind. jährlich bzw. anlassbezogen).',
        reference: 'DORA (2022), Art. 5 i. V. m. Art. 6',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Die digitale operationelle Resilienzstrategie ist die Leitplanke für den Umgang mit IKT-/KI-Risiken: ' +
          'Sie legt Resilienz-Ziele und Prioritäten fest, benennt kritische Abhängigkeiten und beschreibt, welches Risikoniveau akzeptiert wird (Risikotoleranz) sowie welche Maßnahmen (Prävention, Erkennung, Reaktion, Wiederherstellung) zur Steuerung und Verbesserung vorgesehen sind.',
        examples: [
          '1–3 Seiten Strategie + Maßnahmenliste, genehmigt und versioniert.',
        ],
      },
      {
        id: 'DORA_LIGHT_IKT_AUDITPLAN',
        canonicalId: 'DORA_GOV_IKT_AUDITPLAN',
        question:
          'Gibt es einen angemessenen IKT-Audit-/Prüfplan mit Genehmigung durch das Leitungsorgan und Nachverfolgung der Feststellungen?',
        todo:
          'Angemessenen Prüfplan definieren (Scope/Frequenz), genehmigen lassen und Feststellungen/Maßnahmen nachverfolgen (Owner/Frist/Wirkung).',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Auch Light-Setups brauchen nachvollziehbare, geplante Prüfungen (statt ad-hoc).',
        examples: [
          'Quartals-Checkliste + jährlicher Review mit protokollierter Genehmigung.',
        ],
      },    
      {
        id: 'DORA_LIGHT_PROTOKOLLIERUNG',
        question:
          'Ist die Protokollierung für die KI-relevanten Systeme aktiviert und wird sie gemäß Aufbewahrungsvorgaben aufbewahrt?',
        todo:
          'Protokollierung für KI-relevante Systeme aktivieren, revisionssicher aufbewahren und für Audit/Vorfallaufklärung nutzbar machen.',
        reference: 'DORA (2022), Art. 9',
        referenceUrl: DORA_LINKS.ART_9,
        info:
          'Protokolle sollten für Audit und Vorfallaufklärung nutzbar sein unter Beachtung des Datenschutzes.',
        examples: [
          'Beispiel-Protokolle enthalten Zeitstempel, Request-ID, Modellversion/Bereitstellung.',
          'Aufbewahrungsvorgaben sind dokumentiert und technisch umgesetzt.',
        ],
      },
      {
        id: 'DORA_MRM_VERZAHNUNG',
        canonicalId: 'DORA_MRM_VERZAHNUNG',
        question:
          'Ist das KI-System mit dem bestehenden Modellrisikomanagement verzahnt?',
        todo:
          'Verzahnung mit Modellrisikomanagement sicherstellen: Modellinventar pflegen, Validierungs-/Revalidierungszyklen definieren, unabhängige Reviews dokumentieren und Feststellungen nachverfolgen.',
        reference: 'DORA (2022), Art. 6',
        referenceUrl: DORA_LINKS.ART_6,
        info:
          'Falls bereits ein Modellrisikomanagement existiert: die KI dort sauber einhängen und Doppelstrukturen vermeiden.',
        examples: [
          'Modell ist im Inventar erfasst.',
          'Validierung/Review ist datiert, unabhängig und nachvollziehbar dokumentiert.',
        ],
      },
      {
        id: 'DORA_GOV_FREIGABEGATES',
        canonicalId: 'DORA_GOV_FREIGABEGATES',
        question:
          'Gibt es definierte Management-Freigaben bzw. Gremienentscheidungen für Produktivsetzung und wesentliche Änderungen?',
        todo:
          'Freigabegates mit Management-/Gremienentscheidung dokumentieren und im Betrieb anwenden.',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Management-Freigaben stellen sicher, dass Produktivsetzungen und wesentliche Änderungen nicht informell durchrutschen, sondern vorab anhand klarer Kriterien geprüft werden und eine nachvollziehbare Entscheidung durch das zuständige Management/Gremium erhalten.',
        examples: [
          'Vor Produktivsetzung liegt eine dokumentierte Freigabe vor (Entscheidung, Verantwortliche, Go/No-Go-Kriterien, Risikobewertung, ggf. Auflagen).',
          'Wesentliche Änderungen (z. B. Modellwechsel, neue Datenquelle, geänderte Schnittstellen, neue Subdienstleister) laufen verpflichtend über einen Change-Prozess.',
          'Ausnahmen/Notfalländerungen sind geregelt (wer darf entscheiden, nachträgliche Dokumentation/Review, Fristen für Nacharbeiten).',
        ],
      },
    ],
  },

  DORA_DRITTANBIETER_KRITIKALITAET_UEBERPRUEFUNG: {
    label: 'DORA: Drittanbieter – Kritikalitätseinstufung (Nachweis & Freigabe)',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 28–30'],
    items: [
      {
        id: 'DORA_TP_KRITIKALITAET_DOKU',
        canonicalId: 'DORA_TP_KRITIKALITAET_DOKU',
        question:
          'Ist die Kritikalitätseinstufung dokumentiert?',
        todo:
          'Kritikalitätseinstufung dokumentieren: Abhängigkeitsanalyse (Auswirkungen, RTO/RPO), Konzentrationsbewertung (gemeinsame Ausfallbereiche), Ausstiegs-/Substitutionsplan (technisch und vertraglich).',
        reference: 'DORA (2022), Art. 28–29',
        referenceUrl: DORA_LINKS.ART_28,
        info:
          'Die Einstufung muss Kriterien, Analyseergebnisse und Begründung nachvollziehbar dokumentieren.',
        examples: [
          'Analyse enthält RTO/RPO-Bezug und gemeinsame Ausfallbereiche.',
          'Ausstiegs-/Substitutionsplan benennt technische und vertragliche Maßnahmen.',
        ],
      },
      {
        id: 'DORA_TP_KRITIKALITAET_FREIGABE',
        canonicalId: 'DORA_TP_KRITIKALITAET_FREIGABE',
        question:
          'Liegt eine formale Freigabe durch Risiko-/Compliance-/Auslagerungsfunktion zur Einstufung vor?',
        todo:
          'Formale Freigabe (Risikomanagement/Compliance/Auslagerung) zur Einstufung einholen und versioniert dokumentieren (inkl. Auflagen/Abhilfemaßnahmen).',
        reference: 'DORA (2022), Art. 5',
        referenceUrl: DORA_LINKS.ART_5,
        info:
          'Freigabe muss Entscheidung, Auflagen, Verantwortliche und Review-Zyklus eindeutig festhalten.',
        examples: [
          'Freigabeprotokoll enthält Version, Datum, Teilnehmende und Auflagen.',
        ],
      },
    ],
  },

  DORA_BCM_AUSWEICHVERFAHREN: {
    label: 'DORA: BCM/Rückfall – Ausweichverfahren, Betriebshandbuch & Tests',
    regulation: 'DORA',
    articles: ['DORA (2022), Art. 11–12'],
    items: [
      {
        id: 'DORA_BCM_AUSWEICHVERFAHREN_BETRIEBSHANDBUCH',
        canonicalId: 'DORA_BCM_AUSWEICHVERFAHREN_BETRIEBSHANDBUCH',
        question:
          'Gibt es ein dokumentiertes Betriebshandbuch inkl. Rollen, Eskalation und Stopp-Kriterien für den Ausfall von KI/Anbieter?',
        todo:
          'Betriebshandbuch erstellen/aktualisieren: Rollen und Verantwortlichkeiten (inkl. Vertretung), Eskalationspfade, StoppKriterien, Kommunikationsplan und operative Schritte für den Rückfallbetrieb.',
        reference: 'DORA (2022), Art. 11–12',
        referenceUrl: DORA_LINKS.ART_11,
        info:
          'Das Betriebshandbuch muss Kriterien, Schritte, Zuständigkeiten und Kommunikationswege für Rückfallbetrieb nachweisbar regeln.',
        examples: [
          'Stopp-Kriterien sind definiert und mit Verantwortlichen verknüpft.',
          'Kommunikationsplan enthält interne/externe Kontakte und Freigabekette.',
        ],
      },
      {
        id: 'DORA_BCM_AUSWEICHVERFAHREN_RTO_RPO',
        canonicalId: 'DORA_BCM_AUSWEICHVERFAHREN_RTO_RPO',
        question:
          'Sind RTO/RPO sowie manuelle Prozessschritte für den Rückfallbetrieb definiert und im BCM-Prozess verankert?',
        todo:
          'RTO/RPO und manuelle Prozessschritte definieren; in BCM/Prozessdokumentation verankern (inkl. Auslöser, Verantwortlichkeiten, Abhängigkeiten).',
        reference: 'DORA (2022), Art. 11–12',
        referenceUrl: DORA_LINKS.ART_11,
        info:
          'RTO/RPO und manuelle Schritte müssen mit BCM abgestimmt und in Tests überprüfbar beschrieben sein.',
        examples: [
          'BCM verknüpft Prozessschritte mit Systemen, Abhängigkeiten und RTO/RPO.',
          'Prozessdokumentation nennt Auslöser und Verantwortliche für den Rückfallbetrieb.',
        ],
      },
      {
        id: 'DORA_BCM_AUSWEICHVERFAHREN_TEST',
        canonicalId: 'DORA_BCM_AUSWEICHVERFAHREN_TEST',
        question:
          'Wurde das Ausweichverfahren getestet und sind Feststellungen nachverfolgt?',
        todo:
          'Rückfalltest durchführen und dokumentieren (Szenarien, Geltungsbereich, Erfolgskriterien, Ergebnisse); Feststellungen mit Verantwortlicher, Frist und Nachverfolgung (Abhilfemaßnahmen-Tracking).',
        reference: 'DORA (2022), Art. 11–12',
        referenceUrl: DORA_LINKS.ART_12,
        info:
          'Tests müssen Erfolgskriterien, Abweichungen, Feststellungen und Nachverfolgung bis zum Abschluss dokumentieren.',
        examples: [
          'Testprotokoll enthält Szenario, Datum, Teilnehmende, Erfolgskriterien und Ergebnis.',
          'Feststellungsprotokoll enthält Verantwortlicher, Frist, Status und Wirksamkeitsprüfung.',
        ],
      },
    ],
  },
};
/**
 * Konsistenz-Locks: monotone Entscheidungen, die spätere Antworten nicht 'zurückdrehen' sollen
 * Beispiel: einmal als Hochrisiko bestätigt -> spätere Deeskalation führt zu Warnknoten statt stiller Änderung
 */
export const CONSISTENCY_LOCKS = {
  KI_HOCHRISIKO: 'KI_HOCHRISIKO',
};

const baseDecisionTree = {
/**
 * Entscheidungsbaum als flaches Objekt (id -> Knoten):
 * - type: 'question' oder 'leaf' (Leaf = Ergebnis/Clusterabschluss)
 * - Transitions: bei questions i. d. R. 'yes'/'no' (und optional 'next'); bei leaves 'next' für Fortsetzung
 * - obligations (nur bei leaf): Array von Paket-Keys aus obligationsCatalog; daraus entsteht die Requirement-Chain
 *
 * Konventionen:
 * - IDs sind stabil und dienen gleichzeitig als Schlüssel in answers/path
 * - Warning-/Guard-Knoten beginnen typischerweise mit 'W_' (Leafs ohne obligations, dienen der Governance-Eskalation)
 */
  A1: {
    id: 'A1',
    type: 'question',
    cluster: 'AI Act',
    label: 'Is the proposed solution an AI System according to the EU AI Act?',
    reference: 'EU AI Act (2024), Art. 3',
    referenceUrl: EU_AI_ACT_LINKS.ART_3,
    yes: 'A2',
    no: 'A0',
    info:
      'First, it is asserted whether the proposed solution fulfills the definition of an AI system. ' +
      'Only if this is true, other requirements of the EU AI Act are relevant. ',
    examples: [
      'A machine learning model that automatically rates credit scores.',
      'A static, rule based system without learn or inference logic.',
      'A third-party LLM provider is utilized in a critical process.',
    ],
  },

  A0: {
    id: 'A0',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Kein KI-System -> EU AI Act nicht anwendbar.',
    reference: 'EU AI Act (2024), Art. 3',
    referenceUrl: EU_AI_ACT_LINKS.ART_3,
    obligations: ['AI_ACT_NICHT_ZUTREFFEND'],
    next: 'ENDE',
    info:
      'Wenn das System nicht unter die Definition eines KI-Systems fällt, gelten die spezifischen EU-AI-Act-Pflichten nicht. ' +
      'DORA- und interne Governance-/Security-Anforderungen können dennoch relevant sein.',
    examples: [
      'Reine Datenvisualisierung ohne KI-Logik.',
      'Klassisches Workflow-Tool ohne ML/KI-Komponente.',
    ],
  },

  A2: {
    id: 'A2',
    type: 'question',
    cluster: 'AI Act',
    label: 'Liegt eine potenziell verbotene Praxis nach EU AI Act vor?',
    reference: 'EU AI Act (2024), Art. 5',
    referenceUrl: EU_AI_ACT_LINKS.ART_5,
    yes: 'A2_Y',
    no: 'A2_ROLLE',
    info:
      'Hier wird geprüft, ob das KI-System in eine Kategorie fällt, die nach EU AI Act grundsätzlich unzulässig ist. ' +
      'Bei verbotenen Praktiken ist der Einsatz grundsätzlich nicht erlaubt.',
    examples: [
      'Systeme, die Menschen verdeckt manipulieren, um Entscheidungen zu beeinflussen.',
      'KI, die die Verwundbarkeit bestimmter Personengruppen (z. B. Kinder oder Personen in Abhängigkeitssituationen) gezielt ausnutzt, um deren Verhalten wesentlich zu beeinflussen.',
    ],
  },

  A2_Y: {
    id: 'A2_Y',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Verbotene Praxis -> Nutzung untersagen und Eskalation auslösen.',
    reference: 'EU AI Act (2024), Art. 5',
    referenceUrl: EU_AI_ACT_LINKS.ART_5,
    obligations: ['KI_VERBOTENE_PRAKTIKEN'],
    next: 'D1',
    info:
      'Bei verbotenen Praktiken ist der Einsatz grundsätzlich nicht erlaubt. ' +
      'Eskalation und Stopp der Nutzung einleiten.',
    examples: [
      'Rollout stoppen, Produktivzugriff entziehen.',
      'Bestehende Integrationen und Produktivumgebungen entfernen.',
      'Übergabe an Compliance zur Abbruch-/Neuzuschnitt-Entscheidung.',
    ],
  },

  // AI Act – Gates / Review (Verbotene Praktiken)

  G_AI_VERBOTENE_PRAKTIKEN_UEBERPRUEFUNG: {
    id: 'G_AI_VERBOTENE_PRAKTIKEN_UEBERPRUEFUNG',
    type: 'question',
    cluster: 'AI Act',
    regulation: 'EU AI Act',
    label: 'Review-Gate: Wurde der Einsatz gestoppt und die Eskalation dokumentiert?',
    reference: 'EU AI Act (2024), Art. 5',
    referenceUrl: EU_AI_ACT_LINKS.ART_5,
    yes: 'ENDE',
    no: 'W_KI_WIDERSPRUCH',
    info:
      'Sichert ab, dass verbotene Praktiken nicht ohne formale Stopp-/Eskalationsentscheidung weiterverfolgt werden.',
    examples:
      'No-Go-Entscheid, Fall-ID, Maßnahmenplan, Ablage der Entscheidungsdokumentation.',
    checkpointText:
      'Checkpoint: Es besteht ein Hinweis auf eine potenziell verbotene Praxis. Bitte Prüfung/Eskalation vor Fortsetzung durchführen und Entscheidung kurz dokumentieren.',
  },

  // AI Act – Rollenfrage

  A2_ROLLE: {
    id: 'A2_ROLLE',
    type: 'question',
    cluster: 'AI Act',
    label: 'Sind Sie Betreiber oder Anbieter des zu integrierenden KI-Systems?',
    reference: 'EU AI Act (2024), Art. 3',
    referenceUrl: EU_AI_ACT_LINKS.ART_3,
    yes: 'A2_ROLLE_BEREITSTELLUNG',
    no: 'A2_ROLLE_BETRIEB_KONTROLLE',
    yesLabel: 'Anbieter',
    noLabel: 'Betreiber',
    info: 
    'Hier wird die Rolle des Unternehmens im konkreten Anwendungsfall geklärt. ' +
    'Die konkreten Begriffsbestimmungen sind in Art. 3 Abs. 3-4 zu finden.',
    examples: [
      'Anbieter: Sie entwickeln/bringen das KI-System in Verkehr oder stellen es bereit.',
      'Betreiber: Sie nutzen ein KI-System (intern oder extern bezogen) im eigenen Prozess.',
    ],
  },

  A2_ROLLE_BEREITSTELLUNG: {
    id: 'A2_ROLLE_BEREITSTELLUNG',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Stellen Sie das KI-System (oder eine Variante unter ihrer Marke) Dritten bereit oder bringen es in Verkehr?',
    yes: 'A2_ROLLE_WESENTLICHE_AENDERUNG',
    no: 'A2_ROLLE_WESENTLICHE_AENDERUNG',
    reference: 'EU AI Act (2024)',
    info:
      'Praxis-Indikator für Anbieter: Sie stellem das System/Produkt Dritten bereit.',
    examples: [
      'Sie verkaufen/vertreiben ein KI-Produkt an Kunden (SaaS oder On-Prem).'
    ],
  },

  A2_ROLLE_WESENTLICHE_AENDERUNG: {
    id: 'A2_ROLLE_WESENTLICHE_AENDERUNG',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Nehmen Sie am Modell/System wesentliche Änderungen vor, die über reine Konfiguration hinausgehen?',
    yes: 'A2_ROLLE_BETRIEB_KONTROLLE',
    no: 'A2_ROLLE_BETRIEB_KONTROLLE',
    reference: 'EU AI Act (2024)',
    info:
      '„Wesentliche Modifikation“ ist ein starker Anbieter-Indikator. Reine Konfiguration zählt typischerweise nicht.',
    examples: [
      'Feintuning/Neutraining mit eigenen Trainingsdaten.',
      'Änderung der Zweckbestimmung.',
      'Neue Trainings-/Feature-Pipeline oder neue Datenquellen fürs Training.',
    ],
  },

  A2_ROLLE_BETRIEB_KONTROLLE: {
    id: 'A2_ROLLE_BETRIEB_KONTROLLE',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Haben Sie die operative Kontrolle über die produktive KI-Komponente oder steuern Sie wesentliche Betriebsparameter, unabhängig davon, wo sie gehostet wird?',
    yes: 'A2_ROLLE_BETREIBER_EINSATZZWECK',
    no: 'A2_ROLLE_BETREIBER_EINSATZZWECK',
    reference: 'EU AI Act (2024)',
    info:
      '„Hosting“ (wo läuft es) ist nicht gleich „Betrieb“ (wer steuert es). ' + 
      'Antworten Sie mit „Ja“, wenn Sie im Produktivbetrieb die Kontrolle haben oder Parameter festlegen, die Verhalten und Risikoprofil wesentlich beeinflussen. ' + 
      'Das ist ein starker Indikator, dass Sie Betreiberpflichten tragen und in bestimmten Konstellationen auch in die Anbieterrolle rutschen können.',
    examples: [
      'Ja: Sie entscheiden über produktive Rollouts/Freigaben, setzen Schwellwerte und Regeln, ändern Prompt-/Richtlinien-Vorlagen oder konfigurieren die Datenquellen.',
      'Ja: Sie überwachen den Betrieb (Monitoring/Logging), bearbeiten Störungen, spielen Updates oder Modellwechsel ein oder steuern Neutraininge/Feintuning-Zyklen.',
      'Nein: Der Dienstleister betreibt und konfiguriert die KI vollständig; Sie nutzen sie nur als fest definierten Service und können lediglich die Nutzung an-/abschalten oder fachliche Eingaben liefern.',
      'Grenzfall (eher Ja): Sie können produktive Betriebsparameter ändern (z. B. Schwellwerte, Feature-Flags), obwohl Hosting und technische Betriebsführung beim Anbieter liegen.',
    ],
  },

  A2_ROLLE_BETREIBER_EINSATZZWECK: {
    id: 'A2_ROLLE_BETREIBER_EINSATZZWECK',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Nutzen Sie das KI-System für einen eigenen Geschäftsprozess und bestimmen Sie Zweck und Einsatzkontext?',
    yes: 'A2_ROLLE_BETREIBER_DATENVERANTWORTUNG',
    no: 'A2_ROLLE_SCOPE_UNSICHER',
    reference: 'EU AI Act (2024)',
    info:
      'Betreiber ist typischerweise, wer ein KI-System in einem eigenen Prozess einsetzt und den Nutzungskontext festlegt.',
    examples: [
      'Sie setzen die KI in einem internen Prozess (z. B. Support, Recruiting, Risiko, Compliance) ein und definieren den Zweck.',
      'Der Anbieter definiert Zweck und Einsatzkontext vollständig, bei Ihnen ist nur „Nutzung“ ohne Gestaltungsspielraum möglich.',
    ],
  },

  A2_ROLLE_BETREIBER_DATENVERANTWORTUNG: {
  id: 'A2_ROLLE_BETREIBER_DATENVERANTWORTUNG',
  type: 'question',
  cluster: 'AI Act',
  label:
    'Stellen Sie wesentliche Eingabedaten bereit und verantworten deren Auswahl/Qualität?',
  yes: 'A2_ROLLE_KONFORMITAETSARTEFAKTE',
  no: 'A2_ROLLE_SCOPE_UNSICHER',
  reference: 'EU AI Act (2024)',
  info:
    'Wer relevante Eingabedaten liefert und deren Einsatz verantwortet, ist in der Praxis meist Betreiber oder trägt Betreiberpflichten.',
  examples: [
    'Sie speisen Kundendaten/Transaktionen/Dokumente ein und definieren, welche Daten genutzt werden dürfen.',
    'Sie wählen Datenquellen aus und tragen Verantwortung für Datenqualität im Nutzungskontext.',
  ],
},

  A2_ROLLE_KONFORMITAETSARTEFAKTE: {
    id: 'A2_ROLLE_KONFORMITAETSARTEFAKTE',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Liefern Sie selbst die wichtigsten Nachweise und Unterlagen zur Konformität bzw. Sicherheit?',
    yes: 'A2_ROLLE_SCOPE_ANBIETER',
    no: 'A2_ROLLE_SCOPE_BETREIBER',
    yesLabel: 'Wir liefern selbst',
    noLabel: 'Wir beziehen vom Anbieter',
    reference: 'EU AI Act (2024)',
    info:
      'Wenn Sie die zentralen Unterlagen selbst erstellen oder liefern müssen, ist das ein starker Hinweis auf die Rolle „Anbieter“.',
    examples: [
      'Sie erstellen und pflegen die technischen Unterlagen selbst (z. B. technische Dokumentation, Risikoanalyse, Tests).',
      'Sie liefern die erforderlichen Nachweise zur Konformität/Sicherheit an Kunden oder Behörden.',
      'Der Anbieter stellt die vollständigen Unterlagen bereit, sie übernehmen diese und nutzen sie (z. B. in Betrieb/Integration).',
      'Sie erhalten vom Anbieter Konformitäts-/Sicherheitsnachweise und müssen diese nicht selbst erstellen.',
    ],
  },

  A2_ROLLE_SCOPE_ANBIETER: {
    id: 'A2_ROLLE_SCOPE_ANBIETER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Rollenempfehlung: Anbieter',
    reference: 'EU AI Act (2024)',
    obligations: ['KI_ROLLENKLAERUNG_NACHWEIS_BASIS'],
    next: 'A2_GPAI_ANBIETER',
  },

  A2_ROLLE_SCOPE_BETREIBER: {
    id: 'A2_ROLLE_SCOPE_BETREIBER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Rollenempfehlung: Betreiber',
    reference: 'EU AI Act (2024) – Rollenklärung (intern)',
    obligations: ['KI_ROLLENKLAERUNG_NACHWEIS_BASIS'],
    next: 'A2_GPAI_BETREIBER',
  },

  A2_ROLLE_SCOPE_UNSICHER: {
    id: 'A2_ROLLE_SCOPE_UNSICHER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Rolle unklar (Unsicher)',
    reference: 'EU AI Act (2024)',
    obligations: [],
    next: 'A2_GPAI_UNSICHER',
    info:
      'Die Antworten sind inkonsistent.',
  },

  // AI Act – GPAI (Basismodelle)

  A2_GPAI_ANBIETER: {
    id: 'A2_GPAI_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Wird ein KI-Modell mit allgemeinem Verwendungszweck (GPAI) genutzt?',
    reference: 'EU AI Act (2024), Art. 51–52',
    referenceUrl: EU_AI_ACT_LINKS.ART_51,
    yes: 'A2_GPAI_SCREENING_ANBIETER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
    info:
      'Ein GPAI ist ein Modell, das für viele unterschiedliche Aufgaben einsetzbar ist und nicht auf einen eng abgegrenzten Zweck beschränkt ist. ' +
      'Der Begriff KI mit allgemeinem Verwendungszweck ist in Art. 3 Abs. 63 definiert.',
    examples: [
      'Nutzung eines großen Sprachmodells (LLM) über eine externe API für Chat, Zusammenfassung oder Entwurf von Texten.',
      'Einsatz eines vortrainierten Basis-Modells in einer eigenen Anwendung (z. B. für Klassifikation, Extraktion oder Generierung).',
    ],
  },

  A2_GPAI_SCREENING_ANBIETER: {
    id: 'A2_GPAI_SCREENING_ANBIETER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GPAI erkannt -> Screening & Lieferkettentransparenz prüfen',
    reference: 'EU AI Act (2024), Art. 51–52',
    referenceUrl: EU_AI_ACT_LINKS.ART_51,
    obligations: ['KI_GPAI_SCREENING_ART_51_52'],
    next: 'A2_GPAI_SYSTEMRISIKO_ANBIETER',
    info:
      'Screening zuerst durchführen; danach klären, ob systemisches Risiko betroffen ist.',
  },

  A2_GPAI_SYSTEMRISIKO_ANBIETER: {
    id: 'A2_GPAI_SYSTEMRISIKO_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Handelt es sich um ein GPAI mit systemischem Risiko?',
    reference: 'EU AI Act (2024), Art. 55',
    referenceUrl: EU_AI_ACT_LINKS.ART_55,
    yes: 'A2_GPAI_SYSTEMRISIKO_Y_ANBIETER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
    info:
      'Ein GPAI mit systemischem Risiko ist ein Modell mit sehr hoher Leistungsfähigkeit und breiter Einsetzbarkeit, dessen Einsatz potenziell großflächige, schwerwiegende Auswirkungen über einzelne Einzelfälle hinaus haben kann. ' +
      'Indikatoren sind u. a. sehr große Reichweite/Verbreitung, hohe Skalierbarkeit, zentrale Abhängigkeit vieler Prozesse/Produkte sowie ein erhöhtes Potenzial für erhebliche Schäden.',
    examples: [
      'Ja: Ein sehr leistungsfähiges Basismodell wird unternehmensweit in vielen Produkten/Prozessen eingesetzt und ist kritisch für den Betrieb.',
      'Ja: Das Modell ist breit in Drittprodukte integriert und kann bei Fehlverhalten/Missbrauch skaliert Schaden verursachen.',
      'Eher nein: Ein eng begrenztes, spezialisiertes Modell für einen klar abgegrenzten Zweck mit geringer Reichweite und ohne breite Wiederverwendung.',
      'Unklar: Wenn die Reichweite/Leistungsfähigkeit oder die potenziellen Auswirkungen nicht sauber belegt sind, wählen Sie konservativ „Ja“ und dokumentieren Sie die Einstufung.',
    ],
  },

  A2_GPAI_SYSTEMRISIKO_Y_ANBIETER: {
    id: 'A2_GPAI_SYSTEMRISIKO_Y_ANBIETER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GPAI mit systemischem Risiko -> zusätzliche Pflichten',
    reference: 'EU AI Act (2024), Art. 55',
    referenceUrl: EU_AI_ACT_LINKS.ART_55,
    obligations: ['KI_GPAI_SYSTEMISCHES_RISIKO_ART_55'],
    next: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
  },

  A2_GPAI_BETREIBER: {
    id: 'A2_GPAI_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Wird ein KI-Modell mit allgemeinem Verwendungszweck (GPAI) genutzt?',
    reference: 'EU AI Act (2024), Art. 51–52',
    referenceUrl: EU_AI_ACT_LINKS.ART_51,
    yes: 'A2_GPAI_SCREENING_BETREIBER',
    no: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_FINANZ',
    info:
      'Ein GPAI ist ein Modell, das für viele unterschiedliche Aufgaben einsetzbar ist und nicht auf einen eng abgegrenzten Zweck beschränkt ist. ' +
      'Der Begriff KI mit allgemeinem Verwendungszweck ist in Art. 3 Abs. 63 definiert.',
    examples: [
      'Nutzung eines großen Sprachmodells (LLM) über eine externe API für Chat, Zusammenfassung oder Entwurf von Texten.',
      'Einsatz eines vortrainierten Basis-Modells in einer eigenen Anwendung (z. B. für Klassifikation, Extraktion oder Generierung).',
    ],
  },

  A2_GPAI_SCREENING_BETREIBER: {
    id: 'A2_GPAI_SCREENING_BETREIBER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GPAI erkannt -> Screening & Lieferkettentransparenz prüfen',
    reference: 'EU AI Act (2024), Art. 51–52',
    referenceUrl: EU_AI_ACT_LINKS.ART_51,
    obligations: ['KI_GPAI_SCREENING_ART_51_52'],
    next: 'A2_GPAI_SYSTEMRISIKO_BETREIBER',
    info:
      'Screening zuerst durchführen; danach klären, ob systemisches Risiko betroffen ist.',
  },

  A2_GPAI_SYSTEMRISIKO_BETREIBER: {
    id: 'A2_GPAI_SYSTEMRISIKO_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Handelt es sich um ein GPAI mit systemischem Risiko?',
    reference: 'EU AI Act (2024), Art. 55',
    referenceUrl: EU_AI_ACT_LINKS.ART_55,
    yes: 'A2_GPAI_SYSTEMRISIKO_Y_BETREIBER',
    no: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_FINANZ',
    info:
      'Ein GPAI mit systemischem Risiko ist ein Modell mit sehr hoher Leistungsfähigkeit und breiter Einsetzbarkeit, dessen Einsatz potenziell großflächige, schwerwiegende Auswirkungen über einzelne Einzelfälle hinaus haben kann. ' +
      'Indikatoren sind u. a. sehr große Reichweite/Verbreitung, hohe Skalierbarkeit, zentrale Abhängigkeit vieler Prozesse/Produkte sowie ein erhöhtes Potenzial für erhebliche Schäden.',
    examples: [
      'Ja: Ein sehr leistungsfähiges Basismodell wird unternehmensweit in vielen Produkten/Prozessen eingesetzt und ist kritisch für den Betrieb.',
      'Ja: Das Modell ist breit in Drittprodukte integriert und kann bei Fehlverhalten/Missbrauch skaliert Schaden verursachen.',
      'Eher nein: Ein eng begrenztes, spezialisiertes Modell für einen klar abgegrenzten Zweck mit geringer Reichweite und ohne breite Wiederverwendung.',
      'Unklar: Wenn die Reichweite/Leistungsfähigkeit oder die potenziellen Auswirkungen nicht sauber belegt sind, wählen Sie konservativ „Ja“ und dokumentieren Sie die Einstufung.',
    ],
  },

  A2_GPAI_SYSTEMRISIKO_Y_BETREIBER: {
    id: 'A2_GPAI_SYSTEMRISIKO_Y_BETREIBER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GPAI mit systemischem Risiko -> zusätzliche Pflichten (Art. 55)',
    reference: 'EU AI Act (2024), Art. 55',
    referenceUrl: EU_AI_ACT_LINKS.ART_55,
    obligations: ['KI_GPAI_SYSTEMISCHES_RISIKO_ART_55'],
    next: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_FINANZ',
  },

  A2_GPAI_UNSICHER: {
    id: 'A2_GPAI_UNSICHER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Wird ein KI-Modell mit allgemeinem Verwendungszweck (GPAI) genutzt?',
    reference: 'EU AI Act (2024), Art. 51–52',
    referenceUrl: EU_AI_ACT_LINKS.ART_51,
    yes: 'A2_GPAI_SCREENING_UNSICHER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
    info:
      'Ein GPAI ist ein Modell, das für viele unterschiedliche Aufgaben einsetzbar ist und nicht auf einen eng abgegrenzten Zweck beschränkt ist. ' +
      'Der Begriff KI mit allgemeinem Verwendungszweck ist in Art. 3 Abs. 63 definiert.',
    examples: [
      'Nutzung eines großen Sprachmodells (LLM) über eine externe API für Chat, Zusammenfassung oder Entwurf von Texten.',
      'Einsatz eines vortrainierten Basis-Modells in einer eigenen Anwendung (z. B. für Klassifikation, Extraktion oder Generierung).',
    ],
  },

  A2_GPAI_SCREENING_UNSICHER: {
    id: 'A2_GPAI_SCREENING_UNSICHER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GPAI erkannt -> Screening & Lieferkettentransparenz prüfen',
    reference: 'EU AI Act (2024), Art. 51–52',
    referenceUrl: EU_AI_ACT_LINKS.ART_51,
    obligations: ['KI_GPAI_SCREENING_ART_51_52'],
    next: 'A2_GPAI_SYSTEMRISIKO_UNSICHER',
    info:
      'Screening zuerst durchführen; danach klären, ob systemisches Risiko betroffen ist.',
  },

  A2_GPAI_SYSTEMRISIKO_UNSICHER: {
    id: 'A2_GPAI_SYSTEMRISIKO_UNSICHER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Handelt es sich um ein GPAI mit systemischem Risiko?',
    reference: 'EU AI Act (2024), Art. 55',
    referenceUrl: EU_AI_ACT_LINKS.ART_55,
    yes: 'A2_GPAI_SYSTEMRISIKO_Y_UNSICHER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
    info:
      'Ein GPAI mit systemischem Risiko ist ein Modell mit sehr hoher Leistungsfähigkeit und breiter Einsetzbarkeit, dessen Einsatz potenziell großflächige, schwerwiegende Auswirkungen über einzelne Einzelfälle hinaus haben kann. ' +
      'Indikatoren sind u. a. sehr große Reichweite/Verbreitung, hohe Skalierbarkeit, zentrale Abhängigkeit vieler Prozesse/Produkte sowie ein erhöhtes Potenzial für erhebliche Schäden.',
    examples: [
      'Ja: Ein sehr leistungsfähiges Basismodell wird unternehmensweit in vielen Produkten/Prozessen eingesetzt und ist kritisch für den Betrieb.',
      'Ja: Das Modell ist breit in Drittprodukte integriert und kann bei Fehlverhalten/Missbrauch skaliert Schaden verursachen.',
      'Eher nein: Ein eng begrenztes, spezialisiertes Modell für einen klar abgegrenzten Zweck mit geringer Reichweite und ohne breite Wiederverwendung.',
      'Unklar: Wenn die Reichweite/Leistungsfähigkeit oder die potenziellen Auswirkungen nicht sauber belegt sind, wählen Sie konservativ „Ja“ und dokumentieren Sie die Einstufung.',
    ],
  },

  A2_GPAI_SYSTEMRISIKO_Y_UNSICHER: {
    id: 'A2_GPAI_SYSTEMRISIKO_Y_UNSICHER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GPAI mit systemischem Risiko -> zusätzliche Pflichten',
    reference: 'EU AI Act (2024), Art. 55',
    referenceUrl: EU_AI_ACT_LINKS.ART_55,
    obligations: ['KI_GPAI_SYSTEMISCHES_RISIKO_ART_55'],
    next: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
  },

  // AI Act – Hochrisiko (Anhang III / Art. 6) – Anbieter

  A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ: {
    id: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_FINANZ',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft der Anhang-III-Bereich „Finanzen“ zu?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_FIN_KREDIT_ANBIETER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_SICHERHEITSBAUTEIL',
    info:
      'Wenn dieser Bereich zutrifft, ist Hochrisiko sehr wahrscheinlich. Bei Unsicherheit konservativ Ja wählen und Review dokumentieren.',
    examples: [
      'Kreditwürdigkeits-/Bonitätsbewertung natürlicher Personen.',
      'Preis-/Risikobewertung für Lebens- oder Krankenversicherung.',
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_ANBIETER_SICHERHEITSBAUTEIL: {
    id: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_SICHERHEITSBAUTEIL',
    type: 'question',
    cluster: 'AI Act',
    label: 'Ist das KI-System ein Sicherheitsbauteil oder Teil eines Produkts nach Art. 6?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_BIOMETRIE',
    info:
      'Ein Sicherheitsbauteil ist eine (Hard-/Soft-)Komponente eines Produkts, die eine Schutzfunktion erfüllt oder für die sichere Verwendung wesentlich ist.',
    examples: [
      'KI als sicherheitsrelevante Komponente in einem regulierten Produkt (z. B. Steuerung/Überwachung einer Schutzfunktion).',
      'KI trifft/unterstützt Entscheidungen, die die sichere Betriebsführung eines Geräts unmittelbar beeinflussen (z. B. Notabschaltung, Kollisionsvermeidung, Schutz vor Überhitzung).',
      'KI ist Teil eines Systems, das für die Konformitätsbewertung als sicherheitskritisch eingestuft ist (z. B. als „safety function“ im technischen Dossier).',
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_ANBIETER_BIOMETRIE: {
    id: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_BIOMETRIE',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft der Anhang-III-Bereich „Biometrie“ zu?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_KRIT_INFRA',
    examples: [
      'Biometrische Identifizierung oder biometrische Kategorisierung natürlicher Personen.'
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_ANBIETER_KRIT_INFRA: {
    id: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_KRIT_INFRA',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft der Anhang-III-Bereich „Kritische Infrastruktur“ zu?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_BILDUNG_ARBEIT_DIENSTE',
    examples: [
      'KI zur Steuerung/Überwachung kritischer Infrastrukturen mit potenziellen Sicherheitsauswirkungen.'
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_ANBIETER_BILDUNG_ARBEIT_DIENSTE: {
    id: 'A3_HR_ANHANG_III_DOMAENE_ANBIETER_BILDUNG_ARBEIT_DIENSTE',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft einer der Anhang-III-Bereiche zu: Bildung, Beschäftigung/Personalmanagement oder Zugang zu wesentlichen Dienstleistungen?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_ANBIETER',
    info:
      'Diese Sammelfrage reduziert Falsch-Negative, wenn der Anwendungsfall nicht „Finanzen“ ist, aber trotzdem in Anhang III fallen kann.',
    examples: [
      'Bildung: Bewertung/Zulassung/Prüfungsentscheidungen.',
      'Beschäftigung: Recruiting, Beförderung, Leistungsbewertung.',
      'Wesentliche Dienste: Zugang zu Leistungen oder Einstufungen mit erheblichen Auswirkungen.',
    ],
  },

  A3_HR_FIN_KREDIT_ANBIETER: {
    id: 'A3_HR_FIN_KREDIT_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Wird das KI-System bestimmungsgemäß für Kreditwürdigkeitsprüfung/Bonitätsbewertung natürlicher Personen verwendet (außer reine Finanzbetrugserkennung)?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_HR_FIN_VERSICHERUNGS_ANBIETER',
    info:
      'Wenn das System für Kreditwürdigkeits-/Bonitätsbewertung bestimmt ist, ist das ein expliziter Hochrisiko-Anwendungsfall. ' +
      'Ausnahme: reine Finanzbetrugserkennung ist hiervon ausgenommen.',
    examples: [
      'KI berechnet eine Bonitätskennzahl und schlägt auf dieser Basis Kreditlimit oder Zinssatz für Privatkunden vor.',
      'Automatisierte Bonitätsentscheidungsvorschläge, die faktisch übernommen werden.',
      'Nur Betrugserkennung (z. B. Transaktionsanomalien) -> eher Nein hier.',
    ],
  },

  A3_HR_FIN_VERSICHERUNGS_ANBIETER: {
    id: 'A3_HR_FIN_VERSICHERUNGS_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Wird das KI-System bestimmungsgemäß für Risikobewertung und Preisbildung bei Lebens-/Krankenversicherung natürlicher Personen verwendet?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_ANBIETER',
    info:
      'Preis-/Risikobewertung in Lebens- und Krankenversicherung für natürliche Personen ist ein expliziter Hochrisiko-Anwendungsfall.',
    examples: [
      'Preisgestaltung/Versicherungswesen-Assistenz, die Prämien oder Annahme beeinflusst.',
      'Risikoklassifizierung für Lebens-/Krankenversicherung.',
    ],
  },

  A3_ANBIETER: {
    id: 'A3_ANBIETER',
    type: 'question',
    cluster: 'AI Act',
    label:'Keiner der vorherigen Anhang-III/Art.-6-Auslöser hat eindeutig gegriffen: Liegt trotzdem ein Hochrisiko-Fall vor, der dokumentiert werden muss?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_HR_ANBIETER',
    no: 'A3_KEIN_HR_PRUEFUNG',
    info:
      'Bei Ja wird konservativ als Hochrisiko weitergegangen. Die Begründung/Abgrenzung (Anhang III/Art. 6) ist auditfähig zu dokumentieren.',
    examples: [
      'Der Anwendungsfall fällt möglicherweise in einen Anhang-III-Bereich, die im Fragebaum nicht explizit abgebildet ist.',
      'Compliance stuft den Fall (vorläufig) als Hochrisiko ein, die Begründung muss aber noch formalisiert werden.',
      'Unsicherheit: konservativ Ja wählen -> Review-Protokoll + Klassifikationsbegründung erstellen.',
    ],
  },

  A3_HR_ANBIETER: {
    id: 'A3_HR_ANBIETER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Hochrisiko-KI -> Hochrisiko-Pflichten anwenden.',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: ['KI_HR_ANBIETER', 'KI_KONFORMITAET_UND_DOKU', 'KI_REGISTRIERUNG_UND_KENNZEICHNUNG', 'KI_UEBERWACHUNG_NACH_INVERKEHRBRINGEN_ART_72', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'Das System ist als Hochrisiko-KI eingestuft. Damit greifen die umfangreichen Pflichten (u. a. Risiko-, Daten- und Governance-Anforderungen).',
    examples: [
      'KI-System zur Bewertung der Kreditwürdigkeit natürlicher Personen (z. B. für Kreditvergabe, Kreditlimit oder Konditionen).',
      'Modelle mit erheblicher Wirkung auf Zugang zu Finanzprodukten.',
    ],
  },

  // AI Act – Hochrisiko (Anhang III / Art. 6) – Betreiber

  A3_HR_ANHANG_III_DOMAENE_BETREIBER_FINANZ: {
    id: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_FINANZ',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft der Anhang-III-Bereich „Finanzen“ zu?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_FIN_KREDIT_BETREIBER',
    no: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_SICHERHEITSBAUTEIL',
    info:
      'Wenn dieser Bereich zutrifft, ist Hochrisiko sehr wahrscheinlich. Bei Unsicherheit konservativ Ja wählen und Review dokumentieren.',
    examples: [
      'Kreditwürdigkeits-/Bonitätsbewertung natürlicher Personen.',
      'Preis-/Risikobewertung für Lebens- oder Krankenversicherung.',
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_BETREIBER_SICHERHEITSBAUTEIL: {
    id: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_SICHERHEITSBAUTEIL',
    type: 'question',
    cluster: 'AI Act',
    label: 'Ist das KI-System ein Sicherheitsbauteil oder Teil eines Produkts nach Art. 6?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_HR_BETREIBER',
    no: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_BIOMETRIE',
    info:
      'Ein Sicherheitsbauteil ist eine (Hard-/Soft-)Komponente eines Produkts, die eine Schutzfunktion erfüllt oder für die sichere Verwendung wesentlich ist',
    examples: [
      'KI als sicherheitsrelevante Komponente in einem regulierten Produkt (z. B. Steuerung/Überwachung einer Schutzfunktion).',
      'KI trifft/unterstützt Entscheidungen, die die sichere Betriebsführung eines Geräts unmittelbar beeinflussen (z. B. Notabschaltung, Kollisionsvermeidung, Schutz vor Überhitzung).',
      'KI ist Teil eines Systems, das für die Konformitätsbewertung als sicherheitskritisch eingestuft ist (z. B. als „safety function“ im technischen Dossier).',
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_BETREIBER_BIOMETRIE: {
    id: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_BIOMETRIE',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft der Anhang-III-Bereich „Biometrie“ zu?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_BETREIBER',
    no: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_KRIT_INFRA',
    examples: [
      'Biometrische Identifizierung oder biometrische Kategorisierung natürlicher Personen.'
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_BETREIBER_KRIT_INFRA: {
    id: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_KRIT_INFRA',
    type: 'question',
    cluster: 'AI Act',
    label: 'Trifft Anhang-III-Bereich „Kritische Infrastruktur“ zu?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_BETREIBER',
    no: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_BILDUNG_ARBEIT_DIENSTE',
    examples: [
      'KI zur Steuerung/Überwachung kritischer Infrastrukturen mit potenziellen Sicherheitsauswirkungen.'
    ],
  },

  A3_HR_ANHANG_III_DOMAENE_BETREIBER_BILDUNG_ARBEIT_DIENSTE: {
    id: 'A3_HR_ANHANG_III_DOMAENE_BETREIBER_BILDUNG_ARBEIT_DIENSTE',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Trifft einer der Anhang-III-Bereiche zu: Bildung, Beschäftigung/Personalmanagement oder Zugang zu wesentlichen Dienstleistungen?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_HR_BETREIBER',
    no: 'A3_BETREIBER',
    info:
      'Diese Sammelfrage reduziert Falsch Negative, wenn der Anwendungsfall nicht „Finanzen“ ist, aber trotzdem in Anhang III fallen kann.',
    examples: [
      'Bildung: Bewertung/Zulassung/Prüfungsentscheidungen.',
      'Beschäftigung: Recruiting, Beförderung, Leistungsbewertung.',
      'Wesentliche Dienstleistungen: KI unterstützt oder beeinflusst maßgeblich Entscheidungen über Zugang/Anspruch zu zentralen Leistungen (z. B. Kredit/Versicherung, Wohnraum, Sozialleistungen) oder erstellt Einstufungen, die zu erheblichen Nachteilen führen können.',
    ],
  },

  A3_HR_FIN_KREDIT_BETREIBER: {
    id: 'A3_HR_FIN_KREDIT_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Wird das KI-System bestimmungsgemäß für Kreditwürdigkeitsprüfung/Bonitätsbewertung natürlicher Personen verwendet (außer reine Finanzbetrugserkennung)?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_HR_FIN_VERSICHERUNGS_BETREIBER',
    info:
      'Wenn das System für Kreditwürdigkeits-/Bonitätsbewertung bestimmt ist, ist das ein expliziter Hochrisiko-Anwendungsfall. ' +
      'Ausnahme: reine Finanzbetrugserkennung ist hiervon ausgenommen.',
    examples: [
      'KI berechnet eine Bonitätskennzahl und schlägt auf dieser Basis Kreditlimit oder Zinssatz für Privatkunden vor.',
      'Automatisierte Bonitätsentscheidungsvorschläge, die faktisch übernommen werden.',
      'Nur Betrugserkennung (z. B. Transaktionsanomalien) -> eher Nein hier.',
    ],
  },

  A3_HR_FIN_VERSICHERUNGS_BETREIBER: {
    id: 'A3_HR_FIN_VERSICHERUNGS_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Wird das KI-System bestimmungsgemäß für Risikobewertung und Preisbildung bei Lebens-/Krankenversicherung natürlicher Personen verwendet?',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_BETREIBER',
    info:
      'Preis-/Risikobewertung in Lebens- und Krankenversicherung für natürliche Personen ist ein expliziter Hochrisiko-Anwendungsfall.',
    examples: [
      'Preisgestaltung/Versicherungswesen-Assistenz, die Prämien oder Annahme beeinflusst.',
      'Risikoklassifizierung für Lebens-/Krankenversicherung.',
    ],
  },

  A3_BETREIBER: {
    id: 'A3_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label: 'Keiner der vorherigen Anhang-III/Art.-6-Trigger hat eindeutig gegriffen: Liegt trotzdem ein Hochrisiko-Fall vor (z. B. andere Anhang-III-Bereiche), der dokumentiert werden muss?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_KEIN_HR_PRUEFUNG',
    info:
      'Bei Ja wird konservativ als Hochrisiko weitergegangen. Die Begründung/Abgrenzung (Anhang III/Art. 6) ist auditfähig zu dokumentieren.',
    examples: [
      'Der Einsatzkontext könnte trotz negativer Auslöser in eine Hochrisiko-Kategorie fallen (z. B. nicht abgedeckte Anhang-III-Bereiche).',
      'Interne Vorprüfung sieht Hochrisiko-Indizien, aber die formale Einstufung fehlt noch.',
      'Unsicherheit: konservativ Ja wählen -> Review-Protokoll + Klassifikationsbegründung erstellen.',
    ],
  },

  A3_HR_BETREIBER: {
    id: 'A3_HR_BETREIBER',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Hochrisiko-KI -> Hochrisiko-Pflichten anwenden.',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: ['KI_HR_BETREIBER', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'Das System ist als Hochrisiko-KI eingestuft. Damit greifen die umfangreichen Pflichten (u. a. Risiko-, Daten- und Governance-Anforderungen).',
    examples: [
      'KI-System zur Bewertung der Kreditwürdigkeit natürlicher Personen (z. B. für Kreditvergabe, Kreditlimit oder Konditionen).',
      'Modelle mit erheblicher Wirkung auf Zugang zu Finanzprodukten.',
    ],
  },

  // AI Act – GRFA (Art. 27)

  A3_GRFA_HEUR_ZUGANG_WESENTLICHE_DIENSTE: {
    id: 'A3_GRFA_HEUR_ZUGANG_WESENTLICHE_DIENSTE',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Kann das System (direkt oder faktisch) den Zugang zu wesentlichen Dienstleistungen/Chancen beeinflussen?',
    reference: 'EU AI Act (2024), Art. 27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    yes: 'A3_GRFA_HEUR_DISKRIMINIERUNG',
    no: 'A3_GRFA_HEUR_DISKRIMINIERUNG',
    info:
      'GRFA-Risikoindikator: Wenn Ergebniss/Entscheidungszugang beeinflusst wird, ist Grundrechtsimpact plausibel.',
    examples: [
      'Kreditentscheidung/Limit/Konditionen für natürliche Personen.',
      'Preisgestaltung/Versicherungswesen mit Einfluss auf Prämie/Annahme.',
    ],
  },

  A3_GRFA_HEUR_DISKRIMINIERUNG: {
    id: 'A3_GRFA_HEUR_DISKRIMINIERUNG',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Besteht ein plausibles Diskriminierungs-/Fairness-Risiko?',
    reference: 'EU AI Act (2024), Art. 27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    yes: 'A3_GRFA_HEUR_VULNERABLE_GRUPPEN',
    no: 'A3_GRFA_HEUR_VULNERABLE_GRUPPEN',
    info:
      'GRFA wird oft über Diskriminierungsrisiken ausgelöst (insb. bei Personenentscheidungen).',
    examples: [
      'Features korrelieren mit geschützten Merkmalen.',
      'Historische Daten enthalten strukturelle Verzerrungen.',
    ],
  },

  A3_GRFA_HEUR_VULNERABLE_GRUPPEN: {
    id: 'A3_GRFA_HEUR_VULNERABLE_GRUPPEN',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Sind verletzliche Gruppen betroffen oder ist eine besondere Schutzbedürftigkeit plausibel?',
    reference: 'EU AI Act (2024), Art. 27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    yes: 'A3_GRFA_HEUR_AUTOMATISIERUNGSGRAD',
    no: 'A3_GRFA_HEUR_AUTOMATISIERUNGSGRAD',
    info:
      'Je höher Schutzbedürftigkeit, desto eher GRFA konservativ ansetzen.',
    examples: [
      'Besonders schutzbedürftige Kundengruppen, finanzielle Notlagen, geringe Digitalkompetenz.',
    ],
  },

  A3_GRFA_HEUR_AUTOMATISIERUNGSGRAD: {
    id: 'A3_GRFA_HEUR_AUTOMATISIERUNGSGRAD',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Werden Empfehlungen typischerweise übernommen oder sind Kontrollmöglichkeiten begrenzt?',
    reference: 'EU AI Act (2024), Art. 27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    yes: 'A3_GRFA_TRIGGER_BETREIBER',
    no: 'A3_GRFA_TRIGGER_BETREIBER',
    info:
      'Wenn die KI faktisch entscheidungsleitend ist, steigt das Grundrechtsrisiko.',
    examples: [
      'Hohe Übernahmequote ohne substanzielle Prüfung.',
      'Begrenzte Erklärbarkeit/Anfechtbarkeit für Betroffene.',
    ],
  },

  A3_GRFA_TRIGGER_BETREIBER: {
    id: 'A3_GRFA_TRIGGER_BETREIBER',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Ist für diesen Hochrisiko Anwendungsfall eine Grundrechts-Folgenabschätzung (GRFA) nach Art. 27 erforderlich?',
    reference: 'EU AI Act (2024), Art. 27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    yes: 'A3_HR_BETREIBER_GRFA',
    no: 'A3_HR_BETREIBER_OHNE_GRFA',
    info:
      'GRFA ist nicht auf Finanzfälle beschränkt. Sie ist kontextabhängig zu prüfen, z. B. bei Hochrisiko-Anwendungsfällen nach Anhang III oder wenn der Einsatz erhebliche Auswirkungen auf Grundrechte haben kann. ' +
      'Auch wenn GRFA nicht erforderlich ist, muss die Pflichtprüfung (Notiz/Begründung) auditfähig dokumentiert werden.',
    examples: [
      'Ja: Kreditwürdigkeits-/Bonitätsbewertung oder Underwriting in Lebens-/Krankenversicherung (Anhang III).',
      'Ja: Hochrisiko-System mit erheblicher Wirkung auf den Zugang zu wesentlichen Dienstleistungen, wenn Grundrechtsrisiken plausibel sind.',
      'Nein: Nach dokumentierter Prüfung keine zusätzliche GRFA-Pflicht – Notiz/Begründung liegt vor.',
    ],
  },

  W_KI_GRFA_REVIEW: {
    id: 'W_KI_GRFA_REVIEW',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'GRFA: Konservatives Review erforderlich.',
    reference: 'EU AI Act (2024), Art. 27',
    referenceUrl: EU_AI_ACT_LINKS.ART_27,
    obligations: ['KI_GRFA_PFLICHTPRUEFUNG_ART_27'],
    next: 'A3_HR_BETREIBER_GRFA',
    info:
      'Mindestens ein GRFA-Auslöser wurde bejaht. Wenn unsicher: konservativ als GRFA erforderlich weiterprüfen, bis Review abgeschlossen ist.',
  },

  A3_HR_BETREIBER_GRFA: {
    id: 'A3_HR_BETREIBER_GRFA',
    type: 'leaf',
    cluster: 'AI Act',
    label:
      'Hochrisiko-KI -> Betreiberpflichten anwenden (inkl. GRFA nach Art. 27).',
    reference: 'EU AI Act (2024), Art. 26–27',
    referenceUrl: EU_AI_ACT_LINKS.ART_26,
    obligations: ['KI_HR_BETREIBER', 'KI_HR_GRUNDRECHTE_FOLGENABSCHAETZUNG_ART_27', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'GRFA ist erforderlich: Neben den Betreiberpflichten sind GRFA-Dokumentation, Review/Freigabe und Maßnahmen-Tracking umzusetzen und nachzuweisen.',
  },

  A3_HR_BETREIBER_OHNE_GRFA: {
    id: 'A3_HR_BETREIBER_OHNE_GRFA',
    type: 'leaf',
    cluster: 'AI Act',
    label:
      'Hochrisiko-KI -> Betreiberpflichten anwenden (GRFA nicht erforderlich – Pflichtprüfung dokumentieren).',
    reference: 'EU AI Act (2024), Art. 26–27',
    referenceUrl: EU_AI_ACT_LINKS.ART_26,
    obligations: ['KI_HR_BETREIBER', 'KI_GRFA_PFLICHTPRUEFUNG_ART_27','KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'GRFA ist nicht erforderlich: Es wird kein vollständiges GRFA-Paket ausgelöst, aber die GRFA-Pflichtprüfung (Notiz/Begründung) ist auditfähig nachzuweisen.',
  },

  // AI Act – Kein Hochrisiko & Transparenz (Art. 50)

  A3_KEIN_HR_PRUEFUNG: {
    id: 'A3_KEIN_HR_PRUEFUNG',
    type: 'question',
    cluster: 'AI Act',
    label:
      'Kein Hochrisiko festgestellt: Ist die Einstufung nachvollziehbar in einem entsprechenden Dokument begründet?',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    yes: 'A4_TRANSPARENZ_ANWENDBAR',
    no: 'A4_TRANSPARENZ_ANWENDBAR',
    info:
      'Art. 50 gilt nicht pauschal für Nicht-Hochrisiko. Bevor Transparenz geprüft wird, sollte die Nicht-Hochrisiko-Einstufung nachvollziehbar dokumentiert sein.',
    examples: [
      'Kurzbegründung inkl. Zweckbestimmung, Nutzerkreis, Ergebniswirkung.',
      'Anhang III-Check wurde durchgeführt und abgelegt.',
    ],
  },

  A4_TRANSPARENZ_ANWENDBAR: {
    id: 'A4_TRANSPARENZ_ANWENDBAR',
    type: 'question',
    cluster: 'AI Act',
    label: 'Interagiert das System direkt mit natürlichen Personen oder erzeugt es synthetische Inhalte (Text/Bild/Audio/Video), die gekennzeichnet werden müssen?',
    reference: 'EU AI Act (2024), Art. 50',
    referenceUrl: EU_AI_ACT_LINKS.ART_50,
    yes: 'A4_KEIN_HR_MIT_TRANSPARENZPFLICHTEN',
    no: 'A4_KEIN_HR_NUR_GOVERNANCE_BASIS',
    info:
      'Art. 50 wird typischerweise durch direkte Interaktion mit Personen oder durch synthetische Inhalte (Kennzeichnung) getriggert.',
    examples: [
      'Chatbot/Kundenassistenz, die direkt mit Kunden interagiert.',
      'Generierung von Text/Bild/Audio/Video für externe Nutzung.',
      'Reines internes Tool ohne direkte Interaktion und ohne kennzeichnungspflichtige Outputs.',
    ],
  },

  A4_KEIN_HR_MIT_TRANSPARENZPFLICHTEN: {
    id: 'A4_KEIN_HR_MIT_TRANSPARENZPFLICHTEN',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Kein Hochrisiko -> Art.-50-Transparenzpflichten gelten.',
    reference: 'EU AI Act (2024), Art. 50',
    referenceUrl: EU_AI_ACT_LINKS.ART_50,
    obligations: ['KI_TRANSPARENZ_ART_50'],
    next: 'D0',
    info:
      'Nicht-Hochrisiko bleibt bestehen, aber Transparenzanforderungen gelten aufgrund Interaktion/Inhaltsausgabe. Zusätzlich ist KI-Kompetenz/Kenntnis sicherzustellen.',
    examples: [
      'Kennzeichnung/Hinweis in Benutzeroberfläche, Richtlinie, Nachweis von Schulung/Unterweisung.',
    ],
  },

  A4_KEIN_HR_NUR_GOVERNANCE_BASIS: {
    id: 'A4_KEIN_HR_NUR_GOVERNANCE_BASIS',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Kein Hochrisiko -> keine Art.-50-Trigger -> nur Kenntnis-Pflichten sicherstellen.',
    reference: 'EU AI Act (2024), Art. 4',
    referenceUrl: EU_AI_ACT_LINKS.ART_4,
    obligations: ['KI_KENNTNIS_ART_4'],
    next: 'D0',
    info:
      'Wenn keine Art.-50-Transparenztrigger vorliegen, bleibt als klare AI-Act-Pflicht im Tool die Sicherstellung von KI-Kompetenz/Kenntnis.',
  },

  // AI Act – Warnungen / Inkonsistenzen

  W_KI_HR_UEBERPRUEFUNG: {
    id: 'W_KI_HR_UEBERPRUEFUNG',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Warnung: Hochrisiko-Einstufung unklar -> Review und Dokumentation erforderlich.',
    reference: 'EU AI Act (2024), Art. 6',
    referenceUrl: EU_AI_ACT_LINKS.ART_6,
    obligations: [],
    next: 'ENDE',
    info:
      'Dieser Knoten fordert eine formale Klärung, bevor die Integration weitergeführt wird.',
    examples:
      'Review-Protokoll, Klassifikationsbegründung, ggf. externe Beratung.',
    checkpointText:
      'Checkpoint: Die Hochrisiko-Einstufung ist nicht ausreichend belegt. Bitte Klassifikation (inkl. Zweck, Kontext, Anhang III-Abgleich) nachvollziehbar prüfen und dokumentieren, bevor Sie fortfahren.',
  },

  W_KI_WIDERSPRUCH: {
    id: 'W_KI_WIDERSPRUCH',
    type: 'leaf',
    label: 'Widerspruch erkannt -> Review/Eskalation erforderlich.',
    obligations: [],
    next: 'ENDE',
    info:
      'Inkonsistente Antworten sollten nicht zu stillen Annahmen oder impliziten Herabstufungen führen.',
    examples:
      'Pfad prüfen, Entscheidungen revalidieren, Governance-Gremium einbinden.',
  },

  A3_HR_BETREIBER_FIN: {
    id: 'A3_HR_BETREIBER_FIN',
    type: 'leaf',
    cluster: 'AI Act',
    label: 'Hochrisiko-KI (Finanz, Anhang III, Nr. 5) -> Betreiberpflichten inkl. GRFA anwenden.',
    reference: 'EU AI Act (2024), Anhang III',
    referenceUrl: EU_AI_ACT_LINKS.ANHANG_III,
    obligations: ['KI_HR_BETREIBER', 'KI_HR_GRUNDRECHTE_FOLGENABSCHAETZUNG_ART_27', 'KI_MELDUNG_SCHWERWIEGENDER_VORFAELLE_ART_73'],
    next: 'D0',
    info:
      'GRFA ist nicht auf Finanzfälle beschränkt; sie ist kontextabhängig zu prüfen (Art. 27). ' +
      'Der Entscheidungsbaum führt deshalb eine separate GRFA-Entscheidung durch und löst die vollständigen GRFA-Pflichten nur bei Ja aus. ' +
      'Bei Nein wird zumindest die Pflichtprüfung (Notiz/Begründung) als Nachweis eingefordert.',
  },

  // DORA: optionaler, separater Entscheidungsstrang nach AI-Act-Einschätzung
  D0: {
    id: 'D0',
    type: 'question',
    cluster: 'DORA',
    label: 'Fällt Ihr Unternehmen unter DORA?',
    reference: 'DORA (2022), Art. 2',
    referenceUrl: DORA_LINKS.ART_2,
    yes: 'D1_ART16_B4',
    no: 'ENDE',
    info:
      'DORA gilt nur für Finanzunternehmen im Sinne von Art. 2. Wenn Ihr Unternehmen nicht darunter fällt, wird die DORA-Prüfung nicht weiter durchgeführt.',
    examples: [
      'Ja: Kreditinstitut, Zahlungsinstitut, Wertpapierfirma oder Versicherungsunternehmen.',
      'Nein: Unternehmen außerhalb des Finanzsektors ohne DORA-Anwendungsbereich.',
    ],
  },

  D1_ART16_B4: {
    id: 'D1_ART16_B4',
    type: 'question',
    cluster: 'DORA',
    label: 'Darf für Ihr Unternehmen ein vereinfachter IKT-Risikomanagementrahmen nach Art. 16 angewendet werden?',
    reference: 'DORA (2022), Art. 16',
    referenceUrl: DORA_LINKS.ART_16,
    yes: 'D1_ART16_Y_B4',
    no: 'D1_ART16_N_B4',
    info:
      'Art. 16 ist keine generelle Abstufung nach Größe, sondern eine ausdrücklich geregelte Ausnahme für bestimmte, meist kleinere bzw. ausgenommene Finanzunternehmen. ' +
      'Für diese gelten die detaillierten Anforderungen der Art. 5–15 nicht, stattdessen ist ein vereinfachter IKT-Risikomanagementrahmen zulässig.',
    examples: [
      'Kleine und nicht verflochtene Wertpapierfirma nach den einschlägigen MiFID/IFR-Kriterien.',
      'Zahlungsinstitut, das nach nationaler Umsetzung der PSD2 als „ausgenommenes Zahlungsinstitut“ gilt (z. B. begrenzte Produktpalette / sonstige PSD2-Ausnahmefälle).',
      'E-Geld-Institut, das nach nationaler Umsetzung der E-Geld-Richtlinie als „ausgenommenes E-Geld-Institut“ gilt (z. B. begrenzter Tätigkeitsumfang; nationale Ausnahme).',
      '„Ausgenommenes Institut“ im Sinne der CRD-Ausnahmekategorien, sofern der Mitgliedstaat NICHT die DORA-Ausnahme nach Art. 2 Abs. 4 nutzt und DORA daher anwendbar bleibt.',
      'Kleine Einrichtung der betrieblichen Altersversorgung (EbAV), die als „klein“ nach den einschlägigen EbAV-Vorgaben/Schwellen gilt.',
    ],
  },

  D1_ART16_Y_B4: {
    id: 'D1_ART16_Y_B4',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Art. 16 anwendbar -> vereinfachter IKT-RMF (Minimalanforderungen) umsetzen.',
    reference: 'DORA (2022), Art. 16',
    referenceUrl: DORA_LINKS.ART_16,
    obligations: ['DORA_VEREINFACHTE_BASIS'],
    next: 'B1',
    info:
      'Die Light-Variante ist hier auditfähig, weil sie explizit auf Art. 16 gestützt wird (inkl. Nachweis).',
  },

  D1_ART16_N_B4: {
    id: 'D1_ART16_N_B4',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Art. 16 nicht anwendbar -> abgestufte Basisanforderungen.',
    reference: 'DORA (2022), Art. 4 i. V. m. Art. 5–15',
    referenceUrl: DORA_LINKS.ART_4,
    obligations: ['DORA_BASIS_KRITIKALITAET'],
    next: 'B1',
    info:
    'Eine abgestufte Umsetzung ist zulässig, aber die Begründung muss nachvollziehbar sein: Art. 16 ist NICHT der Rechtsgrund.',
  },

  B1: {
    id: 'B1',
    type: 'question',
    cluster: 'DORA',
    label: 'Unterstützt das KI-System eine kritische oder wichtige Funktion?',
    reference: 'DORA (2022), Art. 3',
    referenceUrl: DORA_LINKS.ART_3,
    yes: 'B1_SCOPE_NACHWEIS',
    no: 'B3',
    info:
      'Diese Frage klärt, ob das KI-System in Prozessen eingesetzt wird, die für das Unternehmen kritisch oder wichtig sind. ' +
      'Davon hängt ab, wie streng die IKT-Risikomanagement- und Resilienzanforderungen aus DORA ausgestaltet werden. ' +
      'Die konkrete Begriffsbestimmung ist in Art. 3 Abs. 22 zu finden.',
    examples: [
      'Kritisch: Zahlungsverkehr, Kreditvergabe, Risikomanagement.',
      'Nicht-kritisch: interne Wissenssuche ohne Kernprozesswirkung.',
    ],
  },

  B1_SCOPE_NACHWEIS: {
    id: 'B1_SCOPE_NACHWEIS',
    type: 'question',
    cluster: 'DORA',
    label: 'Ist die Einstufung als kritische oder wichtige Funktion nachvollziehbar dokumentiert und freigegeben?',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    yes: 'B2',
    no: 'W_DORA_KRITISCHE_FUNKTION_SCOPE_UEBERPRUEFUNG',
    info:
      'Damit die Einstufung auditfähig ist, braucht es eine saubere Herleitung des Geltungsbereichs: ' +
      'Welcher Prozess ist betroffen, welche Abhängigkeiten bestehen und welche Auswirkungs-/Zeit-Toleranzen gelten.',
    examples: [
      'Auswirkungsanalyse inkl. betroffener Services/Prozesse und Business-Verantwortlicher.',
      'RTO/RPO bzw. Stoßtoleranzen (z. B. MTPD) sind dokumentiert und abgestimmt.',
      'Freigabe (Risikomanagement/BCM/Leitungsorgan bzw. zuständiges Gremium) ist versioniert abgelegt.',
    ],
  },
  
  W_DORA_KRITISCHE_FUNKTION_SCOPE_UEBERPRUEFUNG: {
    id: 'W_DORA_KRITISCHE_FUNKTION_SCOPE_UEBERPRUEFUNG',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Nachweis für kritische/wichtige Funktion fehlt -> Dokumentation/Freigabe nachholen.',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    obligations: ['DORA_KRITISCHE_FUNKTION_SCOPE'],
    next: 'B2',
    info:
      'Ohne Geltungsbereich-/Abhängigkeits- und Toleranznachweis ist die Einstufung nicht governance- und auditfähig. ' +
      'Bitte Herleitung dokumentieren und formal freigeben.',
  },  

  B2: {
    id: 'B2',
    type: 'question',
    cluster: 'DORA',
    label: 'Hat das KI-System direkten Einfluss auf operative oder finanzielle Entscheidungen?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B2_H',
    no: 'B2_EFFECTIVE',
    info:
      'Die Frage differenziert innerhalb der kritischen/wichtigen Funktionen, ob das KI-System selbst direkt ' +
      'Entscheidungen trifft oder nur unterstützt. Direkter Einfluss führt zu strengeren Kontrollanforderungen.',
    examples: [
      'Direkt: KI trifft/steuert Kreditentscheidung oder Limite.',
      'Indirekt: KI liefert Vorschläge, die manuell geprüft werden.',
    ],
  },

  B2_H: {
    id: 'B2_H',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Hohe Kritikalität -> DORA-Basis + Resilienztests.',
    reference: 'DORA (2022), Art. 26',
    referenceUrl: DORA_LINKS.ART_26,
    obligations: ['DORA_BASIS', 'DORA_TESTPROGRAMM'],
    next: 'T1_TLPT_APPLIES',
    info:
      'Das System hat hohe Kritikalität und direkten Einfluss auf Entscheidungen. ' +
      'Es gilt mindestens die DORA-Basis plus zusätzliche interne Kontrollen und Überwachung.',
    examples: [
      'Kreditentscheidungs-KI mit unmittelbarer Umsetzung im Kernbankensystem.',
      'Liquiditätssteuerung, bei der KI-Vorschläge automatisiert ausgeführt werden.',
    ],
  },

  B2_EFFECTIVE: {
    id: 'B2_EFFECTIVE',
    type: 'question',
    cluster: 'DORA',
    label: 'Werden KI-Empfehlungen in der Praxis überwiegend ohne substanzielle Prüfung übernommen oder automatisch umgesetzt?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B2_H',
    no: 'B2_COMPLIANCE',
    info:
      'Auch wenn formell ein Mensch entscheidet, kann die KI faktisch entscheidungsleitend sein. ' +
      'Wenn Vorschläge typischerweise übernommen/automatisiert werden, sind stärkere Kontrollen sinnvoll.',
    examples: [
      'Empfehlung wird in >80% der Fälle ohne Abweichung übernommen.',
      'Workflows setzen KI-Vorschläge automatisch um.',
      'Sachbearbeitung prüft systematisch und dokumentiert Abweichungen (Antwort: Nein).',
    ],
  },
  
  B2_COMPLIANCE: {
    id: 'B2_COMPLIANCE',
    type: 'question',
    cluster: 'DORA',
    label: 'Ist der Einsatz compliance-/risiko-/prüfungsnah oder regulatorisch entscheidend?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B2_M_ENH',
    no: 'B2_M',
    info:
      'Wenn der KI-Einsatz Compliance, Risikosteuerung oder Prüf-/Nachweisprozesse beeinflusst, sind die Anforderungen in der Regel strenger umzusetzen: ' +
      'Kontrollen und Nachweise müssen besonders belastbar sein. In solchen Fällen reicht ein schlankes Kontroll-Setup häufig nicht aus.',
    examples: [
      'KI erstellt oder beeinflusst regulatorische Meldungen/Reports (z. B. Aufsichtsreporting, interne Risikoberichte mit Außenwirkung).',
      'KI beeinflusst Kontrollen oder Kontrollnachweise (z. B. welche Fälle geprüft werden, wie Ausnahmen begründet werden, welche Nachweise erzeugt werden).',
      'KI wird in internen Prüfungen/Audits genutzt oder verändert Prüfpfade (z. B. Stichprobenlogik, Risikobewertungen).',
    ],
  },

  B2_M: {
    id: 'B2_M',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Mittlere Kritikalität -> DORA-Basis nach Kritikalität.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS_KRITIKALITAET'],
    next: 'B4',
    info:
      'Das System ist für wichtige Funktionen relevant, trifft aber keine vollautomatischen Entscheidungen. ' +
      'Die DORA-Basis kann abgestuft nach Kritikalität und risikoangemessen umgesetzt werden.',
    examples: [
      'Ein Assistenzsystem, das Empfehlungen oder Vorschläge liefert, die von Sachbearbeitenden geprüft und freigegeben werden, bevor sie umgesetzt werden.',
      'Überwachungs-Dashboards, die Warnungen liefern, ohne automatische Aktionen auszulösen.',
    ],
  },
  
  B2_M_ENH: {
    id: 'B2_M_ENH',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Mittlere Kritikalität -> verstärkte DORA-Basis.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS'],
    next: 'B4',
    info:
      'Auch ohne direkten Entscheidungsdurchgriff können compliance-nahe Einsätze erhöhte Anforderungen auslösen. ' +
      'Hier wird die vollständige DORA-Basis angesetzt (inkl. Governance und Kontrollen).',
    examples: [
      'KI priorisiert/klassifiziert Feststellungen in Kontrolltests oder Audit-Vorbereitung.',
      'KI unterstützt regulatorische Reports, die prüfungsrelevant sind.',
    ],
  },
  

  B3: {
    id: 'B3',
    type: 'question',
    cluster: 'DORA',
    label: 'Wird KI nur unterstützend eingesetzt?',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    yes: 'B3_N',
    no: 'B3_R',
    info:
      'Hier wird geprüft, ob das KI-System zwar eingesetzt wird, aber nur eine nachgeordnete, nicht kritische Rolle spielt. ' +
      'Trotzdem können grundlegende DORA-Anforderungen relevant sein.',
    examples: [
      'KI-gestützte Textbausteinvorschläge für interne Dokumentation.',
      'Ein Chatbot für interne IT-Support-Anfragen.',
    ],
  },

  B3_N: {
    id: 'B3_N',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Nicht-kritische KI-Unterstützung -> DORA-Basis nach Kritikalität.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS_KRITIKALITAET'],
    next: 'B4',
    info:
      'Die KI wird nur unterstützend und nicht in kritischen Kernprozessen eingesetzt. ' +
      'Es gelten grundsätzliche, aber weniger weitreichende IKT-Kontrollen.',
    examples: [
      'Tool zur automatischen Erstellung von Meeting-Notizen.',
      'Interne Empfehlungssysteme ohne direkte Kundenwirkung.',
    ],
  },

  B3_R: {
    id: 'B3_R',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Kritikalität unklar -> konservative Einstufung und Dokumentation.',
    reference: 'DORA (2022), Art. 8',
    referenceUrl: DORA_LINKS.ART_8,
    obligations: ['DORA_BASIS', 'DORA_TESTPROGRAMM'],
    next: 'T1_TLPT_APPLIES',
    info:
      'Wenn die Kritikalität unklar ist, sollte eine konservative Einstufung gewählt und sauber dokumentiert werden. ' +
      'Die DORA-Anforderungen werden eher strenger als zu lax ausgelegt.',
    examples: [
      'Neuartige KI-Anwendung, deren Auswirkung auf den Prozess noch nicht abschließend verstanden ist.',
      'Pilotprojekte mit begrenzter, aber potenziell wachsender Bedeutung.',
    ],
  },

  T1_TLPT_APPLIES: {
    id: 'T1_TLPT_APPLIES',
    type: 'question',
    cluster: 'DORA',
    label: 'Unterliegt Ihr Unternehmen fortgeschrittenen Resilienztests (TLPT) nach DORA (Art. 26–27) bzw. einer entsprechenden behördlichen TLPT-Anordnung?',
    reference: 'DORA (2022), Art. 26–27',
    referenceUrl: DORA_LINKS.ART_26,
    yes: 'T1_TLPT',
    no: 'B4',
    info:
      'TLPT ist nicht automatisch allein wegen Kritikalität fällig. ' +
      'Die Pflicht hängt typischerweise von der Einstufung/Anordnung für das Unternehmen ab. ' +
      'Wenn TLPT nicht gilt, bleibt dennoch ein allgemeines Testprogramm (Art. 24–25) erforderlich.',
    examples: [
      'Unternehmen ist TLPT-pflichtig oder erhält eine entsprechende Aufsichtsanforderung.',
      'TLPT-Planung erfolgt nach dem bedrohungsgeleiteten Ansatz mit definierter Frequenz und Governance.',
    ],
  },

  T1_TLPT: {
    id: 'T1_TLPT',
    type: 'leaf',
    cluster: 'DORA',
    label: 'TLPT erforderlich -> TLPT-Pflichten anwenden (zusätzlich zum Testprogramm).',
    reference: 'DORA (2022), Art. 26–27',
    referenceUrl: DORA_LINKS.ART_26,
    obligations: ['DORA_TLPT'],
    next: 'B4',
    info:
      'Wenn TLPT anwendbar ist, kommen zu den allgemeinen Testprogramm-Pflichten zusätzliche TLPT-spezifische Anforderungen hinzu.',
  },

  B4: {
    id: 'B4',
    type: 'question',
    cluster: 'DORA',
    label: 'Wird das System (ganz oder teilweise) von einem externen IKT-Dienstleister bereitgestellt?',
    reference: 'DORA (2022), Art. 28',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B4_GENAI_LLM_SERVICE',
    no: 'B6',
    info:
      'Diese Frage klärt, ob das KI-System als externer Service (z. B. Cloud-/KI-Plattform) bezogen wird. ' +
      'Das bestimmt, welche DORA-Anforderungen an IKT-Drittanbieter gelten.',
    examples: [
      'Nutzung eines externen LLM-API-Services oder einer KI-Plattform eines Cloud-Großanbieters.',
      'Komplett intern betriebenes Modell ohne externe IKT-Dienstleister (Antwort: Nein).',
    ],
  },

  B4_GENAI_LLM_SERVICE: {
    id: 'B4_GENAI_LLM_SERVICE',
    type: 'question',
    cluster: 'DORA',
    label: 'Wird ein Dienst für generative KI/LLM/Grundlagenmodell (API) genutzt oder ein vergleichbarer externer Dienst für generative KI?',
    reference: 'DORA (2022), Art. 9 / Art. 28–30',
    referenceUrl: DORA_LINKS.ART_9,
    yes: 'W_DORA_GENAI_LLM_KONTROLLEN',
    no: 'B5',
    info:
      'Dieser Pfad beschreibt spezifische Risiken generativer KI (Datenminimierung/Schwärzung, Aufbewahrung, Zusicherungen des Dienstanbieters, Modellversionierung/Änderungsmitteilungen, Prompt-/Antwort-Protokollierung, Sicherheitsfilter, Missbrauchsprävention). ' +
      'Wenn Sie zwar einen externen IKT-Dienst nutzen, aber keinen Dienst für LLM/generative KI, wählen Sie Nein.',
    examples: [
      'Integration eines externen Chat-/Text- oder Bildgenerierungsdienstes per API.',
      'Nutzung eines gehosteten LLM/Grundlagenmodells beim Cloud-Dienstanbieter.',
      'RAG-Chatbot, der Prompts/Kontext an einen externen LLM-Dienst sendet.',
    ],
  },
  
  W_DORA_GENAI_LLM_KONTROLLEN: {
    id: 'W_DORA_GENAI_LLM_KONTROLLEN',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Dienst für generative KI/LLM genutzt -> spezifische Kontrollen für generative KI prüfen/umsetzen.',
    reference: 'DORA (2022), Art. 9 / Art. 28–30',
    referenceUrl: DORA_LINKS.ART_9,
    obligations: ['DORA_DATENUEBERMITTLUNG_EXTERNE_KI_SCHUTZ', 'DORA_GENERATIVE_KI_LLM_ALS_DIENST_KONTROLLEN'],
    next: 'B5',
    info:
      'Dieser Knoten erzeugt zusätzliche Feststellungen/Anforderungen für generative KI/LLM, ohne den DORA-Pfad zu unterbrechen. ' +
      'So werden typische Audit-Lücken (Zusicherung kein Training mit Kundendaten, Versions-/Änderungsmanagement, Protokollierung, Sicherheits- und Missbrauchskontrollen) systematisch adressiert.',
  },  

  B5: {
    id: 'B5',
    type: 'question',
    cluster: 'DORA',
    label: 'Würde ein Ausfall des Dienstleisters kurzfristig eine kritische/wichtige Funktion oder wesentliche regulatorische Pflichten beeinträchtigen?',
    reference: 'DORA (2022), Art. 28–29',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B5_SUBSTITUIERBARKEIT',
    no: 'B5_KONZENTRATION',
    info:
      'Umsetzung von (potenziell) kritisch über Auswirkungen/Abhängigkeit. ' +
      'Wenn ein Ausfall ihre RTO/RPO oder regulatorische Pflichten reißt, ist das ein starker Kritikalitätsindikator.',
    examples: [
      'Single Point of Failure: Ohne Dienst steht ein kritischer Prozess (z. B. Zahlungsverkehr-Teilprozess/Arbeitsablauf zur Bekämpfung von Geldwäsche) still.',
      'Dienst-Ausfall führt zu einem regulatorischen Verstoß (z. B. Kontrollen/Reporting/BCM-Anforderungen nicht erfüllbar).',
      'RTO/RPO sind ohne Anbieter nicht einhaltbar.',
    ],
  },

  B5_SUBSTITUIERBARKEIT: {
    id: 'B5_SUBSTITUIERBARKEIT',
    type: 'question',
    cluster: 'DORA',
    label: 'Gibt es eine realistische Ausstiegs-/Substitutionsmöglichkeit (vertraglich + technisch) innerhalb einer definierten Frist?',
    reference: 'DORA (2022), Art. 28–30',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B5_KONZENTRATION',
    no: 'B5_C',
    info:
      'Ausstieg heißt nicht nur, den Vertrag zu kündigen, sondern tatsächlich migrieren zu können: Datenportabilität, Schnittstellen, Migrationspfad und getestete Abläufe.',
    examples: [
      'Datenportabilität: Export/Transfer von Daten und Konfigurationen ist möglich.',
      'Modellportabilität: Alternative Anbieter- oder On-Premises-Option ist realistisch.',
      'Vertrag: Kündigungs-/Ausstiegs-Rechte, Regeln zu Unterauftragnehmern, Audit-Rechte.',
      'Migration wurde mindestens als Plan (besser: als Test) validiert.',
    ],
  },
  
  B5_KONZENTRATION: {
    id: 'B5_KONZENTRATION',
    type: 'question',
    cluster: 'DORA',
    label: 'Besteht ein Konzentrationsrisiko (gleicher Anbieter für mehrere kritische Dienste/Regionen/BCM-Szenarien)?',
    reference: 'DORA (2022), Art. 28–29',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B5_C',
    no: 'B5_N',
    info:
      'Konzentrationsrisiko entsteht z. B., wenn KI-Anbieter zugleich Datenhaltung, Inferenz und Kernplattform bündelt (gemeinsame Ausfall-Domänen).',
    examples: [
      'Gleicher Cloud-Großanbieters betreibt KI, Datenplattform und zentrale Applikationsschicht.',
      'Gemeinsame Ausfall-Domäne: gleiche Region/Steuerungsebene für mehrere kritische Workloads.',
      'Mehrere kritische Prozesse hängen am selben Anbieter/Vertrag/Unterauftragnehmer.',
    ],
  },

  B5_C: {
    id: 'B5_C',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Pot. kritischer IKT-Drittanbieter -> erweiterte Drittanbieterpflichten.',
    reference: 'DORA (2022), Art. 28',
    referenceUrl: DORA_LINKS.ART_28,
    obligations: ['DORA_DRITTANBIETER_ERWEITERT', 'DORA_DRITTANBIETER_SORGFALTSPRUEFUNG', 'DORA_KRITISCHE_IKT_DRITTANBIETER_AUFSICHTSREGIME'],
    next: 'B5_KRITIKALITAETS_UEBERPRUEFUNG',
    info:
      'Bei (potenziell) kritischen IKT-Drittanbietern gelten erweiterte Anforderungen aus DORA, ' +
      'insbesondere zu Überwachung, Konzentrationsrisiken, Ausstiegsstrategien und ggf. Aufsichtsinteraktion.',
    examples: [
      'Ein großer KI-Dienstleister, über den ein wesentlicher Teil der Kernprozesse läuft.',
      'Ein Cloud-Anbieter, der zentrale Datenhaltung und KI-Ausführung bündelt.',
    ],
  },

  B5_N: {
    id: 'B5_N',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Nicht-kritischer IKT-Drittanbieter -> Standardpflichten.',
    reference: 'DORA (2022), Art. 28',
    referenceUrl: DORA_LINKS.ART_28,
    obligations: ['DORA_DRITTANBIETER_STANDARD', 'DORA_DRITTANBIETER_SORGFALTSPRUEFUNG'],
    next: 'B5_KRITIKALITAETS_UEBERPRUEFUNG',
    info:
      'Der IKT-Dienstleister wird nicht als kritisch eingestuft. Es gelten die normalen DORA-Anforderungen ' +
      'für IKT-Drittanbieter, angemessen zum Risiko.',
    examples: [
      'Externe KI-Komponente für nicht-entscheidungsrelevante Auswertungen.',
      'Dienstleister für vorverarbeitete Datenfeeds ohne direkte Kundenauswirkung.',
    ],
  },

  B5_KRITIKALITAETS_UEBERPRUEFUNG: {
    id: 'B5_KRITIKALITAETS_UEBERPRUEFUNG',
    type: 'question',
    cluster: 'DORA',
    label:
      'Ist die Einstufung dokumentiert und durch das Compliance-Team formal freigegeben?',
    reference: 'DORA (2022), Art. 28–30',
    referenceUrl: DORA_LINKS.ART_28,
    yes: 'B7',
    no: 'W_DORA_DRITTANBIETER_UEBERPRUEFUNG',
    info:
      'Damit die Einstufung governance-tauglich ist, braucht ihr Nachweis und formale Verantwortung (Freigabe).',
    examples: [
      'Abhängigkeitsanalyse inkl. Auswirkungen/RTO/RPO.',
      'Konzentrationsbewertung (gemeinsame Ausfall-Domänen des Anbieters).',
      'Ausstiegs-/Substitutionsplan (besser: getestet).',
      'Formale Freigabe (Risikomanagement/Compliance/Outsourcing) versioniert abgelegt.',
    ],
  },
  
  W_DORA_DRITTANBIETER_UEBERPRUEFUNG: {
    id: 'W_DORA_DRITTANBIETER_UEBERPRUEFUNG',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Drittanbieter-Kritikalität: Review/Dokumentation erforderlich',
    reference: 'DORA (2022), Art. 28–30',
    referenceUrl: DORA_LINKS.ART_28,
    obligations: ['DORA_DRITTANBIETER_KRITIKALITAET_UEBERPRUEFUNG'],
    next: 'B7',
    info:
      'Bitte Einstufung nachholen: Abhängigkeit, Konzentration, Ausstieg (mindestens geplant), plus formale Freigabe.',
  },

  B6: {
    id: 'B6',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Kein externer IKT-Dienstleister -> interne Verantwortung (DORA-Basis).',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: ['DORA_BASIS'],
    next: 'B7',
    info:
      'Das KI-System wird vollständig intern betrieben. Das Unternehmen trägt die volle technische und organisatorische Verantwortung ' +
      'für Betrieb, Sicherheit und Resilienz.',
    examples: [
      'Eigenentwickeltes Modell, das auf eigener Infrastruktur (On-Prem) betrieben wird.',
      'Keine Nutzung externer Plattformen für Training oder Inferenz.',
    ],
  },

  B7: {
    id: 'B7',
    type: 'question',
    cluster: 'DORA',
    label: 'Werden produktive Kunden-, Transaktions- oder andere sensible Daten an externe KI-Dienste übermittelt?',
    reference: 'DORA (2022), Art. 9',
    referenceUrl: DORA_LINKS.ART_9,
    yes: 'B7_S',
    no: 'B7_N',
    info:
      'Diese Frage fokussiert auf den Datenfluss: Werden sensible oder produktive Daten an externe KI-Dienste übermittelt? ' +
      'Davon hängen Anforderungen an Schutzmaßnahmen, Verschlüsselung und vertragliche Regelungen ab.',
    examples: [
      'Senden von Kundendaten an einen externen LLM-Service zur Textanalyse.',
      'Nutzung von Test- oder Dummy-Daten ohne Personenbezug (Antwort: Nein).',
    ],
  },

  B7_S: {
    id: 'B7_S',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Sensible Daten -> Schutzmaßnahmen für externe KI.',
    reference: 'DORA (2022), Art. 9',
    referenceUrl: DORA_LINKS.ART_9,
    obligations: ['DORA_DATENUEBERMITTLUNG_EXTERNE_KI_SCHUTZ'],
    next: 'B7_RUECKFALL',
    info:
      'Werden produktive oder sensible Daten an externe KI übertragen, sind starke Schutzmaßnahmen erforderlich: ' +
      'Datenklassifizierung, Verschlüsselung, Verhinderung von Datenverlust, Protokollierung und klare vertragliche Regelungen.',
    examples: [
      'Übermittlung von Transaktionsdaten an eine externe Anomalie-Erkennung.',
      'Verarbeitung von personenbezogenen Daten über ein externes KI-Modul.',
    ],
  },

  B7_N: {
    id: 'B7_N',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Keine sensiblen Daten -> Basismaßnahmen ausreichend.',
    reference: 'DORA (2022), Art. 6',
    referenceUrl: DORA_LINKS.ART_6,
    obligations: [],
    next: 'B7_RUECKFALL',
    info:
      'Wenn keine produktiven oder kritischen Daten an externe KI übermittelt werden, reichen in der Regel ' +
      'Standard-Sicherheitsmaßnahmen aus. Eine Dokumentation der Annahmen bleibt dennoch wichtig.',
    examples: [
      'Nutzung rein synthetischer Daten für Experimente.',
      'Ausschließliche Offline-Tests ohne Live-Kundendaten.',
    ],
  },
  
  B7_RUECKFALL: {
    id: 'B7_RUECKFALL',
    type: 'question',
    cluster: 'DORA',
    label:
      'Gibt es ein getestetes Ausweichverfahren inkl. RTO/RPO, Rollen, Betriebshandbuch und Entscheidungskriterien?',
    reference: 'DORA (2022), Art. 11–12',
    referenceUrl: DORA_LINKS.ART_11,
    yes: 'B7_RUECKFALL_OK',
    no: 'B7_RUECKFALL_LUECKE',
    info:
      'Entscheidend ist nicht wir können theoretisch, sondern ob ein Ausweichverfahren ' +
      'mit klaren Rollen, Betriebshandbuch und getesteten Zeiten (RTO/RPO) wirklich funktioniert.',
    examples: [
      'Betriebshandbuch inkl. Stopp-Kriterien (z. B. harte Abschaltkriterien bei Qualitäts-/Verfügbarkeitsproblemen).',
      'RTO/RPO sind definiert und im Test eingehalten.',
      'Rollen/Vertretung und Eskalationspfade sind klar.',
    ],
  },
  
  B7_RUECKFALL_OK: {
    id: 'B7_RUECKFALL_OK',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Ausweichverfahren vorhanden -> BCM Anforderungen erfüllt.',
    reference: 'DORA (2022), Art. 11–12',
    referenceUrl: DORA_LINKS.ART_11,
    next: 'B8',
    info:
      'Nachweis sollte vorhanden sein: Betriebshandbuch, BCM-Mapping und Testprotokolle (inkl. Datum, Geltungsbereich, Ergebnis).',
  },
  
  B7_RUECKFALL_LUECKE: {
    id: 'B7_RUECKFALL_LUECKE',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Ausweichverfahren fehlt -> BCM-Mapping & Test erforderlich.',
    reference: 'DORA (2022), Art. 11–12',
    referenceUrl: DORA_LINKS.ART_11,
    obligations: ['DORA_BCM_AUSWEICHVERFAHREN'],
    next: 'B8',
    info:
      'Ohne getesteten Ausweichverfahren besteht das Risiko, dass ein KI-/Anbieter-Ausfall kritische Prozesse stoppt ' +
      'oder regulatorische Pflichten verletzt.',
  },  

  B8: {
    id: 'B8',
    type: 'question',
    cluster: 'DORA',
    label: 'Verändert sich das Modell im Betrieb?',
    reference: 'DORA (2022), Art. 9',
    referenceUrl: DORA_LINKS.ART_9,
    yes: 'B8_D',
    no: 'B8_S',
    info:
      'Hier wird geprüft, ob das Modell sich im Betrieb verändert (dynamisches Modell) oder statisch bleibt. ' +
      'Dynamische Modelle erfordern stärkere Prozesse für Änderungsmanagement und Überwachung.',
    examples: [
      'Regelmäßiges Neutraining mit neuen Daten im Monatszyklus.',
      'Online-Lernen, das Gewichte im laufenden Betrieb anpasst.',
      'Statische Modelle mit seltenen, klar geplanten Releases (Antwort: Nein).',
    ],
  },

  B8_D: {
    id: 'B8_D',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Dynamisches Modell -> Überwachung/Änderungsmanagement + Vorfallanagement.',
    reference: 'DORA (2022), Art. 17',
    referenceUrl: DORA_LINKS.ART_17,
    obligations: ['DORA_MODELLBETRIEB_UEBERWACHUNG', 'DORA_VORFALLMANAGEMENT', 'DORA_MELDUNG_ERHEBLICHER_CYBERBEDROHUNGEN'],
    next: 'C1_KOMMUNIKATION_BENOETIGT',
    info:
      'Bei dynamischen Modellen sind strukturierte Änderungs-, Freigabe- und Überwachungsprozesse zwingend: ' +
      'Änderungs-Überwachung, Performance-Checks, Dokumentation von Änderungen und klare Eskalationswege.',
    examples: [
      'Ein Betrugserkennungs-Modell, das regelmäßig mit aktuellen Transaktionsdaten nachtrainiert wird.',
      'Ein Empfehlungssystem, das kontinuierlich Online-Lernen nutzt.',
    ],
  },

  B8_S: {
    id: 'B8_S',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Statisches Modell -> Basismaßnahmen + Vorfallanagement.',
    reference: 'DORA (2022), Art. 17',
    referenceUrl: DORA_LINKS.ART_17,
    obligations: ['DORA_BASIS_KRITIKALITAET', 'DORA_VORFALLMANAGEMENT', 'DORA_MELDUNG_ERHEBLICHER_CYBERBEDROHUNGEN'],
    next: 'C1_KOMMUNIKATION_BENOETIGT',
    info:
      'Auch bei statischen Modellen sind Freigaben und Änderungsmanagement erforderlich. ' +
      'Da Updates typischerweise seltener stattfinden, können Prüf- und Release-Aktivitäten in der Regel mit geringerer Taktung geplant werden, ' +
      'wichtig ist aber, dass jede Änderung nachvollziehbar dokumentiert und vor Produktivsetzung geprüft wird. Zusätzlich muss ein funktionierendes Vorfallmanagement etabliert sein.',
    examples: [
      'Ein einmal trainiertes Klassifikationsmodell, das nur bei Bedarf (z. B. jährlich) aktualisiert wird.',
      'Ein statisches Regel-/ML-Modell mit klar definierten Release-Zyklen.',
    ],
  },

  C1_KOMMUNIKATION_BENOETIGT: {
    id: 'C1_KOMMUNIKATION_BENOETIGT',
    type: 'question',
    cluster: 'DORA',
    label:
      'Hat ein Ausfall/Vorfall potenziell Kunden-, Markt- oder Reputationsauswirkungen (sodass externe Kommunikation erforderlich sein kann)?',
    reference: 'DORA (2022), Art. 14 i. V. m. Art. 17',
    referenceUrl: DORA_LINKS.ART_14,
    yes: 'W_DORA_KOMMUNIKATION_ERFORDERLICH',
    no: 'ENDE',
    info:
      'DORA verlangt Kommunikationspläne/-strategien für interne und externe Stakeholder. ' +
      'Wenn Kunden/Öffentlichkeit betroffen sein können, sollte ein belastbarer Kommunikationsplan inkl. Freigaben/Schweregraden existieren.',
    examples: [
      'Serviceausfall betrifft Kundentransaktionen oder wesentliche Kundenprozesse.',
      'Vorfall hat potenziellen Markt-/Reputationsauswirkungen (z. B. Datenabfluss, Betrug, großflächiger Ausfall).',
      'Kundenbeschwerden/Hotline-Volumen oder Medieninteresse ist plausibel.',
    ],
  },
  
  W_DORA_KOMMUNIKATION_ERFORDERLICH: {
    id: 'W_DORA_KOMMUNIKATION_ERFORDERLICH',
    type: 'leaf',
    cluster: 'DORA',
    label: 'Kommunikationspläne/-strategie nach DORA Art. 14 erforderlich.',
    reference: 'DORA (2022), Art. 14',
    referenceUrl: DORA_LINKS.ART_14,
    obligations: ['DORA_KOMMUNIKATIONSPLAENE'],
    next: 'ENDE',
    info:
      'Ergänzt Vorfall-Betriebshandbuch um Kommunikationsplan (intern/extern), Freigaben, Zielgruppenlogik und Templates.',
  },

  ENDE: {
    id: 'ENDE',
    type: 'leaf',
    label: 'Analyse beendet.',
    obligations: [],
    checkpointText:
      'Sie können nun einen PDF-Export herunterladen. Er enthält den Pfad (Schritte/Antworten), die noch nicht umgesetzten Anforderungen (falls vorhanden) und offene Pflichtenpakete. ' +
      'Setzen Sie die noch offenen Anforderungen zuerst um, damit das KI-System sicher und kontrolliert in Ihre Prozesse und Systeme integriert werden kann.',
  },
};

const LOCALIZED_MODEL_CACHE = new Map();

/**
 * Merged nur die textrelevanten Felder eines Knotens aus dem Locale-Overlay.
 */
function mergeDecisionNode(node, translation) {
  if (!translation || typeof translation !== 'object') return node;

  return {
    ...node,
    label: translation.label ?? node.label,
    info: translation.info ?? node.info,
    examples: translation.examples ?? node.examples,
    checkpointText: translation.checkpointText ?? node.checkpointText,
    yesLabel: translation.yesLabel ?? node.yesLabel,
    noLabel: translation.noLabel ?? node.noLabel,
    reference: translation.reference ?? node.reference,
  };
}

/**
 * Merged nur die textrelevanten Felder eines Requirement-Items aus dem Locale-Overlay.
 */
function mergeObligationItem(item, translation) {
  if (!translation || typeof translation !== 'object') return item;

  return {
    ...item,
    question: translation.question ?? item.question,
    todo: translation.todo ?? item.todo,
    info: translation.info ?? item.info,
    examples: translation.examples ?? item.examples,
    reference: translation.reference ?? item.reference,
  };
}

/**
 * Ersetzt gespeicherte Basis-Links durch sprachspezifische Framework-Links.
 */
function localizeReferenceFields(entry, locale) {
  if (!entry || typeof entry !== 'object') return entry;

  return {
    ...entry,
    referenceUrl: localizeLegalReferenceUrl(entry.referenceUrl, locale),
  };
}

/**
 * Baut für eine Sprache ein lokalisiertes Modell und fällt für fehlende Keys auf die Basisdaten zurück.
 */
export function getLocalizedModel(locale = DEFAULT_LOCALE) {
  if (LOCALIZED_MODEL_CACHE.has(locale)) {
    return LOCALIZED_MODEL_CACHE.get(locale);
  }

  const messages = getModelMessages(locale) ?? {};
  const localizedDecisionTree = Object.fromEntries(
    Object.entries(baseDecisionTree).map(([id, node]) => [
      id,
      localizeReferenceFields(
        mergeDecisionNode(node, messages?.decisionTree?.[id]),
        locale
      ),
    ])
  );

  const localizedObligationsCatalog = Object.fromEntries(
    Object.entries(baseObligationsCatalog).map(([pkgKey, pkg]) => {
      const pkgTranslation = messages?.obligationsCatalog?.[pkgKey];
      const itemTranslations = pkgTranslation?.items ?? {};

      return [
        pkgKey,
        {
          ...localizeReferenceFields(pkg, locale),
          label: pkgTranslation?.label ?? pkg.label,
          regulation: pkgTranslation?.regulation ?? pkg.regulation,
          articles: pkgTranslation?.articles ?? pkg.articles,
          items: (pkg.items ?? []).map((item) =>
            localizeReferenceFields(
              mergeObligationItem(item, itemTranslations?.[item.id]),
              locale
            )
          ),
        },
      ];
    })
  );

  const localizedModel = {
    decisionTree: localizedDecisionTree,
    obligationsCatalog: localizedObligationsCatalog,
  };

  LOCALIZED_MODEL_CACHE.set(locale, localizedModel);
  return localizedModel;
}

export function getLocalizedDecisionTree(locale = DEFAULT_LOCALE) {
  return getLocalizedModel(locale).decisionTree;
}

export function getLocalizedObligationsCatalog(locale = DEFAULT_LOCALE) {
  return getLocalizedModel(locale).obligationsCatalog;
}

/**
 * Normalisiert den Modellzugriff auf Basisdaten, Sprache oder ein bereits lokalisiertes Modell.
 */
function resolveModel(modelOrLocale) {
  if (typeof modelOrLocale === 'string') {
    return getLocalizedModel(modelOrLocale);
  }

  if (modelOrLocale?.decisionTree && modelOrLocale?.obligationsCatalog) {
    return modelOrLocale;
  }

  return {
    decisionTree: baseDecisionTree,
    obligationsCatalog: baseObligationsCatalog,
  };
}

/**
 * Aggregiert aus den Leaf-Knoten im Pfad interne "Locks" (z. B. Hochrisiko erreicht)
 * Diese Locks werden in validateNextNode genutzt, um spätere, widersprüchliche Navigation zu blockieren
 */
function deriveConsistencyLocks({ pathIds, decisionTree }) {
  const locks = new Set();

  const ids = Array.isArray(pathIds) ? pathIds : [];
  const HIGH_RISK_KEYS = new Set(['KI_HR_ANBIETER', 'KI_HR_BETREIBER']);

  for (const id of ids) {
    if (!id || typeof id !== 'string') continue;
    if (id.includes('__req__')) continue; // ignore requirement steps/summaries

    const node = decisionTree[id];
    if (!node || node.type !== 'leaf') continue;

    const obligations = Array.isArray(node.obligations) ? node.obligations : [];
    if (obligations.some((k) => HIGH_RISK_KEYS.has(k))) {
      locks.add(CONSISTENCY_LOCKS.KI_HOCHRISIKO);
    }
  }

  return locks;
}

/**
 * Ungültige nextIds werden auf einen Review-Knoten (W_KI_WIDERSPRUCH) umgeleitet
 * Locks (z. B. Hochrisiko) verhindern Down-Staging oder inkonsistente Pfadfortsetzung
 * Mischrollen-Detektor oder konservative Review-Gates
 *
 * Hinweis: validateNextNode entscheidet ausschließlich die nächste Node-ID; Persistenz/State liegt in der UI
 */
export function validateNextNode({ currentId, answer, nextId, answers, pathIds, model }) {
  const { decisionTree } = resolveModel(model);
  const locks = deriveConsistencyLocks({ answers, pathIds, decisionTree });

  if (currentId === 'A2') {
    if (answer === 'yes') nextId = 'A2_Y';
    else if (answer === 'no') nextId = 'A2_ROLLE';
  }

  if (currentId === 'A3_ANBIETER') {
    nextId = answer === 'yes' ? 'A3_HR_ANBIETER' : 'A3_KEIN_HR_PRUEFUNG';
  }

  if (currentId === 'A3_BETREIBER') {
    nextId = answer === 'yes' ? 'A3_GRFA_TRIGGER_BETREIBER' : 'A3_KEIN_HR_PRUEFUNG';
  }

  if (currentId === 'A3_KEIN_HR_PRUEFUNG') {
    nextId = 'A4_TRANSPARENZ_ANWENDBAR';
  }

  if (currentId === 'A2_ROLLE_KONFORMITAETSARTEFAKTE') {
    const yes = (k) => answers?.[k] === 'yes';
    const no = (k) => answers?.[k] === 'no';

    const mixedByControlAndProvider =
      yes('A2_ROLLE_BETRIEB_KONTROLLE') &&
      (yes('A2_ROLLE_BEREITSTELLUNG') || yes('A2_ROLLE_WESENTLICHE_AENDERUNG'));

    if (mixedByControlAndProvider) return { nextId: 'A2_ROLLE_SCOPE_UNSICHER' };

    if (yes('A2_ROLLE_KONFORMITAETSARTEFAKTE')) return { nextId: 'A2_ROLLE_SCOPE_ANBIETER' };
    if (no('A2_ROLLE_KONFORMITAETSARTEFAKTE')) return { nextId: 'A2_ROLLE_SCOPE_BETREIBER' };

    return { nextId: 'A2_ROLLE_SCOPE_UNSICHER' };
  }

  if (currentId === 'A3_GRFA_TRIGGER_BETREIBER' && answer === 'no') {
    const heurIds = [
      'A3_GRFA_HEUR_ZUGANG_WESENTLICHE_DIENSTE',
      'A3_GRFA_HEUR_DISKRIMINIERUNG',
      'A3_GRFA_HEUR_VULNERABLE_GRUPPEN',
      'A3_GRFA_HEUR_AUTOMATISIERUNGSGRAD',
    ];

    const anyTriggerYes = heurIds.some((k) => answers?.[k] === 'yes');
    if (anyTriggerYes) return { nextId: 'W_KI_GRFA_REVIEW' };
  }

  // 4) Wenn nextId fehlt oder ungültig ist: erst aus dem aktuellen Node ableiten, sonst Widerspruch
  if (!nextId || !decisionTree[nextId]) {
    const node = decisionTree?.[currentId];

    let derivedNextId;
    if (node?.type === 'question') {
      derivedNextId = answer === 'yes' ? node.yes : node.no;
    } else if (node?.type === 'leaf') {
      derivedNextId = node.next;
    }

    if (derivedNextId && decisionTree[derivedNextId]) {
      nextId = derivedNextId;
    } else {
      return { nextId: 'W_KI_WIDERSPRUCH' };
    }
  }

  // 5) Konsistenz-Lock: Deeskalation blocken
  if (locks.has(CONSISTENCY_LOCKS.KI_HOCHRISIKO)) {
    const isA3Decision = currentId === 'A3_ANBIETER' || currentId === 'A3_BETREIBER';

    const isTryingToDeescalate =
      (isA3Decision && answer === 'no') ||
      nextId === 'A3_KEIN_HR_PRUEFUNG';

    if (isTryingToDeescalate) {
      return { nextId: 'W_KI_WIDERSPRUCH' };
    }
  }

  return { nextId };
}


/**
 * Leitet für eine konkrete Requirement-Instanz (leafId__req__...) die canonicalId ab
 * Falls das Item im obligationsCatalog eine canonicalId definiert, wird diese genutzt;
 * andernfalls fällt die Funktion auf den Instanz-Suffix (pkgKey__itemId) zurück
 */
export function getCanonicalIdForRequirementInstance(instanceId, model) {
  const { obligationsCatalog } = resolveModel(model);
  if (!instanceId || !instanceId.includes('__req__') || instanceId.includes('__req__summary')) return null;

  const suffix = instanceId.split('__req__')[1];
  if (!suffix) return null;

  const parts = suffix.split('__');
  const pkgKey = parts.shift();
  const itemId = parts.join('__');

  const pkg = obligationsCatalog[pkgKey];
  const item = pkg?.items?.find((it) => it && typeof it === 'object' && it.id === itemId);

  return item && typeof item === 'object' && item.canonicalId ? item.canonicalId : suffix;
}

/**
 * Baut aus den obligations eines Leaf-Knotens eine lineare Liste von Requirement-Instanzen
 * Reihenfolge: obligationsCatalog[pkgKey].items in der im Katalog definierten Reihenfolge
 */
export function getRequirementChain(leafId, model) {
  const { decisionTree, obligationsCatalog } = resolveModel(model);
  const leaf = decisionTree[leafId];
  const obligationKeys = leaf?.obligations ?? [];

  const reqs = [];

  for (const pkgKey of obligationKeys) {
    const pkg = obligationsCatalog[pkgKey];
    if (!pkg) continue;

    const items = pkg.items ?? [];
    for (const item of items) {
      const itemId = item?.id; 
      if (!itemId) continue;

      const instanceId = `${leafId}__req__${pkgKey}__${itemId}`;
      const canonicalId = item?.canonicalId ?? `${pkgKey}__${itemId}`;

      reqs.push({
        id: instanceId,          
        instanceId,              
        canonicalId,             
        pkgKey,
        pkgLabel: pkg.label,
        regulation: pkg.regulation,
        articles: pkg.articles ?? [],
        itemId,

        question: item.question,
        todo: item.todo,
        reference: item.reference,
        referenceUrl: item.referenceUrl,
        info: item.info,
        examples: item.examples,
      });
    }
  }

  const firstReqId = reqs[0]?.id ?? null;
  const summaryId = `${leafId}__req__summary`;

  return { reqs, firstReqId, summaryId };
}

/**
 * Ermittelt auf Basis der aktuellen Requirement-Instanz den nächsten Schritt in derselben Leaf-Chain
 * Falls kein weiteres Requirement existiert, wird die Summary-ID zurückgegeben
 */
export function getNextInRequirementChain(currentReqId, model) {
  const [leafId] = currentReqId.split('__req__');
  const { reqs, summaryId } = getRequirementChain(leafId, model);
  const idx = reqs.findIndex((r) => r.id === currentReqId);
  const nextReqId = idx >= 0 && idx + 1 < reqs.length ? reqs[idx + 1].id : undefined;
  return { leafId, nextReqId, summaryId };
}
