import React from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '../util';
import "./RoadMapBox.css"
const RoadMapBox = () => (
  <div className='container' style={{paddingTop:"1px"}}>
    <div>
      <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
        <h2 className='title2' style={{marginBottom:"15px"}}>RoadMap</h2>
      </Reveal>
    </div>
    <img className="map-content" style={{display:"flex"}} src="/imgs/roadmap-vector.png" data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/>
    {/* <div className="map-content" style={{ background: 'url(/imgs/roadmap-vector.png)' }} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800"/> */}
    

    {/* <div className="map-content" style={{ background: 'url(/imgs/roadmap-vector.png)' }} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
      <div className="row">
        <div className='col-md-4 flex justify-content-start' data-aos='zoom-in' data-aos-delay='300' data-aos-duration="500">
          <div className='map-icon'>
            <h2>Early Q2</h2>
            <h3>2022</h3>
          </div>
        </div>
        <div className='col-md-8 align-self-center' align={'left'} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
          <ul className={'left'}>
            <li>Phase 1: Launch and mint to onboard Maskerade Community Members</li>
            <hr style={{ opacity: ".4" }} />
            <li>Phase 2: Staking is live to earn $MASKED</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className='col-md-8 align-self-center' align={isMobile() ? 'left' : 'right'}>
          <ul className={isMobile() ? 'left' : 'right'} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
        <div className='col-md-8 align-self-center' align={'left'}>
          <ul className={'left'} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
            <li>Phase 3: Community suggestions will be open and taken into consideration via voting by members</li>
            <hr style={{ opacity: ".4" }} />
            <li>Phase 4: Onboard independent developers to build and implement Maskerade-Tumbler and Maskerade-Swap</li>
          </ul>
        </div>
        <div className='col-md-4 flex justify-content-end' data-aos='zoom-in' data-aos-delay='500' data-aos-duration="800">
          <div className='map-icon'>
            <h2>Mid Q2</h2>
            <h3>2022</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className='col-md-4 flex justify-content-start' data-aos='zoom-in' data-aos-delay='500' data-aos-duration="800">
          <div className='map-icon'>
            <h2>End Q2</h2>
            <h3>2022</h3>
          </div>
        </div>
        <div className='col-md-8 align-self-center' align={'left'}>
          <ul className={'left'} data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
            <li>Phase 5: Launch of Maskerade-Tumbler</li>
            <hr style={{ opacity: ".4" }} />
            <li>Phase 6: Implement Relayer functions & Revenue Share</li>
          </ul>
        </div>
      </div>
    </div> */}
  
  
  </div>
);
export default RoadMapBox;