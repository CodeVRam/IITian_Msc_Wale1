import React from 'react'
import '../App.css';
import telegram from './Images/tele_logo.svg'
import insta from './Images/insta_logo.svg'
import youtube from './Images/yt_logo.svg'
import in_logo from './Images/in_logo.svg'
import c1 from './Images/c1.png'
import c2 from './Images/c2.webp'

const Middle = () => {
  return (
    <div class="row ">
      <div class="col-1">
        <Social/>
      </div>
      <div class="col-10">
        <Content/>
      </div>
    </div>
  )
}
const Content = ()=>{
    return(
    <div className='d-flex'>
             <div className="motive_text">
                <h1>Lets Start your </h1>
                <span className='fs-1' >IIT</span>
                <h1>Preparation with IITians</h1>
             </div>
             <div>
                 <img src={c1} alt="" />
             </div>
    </div>
    )
}
const Social = ()=>{
    return(
        <div className="social">
              <div><img className='social_logo' src={in_logo} alt="" /></div>
              <div><img className='social_logo' src={telegram} alt="" /></div>
              <div><img className='social_logo' src={youtube} alt="" /></div>
              <div><img className='social_logo' src={insta} alt="" /></div>
        </div>
    )
}
export default Middle
