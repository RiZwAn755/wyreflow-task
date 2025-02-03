import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Industries with Smart IoT Solutions</h1>
        <p>Transform your operations with WyreFlow's cutting-edge IoT and data analytics platform.</p>
        <div className="hero-buttons">
          <button className="primary-button">Learn More</button>
          <button className="secondary-button">Request a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;