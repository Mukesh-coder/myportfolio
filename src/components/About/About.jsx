import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Enthusiastic and detail-oriented Java Full Stack Developer with a solid front-end and back-end technologies foundation
o Proficient in Java, Spring Boot, HTML, CSS, JavaScript, and React, with hands-on experience in developing and deploying web applications. </p>
                <p>Adept at working in agile environments and collaborating with cross-functional teams to deliver high-quality software solutions.
                o Known for quick learning and adaptability, with a strong passion for continuous improvement and innovation. Eager to contribute to dynamic development teams and grow in a challenging and fast-paced environment.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr  style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Java 8</p><hr  style={{width:"75%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr  style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React Js and Vue</p><hr  style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Restful API</p><hr  style={{width:"65%"}} /></div>
                
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>06+</h1>
            <p>Months of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>05+</h1>
            <p>Project Completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
