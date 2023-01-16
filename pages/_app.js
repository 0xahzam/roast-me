import "../styles/globals.css";
import "@fontsource/syne";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Roast Me - by @0xahzam</title>
        <link rel="shortcut icon" href="musk.png" />
        <meta
          name="description"
          content="Come and get roasted by GPT3"
          key="desc"
        />
        <meta property="og:title" content="Roast Me" />
        <meta
          property="og:image"
          content="https://ichef.bbci.co.uk/news/976/cpsprodpb/7727/production/_103330503_musk3.jpg.webp"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://https://roast-me.vercel.app/" key="twt-url" />
        <meta name="twitter:title" content="Roast Me" key="twt-title" />
        <meta
          name="twitter:description"
          content="Come and get roasted by GPT3"
          key="twt-desc"
        />
        <meta
          name="twitter:image"
          content="https://ichef.bbci.co.uk/news/976/cpsprodpb/7727/production/_103330503_musk3.jpg.webp"
          key="twt-img"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
