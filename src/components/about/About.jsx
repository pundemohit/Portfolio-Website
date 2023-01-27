import React from 'react'
import './About.css'
import ME from '../../assets/mee.jpg'
import { FaAward } from 'react-icons/fa'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              < FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Intern at Sparks foundation</small>
            </article>
            <article className="about__card">
              < BsBookmarkStarFill className='about__icon' />
              <h5>Academic GPA</h5>
              <small>9.57 SGPA(Second Year)</small>
            </article>
            <article className="about__card">
              < VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <br />
          <p>
            I am a Third Year Computer Engineering Undergraduate at Savitribai Phule University and currently studying at Dr. D.Y. Patil Institute of Technlogy, Pimpri, Pune.
          </p>
          <br />
          <p>I am a Web Developer looking for internships and part time opportunies where I can put my skills to use and contribute towards making a change. </p>
          <br />
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

