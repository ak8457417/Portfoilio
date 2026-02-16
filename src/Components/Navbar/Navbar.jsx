import React, {useRef, useState} from "react"
import './Navbar.css'
import logo from "../../assets/logo2.png"
import underline from "../../assets/nav_underline.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {

    const [menu, setMenu] = useState("home")
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    // ⭐ Smooth scroll function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const navbarHeight = 80; // adjust according to navbar height

        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
        }

        closeMenu(); // close mobile menu automatically
        setMenu(id);
    }

    return (
        <div className="navbar">
            <img className="mylg" src={logo} alt="logo"/>
            <img src={menu_open} onClick={openMenu} alt="" className={'nav-mob-open'}/>

            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>

                <li onClick={() => scrollToSection("home")}>
                    <p>Home</p>
                    {menu === "home" && <img src={underline} alt=""/>}
                </li>

                <li onClick={() => scrollToSection("about")}>
                    <p>About Me</p>
                    {menu === "about" && <img src={underline} alt=""/>}
                </li>

                <li onClick={() => scrollToSection("skills")}>
                    <p>Skills</p>
                    {menu === "skills" && <img src={underline} alt=""/>}
                </li>

                <li onClick={() => scrollToSection("work")}>
                    <p>Portfolio</p>
                    {menu === "work" && <img src={underline} alt=""/>}
                </li>

                <li onClick={() => scrollToSection("contact")}>
                    <p>Contact</p>
                    {menu === "contact" && <img src={underline} alt=""/>}
                </li>
            </ul>

            <div className="nav-connect" onClick={() => scrollToSection("contact")}>
                <p>Connect With Me</p>
            </div>
        </div>
    )
}

export default Navbar
