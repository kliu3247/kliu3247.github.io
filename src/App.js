
import Homepage from './Homepage.js';
import About from './components/About.js';
import Resume from './components/Resume.js';

import Uber from './components/projects/Uber.js';
import Logitech from './components/projects/Logitech.js';



import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

class App extends Component {

  render(){

    return (
      <HashRouter>
          <Routes>
            <Route path="/" element ={<Homepage/>} exact />
           
            <Route path="/About" element ={<About/>} exact />

            <Route path="/Resume" element ={<Resume/>} exact />

            <Route path="/Uber" element ={<Uber/>} exact />

            <Route path="/Logitech" element ={<Logitech/>} exact />

          </Routes>
      </HashRouter>
    );
  }
}

export default App;
