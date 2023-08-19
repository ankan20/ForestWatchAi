import React from 'react';
import Navbar from "../Components/Navbar";
import './Aboutstyle.css';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us">
    
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur consequat nisi, vel maximus odio
          venenatis eget. Integer congue, orci nec sodales ultrices, sapien purus consequat nulla, ac commodo enim est
          ac velit. Suspendisse potenti. Suspendisse ut libero a urna iaculis dignissim eget ac turpis.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis bibendum nunc
          id volutpat interdum. Nulla facilisi. Nam rhoncus ipsum id mauris finibus, in luctus arcu cursus.
        </p>
        <p>
          Sed vel euismod nulla, id varius mauris. Vivamus posuere, dolor ac aliquet dictum, nisl lorem convallis elit,
          eu ultricies velit felis at justo. Quisque sit amet sem vitae magna ultricies rhoncus.
        </p>
      </div>
    </div>
      <div id ="footer">
        <Footer/>
      </div>
    
    </>
  );
};


export default About;
