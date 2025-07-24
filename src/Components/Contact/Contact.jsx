import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "958e6a60-3d5b-4af7-aab1-55fbc748f7ff");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern}/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am a full stack web developer from Pune, India with 2+ years of experience in multiple web technologies.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon}/>
                            <p>ak8457417@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon}/>
                            <p>+91 8530283963</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon}/>
                            <p>Pune, Maharashtra, India.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type={'text'} placeholder={'Enter your name'} name={'name'}/>
                    <label htmlFor="">Your Email</label>
                    <input type={'email'} placeholder={'Enter your email'} name={'email'}/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name={'message'} rows={8} placeholder={'Enter your message'}/>
                    <button type={'submit'} className={'contact-submit'}>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact