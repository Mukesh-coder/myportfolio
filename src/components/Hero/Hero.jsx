import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myresume from '../../assets/myresume.pdf'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Mukesh Gondane,</span>  Java Full Stack Developer</h1>
        <p>with a strong foundation in Java, Spring Boot, and modern front-end technologies
        Recently graduated with hands-on experience in building dynamic web applications and working with RESTful APIs</p>
        <div className='hero-section'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
          <a className="hero-resume" href={myresume} target="_blank"> My Resume</a>
        </div>
      
    </div>
  )
}

export default Hero
