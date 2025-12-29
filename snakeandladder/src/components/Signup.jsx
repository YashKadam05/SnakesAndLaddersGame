import React,{useState,useEffect} from 'react'
import './login.css'
import snlLogo from './images/s&lLogo.png'
import waterBg1 from './images/waterBg1.png'
import waterBg2 from './images/waterBg2.png'
import {Link,useNavigate} from 'react-router'
import axios from 'axios'

export default function Signup() {

  const navigate=useNavigate()

  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:1010/home",[event.target.username.value,event.target.password.value])
    .then(alert("Data Submitted"))
    .catch(err=>alert(err))
    event.target.password.value=""
    event.target.username.value=""
    // navigate("/login")
    // yashLadderKing
  }


  return (
    <>
      <div className="loginBody">

        <div className="waterBg" id="waterBg1">
          <img src={waterBg1} alt="" style={{transform:"scaleY(-1)"}}/>
        </div>

        <div className="icon">
          <img src={snlLogo} alt="" id="snakeLogo" />

          <form onSubmit={handleSubmit} id="loginForm">
            <p>Sign-Up</p>
            <input type="text" placeholder="Enter your player name" name='username' required autoComplete='off'/>
            <input type="text" placeholder="Enter your player password" name='password' required autoComplete='off' minLength={8}/>
            <button type='submit'>Submit</button>
            <Link to="/login">Log-In if Existing User</Link>
          </form>

        </div>

        <div className="waterBg">
          <img src={waterBg2} alt="" style={{transform:"scaleY(-1)"}}/>
        </div>

      </div>
    </>
  )
}
