import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import intagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo}/>
        <p>SHOPPERS</p>
      </div>
      <ul className='footer-link'>
        <li>company</li>
        <li>product</li>
        <li>about</li>
        <li>contact</li>
    
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
            <img src={whatsapp_icon}/>
       
        </div>
        <div className='footer-icon-container'>
            <img src={intagram_icon}/>
       
        </div>
        <div className='footer-icon-container'>
            <img src={pintester_icon}/>
       
        </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>copyright @2003-all copyright</p>
        </div>
    
    </div>
  )
}

export default Footer
