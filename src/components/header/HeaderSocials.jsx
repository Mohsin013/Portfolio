import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsMedium} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohsin-iqbal-424336237/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Mohsin013/" target="_blank"><FaGithub/></a>
        <a href="https://medium.com/@mohsiniqbal826635/" target="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials