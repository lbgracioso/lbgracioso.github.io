import React from 'react';
import './Homepage.css';
import Navbar from "../components/navbar/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons/faXTwitter";

export const Homepage = () => {
    return (
        <div className="Homepage">
            <header>
                <Navbar />
                <div className="header-text">
                    Lucas Gracioso
                </div>
            </header>
            <main>
                <b>Hello!</b>
                <p>
                    I'm Lucas, a seasoned professional with a strong background in backend development.
                    Throughout my career, I've been involved in diverse projects focusing on cloud management,
                    automation, and infrastructure configuration.
                    <br/><br/>
                    I automated WordPress instances deployment across various providers using Ansible and .NET (C#), and
                    I've contributed to the development of REST APIs while playing a pivotal role in provider
                    management.
                    My expertise extends to backend development for Cluster Administration Toolkit and Utilities
                    projects,
                    where I've honed my skills in virtualization technologies such as virtual machines and containers
                    (Vagrant, Podman).
                    <br/><br/>
                    With experience in C++ and Linux systems, I bring a wealth of desire to learn and availability to
                    any team.
                </p>
            </main>
            <footer>
                <div className="social-container">
                    <a href="//www.linkedin.com/in/lbgracioso"> <FontAwesomeIcon icon={faLinkedinIn}/> </a>
                    <a href="//github.com/lbgracioso"> <FontAwesomeIcon icon={faGithub}/> </a>
                    <a href="//twitter.com/lbgracioso"> <FontAwesomeIcon icon={faXTwitter}/> </a>
                </div>
                <div className="footer-text">
                    <b>2024 lbgracioso.net</b>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;