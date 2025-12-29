import React,{useState,useEffect} from 'react'
import './login.css'
import snlLogo from './images/s&lLogo.png'
import waterBg1 from './images/waterBg1.png'
import waterBg2 from './images/waterBg2.png'
import {Link,useNavigate} from 'react-router'
import axios from 'axios'


export default function Login(props) {
  const searchUser=(event)=>{
      event.preventDefault();
      axios.post("http://localhost:1010/home2",[event.target.username.value,event.target.password.value])
      .then(
        alert("Data Submitted"),
        userData()
      )
      .catch(err=>alert(err))

      event.target.password.value=""
      event.target.username.value=""
    }

    const navigate=useNavigate()
    const {setusername,setvictory,setusername2,setvictory2}=props
    const [i, seti] = useState(0)

    const userData=()=>{
      axios.post("http://localhost:1010/home2")
      .then((res)=>{
        if(i==0){
          console.log("User1: ",res.data[0].name,res.data[0].password,res.data[0].victory);
          setusername(res.data[0].name);
          setvictory(res.data[0].victory);
          seti(1)
        }
        else{
          console.log("User2: ",res.data[0].name,res.data[0].password,res.data[0].victory);
          setusername2(res.data[0].name);
          setvictory2(res.data[0].victory);
          navigate("/game");
        }
      })
      .catch(err=>console.log(err))
    }


  return (
    <>
      <div className="loginBody">

        <div className="waterBg" id="waterBg1">
          <img src={waterBg1} alt="" />
        </div>

        <div className="icon">
          <img src={snlLogo} alt="" id="snakeLogo" />

          <form onSubmit={searchUser} id="loginForm">
            <p>2-Users Log-In</p>
            <input type="text" placeholder="Enter your player name" name='username' required autoComplete='off'/>
            <input type="text" placeholder="Enter your player password" name='password' required autoComplete='off' minLength={8}/>
            <button type='submit'>Submit</button>
            <Link to="/signup">Sign-Up if New User</Link>
          </form>

        </div>

        <div className="waterBg">
          <img src={waterBg2} alt="" />
        </div>

      </div>
    </>
  )
}
