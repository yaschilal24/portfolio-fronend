 import React from 'react';

function  Section2() {
  return (
    <div>
      <section className="skills-section">
        <h1 className="my-k gradient-text">My Skills</h1>
        <div className="skills-container gradient-text">
          {/* Left Column */}
          <div className="skills-column">
            <div className="progress">
              <span className="skill">
                <span>HTML</span> <i className="val">95%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                <span>CSS</span> <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                <span>JavaScript</span> <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="skills-column">
            <div className="progress">
              <span className="skill">
                <span>MySQL</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                <span>Bootstrap</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                <span>Node.js</span> <i className="val">56%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: '56%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ggg ">
    <h1 className='gradient-text'> this an onther protifolio yas...click link</h1>

    <h3><a href="https://yasi12.netlify.app/" className="link"> https://yasi12.netlify.app/</a></h3>
    </div>
    </div>
  );
}

export default Section2
