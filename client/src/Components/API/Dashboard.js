import React from 'react'
import './Dashboard.css'
import { IoMenuOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

function Dashboard() {
    const [sidebar,setSidebar]=useState(false);
    const [dash,setDash]=useState(true);
    const [reserve,setReserve]=useState(false);
  return (
    <div className='overall-dashboard-container'>
        
        <header className='dashboard-header'>
       <div className='logo-company-name'>
        <p className='dashboard-logo-title text-light'>Amplitude</p>
       </div>
       <div className='menu-bar-dashboard'>
       <IoMenuOutline className='fs-1 text-light' onClick={()=>setSidebar(true)}/>
       </div>
        </header>
        { dash && <>
        <div className='dashboard-body'>
        <h4 className='text-light'>Dashboard</h4>
        <div className='dashboard-card-holders'>
            <div className='card dashboard-card'>
         <p>Welcome back </p>
         <h3>Johnson Kibe</h3>
         <h3 style={{textAlign:"center"}}>Reservations</h3>
         <div className='reservation-number text-light'>
            0
         </div>
            </div>
        </div>
        </div>
        </>
}
{
   reserve &&  <>
    <div className='dashboard-body'>
    <h4 className='text-light'>Reserve</h4>
    <div className='dashboard-card-holders'>
            <div className='card dashboard-card-reservation'>
         <form>
         <h3 style={{textAlign:"center"}}>Make reservations</h3>
            <label style={{width:'100%'}}>Number of reservation
                <input type='number'className='form-control' placeholder='Number of reservations'/>
            </label>
            <label style={{width:'100%'}}>Date
                <input type='date'className='form-control'placeholder='Date'/>
            </label>
            <div className='login-btn-div'>
                <button className='btn btn-outline-dark'>Submit</button>
            </div>
            </form>
            </div>
        </div>
    </div>
    </>
}
        { sidebar && <div className='dasboard-sidebar'>
        <IoMdClose className='fs-1' onClick={()=>setSidebar(false)}/>
            <h3 style={{textAlign:"center"}}>Menu</h3>
            <ul className='list-unstyled reservation-ul'>
                <li onClick={()=>{setDash(true);setReserve(false);setSidebar(false)}}>Dashboard</li>
            <li onClick={()=>{setDash(false);setReserve(true);setSidebar(false)}}>Make Reservation</li>
            </ul>
        </div>
}
        <footer className='dashboard-footer'>

        </footer>
    

        <>

        </>
        </div>
  )
}

export default Dashboard