import { Providers } from "@/redux/store/providers";
import "../../public/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from "react-hot-toast";
import 'react-loading-skeleton/dist/skeleton.css'
import Layout from "@/components/Layout/Layout";
import { store } from "@/redux/store";
import Script from 'next/script';

export async function generateMetadata() {
  const settingsData = store.getState().Settings?.data;
  const favicon = settingsData?.data?.favicon_icon;

  return {
    manifest: '/manifest.json',
    icons: {
      icon: favicon,
      shortcut: favicon,
    },
    openGraph: {
      images: [favicon],
    },
  }
}

export default function RootLayout({ children }) {
  const settingsData = store.getState().Settings?.data
  const placeApiKey = settingsData?.data?.place_api_key

  return (
    <html lang="en" web-version={process.env.NEXT_PUBLIC_WEB_VERSION}>
      <head>
        {/* Ces liens peuvent rester dans le head */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
          crossOrigin="anonymous" 
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        {/* Utilisez next/script pour les scripts externes */}
        <Script src="https://js.paystack.co/v1/inline.js" />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${placeApiKey}&libraries=places&loading=async`}
          defer
        />
        {/* Google Adsense commenté */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        /> */}
        
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}