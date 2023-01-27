import React from 'react'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/mohit-punde-91273120b/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/pundemohit" rel="noreferrer" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/Mohit_punde?t=Hfvq78cwzWaMtwwdBxQXCg&s=08" rel="noreferrer" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial
