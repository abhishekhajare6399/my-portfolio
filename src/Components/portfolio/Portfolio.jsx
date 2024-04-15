import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/Farmagri.png"
import IMG2 from "../../assets/tictactoe.png"
import IMG3 from "../../assets/medisaver.png"
import IMG5 from "../../assets/ashp.png"
import IMG4 from "../../assets/library.png"
import IMG6 from "../../assets/drowsiness.jpeg"
import IMG7 from "../../assets/food.jpg"


function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Farmagri & Farmagro",
      github: "https://github.com/abhishekhajare6399/Farmagri",
    },
    {
      id: 2,
      image: IMG1,
      title: "Foodies - Order Foood Now",
      github: "https://github.com/abhishekhajare6399/Foodies",
    },
    {
      id: 3,
      image: IMG3,
      title: "Medisaver - Book Appointment",
      github: "https://github.com/abhishekhajare6399/Medisaver",
    },
    {
      id: 4,
      image: IMG4,
      title: "Voting Management System",
      github: "https://github.com/abhishekhajare6399/voting-management-system",
    },
    {
      id: 6,
      image: IMG6,
      title: "Drowsiness Detection System",
      github: "https://github.com/abhishekhajare6399/Drowsiness-Detection",
    },
    {
      id: 5,
      image: IMG5,
      title: "Personal Portfolio Web App",
      github: "https://github.com/abhishekhajare6399/my-portfolio",
    },
  ]

  return (
    <section id='Portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map((ele, i) => {

          return (
            <article data-aos="zoom-in" data-aos-duration="1500" key={i} className='portfolio__item'>
              <div className='portfolio__item_img'>
                <div className="blur blur-p"></div>
                <img src={ele.image} alt={ele.title} />
              </div>
              <h3>{ele.title}</h3>
              <div className="portfolio__item-cta">
                <a href={ele.github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
              </div>

            </article>
          )
        })}

      </div>
    </section >
  )
}

export default Portfolio
