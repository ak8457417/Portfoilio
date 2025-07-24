import React from "react"
import './Footer.css'
import footer_logo from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt=" "/>
                    <p>I am a full stack web developer from Pune, India with 2+ years of experience in multiple web technologies.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt=" "/>
                        <input type={'email'} placeholder={'Enter your email'} p/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">* 2025-26 Abhishek Kadu. All rights reserved.</div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer