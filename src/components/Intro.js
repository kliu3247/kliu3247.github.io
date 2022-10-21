import React from 'react';

/*Pictures*/
import largestar from "../assets/img/intro_page/largestar.svg";
import leftstar from "../assets/img/intro_page/starleft.svg";
import rightstar from "../assets/img/intro_page/starright.svg";


function Intro () {

    return (
    <>
        <div data-aos="fade-up">
            
            <h1>Hello, I'm Kelly</h1>
            <img src = {largestar} class = "hellostar"/>
            <div class="row justify-content-center ">
                <h2 class = "col-lg-6 mt-1">I'm a Designer, Developer &amp; Engineering Student @ UC Berkeley</h2>
            </div>

            <div class="row justify-content-center current-efforts">
                <img src = {leftstar} class = "leftstar"/>
                <h3 class = "current-efforts-text col-lg-7 mt-3">I create <i>user-obsessed products</i> with Human Centered Design and Engineering. My current efforts include...</h3>
            </div>
            

            {/*<img src = {rightstar} class = "rightstar"/>*/}


        </div>
    </>
    );
}

export default Intro;