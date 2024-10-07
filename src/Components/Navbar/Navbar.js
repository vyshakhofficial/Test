import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Nav-container'>
        <div className='Nav-container-sec1'>
            <div style={{ display:'flex' , alignItems:'center' , gap:'10px' }}>
            <img style={{ width:'25px', height:'25px' }} src="./Assets/grain.png"></img>
            <h1>One View</h1>
            </div>
        </div>
        <div className='Nav-container-sec2'>
            <p>Services</p>
            <p>About</p>
            <p>Resourses</p>
            <buton className="login-button">Login</buton>
            <buton className="start-your-business-button">Start your business</buton>
        </div>
    </div>
  )
}

export default Navbar
