import React from 'react'
import './Createacc.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Createacc() {
  return (
    <div className='overall-create-account'>
        <form>
        <h3 style={{textAlign:"center"}}>Create Account</h3>
            <label style={{width:'100%'}}>First Name
                <input type='text'className='form-control' placeholder='First Name'/>
            </label>
            <label style={{width:'100%'}}>Last Name
                <input type='text'className='form-control' placeholder='Last Name'/>
            </label>
            <label style={{width:'100%'}}>Password
                <input type='password'className='form-control' placeholder='password'/>
            </label>
            <label style={{width:'100%'}}>Confirm password
                <input type='password'className='form-control' placeholder='password'/>
            </label>
            <div className='login-btn-div'>
                <button className='btn btn-outline-dark'>Submit</button>
            </div>
            </form>
        </div>
  )
}

export default Createacc