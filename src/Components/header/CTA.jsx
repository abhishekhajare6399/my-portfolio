import React from 'react'
import CV from "../../assets/Abhishek Hajare Resume-1.pdf"

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn cv-download'>Download CV</a>
        <a href="#contact" className='btn btn-primary lets-talk'>Let's Talk</a>
    </div>
  )
}

export default CTA
