import React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";


import aboutMePic from "../assets/img/about/aboutMePic.png"
import aboutMeText from "../assets/img/about/aboutmetext.svg"
import clump from "../assets/img/about/photoclump.png"



function About() {
    
    return (
        <>
            <Navbar></Navbar>         

            <section class="section aboutme pb-5">
                <div class="container removeMargins row justify-content-center">
                    <div class = "mb-5 col-md-5 col-lg-4">
                        <div data-aos="fade-up">
                            <img class = "aboutmetext"src = {aboutMeText}/>
                        </div>

                        <div class=" mb-2 mb-md-0" data-aos="fade-up">
                            <p> I’m Kelly! I aspire to innovate, explore, and empathize in everything I do.
                                I seek to create designs that are user-centric, creative,
                                and impactful, with an engineering driven mindset. </p>
                            <p>My specialities lie in the technology space, where I often
                                combine my computer science and electrical engineering background and
                                my experiences as a human-centered design consultant.</p>
                            <h6>I am currently seeking new & interesting opportunities!</h6>
                        </div>
                    </div>
                    
                </div>

                <div class="container removeMargins row justify-content-center mt-5">
                    <div class = "mb-5 col-md-5 col-lg-4">
                        <div class=" mb-2 mb-md-0" data-aos="fade-up">
                            <p> Outside of work hours, I love to travel and explore! I’m an avid adventurer, so I’m
                                 always up for something new — whether it be chasing sunsets, climbing mountains,
                                  dancing at a music festival, catching waves, or exploring a new country.</p>
                        </div>
                    </div>

                    <div class = "col-md-7 col-lg-4">
                        <div class="row mb-2 align-items-end" data-aos="fade-up">
                            <p><img src={clump} alt="Image" class="img-fluid"  data-aos="fade-up"/></p>
                        </div>
                    </div>
                    
                </div>

                </section>

            <Footer></Footer>         
        </>
    );
};

export default About;

