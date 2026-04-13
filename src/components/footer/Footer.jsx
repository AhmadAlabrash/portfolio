import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './footer.css'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ahmad Alabrash</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">

        
                    <a href="https://www.linkedin.com/in/ahmed-diab-4b0983295" target='_blank'><FaLinkedin /></a>
                    <a href="https://github.com/ahmadalabrash" target='_blank'><FaGithub /></a>


      </div>

      <div className="footer_copyright">
        <small>&copy; <a href="#">Ahmad Alabrash</a> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer