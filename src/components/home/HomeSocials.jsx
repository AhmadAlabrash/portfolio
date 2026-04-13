import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function HeaderSocials() {
  return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/ahmed-diab-4b0983295" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/ahmadalabrash" target='_blank'><FaGithub /></a>
        </div>
  )
}

export default HeaderSocials