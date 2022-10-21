import React,{useEffect} from "react";
import AOS from 'aos';

import {Link} from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import ReactNavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//CSS FILES
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

import logo from "../assets/img/kellylogo.svg";


function Navbar() {
  useEffect(() => {

    const {
      host, hostname, href, origin, pathname, port, protocol, search
    } = window.location

    const aboutIncluded = href.includes("About");
    const resumeIncluded = href.includes("Resume");

    if ( aboutIncluded ) {
      document.getElementById("about").style.textDecoration = "underline";
    }    
    if (resumeIncluded) {
      document.getElementById("resume").style.textDecoration = "underline";
    }   
    else if (!aboutIncluded && !resumeIncluded) {
      document.getElementById("work").style.textDecoration = "underline";
    }   

  }, [])

  //AOS Fading
  useEffect(() => {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  }, [])


    return (
        <>

            <Container fluid = {true} data-aos="fade-up" data-aos-delay="0">
                <Link to = "/" >
                  <img class = "logopic" src = {logo} style={{marginTop: "15px", marginLeft: "18px", width: "70px", position: 'absolute'}} />
                </Link>

                <div style={{display:'flex', justifyContent:'flex-end'}}>
                <ReactNavBar expand="md" bg="transparent" className= "navbar-dark" >
                    <ReactNavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                    <ReactNavBar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto navbar-dark">
                        <Link className="nav-link nav-custom-dark" id = "work" to = "/">Work</Link>
                        <Link className="nav-link nav-custom-dark" id = "about" to="/About">About</Link>
                        <Link className="nav-link nav-custom-dark" id = "resume" to="/Resume">Resume</Link>
                    </Nav>
                    </ReactNavBar.Collapse>
                </ReactNavBar>
              </div>
              
                
            </Container>
        </>
    );
};

export default Navbar;
