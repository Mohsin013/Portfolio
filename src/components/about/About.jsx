import React from 'react'
import "./about.css"
import ME from "../../assets/about2.jpg"
import {VscFolderLibrary} from "react-icons/vsc"
import {FaAward} from "react-icons/fa"
import {GiStairsGoal} from "react-icons/gi"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
         <div className="about__me">
           <div className="about__me-image">
             <img src={ME} alt="About Image" />
           </div>
         </div>
         <div className="about__content">
           <div className="about__cards">
             <article className="about__card">
               <VscFolderLibrary className='about__icon'/>
               <h5>Projects</h5>
               <small>3+ Completed</small>
             </article>
             <article className="about__card">
               <FaAward className='about__icon'/>
               <h5>Earned Excellence Award</h5>
               <small>For Art Work</small>
             </article>
             <article className="about__card">
               <GiStairsGoal className='about__icon'/>
               <h5>Hobbies</h5>
               <h6>Trekking, Cricket, Book Reading</h6>
             </article>
           </div>
           <p>Passionate for developing scalable web applications and working across the full
              stack. I am looking forward to grow my skill set to expand my professional
              competency. Excited to be at the deployment phase of my new career as a
              Full-Stack Web Developer.</p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}

export default About