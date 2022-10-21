import React from 'react';


//CSS FILES
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";


const PortfolioImage = (props) => (
    <>
        <div class= {props.category + " item col-sm-12 col-md-6 col-lg-5 mb-5 addPad"}>
                <a class= "item-wrap fancybox">
                    <a href={props.link}> 
                        <img class="img-fluid" src={props.image}/>
                    </a>
                <div class="work-info">
                    <a href={props.link}>
                        <img src = {props.company} class = {props.extraCSS + " title-block mt-3"}/>
                    </a>
                    <h6 class = "description-block">{props.description}</h6>

                    <p class = "category-block"> {props.typeOfWork} </p>
                </div>
                </a>
        </div>  
        

    </>
    );
    
export default PortfolioImage;