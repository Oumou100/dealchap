// /src/pages/_app.js

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n'; // Importez la configuration de i18next


function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
