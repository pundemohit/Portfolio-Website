import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>Get to know more</h5>
      <h2>About me</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Achievements</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SGPA 10 in First Year Engineering</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved 70+ DSA Problems on various platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Scored 93 Percentile in MHT-CET 2020</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Active participant in coding hackathons</p>
            </li>
          </ul>
        </article>

        {/* End of the Achievements */}

        <article className='service'>
          <div className="service__head">
            <h3>Certifications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Stack Web Development, Udemy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Google Cloud Foundation, Quiklabs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C and C++ Programming, IACSD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fundamentals of Digital Marketing, Google.</p>
            </li>
          </ul>
        </article>

    {/* End of Certifications */}

        <article className='service'>
          <div className="service__head">
            <h3>Relevant Coursework</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software Engineering</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Operating System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Structures and Algorithms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Object Oriented Programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Management System</p>
            </li>
            
          </ul>
        </article>

       {/* End of Coursework */}
       
      </div>
    </section>
  )
}

export default services