import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='main-footer-sec'>
        <div style={{ width:'9s0%' }}>
            <div style={{ width:'50%' , alignItems:'flex-start' , textAlign:'left' }}>
                <h1 style={{ fontSize:'40px' }}>Ready to get started?<br/>
Build your business now!</h1>
                <br/>
                <p>We start your business and take care of all the documents and regulatory procedures in order to make <br/> your business fully functional in the UAE in only 2-3 weeks.</p>
                <br/>
                <br/>
                <buton className="start-button">Start your business</buton>
            </div>
            <div style={{ width:'50%' }}>

            </div>
        </div>
    </div>
  )
}

export default Footer
