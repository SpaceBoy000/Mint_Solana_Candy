import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Reveal from 'react-awesome-reveal';
import { fadeInUp } from '../util';
import "./ArtBox.css"

const ArtBox = () => {
  return (
    <div className='art-container'>
      <div>
        <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
          <h1 className="title2" style={{marginBottom: "10px"}}>ART</h1>
        </Reveal>
      </div>
      <div>
        <h4 className='title3' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">The 1/1s</h4>
      </div>
      <div className="row" style={{ width:'100%', display:"flex", justifyContent:"space-evenly", marginRight:"auto"}}>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/special/1.jpg" alt="" style={{width: "120%"}}></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/special/2.jpg" alt="" style={{width: "120%"}}></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
        <img src="/imgs/special/3.jpg" alt="" style={{width: "120%"}}></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
        <img src="/imgs/special/4.jpg" alt="" style={{width: "120%"}}></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
        <img src="/imgs/special/5.jpg" alt="" style={{width: "120%"}}></img>
        </div>
      </div>
      <div className='title3'>
        <h4 className='title3' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">The Main Collection</h4>
      </div>
      <div className="row" style={{ width: '100%' }}>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/1.png" alt=""></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/2.png" alt=""></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/3.png" alt=""></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/4.png" alt=""></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/5.png" alt=""></img>
        </div>
        <div className='col-md-2 col-sm-12 mb-2 mt-2' align="center" data-aos='flip-left' data-aos-delay='300' data-aos-duration="800">
          <img src="/imgs/6.png" alt=""></img>
        </div>
      </div>
      <div className="row" style={{ width: '100%' }}>
        <div className='col-md-12 col-sm-12 offset-md-12' data-aos='fade-up' data-aos-delay='300' data-aos-duration="800">
          {/* <SimpleBar style={{ maxHeight: "80%" }}> */}
            <div align="center">
              <span className='letter'>
                With 1111 + 10 unique art pieces merging the concepts of cybertech and urban fashion, we aim to create NFTs with high art values, on top of their tokenomics value. The art ties with the rapid evolution of the defi world, alongside mankind intelligence, and of course, portraying the value of privacy.
              </span>
            </div>
          {/* </SimpleBar> */}
        </div>
      </div>
    </div>
  )
};
export default ArtBox;