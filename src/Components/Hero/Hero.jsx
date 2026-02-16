import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import ak from '../../assets/ak.jpg'
import resume from '../../assets/Abhishek Kadu Feb 26.pdf'

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={ak} alt=" " />
            <h1><span>I'm Abhishek Kadu,</span> fullstack web developer based in <span id="ind">India</span>.</h1>
            <p>
                Computer Engineering student at VIIT Pune with experience developing production-level MERN applications,
                AI-powered platforms, and real-time systems. Passionate about solving real world problems through clean architecture and efficient backend design.
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <a className="anchor-link" href="#contact"><div onClick={() => setMenu("contact")}>Connect With Me</div></a>
                </div>
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-resume"
                >
                    My Resume
                </a>
            </div>
        </div>
    )
}

export default Hero