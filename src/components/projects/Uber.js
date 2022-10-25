import React,{useEffect} from "react";

import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

import header from "../../assets/img/uber/header.svg";

import overview from "../../assets/img/uber/overview.png";
import impact from "../../assets/img/uber/impact.png";
import approach from "../../assets/img/uber/approach.png";
import takeaways from "../../assets/img/uber/takeaways.png";



function Uber () {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      }, []);

    return (
    <>
        <div class ="fixed-top">
            <Navbar/>
        </div>

        <div class = "mt-5">

        <div class = "space"></div>


        </div>

        <img src = {header} data-aos="fade-up" data-aos-delay="100" class = "mt-5" style = {{width:"100%"}}></img>

        <section class="section" data-aos="fade-up" data-aos-delay="100" >
        <div class="container">

            <div data-aos="fade-up" data-aos-delay="100" class = "align-items-center">
                <h4 class = "uber-title mb-3">Overview</h4>
                <div class = "border mb-4"></div>
                <p class = "col-md-7 mb-5" >I worked end-to-end on a machine learning model with over 95% accuracy 
                    to improve image validation for Uber Eats. This model has a cost saving
                        of $5 million anually.</p>
            </div>
        </div>

            

            <div class="site-section pb-0" data-aos="fade-up">
                <div class="container mt-5 mb-5">
                    <div class="row align-items-stretch">
                        <div class="col-md-6">
                            <img src={overview} alt="Image" class="img-fluid"/>
                        </div>
                        <div class="col-md-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <div class="sticky-content">
                                <h4 class = "uber-title mb-3">Problem</h4>
                                <div class = "border mb-4"></div>
                                {/*<p class="mb-4"><span class="text-muted">Design</span></p>*/}

                                <div class="mb-5">
                                    <p>Current validation flows at Uber are not robust enough to combat 
                                        validation on images, resulting in exposure to fraud.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-5 mb-5" data-aos="fade-up">
                    <div class="row align-items-stretch">
                        <div class="col-md-6" data-aos="fade-up">
                            <img src={impact} alt="Image" class="img-fluid"/>
                        </div>
                        <div class="col-md-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <div class="sticky-content mt-sm-3">
                                <h4 class = "uber-title mb-3">Solution &amp; Impact</h4>
                                <div class = "border mb-4"></div>
                                {/*<p class="mb-4"><span class="text-muted">Design</span></p>*/}

                                <div class="mb-5">
                                    <p>I built, tested, and integrated a machine learning model in the Uber app 
                                        for image validation in Uber Eats. The tested model achieved  +90% accuarcy,
                                         +95%  percision and F1-score, and nearly 100% recall. This model has a cost 
                                         saving of $5 million anually.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-5 mb-5" data-aos="fade-up">
                    <div class="row align-items-stretch">
                        <div class="col-md-6" data-aos="fade-up">
                            <img src={approach} alt="Image" class="img-fluid"/>
                        </div>
                        <div class="col-md-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <div class="sticky-content mt-sm-3">
                                <h4 class = "uber-title mb-3">Approach</h4>
                                <div class = "border mb-4"></div>
                                {/*<p class="mb-4"><span class="text-muted">Design</span></p>*/}

                                <div class="mb-5">
                                    <p>I intially compared Google’s VIT model with ResNet50 (CNN) to determine
                                         the best initial benchmarking model. From there, my approach was to use
                                          transfer learning, k-cross fold validation, and hyperperamater-tuning 
                                          to create an optimal model from real-world training data. I then tested,
                                           deployed, and integrated this model into Uber’s backend for in-app usage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-5 mb-5" data-aos="fade-up">
                    <div class="mt-5 row align-items-stretch">
                        <div class="col-md-6" data-aos="fade-up">
                            <img src={takeaways} alt="Image" class="img-fluid"/>
                        </div>
                        <div class="col-md-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
                            <div class="sticky-content mt-sm-3">
                                <h4 class = "uber-title mb-3">Takeaways</h4>
                                <div class = "border mb-4"></div>
                                {/*<p class="mb-4"><span class="text-muted">Design</span></p>*/}

                                <ul class="list-line mb-5">
                                    <li>Machine Learning was a new field for myself, so I found ways to 
                                        learn and immerse myself in it</li>
                                    <li>Ramping up on new technologies and how to do so efficiently </li>
                                    <li>Working and understanding large codebases</li>
                                </ul>

                                <div class="mb-5">
                                    <p>Thank you to the Help Intelligence Team, Roopansh Bansal, Gopal Biyani,
                                         Preet Inder Singh Rihan, Verena Stecher, Ayush Singh, Juan Marcano, 
                                         Arindam Bhattacharya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        

            



            </section>

        <Footer></Footer>    
                  
    </>
    );
}

export default Uber;