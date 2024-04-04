import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXTwitter} from "@fortawesome/free-brands-svg-icons/faXTwitter";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="title">LBGRACIOSO</div>
            <div className="nav-container">
                <a href="//www.linkedin.com/in/lbgracioso"> <FontAwesomeIcon icon={faLinkedinIn} /> </a>
                <a href="//github.com/lbgracioso"> <FontAwesomeIcon icon={faGithub} /> </a>
                <a href="//twitter.com/lbgracioso"> <FontAwesomeIcon icon={faXTwitter} /> </a>
            </div>
        </nav>
    );
}

export default Navbar;