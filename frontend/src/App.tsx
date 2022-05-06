import { useEffect, useRef } from "react";
import React, { FC, useMemo } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  getLedgerWallet,
  getMathWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolongWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import {
  WalletDialogProvider,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-material-ui";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import backgroundImg from "./imgs/mask/nft_logo.png";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
import Home from "./pages/Home/Home.page";
import Mint from "./pages/Home/Mint.page";

export const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

export const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

export const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

export const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
export const connection = new anchor.web3.Connection(rpcHost);

export const startDateSeed = parseInt(
  process.env.REACT_APP_CANDY_START_DATE!,
  10
);

export const txTimeout = 30000; // milliseconds (confirm this works for your project)

function App() {

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getTorusWallet({
        options: {
          clientId:
            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
        },
      }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    []
  );

  // scroll functions
  const homeRef: React.MutableRefObject<any> = useRef(null);
  const buyAnApeRef: React.MutableRefObject<any> = useRef(null);
  const roadMapRef: React.MutableRefObject<any> = useRef(null);
  const teamRef: React.MutableRefObject<any> = useRef(null);
  const artRef: React.MutableRefObject<any> = useRef(null);
  const introductionRef: React.MutableRefObject<any> = useRef(null);
  const whitepaperRef: React.MutableRefObject<any> = useRef(null);

  const scrollToHome = () =>
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToBuyAnApeRef = () =>
    buyAnApeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToRoadMap = () =>
    roadMapRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTeam = () =>
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToArt = () => 
    artRef.current.scrollIntoView({ behavior: "smooth"});
  const scrollToIntroduction = () => 
    introductionRef.current.scrollIntoView({ behavior: "smooth"});
  const scrollToWhitePaper = () => 
    whitepaperRef.current.scrollIntoView({ behavior: "smooth"});

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })


  return (
    <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
      <WalletProvider wallets={wallets}>
        <WalletDialogProvider>
          <div className="App">
            <img className="app_bg" src="/imgs/background.jpg"></img>
            <div className="App_container">
              <Navbar
                scrollToHome={scrollToHome}
                scrollToBuyAnApeRef={scrollToBuyAnApeRef}
                scrollToRoadMap={scrollToRoadMap}
                scrollToTeam={scrollToTeam}
                scrollToArt={scrollToArt}
                scrollToIntroduction={scrollToIntroduction}
                scrollToWhitePaper={scrollToWhitePaper}
                homeRef={homeRef}
              />
              {/* <div className='col-md-12 col-sm-12 offset-md-12' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"> */}
                {/* <img src={backgroundImg} alt="header_hero" className="header_hero" data-aos='fade-down' data-aos-delay='300' data-aos-duration="800"/> */}
              {/* </div> */}
              <div style={{position: "relative"}}>
                <img src="/imgs/nft_logo.png" alt="header_hero" className="header_hero" data-aos='fade-down' data-aos-delay='300' data-aos-duration="800"/>
                {/* <div className="img_banner">

                </div> */}
              </div>

              <Home
                candyMachineId={candyMachineId}
                config={config}
                connection={connection}
                startDate={startDateSeed}
                treasury={treasury}
                txTimeout={txTimeout}
                buyAnApeRef={buyAnApeRef}
                roadMapRef={roadMapRef}
                teamRef={teamRef}
                artRef={artRef}
                introductionRef={introductionRef}
                whitepaperRef={whitepaperRef}
                scrollToHome={scrollToHome}
              />
              {/* <Mint/> */}
            </div>
          </div>
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
