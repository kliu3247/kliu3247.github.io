import React,{useEffect} from "react";

import Navbar from "./Navbar.js";
import Footer from "./Footer.js";


import res from "../assets/img/resume/resume.svg"

function Resume() {
    

    return (
        <>
            <Navbar></Navbar>

            <div class = "row justify-content-center mt-5" data-aos="fade-up">
                <img src = {res} class = "mt-2 mb-5 col-lg-7 col-md-10 col-sm-12"></img>
            </div>

            <Footer></Footer>         

        </>
    );
};

export default Resume;

