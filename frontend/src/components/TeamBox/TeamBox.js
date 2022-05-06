import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '../util';
import "./TeamBox.css"

const TeamBox = () => {
  return (
    <div className='team-container'>
      <div>
        <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
          <h1 className='title2' style={{marginBottom:"10px"}}>OUR TEAM</h1>
        </Reveal>
      </div>
      <div className="row" style={{ width: '100%' }}>
        <div className='col-md-4 col-sm-12 mb-2 mt-2' align="center" data-aos='fade-right' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/1.png" alt=""></img>
        </div>
        <div className='col-md-6 col-sm-12 team-content' data-aos='fade-left' data-aos-delay='300' data-aos-duration="800">
          <h2 className='member-name'>Lead Dev/Founder - Apache</h2>
          <SimpleBar style={{ maxHeight: "80%" }}>
            <div align="left" className='member-specification'>
              <span>
                As a 31-year old developer with a burning passion for programming and cryptocurrency, Apache founded the Maskerade project as his brainchild. Like many of you, he started with Ethereum NFTs and found his way into Solana and hasn't looked back since. Prior to walking this path, he was an ex-blockchain engineer and fullstack developer with Republic. The potential of Solana as a whole has intrigued and inspired Apache to develop such a tool for the Solana community.
              </span>
            </div>
          </SimpleBar>
        </div>
      </div>
      <div className="row" style={{ width: '100%' }}>
        <div className='col-md-6 col-sm-12 offset-md-2 team-content' data-aos='fade-right' data-aos-delay='300' data-aos-duration="800">
          <h2 className='member-name'>Chief Marketing/Advisor - Wildfire</h2>
          <SimpleBar style={{ maxHeight: "80%" }}>
            <div align="left" className='member-specification'>
              <span>
                Wildfire has been involved in the marketing industry for 8 years, crafting campaigns for both large corporations (marketing consultant for Telcos and Media industry) & start-ups. A believer of flowing with the tide, Wildfire has been immersed in cryptocurrencies since 2018 and actively involved in the NFT space both as an investor and advisor.<br/><br/>
                Having skin in the game highlighted the problem of anonymity (or lack thereof) and presented Wildfire this wonderful opportunity to serve the NFT community while solving this frustrating problem through Maskerade.
              </span>
            </div>
          </SimpleBar>
        </div>
        <div className='col-md-4 col-sm-12 mb-2 mt-2' align="center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/2.png" alt=""></img>
        </div>
      </div>

      <div className='row' style={{ width: '100%' }}>
        <div className='col-md-4 col-sm-12 mb-2 mt-2' align="center" data-aos='fade-right' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/3.png" alt=""></img>
        </div>
        <div className='col-md-6 col-sm-12 team-content' data-aos='fade-left' data-aos-delay='300' data-aos-duration="800">
          <h2 className='member-name'>Artist - Shazp1nzee</h2>
          <SimpleBar style={{ maxHeight: "80%" }}>
            <div align="left" className='member-specification'>
              <span>
                Starting his career as a journalist, Shazp1nzee gained experience in the media industry, which allowed him to apply concepts of impactful communication in his childhood passion - art and graphic design. Within 5 years of pivoting to a full-time illustrator job, he has been practicing to create simple yet impactful messages through art. Shazp1nzee believes in embedding thoughts in each and every artwork - or NFT, creating long lasting art value beyond being just a financial asset.
              </span>
            </div>
          </SimpleBar>
        </div>
      </div>
      <div className='row' style={{ width: '100%' }}>
        <div className='col-md-6 col-sm-12 offset-md-2 team-content' data-aos='fade-right' data-aos-delay='300' data-aos-duration="800">
          <h2 className='member-name'>Community Manager - AggroDrone</h2>
          <SimpleBar style={{ maxHeight: "80%"}}>
            <div align="left" className='member-specification'>
              <span>
                Formerly employed at McCann Australia as a Community and Social Media Manager from 2012 to 2016 and having acquired a human psychology degree in 2016. AggroDrone has been a moderator for 4 NFT projects. AggroDrone always strives to create a conducive community by meticulously communicating with its participants whilst assisting in moderation functions within.
              </span>
            </div>
          </SimpleBar>
        </div>
        <div className='col-md-4 col-sm-12 mb-2 mt-2' align="center" data-aos='fade-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/4.png" alt=""></img>
        </div>
      </div>
      <div className='row' style={{ width: '100%' }}>
        <div className='col-md-4 col-sm-12 mb-2 mt-2' align="center" data-aos='fade-right' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/5.png" alt=""></img>
        </div>
        <div className='col-md-6 col-sm-12 team-content' data-aos='fade-left' data-aos-delay='300' data-aos-duration="800">
          <h2 className='member-name'>Community Manager - Purge</h2>
          <SimpleBar style={{ maxHeight: "80%" }}>
            <div align="left" className='member-specification'>
              <span>
              Purge is one of the protectors of the discord server and he loves to serve and provide aid, with care and empathy. With an array of experience building communities, Purge is here to deal with the needs and requests of the community to the best of his ability. Focused on building and growing the community, he strives to make every member feel safe and at ease, while being able to do what they desire in privacy.
              </span>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  )
};
export default TeamBox;