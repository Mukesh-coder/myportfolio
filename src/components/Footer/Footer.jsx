import React from 'react'
import'./Footer.css'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <span >Mukesh</span>
                <p>I'm a Java Full Stack Developer form Amravati,Maharastra,India.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2024 copyright Mukesh Gondane All Rights Reserved</p>
        <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy and Policy</p>
                <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
