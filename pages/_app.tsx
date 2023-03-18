import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
// This is entry point and we have the wrapper of thirdwebprovider

//Nasalization (FONT PRINCIPAL) 
//Cartograph CF (FONT SECUNDÀRIA)

// HEX: 9FBBFA HEX: F1A93B HEX: 3D0695 HEX: 000000

const activeChainId = ChainId.Goerli; // Changed to Goerli because it's test

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
