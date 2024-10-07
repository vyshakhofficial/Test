import React from 'react'
import './HomePage.css' 
import Navbar from './Navbar/Navbar'
import { Switch } from 'antd';
import { motion } from 'framer-motion';
import Footer from './Footer/Footer';

function HomePage() {
  return (
    <div className='main-section'>
      <section className='Main-banner'>
        <Navbar/>
        <div className='banner-content-main'>
            <div className='sec1'>
                <motion.h1 className='Build-text'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                >
                    Build your business<br/> here and now.
                </motion.h1>
                <br/><br/>
                <motion.p style={{ textAlign:'left' }}
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We help you <span className='text-bold'>start</span>, <span className='text-bold'>grow</span> and <span className='text-bold'>Build</span> your <span className='text-bold'>dream business</span> in the UAE.<br/>
                    Just a few steps,and you'll be right on track!
                </motion.p>
                <br/><br/>
                <motion.div style={{ width:'50%' , height:'40px' , borderRadius:'10px' , display:'flex' , justifyContent:'space-between', alignItems:'center' , paddingLeft:'5px',paddingRight:'5px' , background:'white' , border:'none' }}
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}>
                    <div>
                        <p>Enter Your company name</p>
                    </div>
                    <motion.div
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className='get-started-button'>Get started</button>
                    </motion.div>
                </motion.div>
                <br/>
                <div>
                <motion.div style={{ display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <span style={{ marginRight: 8 }} className='text-bold'>New company</span>
                    <Switch size="small" defaultChecked />
                    <span style={{ marginLeft: 8 }}>Existing company</span>
                </motion.div>
                </div>
            </div>
            <div className='sec2'>
                <motion.img src='./Assets/Group 1000006333.png' alt='txt'
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.img>
            </div>
        </div>
      </section>
                <section className='second-section'>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '-60px',
                zIndex: 100
                }}>
                <img src='./Assets/11 1.png' alt="Centered" />
                </div>
                <img 
                style={{ position: 'relative', left: '500px', top: '240px' ,zIndex:'110' }} 
                src='./Assets/Home.png' 
                alt="Home" 
                />
                <img 
                style={{ position: 'relative', left: '-500px', top: '0' }} 
                src='./Assets/Frame 1000005270.png' 
                alt="Frame" 
                />
            </div>
            </section >

            <section style={{ height:'40vh' , background:'#F5F7FF' }}>
                <p style={{ color:'#223FBC', fontWeight:'bold' }}
                >START AND GROW</p>
                <br/>
                <h1 style={{ fontSize:'40px' }}>Start your <span className='busin'>business</span> from scratch.</h1>
                <br/>
                <p>We start your business and take care of all the documents and regulatory procedures in order to make <br/> your business fully functional in the UAE in only 2-3 weeks.</p>
                <br/>
                <br/>
                <buton className="start-button">Start your business</buton>
            </section>

            <section className='third-section'>
                <div className='third-section-1'>
                <p style={{ color:'#223FBC' , fontWeight:'bold' }}>OUR PRICING</p>
                <br/>
                <h1 style={{ fontSize:'40px' }}><span className='busin'>Absolute transparency in our pricing;</span><br/> we stick to our word!</h1>
                <br/>
                <p>Our default plan covers all your business needs for starting off, and Start and Grow <br/>covers all the services needed for growth.</p>
                <br/>
                <br/>

                <div style={{ width:'100%', display:'flex' , gap:'20%' }}>
                    <div>
                    <img style={{ width:'100%' }} alt='txt' src='./Assets/Group 1000005653.png'></img>
                    </div>
                    <div>
                    <img style={{ width:'100%' }} alt='txt' src='./Assets/Group 1000005564.png'></img>
                    </div>
                </div>
                </div>
            </section>

            <section className="fourth-section">
            <p style={{ color:'#223FBC', fontWeight:'bold' }}>START AND GROW</p>
                <br/>
                <h1 style={{ fontSize:'40px' }}>Focus on your growth and we’ll take care of the rest.</h1>
                <br/>
                <p>We incorporate your business in the UAE and take all the hassle off of your hands. Hand it all over to us and you can focus on<br/> your growth. Our products and add-ons come together to provide you with everything you need.</p>
                <br/>
                <br/>
                <buton className="start-button">Start your business</buton>
                <br/><br/>
                <div>
                    <img style={{ width:'100%' }} alt='txt' src="./Assets/Group 1000005795.png"/>
                </div>
            </section>

            <section className='fifth-section'>
            <p style={{ color:'#223FBC', fontWeight:'bold' }}>VISAS</p>
                <br/>
                <h1 style={{ fontSize:'40px' }}><span className='busin'>Manage your visas</span> on our platform:<br/> swift and easy.</h1>
                <br/>
                <p>Our platform gets you and your dependents UAE visas. All you have to do is apply,<br/> add your documents, and we’ll take care of it from there.</p>
                <br/>
                <br/>
                <buton className="start-button">Start your business</buton>
                <br/><br/>
                <div>
                    <img style={{ width:'100%' }} alt='txt' src="./Assets/visa centre.png"/>
                </div>
            </section>

            <footer className='footer-sec'>
               <img style={{ width:'100%' }} alt='txt' src="./Assets/footer.png"/>
            </footer>
            {/* <Footer/> */}

    </div>
  )
}

export default HomePage
