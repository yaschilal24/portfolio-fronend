import React from 'react'

function Section3() {
  return (
    <>
    <section id="skills"  className="section">
        <div  className="container">
            <h2 className='gradient-text12'>My Skills</h2>
            <div  className="skills-grid">
                <div  className="skill-card">
                    <i  className="fas fa-code"></i>
                    <h3 className='gradient-text12'>Web Development</h3>
                    <p>HTML, CSS, JavaScript, React, Node.js  </p>
                </div>
                <div  className="skill-card">
                    <i  className="fas fa-palette"></i>
                    <h3 className='gradient-text'>maintanace of software pc and mobile</h3>
                    <p> smart phone, keyboard-phone</p>
                </div>
                <div  className="skill-card">
                    <i  className="fas fa-mobile-alt"></i>
                    <h3 className='gradient-text'> some programming language </h3>
                    <p> c++,mysql,introduction-java, </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section3
