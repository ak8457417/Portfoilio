import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import about from '../../assets/about_img2.jpg'
import codeIt from '../../assets/codeIt2.png'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="theme pattern"/>
            </div>
            {/*<div id="my">*/}
            {/*    <h1>𝔸внιK</h1>*/}
            {/*    <img src={theme_pattern}/>*/}
            {/*</div>*/}
            <div className="about-sections">
                <div className="about-left">
                    <img src={codeIt} alt="profile picture"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Computer Engineering student at VIIT Pune (CGPA 9.28) passionate about building real-world software systems. My work focuses on full-stack development and applied AI, where I develop scalable MERN applications, intelligent recommendation platforms, and real-time backend services.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{width: "80%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{width: "80%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Java & DSA</p>
                            <hr style={{width: "75%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Python</p>
                            <hr style={{width: "75%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>AI & ML</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>9.28</h1>
                    <p>CGPA</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>9+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>3x</h1>
                    <p>HACKATHON WINNER</p>
                </div>
            </div>
        </div>
    )
}

export default About