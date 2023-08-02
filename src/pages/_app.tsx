import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import { Sen } from 'next/font/google'
 
const font = Sen({ weight: '400', subsets: []})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<main className={font.className}>
      <Component {...pageProps} />
    </main>)
};

export default api.withTRPC(MyApp);
