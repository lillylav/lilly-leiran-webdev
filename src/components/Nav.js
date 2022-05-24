// import libraries
import React from "react";

// import image
import logoImage from "../assets/img/logo.png";


function Nav() {
    return (
        <header className="header">
            <nav className="navbar nav-items" role="navigation" aria-label="main navigation">
                <div className="navbar-brand pink-background">
                    <a className="hover-ignore pink-background">
                        <img src={ logoImage } id="logo" className="" alt="'Lilly Leiran, Web Development', a hand comes in from each side with magic stars around them" />
                    </a>

                    <a role="button" class="navbar-burger pink-background" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu navbar-end pink-background">
                    <a href="#about" className="navbar-item is-size-4" activeClassName="selected">
                        About Me
                    </a>
                    <a href="#portfolio" className="navbar-item is-size-4">
                        Portfolio
                    </a>
                    <a href="#resume" className="navbar-item is-size-4">
                        Resume
                    </a>
                    <a href="#contact" className="navbar-item is-size-4">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Nav;