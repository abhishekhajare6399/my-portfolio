import React from 'react'
import { ImLinkedin } from "react-icons/im"
import { FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { SiMedium } from "react-icons/si"

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/abhishek-hajare-64a7ba20a/" target="blank" rel="noopener noreferrer"><ImLinkedin style={{ fontSize: "20px" }} /></a>
      <a href="https://github.com/abhishekhajare6399"><FaGithub style={{ fontSize: "20px" }} /></a>
      <a href="" target="blank" rel="noopener noreferrer"><SiMedium style={{ fontSize: "20px" }} /></a>
      <a href="https://www.instagram.com/abhishekshirishhajare18/" target="blank" rel="noopener noreferrer"><AiFillInstagram style={{ fontSize: "20px" }} /></a>
    </div>
  )
}

export default HeaderSocials
