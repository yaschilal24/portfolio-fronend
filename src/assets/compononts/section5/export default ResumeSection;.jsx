import React from 'react';
import fpro from '../image/img-folder/f pro.jpg'
import AI from  '../image/img-folder/artifical intelegince.jpg'
import pdf from '../resume/yaschilal adan1.pdf'
function ResumeSection() {
  return (
    <section>
      <div className="resume" id="Resume">
        <h1 className='gradient-text12'>My Certificate</h1>
        <h2 className='gradient-text1'>Certificate in Programming Fundamentals and Artificial Intelligence</h2>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 View My Full Resume
        </a>
        <div className="twoImg">
          <img src={AI}  alt="Artificial Intelligence Certificate" />
          <img src= {fpro} alt="Programming Fundamentals Certificate" />
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
