import React from 'react'
import artf from '../image/img-folder/artf.jpg'
import timeMang from '../image/img-folder/time-manage.jpg'
function Section4() {
  return (
    <>
         <section id="projects"  className="section">
        <div  className="container">
            <h2>Recent Projects</h2>
            <div  className="projects-grid">
                <div  className="project-card">
                    <img src= {artf}alt="Project 1"/>
                    <div  className="project-info">
                        <h3 className='gradient-text12'> Apple website responsive </h3>
                        <p>you can see clik the link.</p>
                        <a href="https://appple-view.netlify.app/"  className="apple-view">view</a>
                    </div>
                </div>
                <div  className="project-card">
                    <img src= {timeMang}alt="Project 2"/>
                    <div  className="project-info">
                        <h3 className='gradient-text12'>Task Management App</h3>
                        <p> daily managment morning up to the night with alert of a work management.
                            
                            .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section4
