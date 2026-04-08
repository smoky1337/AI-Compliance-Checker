import deUi from './locales/de/ui.json';
import enUi from './locales/en/ui.json';
import deModel from './locales/de/model.json';
import enModel from './locales/en/model.json';

export const DEFAULT_LOCALE = 'de';
export const SUPPORTED_LOCALES = ['de', 'en'];
export const LOCALE_STORAGE_KEY = 'rfLocale';

const uiMessagesByLocale = {
  de: deUi,
  en: enUi,
};

const modelMessagesByLocale = {
  de: deModel,
  en: enModel,
};

/**
 * Liest einen verschachtelten Wert per Punktpfad aus einem Locale-Objekt.
 */
function getByPath(source, path) {
  return String(path ?? '')
    .split('.')
    .filter(Boolean)
    .reduce((value, segment) => (value == null ? undefined : value[segment]), source);
}

/**
 * Ersetzt einfache Platzhalter im Format {name} durch Laufzeitwerte.
 */
function interpolate(template, variables = {}) {
  if (typeof template !== 'string') return template;

  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = variables[key];
    return value == null ? `{${key}}` : String(value);
  });
}

/**
 * Liefert die UI-Nachrichten für eine Sprache mit deutschem Fallback.
 */
export function getUiMessages(locale = DEFAULT_LOCALE) {
  return uiMessagesByLocale[locale] ?? uiMessagesByLocale[DEFAULT_LOCALE];
}

/**
 * Liefert die Modell-Übersetzungen für eine Sprache mit deutschem Fallback.
 */
export function getModelMessages(locale = DEFAULT_LOCALE) {
  return modelMessagesByLocale[locale] ?? modelMessagesByLocale[DEFAULT_LOCALE];
}

/**
 * Baut einen einfachen Translator für String-Keys aus den UI-JSON-Dateien.
 */
export function createTranslator(locale = DEFAULT_LOCALE) {
  const messages = getUiMessages(locale);
  const fallbackMessages = getUiMessages(DEFAULT_LOCALE);

  return function translate(key, variables) {
    const value = getByPath(messages, key) ?? getByPath(fallbackMessages, key) ?? key;
    return interpolate(value, variables);
  };
}
