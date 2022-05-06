import "./Mint.styles.css"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer.component"
import * as anchor from "@project-serum/anchor"
import Timer from "../../components/Timer/Timer"
import { Box, Stack, Typography } from '@mui/material';
import backgroundImg from "../../imgs/mint_back.png";
import brandImg from "../../imgs/DeFiHood_brand.png";
import mintHeader from "../../imgs/mint_header.png";

import _newMintImg from "../../imgs/Robin_NFT_ New20.png";
import _updateMintImg from "../../imgs/Robin_NFT_ New21.png";
import updateArrowImg from '../../imgs/ARROW_01.png';

const CounterText = styled.span``

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  border: '4px solid white'
});

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  treasury: anchor.web3.PublicKey
  txTimeout: number
  buyAnApeRef: any
  roadMapRef: any
  teamRef: any
  scrollToHome: any
}

const Mint = () => {
  return (
    <>
      <div className="home_container">
        <Stack direction="row" spacing={10}  justifyContent="center" alignItems={"center"} style={{marginTop:'20px', marginBottom:'20px'}}>
          <img src={mintHeader} style={{width:'60%', height: '130px'}}/>
        </Stack>

        <Stack direction="column" className="comment" spacing={1} sx={{ p: 3 }}>
          <span>STAKING:</span>
          <span>BY USING OUR STAKING PROTOCOL. YOU CAN EARN MORE</span>
          <span>$ARROW TOKEN SIMPLY BY HOLDING!</span>
        </Stack>
        <p></p>
        <Stack direction="column" className="comment" spacing={1} sx={{ p: 3 }}>
          <span>TRANSFORMATION AND UPGRADE:</span>
          <span>USE $ARROW TO CHANGE THE APPEARANCE OF YOUR NFT</span>
          <span>(SWITCH 1 TRAIT FOR ONE OF SAME RARITY %) OR ADD SPECIAL</span>
          <span>EDITION ADD-ONE</span>
        </Stack>

        <Stack direction="row" justifyContent="center" style={{marginTop: '10px'}}>
          <Typography variant="h2">
            &gt; &gt; &gt; &gt; &gt;
          </Typography>
        </Stack>
        <Stack direction="row" spacing={10}  justifyContent="center" alignItems={"center"} style={{marginTop:'20px', marginBottom:'20px'}}>
          <ProductImgStyle src={_newMintImg} style={{width:'200px', height: '200px', marginTop: '50px'}}/>
          <ProductImgStyle src={_updateMintImg} style={{width:'300px', height: '300px'}}/>
          <img src={updateArrowImg} 
          style={{width:'150px', height: '150px', position: 'absolute', left: '37%', marginTop: '20px'}}/>
        </Stack>
        <Stack direction="row" justifyContent="center" style={{marginBottom: '10px'}}>
          <Typography variant="h2">
            &gt; &gt; &gt; &gt; &gt;
          </Typography>
        </Stack>

        <Stack direction="column" className="comment" spacing={1} sx={{ p: 3 }}>
          <span>EXCLUMYE NFT PURCHASES:</span>
          <span>$ARROW WILL GIVE YOU ACCESS TO PURCHASES OR BIDS ON NFTS</span>
          <span>FROM THE ETHERALART SHOP AVAILABLE EXCLUVELY FOR</span>
          <span>DEFIHOOD HOLDERS</span>
        </Stack>
        <p></p>
        <Stack direction="column" className="comment" spacing={1} sx={{ p: 3 }}>
          <span>MINT FUTURE PROJECTS:</span>
          <span>GAIN ACCESS TO FUTURE COLLABORATIONS AND PROJECT</span>
          <span>LISTINGS AND HAVE THE ABILITY TO JOIN THE WHITELIST OR</span>
          <span>PURCHASE USING $ARROW</span>
        </Stack>
        <p></p>
        <Stack direction="column" className="comment" spacing={1} sx={{ p: 3 }}>
          <span>SERCH:</span>
          <span>USE YOUR $ARROW TO PURCHASE OR PERSONAUZE MERCH WITH</span>
          <span>DEFIHOOD ART(2022)</span>
        </Stack>

        <Stack direction="row" justifyContent="center" >
          <img src={brandImg} style={{width: "300px", height: '80px', marginTop:'100px', marginBottom:'100px'}}/>
        </Stack>
      </div>
    </>
  );
}
export default Mint
