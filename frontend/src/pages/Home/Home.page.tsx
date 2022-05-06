import "./Home.styles.css"
import TeamBox from "../../components/TeamBox/TeamBox"
import RoadmapBox from "../../components/RoadMapBox/RoadMapBox"
import ArtBox from "../../components/ArtBox/ArtBox"
import Footer from "../../components/Footer/Footer.component"
import * as anchor from "@project-serum/anchor"
import 'simplebar/dist/simplebar.min.css';

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
  artRef: any
  introductionRef: any
  whitepaperRef: any
  scrollToHome: any
}

const Home = (props: HomeProps) => {
  
  return (
    <>
      <div className="home_container">
        {/* <div className="title2" style={{marginBottom:"30px", marginTop:"-200px"}}>
          <h1 style={{fontSize:"10vw", fontFamily:"Roboto, sans-serif"}} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">Maskerade</h1>
        </div>
        <div style={{fontSize:"30px", textAlign:"center", fontFamily:"Roboto, sans-serif"}} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
          Changing The Solana Anonymous Landscape
        </div> */}
        <div className="divier-container">
          <img alt="divider" src="./imgs/divider.png" className="divider-img" style={{marginTop:"-80px", marginBottom:"100px"}} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
        </div>
        <div className="row" style={{ width: '100%', marginTop:"-150px"}} ref={props.introductionRef}>
          <div className='col-md-12 col-sm-12 offset-md-12' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
            <div>
              <h2 className="title2">Introduction</h2>
            </div>
            <div style={{textAlign:"center"}}>
              <span className="letter">
                Welcome to The Maskerade Project. Here you'll find all you need to know about our project and our future plans.<br/><br/>
                The Maskerade Project is founded in 2022 to provide the Solana community with the same anonymity that Ethereum users have access to. In a world where privacy and confidentiality is uncommon, we aim to build a solution to this plague of privacy invasion.<br/><br/>
                Almost any transaction on the Solana blockchain leaves a trail. To make this project successful and sustainable, a private and exclusive Maskerade Community will be formed via minting of our Avatars. Community members can contribute and earn revenue from our mixer.
              </span>
            </div>
          </div>
        </div>
        <div className="divier-container">
          <img alt="divider" src="./imgs/divider.png" className="divider-img" data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
        </div>
        <div className="row" style={{ width: '100%' }}>
          <div className='col-md-12 col-sm-12 offset-md-12' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
            <div>
              <h2 className="title2">PROOF-OF-CONCEPT</h2>
            </div>
            <div style={{textAlign:'center'}}>
              <span className="letter">
                The Maskerade Project is inspired by Tornado.Cash and we look forward to building a similar platform for users in the Solana Community. An estimate of $7.4 billion USD has been facilitated by Tornado.Cash, and it is highly likely we see that number increase at a steady pace.<br/><br/>
                The Maskerade Project's objective is to build a tumbler that everyone can use on the Solana blockchain. What is a tumbler? It is a solution that allows for anonymity and confidentiality on the Solana blockchain by pooling tokens together and mixing it up, before allowing the user to withdraw tokens from a different address than the address used for depositing tokens. The result? A cold trail that protects the privacy of the user by breaking the trace back to the original address. The technology will be made possible by utilising zkSNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge).
              </span>
            </div>
          </div>
        </div>
        <div className="divier-container">
          <img alt="divider" src="./imgs/divider.png" className="divider-img" data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
        </div>
        <div className="row" style={{ width: '100%' }} ref={props.whitepaperRef}>
          <div className='col-md-12 col-sm-12 offset-md-12' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
            <div>
              <h2 className="title2">WHITEPAPER</h2>
            </div>
            <div style={{textAlign:'center'}}>
              <span className="letter">
                {'Refer to our '}
                <a target="_blank" href="/whitepaper.pdf" style={{ color: "white" }} >
                   whitepaper
                </a>
                 {' to learn about our unique technicalities, tokenomics, staking and earning mechanisms.'}
              </span>
            </div>
          </div>
        </div>
       <div className="divier-container">
          <img alt="divider" src="./imgs/divider.png" className="divider-img" data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
        </div>
        <div ref={props.roadMapRef}>
          <RoadmapBox/>
        </div>
        <div className="divier-container">
          <img alt="divider" src="./imgs/divider.png" className="divider-img" data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
        </div>
        <div ref={props.artRef}>
          <ArtBox />
        </div>
        <div ref={props.teamRef}>
        <div className="divier-container">
          <img alt="divider" src="./imgs/divider.png" className="divider-img" data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
        </div>
          <TeamBox />
        </div>
        <hr />
        <Footer scrollToHome={props.scrollToHome} />
        <br />
      </div>
    </>
  )
}
export default Home
