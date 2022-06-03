import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/port4.png"
import IMG2 from "../../assets/port1.png"
import IMG3 from "../../assets/port2.png"


const data=[
  {id:3,
    image:IMG3,
    title:"BANGGOOD",
    desp:"An E-commerce platform to buy a wide range of products",
    github:"https://github.com/Mohsin013/Banggood/tree/main/Banggood",
    demo:"https://brilliant-maamoul-240258.netlify.app/"
  },
 
{id:2,
  image:IMG2,
  title:"RODAN+FEILDS",
  desp:"A web application to purchase skin care products",
  github:"https://github.com/Mohsin013/Rodan-Fields",
  demo:"https://storied-sawine-e5f444.netlify.app/"
}, {id:1,
  image:IMG1,
  title:"MAX FASHION",
  desp:"A web application for one stop shop for clothing, accessories and footwear needs for the entire family.",
  github:"https://github.com/Mohsin013/Max-Clone-Website/tree/main/Max-clone-main",
  demo:"https://leafy-sorbet-dccc4d.netlify.app/"
},


]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
         data.map(({id,image,title,desp,github,demo})=>{
           return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desp}</p>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio