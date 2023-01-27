import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mohit Punde</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Academics</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohit-punde-91273120b/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/pundemohit" rel="noreferrer" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/Mohit_punde?t=Hfvq78cwzWaMtwwdBxQXCg&s=08" rel="noreferrer" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohit Punde. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer