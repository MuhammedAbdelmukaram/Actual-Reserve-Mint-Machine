import './App.css';
import React, { useMemo } from 'react';
import * as anchor from '@project-serum/anchor';
import Home from './Home';
import { DEFAULT_TIMEOUT } from './connection';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { createTheme, ThemeProvider } from '@material-ui/core';
import Header from "./components/Header";
import FAQsingle from "./components/FAQsingle";
import PackInfo from "./components/PackInfo";

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
  } catch (e) {
    console.log('Failed to construct CandyMachineId', e);
    return undefined;
  }
};

let error: string | undefined = undefined;

if (process.env.REACT_APP_SOLANA_NETWORK === undefined) {
  error =
    "Your REACT_APP_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (process.env.REACT_APP_SOLANA_RPC_HOST === undefined) {
  error =
    "Your REACT_APP_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}

const candyMachineId = getCandyMachineId();
const network = (process.env.REACT_APP_SOLANA_NETWORK ??
  'devnet') as WalletAdapterNetwork;
const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ?? anchor.web3.clusterApiUrl('devnet');
const connection = new anchor.web3.Connection(rpcHost);

const available = true; // This can be set based on your application's logic
const statusClass = available ? 'online' : 'offline';

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <Header/>


            <div className="contentContainer" id={"Mint"}>
              <div className="leftDiv">
                <div className="container">

                  <div style={{width:560}}>
                    <div className="greenStuff">
                      <div className={`statusDot ${statusClass}`}></div>
                      <p className={'greenText'}>Mint Live</p>
                    </div>
                  </div>

                  <img src="/PFP.png" alt="logo" className="profileImage" />

                  <Home
                      candyMachineId={candyMachineId}
                      connection={connection}
                      txTimeout={DEFAULT_TIMEOUT}
                      rpcHost={rpcHost}
                      network={network}
                      error={error}
                  />


                </div>
              </div>
              <div className="verticalLine"></div>
              <div className="rightDiv">
                <div className="containerRight">




                  <div className="howSection" id="How">

                    <p className="mintInfoTitleMain">Mint Info:</p>

                    <div className="timeSection">
                      <div style={{display:"flex", padding:40}}>
                        <div className="mintInfo">
                          <p className="mintInfoTitle">OG=WL Mint</p>
                          <p className="mintInfoValue">20:00 UTC</p>
                        </div>
                        <div className="mintInfo">
                          <p className="mintInfoTitle">PUBLIC Mint</p>
                          <p className="mintInfoValue">20:30 UTC</p>
                        </div>
                        <div className="mintInfo">
                          <p className="mintInfoTitle">Price</p>
                          <div>
                            <p className="mintInfoValue"></p>
                            <p className="mintInfoValueTwo">1 Sol</p>
                          </div>


                        </div>
                      </div>


                    </div>

                    <div style={{backgroundColor:"#037215",  height:300, minWidth:250, color:"#fff", padding:30}}>
                      <h2 style={{marginBottom:50}}>How to mint?</h2>

                      <p className={"steps"}>1. Connect your wallet</p>
                      <p className={"steps"}>2. Click on mint button</p>
                      <p className={"steps"}>3. Click on confirm in your wallet</p>

                      <p style={{fontSize:12, marginTop:20}}>Note: Make sure you have some extra Sol for transaction fees</p>
                    </div>
                  </div>


                  <div style={{width: "100%", height: 2, background: "#fff",filter: "drop-shadow(0px -2px 12px #FF56F6)"}}></div>

                  <div className="faqContainer" id="Faq">
                    <PackInfo/>
                    <div className="faqContent">
                      <p className="faqTitle">FAQ</p>
                      <FAQsingle question="How to mint?" answer="Connect your Phantom wallet, sign in and click on Mint " />
                      <FAQsingle question="What is the total supply?" answer="30.1.2024 - 20:30 UTC " />
                      <FAQsingle question="How much is BWP NFT?" answer="1 NFT = 1 SOL " />
                      <FAQsingle question="Which wallet can I use?" answer="Pahntom, Solflare, Sollet" />
                      <FAQsingle question="Where will BWP be listed?" answer="Tensor, Magic Eden, SolSea, SolArt, OpenSea" />
                    </div>
                  </div>





                </div>
              </div>
            </div>



          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
