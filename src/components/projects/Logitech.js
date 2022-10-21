import React,{useEffect} from "react";

import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

import "../../assets/css/style.css";

//IMAGES
import header from "../../assets/img/logitech/header.svg";
import headerMobile from "../../assets/img/logitech/header-mobile.svg";
import medheader from "../../assets/img/logitech/medheader.svg";


import diary from "../../assets/img/logitech/diary.svg";
import ethnographic from "../../assets/img/logitech/ethnographic.svg";
import survey from "../../assets/img/logitech/survey.svg";
import secondary from "../../assets/img/logitech/secondary.svg";

import concept from "../../assets/img/logitech/concept-map.svg";
import persona1 from "../../assets/img/logitech/newgamer.svg";
import persona2 from "../../assets/img/logitech/discouragedgamer.svg";

import insight1 from "../../assets/img/logitech/insight1.svg";
import insight2 from "../../assets/img/logitech/insight2.svg";
import insight3 from "../../assets/img/logitech/insight3.svg";
import insight4 from "../../assets/img/logitech/insight4.svg";

import ideation from "../../assets/img/logitech/ideation.svg";

import solution1 from "../../assets/img/logitech/solution1.svg";
import solution2 from "../../assets/img/logitech/solution2.svg";
import solution3 from "../../assets/img/logitech/solution3.svg";
import solution4 from "../../assets/img/logitech/solution4.svg";




function Logitech () {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <>
    
    <div class = "mt-5"></div>

        <div class ="fixed-top">
            <Navbar/>
        </div>

        <div class = "space"></div>

        <img src = {header}  class = "mt-5 cover-image" data-aos="fade-up" style = {{width:"110%"}}></img>
        <img src = {headerMobile}  class = "mt-5 mobile-cover-image" data-aos="fade-up"></img>
        <img src = {medheader}  class = "mt-5 medium-cover-image" data-aos="fade-up"></img>

        <section class = "small-screen">
            <section class="section">
            <div class="container">

                <div data-aos="fade-up" class = "align-items-center">
                    <h4 class = "logitech-title mb-3">How Might We Embrace All Play</h4>
                    <div class = "logitech border mb-4"></div>

                    <h2 class = "logitech-title">Problem Spaces</h2>
                    <div class = "row">

                        <div class = "col-lg-6 col-md-6 col-12">
                            <ul class="list-line mb-3">
                                <li>Entry points to gaming communities and building permanence</li>
                                <li>Promoting realness in people and interactions</li>
                                <li>Forming community through in-game communication</li>
                                <li>Promoting safe, inclusive, and accessible spaces</li>
                                <li>Balancing between anonymity and connection</li>
                            </ul>   
                        </div>

                        <h5 class = "col-lg-4 col-md-5 col-12">Ultimately, HMW encourage conversations that lead to <i>friendship</i> and <i>community</i> beyond the game?</h5>
                    </div>

                    <div class = "space"></div>

                    <h4 class = "logitech-title mt-5 mb-3">User Research</h4>
                    <div class = "logitech border mb-3"></div>
                    <div class = "row">
                        <img src = {secondary} class = "col-lg-3 col-md-3 col-6"></img>
                        <img src = {survey} class = "col-lg-3 col-md-3 col-sm-6 col-6"></img>
                        <img src = {ethnographic} class = "col-lg-3 col-md-3 col-sm-6 col-6"></img>
                        <img src = {diary} class = "col-lg-3 col-md-3 col-sm-6 col-6"></img>
                    </div>

                    <div class = "space"></div>


                    <h4 class = "logitech-title mt-5 mb-3">Synthesis</h4>
                    <div class = "logitech border mb-4"></div>

                    <div class = "row mb-5">
                        <div class = "col-lg-3 col-md-3 col-12">
                            <h2 class = "logitech-title">Concept Map</h2>
                            <p>We constructed a concept map to connect recurring themes to gaming
                                motivations and mechanisms, based on our survey and interviews.</p>
                        </div>
                        <img src = {concept} class = "col-lg-8 col-md-9 col-12"></img>
                    </div>

                    <div class = "space"></div>


                    <div class = "row mt-5">
                        <div class = "col-lg-4 col-md-4 col-12">
                            <h2 class = "logitech-title">Personas</h2>
                            <p>Our research revealed six main user groups that we represented using personas. 
                                Based on our findings, we found the New Gamer and Discouraged Gamer most 
                                important to the future of gaming.</p>
                        </div>
                        <div class = "row col-lg-2 col-md-2"></div>
                        <div class = "row col-lg-5 col-md-5 col-12">
                            <img src = {persona1}></img>
                            <img src = {persona2}></img>
                        </div>
                    </div>

                    <div class = "space"></div>
                    <div class = "space"></div>


                    <h4 class = "logitech-title mt-5 mb-3">Insights</h4>
                    <div class = "logitech border mb-4"></div>
                    <div class = "row">
                        <img src = {insight1} class = "col-lg-3 col-6 mb-2"></img>
                        <img src = {insight2} class = "col-lg-3 col-md-6 col-sm-6 col-6 mb-2"></img>
                        <img src = {insight3} class = "col-lg-3 col-md-6 col-sm-6 col-6 mb-2"></img>
                        <img src = {insight4} class = "col-lg-3 col-md-6 col-sm-6 col-6 mb-2"></img>
                    </div>

                    <div class = "space"></div>


                    <h4 class = "logitech-title mt-5 mb-3">Ideation</h4>
                    <div class = "logitech border mb-4"></div>
                    <div class = "row mb-5">
                        <div class = "col-lg-3 col-md-3 col-12">
                            <p>Our first round of ideation resulted in two main concepts: community 
                                rating systems and gaming stater packs. We then concept tested these
                                 ideas to create our final prototypes.</p>
                        </div>
                        <img src = {ideation} class = "col-lg-8 col-md-9 col-12"></img>
                    </div>

                    <div class = "space"></div>


                    <h4 class = "logitech-title mt-5 mb-3">Final Solution</h4>
                    <div class = "logitech border mb-4"></div>
                    
                    <h2>Neighborhood</h2>
                    <div class = "row">
                        <p class = "col-12">Neighborhood is a metaverse with a Discord integration. 
                            By introducing the limitations of the physical world into a digital space,
                            communities interact in fresh, immersive, playful ways. Whether it's jamming
                            out at public concerts, designing interior spaces, or just chilling out 
                            in a friend's private room, there's an opportunity to bond in every pixel 
                            of Neighborhood. </p>
                    </div>

                    <div class = "row mt-5 mb-5">
                        <img src = {solution3} class = "col-lg-7 col-md-8 col-12"></img>
                        <div class ="col-lg-4 col-md-4 col-12 logitech-solution-description mt-3">
                            <h2>Private Virtual Space</h2>
                            <p> Build your gaming identity by customizing your personal space’s appearance, 
                                safety settings, and more. </p>
                        </div>
                    </div>
                    <div class = "space"></div>


                    <div class = "row mt-5 mb-5">
                        <img src = {solution2} class = "col-lg-7 col-md-8 col-12"></img>

                        <div class ="col-lg-4 col-md-4 col-12 logitech-solution-description mt-3">
                            <h2>Public Virtual Space</h2>
                            <p> 
                            Mingle with other people in #general. Meet those you otherwise wouldn’t 
                            in a more natural enviornment for socializing.
                            </p>
                        </div>
                    </div>
                    <div class = "space"></div>


                    <div class = "row mt-5 mb-5">
                        <img src = {solution1} class = "col-lg-7 col-md-8 col-12 "></img>

                        <div class ="col-lg-4 col-md-4 col-12 logitech-solution-description mt-3">
                            <h2>An Improved World Map</h2>
                            <p> 
                            Find your next squad by exploring Discord servers like a map, rather than a list.
                            </p>
                        </div>
                    </div>
                    <div class = "space"></div>


                    <div class = "row mt-5 mb-5">
                        <img src = {solution4} class = "col-lg-7 col-md-8 col-12 "></img>

                        <div class ="col-lg-4 col-md-4 col-12 logitech-solution-description mt-3">
                            <h2>Community Events</h2>
                            <p> 
                            From concerts to museum exhibits, shared experiences are more convenient
                            and have lower stakes.  </p>
                        </div>
                    </div>

                </div>
            </div>

            

            </section>
            </section>


        <Footer></Footer>    
                  
    </>
    );
}

export default Logitech;