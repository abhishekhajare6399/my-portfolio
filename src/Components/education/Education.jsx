import React from 'react'
import "./Education.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Experience() {
  return (
    <section id='education'>
      <h2>My Education</h2>

      <div className='container experience__container'>

      <div data-aos="zoom-in" data-aos-duration="1500" className="experience__frontend">
          <a href="https://www.mitaoe.ac.in/"><h3>MIT Academy of Engineering Alandi Pune</h3></a>
          <h3>Degree : Computer Science &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Batch : 2024 </h3><h3>CGPA : 8.62</h3>
          <div className="blur blur-e"></div>
          
        </div>

        {/* Backend development */}



        <div data-aos="zoom-in" data-aos-duration="1500" className="experience__backend">
          <h3>Bhausaheb Firodiya High School</h3>
          <div className="blur blur-e2"></div>
          <h3>Class : 12th &nbsp;Batch : 2020 Percentage : 74.46%</h3>
          <h3>Class : 10th &nbsp;Batch : 2018 Percentage : 86.60%</h3>

        </div>


      </div>



    </section>
  )
}

export default Experience
