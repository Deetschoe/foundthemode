import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "foundthemode",
  description: "get the mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          async
          defer
          data-domain="www.foundthemode.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
