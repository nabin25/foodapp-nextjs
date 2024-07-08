import React from 'react'
import { assets } from '@/public/assets/assets'
import './Footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quaerat consequatur amet? Consectetur quis fugit molestiae illo hic quasi perspiciatis.</p>
                <div className="footer-social-icons">
                    <Image className='social-icon' src={assets.facebook_icon} alt="" />
                    <Image className='social-icon' src={assets.twitter_icon} alt="" />
                    <Image className='social-icon' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>9870000000</li>
                    <li>dummy@dummy.com</li>
                </ul>
            </div>
        </div>
        <hr />
        
    </div>
  )
}

export default Footer