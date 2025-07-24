import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from "../../assets/mywork_data.js"
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
    return (
        <div id="work" className="gallery">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern}/>
            </div>
            <div className="gallery-container">
                {mywork_data.map((work, i) => {
                    return <img src={work.w_img} key={i} alt="" />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon}/>
            </div>
        </div>
    )
}

export default MyWork