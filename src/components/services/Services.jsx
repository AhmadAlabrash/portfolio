import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

import './services.css'


function Services() {
  return (
    <section id='services'>
         <h5>What I Offer</h5>
         <h2>Services</h2>












            <div className="container container_services">

  <article className="card">
    <MdDesignServices className='icon' />
    <h3>Fullstack Development</h3>
    <p className='text-light'>
      I create complete web applications using Next.js, Node.js, and modern frontend technologies, delivering both powerful backend logic and intuitive user interfaces.
    </p>
  </article>

  <article className="card">
    <IoIosRocket className='icon' />
    <h3>DevOps & Cloud</h3>
    <p className='text-light'>
      Experienced with AWS, Jenkins, and Ansible to automate deployments, manage infrastructure, and ensure continuous integration and delivery pipelines.
    </p>
  </article>

  <article className="card">
    <FaCode className='icon' />
    <h3>Clean & Maintainable Code</h3>
    <p className='text-light'>
      I focus on writing efficient, scalable, and well-documented code that is easy to maintain and extend for future growth.
    </p>
  </article>

</div>

    </section>
  )
}

export default Services