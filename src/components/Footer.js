import React from "react";

import copyright from "../assets/img/footer/copyright.svg"
import email from "../assets/img/footer/email.svg"
import github from "../assets/img/footer/github.svg"
import linkedin from "../assets/img/footer/linkedin.svg"

function Footer() {

    return (
        <>
            <div data-aos="fade-up" >
                <hr style = {{width:"110%"}}></hr>
                <div class = "icon-container mb-2 mt-4">
                    <div class = "space-adder">
                        <a href="www.linkedin.com/in/kellyliu0" class = "">
                            <img src = {linkedin} class = "contact-icon"></img>
                        </a>
                    </div>
                    
                    <div class = "space-adder">
                        <a href="" class = "">
                            <img src = {email} class = "contact-icon"></img>
                        </a>
                    </div>

                    <div class = "space-adder">
                        <a href="https://github.com/kliu3247" class = "">
                            <img src = {github} class = "contact-icon"></img>
                        </a>
                    </div>
                </div>
                <div class = "row justify-content-center ">
                    <img src = {copyright} class = "copyright" ></img>
                </div>
            </div>
        </>
    );
};

export default Footer;
