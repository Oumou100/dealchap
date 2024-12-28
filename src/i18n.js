import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // connect i18next with react
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    lng: 'en', // langue par défaut
    fallbackLng: 'en', // si la langue n'est pas disponible, utilise l'anglais
    interpolation: {
      escapeValue: false, // React gère l'échappement
    },
  });

export default i18n;
