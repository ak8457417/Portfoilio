import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import cert from "../../assets/cert.js"

const Certifications = () => {
    return (
        <div id="work" className="gallery">
            <div className="mywork-title">
                <h1>My Certifications</h1>
                <img src={theme_pattern}/>
            </div>
            <div className="gallery-container">
                {cert.map((work, i) => {
                    return <img src={work.w_img} key={i} alt="" />
                })}
            </div>
        </div>
    )
}

export default Certifications