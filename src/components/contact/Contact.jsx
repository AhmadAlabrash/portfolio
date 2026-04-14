import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "contact@bytasker.com",
    link: "mailto:contact@bytasker.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Message",
    info: "Ahmad Alabrash",
    link: "sms:+4917662410040?body=Hi, I saw your portfolio and would like to connect!",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+49 176 62410040",
    link: "https://wa.me/4917662410040",
  }
];

function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:contact@bytasker.com?subject=${subject}&body=${body}`;

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} rel="noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={10}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;