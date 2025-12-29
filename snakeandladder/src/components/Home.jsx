import React from 'react'
import './home.css'
import mountain1 from './images/mountain1.png'
import mountain2 from './images/mountain2.png'
import slLogo from './images/s&lLogo.png'
import startBtn from './images/startBtn.png'
import {Link} from 'react-router'

export default function Home() {
  return (
    <>
    <div className="homeBody">

        <div className="mountBg" id="mountBg1">
            <img src={mountain1} alt=""/>
        </div>

        <div className="icon">
            <img src={slLogo} alt="" id="snakeLogo"/>
            <Link to="/login">
            <img src={startBtn} alt="" id="strtBtn"/>
            </Link>
        </div>

        <div className="mountBg">
            <img src={mountain2} alt=""/>
        </div>

    </div>
    </>
  )
}
