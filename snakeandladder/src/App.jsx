import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router'
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Game from "./components/Game.jsx"

function App() {
  const [victory, setvictory] = useState(0)
  const [username, setusername] = useState("Yash1")
  const [victory2, setvictory2] = useState(0)
  const [username2, setusername2] = useState("Yash2")

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login victory={victory} setvictory={setvictory} username={username} setusername={setusername} victory2={victory2} setvictory2={setvictory2} username2={username2} setusername2={setusername2}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/game' element={<Game victory={victory} setvictory={setvictory} username={username} setusername={setusername} victory2={victory2} setvictory2={setvictory2} username2={username2} setusername2={setusername2}/>}/>
    </Routes>
    </>
  )
}

export default App
