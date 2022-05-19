// import libraries
import React from "react";

// import image
import logoImage from "../assets/img/logo.png";


function Nav() {
    return (
        <header className="header">
            <nav className="navbar nav-items" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="hover-ignore">
                        <img src={ logoImage } id="logo" className="my-2" alt="'Lilly Leiran, Web Development', a hand comes in from each side with magic stars around them" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu navbar-end">
                    <a href="#about" className="navbar-item">
                        About Me
                    </a>
                    <a href="#portfolio" className="navbar-item">
                        Portfolio
                    </a>
                    <a href="#resume" className="navbar-item">
                        Resume
                    </a>
                    <a href="contact" className="navbar-item">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Nav;