import React from 'react'
import './Homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hotelpicture from './Images/reisetopia-pSDe7ePo0Tc-unsplash.jpg'
import VideoPlayer from './Components/Videoplayer'
import { IoMdClose } from "react-icons/io";
import Login from './Components/API/Login'
import { useState } from 'react'
function Homepage() {
  const [login,setLogin]=useState(false)
  return (
    <div className='overall-homepage-container'>
      <div className='background-play'>
      <VideoPlayer/>
      </div>
      <div className='opacity-regilator'>

      </div>
        <div className='Hotel-name '>
        <h3 >Amplitude Hotel & Resort</h3>
        <h5  className='text-light'>Make Reservations Today</h5>
        <p>Discover unparalleled comfort and luxury at our hotel. Book now for an unforgettable experience!</p>
        <div className='signup-btn-container'>
            <button className='btn btn-outline-light' onClick={()=>setLogin(true)}>Signup/in</button>
        </div>
        </div>
        {login &&  <div className='Account-creation-container'>
        <IoMdClose className='fs-1 text-dark' onClick={()=>setLogin(false)} />
   <Login/>
        </div>
}
        </div>
  )
}

export default Homepage