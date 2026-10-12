/* Launcher's Windows UI language wins; direct HTML uses browser language. */
(function (root) {
  'use strict';
  function languageIndex(locale) {
    const tag = String(locale || '').trim().replace(/_/g, '-').toLowerCase();
    if (/^zh(?:-|$)/.test(tag)) {
      if (/(?:^|-)(hant|tw|hk|mo|cht)(?:-|$)/.test(tag)) return 2;
      return 0;
    }
    return 1;
  }
  function resolveLanguage(explicit, system) {
    return languageIndex(explicit || system || 'en');
  }
  root.TerritoryManualLocale = Object.freeze({languageIndex, resolveLanguage});
  if (typeof module === 'object' && module.exports) module.exports = root.TerritoryManualLocale;
})(typeof window === 'object' ? window : globalThis);