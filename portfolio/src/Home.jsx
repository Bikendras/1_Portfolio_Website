import React, { useState, useRef, useEffect } from 'react';
import { FaGithubSquare,FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Outlet } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <div>
        <div>
        <nav>
      <div className='nav-center'>
        <div className='nav-header'>
            <span  className='Flipkart'>Web<span style={{color:"#059669"}}>Dev</span></span>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars/>
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
    <section className='home' id='/'>
        <div className='content'>
            <div className='contaent-text'>
                <h1> I'M Bikendra</h1>
                <p className='developer'>Front-End Developer</p>
                <p className='Turning_ideas'>Turning Ideas Into Interactive Reality</p>
                <p className='Icons'> <FaGithubSquare/><FaLinkedin /><FaTwitter /></p>
            </div>
            <div className='contaent-text'>
                <img src="hero-01dff752.svg" alt="" />
            </div>
        </div>
    </section>
    {/* <Outlet/> */}
    </div>
      <Skills/>
      <About/>
      <Projects/>
    </div>
    
    
  );
};

export default Home;
