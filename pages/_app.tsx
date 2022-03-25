import '../styles/globals.css';
import '../styles/font-awesome.min.css';
import '../styles/font-poppins.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
