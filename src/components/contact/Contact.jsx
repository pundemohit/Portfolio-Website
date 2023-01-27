import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kix330l', 'template_k3fl5m4', form.current, 'jAya3AGEoC95Pu_RC')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pundemohit@gmail.com</h5>
            <a href="mailto:pundemohit@gmail.com"target='_blank' >Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp contact__option-icon/>
            <h4>WhatsApp</h4>
            <h5>+91 7499754871</h5>
            <a href="https://api.whatsapp.com/send?phone=7499754871" target='_blank'>Send a message</a>
          </article>
        </div>

      


        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact