import React,{useEffect} from "react";
import AOS from 'aos';
import Isotope from 'isotope-layout'

//COMPONENTS
import Intro from './components/Intro';
import ProfolioImage from './components/PortfolioImage';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";


//CSS FILES
import "./assets/css/style.css";

//IMAGE FILES
import patagonia from "./assets/img/preview_page/patagonia.svg";
import patxbi from "./assets/img/preview_page/patxbi.svg";

import adobe from "./assets/img/preview_page/adobe.svg";
import adobexbi from "./assets/img/preview_page/adobexbi.svg";

import logitech from "./assets/img/preview_page/logitech.svg";
import logitechxbi from "./assets/img/preview_page/logitechxbi.svg";

import uber from "./assets/img/preview_page/uber.svg"
import uberlogo from "./assets/img/preview_page/uberlogo.svg"

import pepsi from "./assets/img/preview_page/pepsi.svg"
import pepsilogo from "./assets/img/preview_page/pepsilogo.svg"

import comingsoon from "./assets/img/preview_page/comingsoon.svg"
import lululemonxbi from "./assets/img/preview_page/lululemonxbi.svg";


function Homepage() {
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

  
  //Helper Function for Filter
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  //Helper Function for Filter
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  //Filter
  useEffect(() =>{
    window.addEventListener('load', () => {
      let portfolioContainer = select('#portfolio-grid');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.item',
        });

        let portfolioFilters = select('#filters a', true);

        on('click', '#filters a', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('active');
          });
          this.classList.add('active');

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
    });
  }, [])

  return (
    <div>
      <div class ="fixed-top">
        <Navbar/>
      </div>
            
       <section class="mt-5 section site-portfolio">
        <div class="container mt-4">
          <div class="row mb-5 align-items-center">
            <div class="text-center" data-aos="fade-up">
              <Intro></Intro>
            </div>
              <div class="text-left mt-5 container" data-aos="fade-up" data-aos-delay="100">
                <div id="filters" class="filters">
                <a href="#" data-filter="*" class="active">All</a>
                <a href="#" data-filter=".Engineering">Engineering</a>
                <a href="#" data-filter=".Design">Design</a>
              </div>
            </div>
          </div>

          <div id = "portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">
              
              <ProfolioImage
                  link = "/#/Uber"
                  category = "Engineering"
                  extraCSS = "mt-4"
                  image = {uber}
                  company = {uberlogo}
                  description = "Customer-focused machine learning solutions for fraud detection"
                  typeOfWork = "Software | Machine Learning"
                  >
              </ProfolioImage> 

              <ProfolioImage
                  link = "/#/Logitech"
                  category = "Design"
                  image = {logitech}
                  company = {logitechxbi}
                  description = "Reinventing the definition of play in the Metaverse"
                  typeOfWork = "UI/UX Design | User Research"
                  >
              </ProfolioImage> 

              <ProfolioImage
                  link = "https://www.behance.net/gallery/110328487/Patagonia-Fall-2020"
                  category = "Design"
                  image = {patagonia}
                  company = {patxbi}
                  description = "Integrating cutting-edge technology into Patagonia’s packaging"
                  typeOfWork = "UI/UX Design | User Research"
                  >
              </ProfolioImage>

              <ProfolioImage
                  link = "https://www.behance.net/gallery/141536161/Adobe-Fall-2021"
                  category = "Design"
                  image = {adobe}
                  company = {adobexbi}
                  description = "Empowering student video creators to hone storytelling"
                  typeOfWork = "UI/UX Design | User Research"
                  >
              </ProfolioImage> 
              
              <ProfolioImage
                  link = "#"
                  category = "Engineering"
                  image = {pepsi}
                  company = {pepsilogo}
                  description = "Automating supply chain data processes for e-Commerce @ PepsiCo"
                  typeOfWork = "Software | Data Engineering"
                  >
              </ProfolioImage> 

              <ProfolioImage
                  link = "#"
                  category = "Design"
                  image = {comingsoon}
                  company = {lululemonxbi}
                  description = "Creating insights on technologies used by Lululemon store Educators"
                  typeOfWork = "User Research"
                  >
              </ProfolioImage> 
          </div>
        </div>
      </section>

      <Footer></Footer>         


    <script src="./assets/js/main.js"></script>

    </div>
  );
}

export default Homepage;
