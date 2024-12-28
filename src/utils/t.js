import en from '@/utils/locale/en.json';
import fr from '@/utils/locale/fr.json';

let currentLanguage = 'en'; // Langue par défaut
let translations = {}; // Stockera les traductions dynamiques

export const t = (key) => {
    return translations[key] || key; // Retourne la traduction ou la clé si elle n'existe pas
};

export const changeLanguage = (langCode, newTranslations) => {
    currentLanguage = langCode; // Met à jour la langue
    translations = newTranslations; // Met à jour les traductions
};
