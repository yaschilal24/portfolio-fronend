import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedStrings = typedRef.current?.getAttribute('data-typed-items')?.split(',') || [];

    const typed = new Typed(typedRef.current, {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('.progress').forEach((progress) => {
      const bar = progress.querySelector('.progress-bar');
      const val = progress.querySelector('i')?.innerText.replace('%', '');
      setTimeout(() => {
        if (bar && val) bar.style.width = val + '%';
      }, 100);
    });
  }, []);

  return (
    <section id="hero">
      <div className="container hero-content">
        <div className="container">
          <h1>
            I am{' '}
            <span
              className="typed"
              ref={typedRef}
              data-typed-items="Yaschilal Adane software engineering at Injibara University, a Developer, a active Learner"
            ></span>
          </h1>
        </div>
        <p className='gradient-text1'>Full Stack Developer</p>
        <a href="#contact" className="btn">
          Get in Touch — contact with me
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
