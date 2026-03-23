import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "ahmadba970@gmail.com",
    link: "mailto:ahmadba970@gmail.com",
  },
  {
    id:1,
    icon: <RiMessengerLine />,
    title: "Message",
    info: "Ahmad Alabrash",
    link: "sms:+4917685347282?body=Hi, I saw your portfolio and would like to connect!",
  },
  {
    id:1,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "017685347282",
    link: "https://api.whatsapp.com/send?phone=017685347282",
  }
]
function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zuqzdjn', 'template_ly75qmn', form.current, 'X_yFDfigN9B7viCjp',)
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        {ContactData.map(({ id, icon, title, info, link }) => (
          <article key={id} className="contact_option">
                {icon}
                <h4>{title}</h4>
                <h5>{info}</h5>
                <a href={link} target='_blank'>Send Message</a>
          </article>
                ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea placeholder='Your Message' name="message" rows={10}></textarea>
        <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact