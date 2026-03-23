import React from 'react'
import './home.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Social from './HomeSocials'

function Home() {
  return (
 <header>
      <div className="container header_container">




        <h4>Hello I'm</h4>
        <h1>Ahmad Alabrash</h1>
        <h4 className="text-light"> Developer</h4>
        <CTA />
        <Social />


        <div className="me">
          <img src={ME} alt="" />
        </div>
        

        <a href="#about" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Home