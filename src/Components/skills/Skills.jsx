import React from 'react'
import "./Skills.css"


import Css from "../../assets/Logos/css.3.svg"
import C from "../../assets/Logos/C.png"
import Git from "../../assets/Logos/git.svg"
import Html from "../../assets/Logos/html.svg"
import Javascript from "../../assets/Logos/javascript.svg"

import Django from "../../assets/Logos/django.png"
import PHP from "../../assets/Logos/PHP.jpeg"
import DSA from "../../assets/Logos/DSA.png"
import CP from "../../assets/Logos/C++.png"
import OOPS from "../../assets/Logos/react.svg"


import Bootstrap from "../../assets/Logos/bootstrap.svg"
import Python from "../../assets/Logos/python.jpeg"
import Java from "../../assets/Logos/java.svg"
import Sql from "../../assets/Logos/sql.png"

const Skills = () => {

    const logos = [
        {
            logo: C,
            text: "C"
        },
        {
            logo: CP,
            text: "C++"
        },
        {
            logo: Python,
            text: "Python"
        },
        {
            logo: DSA,
            text: "DSA"
        },
        {
            logo: Html,
            text: "HTML 5"
        },
        {
            logo: Css,
            text: "Css"
        },
        {
            logo: Bootstrap,
            text: "Bootstrap"
        },
        {
            logo: Java,
            text: "Java"
        },
        {
            logo: Javascript,
            text: "JavaScript"
        },
        {
            logo: Sql,
            text: "SQL"
        },
        {
            logo: PHP,
            text: "PHP"
        },
        {
            logo: Django,
            text: "Django"
        },
        {
            logo: Git,
            text: "Git"
        },


    ]

    return (
        <section id='skills'>
            <h5>Tchnical Skills</h5>
            <div className="container logos">
                <div className='blur blur-skills'></div>
                {logos.map((item) => (

                    <div data-aos="zoom-in" data-aos-duration="1500" className='img-main'>
                        <img style={{ width: "80px" }} src={item.logo} alt="" />
                        <p style={{ color: "black", textAlign: "center", marginTop: "5px" }}>{item.text}</p>
                    </div>

                ))}
            </div>


        </section >
    )
}

export default Skills
