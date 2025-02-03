import React from 'react';
import './Industries.css';
import vd3 from '../assets/kuch.mp4'

const Industries = () => {
  return (
    <section className="industries">
      <h2>Industries We Serve</h2>
      <div className="industry-list">
        <div className="industry">
          <video className =  'vdo' src= {vd3} alt="Manufacturing"  autoPlay loop playsInline  muted />
          <p>Manufacturing</p>
        </div>
        <div className="industry">
          <video className =  'vdo' src= {vd3} alt="Energy"  autoPlay loop playsInline  muted  />
          <p>Energy</p>
        </div>
        <div className="industry">
          <video className =  'vdo' src= {vd3} alt="Healthcare" autoPlay loop  playsInline  muted />
          <p>Healthcare</p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
