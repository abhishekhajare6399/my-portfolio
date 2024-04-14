import React from 'react'
import "./Experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill's I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div data-aos="zoom-in" data-aos-duration="1500" className="experience__frontend">
          <a href="https://www.riseretail.net/"><h3>Rise Retail & Payment Solutions Pvt Ltd</h3></a>
          <small className='text-light'>Full Stack Development</small>

          <div className="blur blur-e"></div>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <small className='text-light'>I am a Full Stack Web Developer with robust problem-solving skills and proven experience in designing, developing and deploying software, websites & web-applications in a test-driven environment.</small>
              </div>
            </article>
          </div>
        </div>


        {/* Backend development */}



        <div data-aos="zoom-in" data-aos-duration="1500" className="experience__backend">
        <a href="https://www.riseretail.net/"><h3>Annapurna Food & Packaging</h3></a>
          <small className='text-light'>Full Stack Development</small>
          <div className="blur blur-e2"></div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <small className='text-light'>I am a Full Stack Web Developer with robust problem-solving skills and proven experience in designing, developing and deploying software, websites & web-applications in a test-driven environment.</small>
              </div>
            </article>
          </div>

        </div>


      </div>



    </section>
  )
}

export default Experience
