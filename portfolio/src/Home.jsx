import React, { useState, useRef, useEffect } from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div>
        <section className='home' id='/'>
          <div className='content'>
            <div className='contaent-text'>
              <h1> I'M Bikendra</h1>
              <p className='developer'>Front-End Developer</p>
              <p className='Turning_ideas'>Turning Ideas Into Interactive Reality</p>
              <p className='Icons'> <FaGithubSquare /><FaLinkedin /><FaTwitter /></p>
            </div>
            <div className='contaent-text'>
              <img src="hero-01dff752.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
      <Skills />
      <About />
      <Projects />
    </div>


  );
};

export default Home;
