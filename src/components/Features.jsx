import React from 'react';
import './Features.css';
import vd1 from '../assets/yoga.mp4'
import vd2 from '../assets/coder.mp4'
import vd3 from '../assets/kuch.mp4'

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose WyreFlow?</h2>
      <div className="feature-cards">
        <div className="card">
        <video className="vdo" src={vd2} autoPlay muted loop playsInline />

          <h3>Real-Time Data Monitoring</h3>
          <p>Monitor your operations in real-time for better decision-making.</p>
        </div>
        <div className="card">
        <video className="vdo" src={vd3} autoPlay muted loop playsInline />

          <h3>Predictive Maintenance</h3>
          <p>Reduce downtime with predictive analytics and maintenance.</p>
        </div>
        <div className="card">
        <video className="vdo" src={vd3} autoPlay muted loop playsInline />

          <h3>Seamless Integration</h3>
          <p>Integrate with your existing systems effortlessly.</p>
        </div>
        <div className="card">
        <video className="vdo" src={vd1} autoPlay muted loop playsInline />

          <h3>Seamless Integration</h3>
          <p>Integrate with your existing systems effortlessly.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Features;
