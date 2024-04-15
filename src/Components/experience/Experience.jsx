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
          <h4>Full Stack Developer</h4>
          <div className="blur blur-e"></div>
          <small className='text-light'>
            • Implemented coupon redemption and appointment booking functionalities..<br></br>
            • Enabled location-based search and favorite shop creation. Implemented real-time chat for staff-customer communication..<br></br>
            • Developed Rise Retail Consumer Platform, listing registered shops for easy consumer access, akin to Justdial..<br></br>
            • Additionally, each shop was provided with a personalized website exclusively dedicated to their own shop, enhancing their online presence.<br></br>
            • Technologies Used: PHP, HTML, CSS, JavaScript, Bootstrap, MYSQL.
          </small>
              
        </div>


        {/* Backend development */}



        <div data-aos="zoom-in" data-aos-duration="1500" className="experience__backend">
        <a href="https://www.riseretail.net/"><h3>Annapurna Mess</h3></a>
          <h4>Full Stack Developer(Freelancer)</h4>
          <div className="blur blur-e2"></div>
          <small className='text-light'>
            • Develop a web Platform for mess where he can manage his mess customer
            and his records his attendance history a another platform for customer to
            mark there attendance by scanning QR code.<br></br>
            • Technologies Used: PHP, HTML, CSS, JavaScript, Bootstrap, MYSQL.<br></br>
            • <a href="https://github.com/abhishekhajare6399/Annapurna-Mess">Github Link: abhishekhajare6399/Annapurna-Mess</a>
          </small>

        </div>


      </div>



    </section>
  )
}

export default Experience
