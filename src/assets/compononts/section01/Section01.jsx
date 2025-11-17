import React from 'react'
import nabukie from '../image/img-folder/nabukie-baner.jpg'
function Section01() {
  return (
    <div>
    <section id="about"  className="section">
        <div  className="container about-grid">
            <div>
                <img src={nabukie} alt="Yaschilal Adane"  className="profile-img"/>
            </div>
            <div  className="about-me gradient-text1">
                <h2>About Me</h2>
                <p>  I am Yaschilal Adane from Injibara  Ethiopia and also dedicated time management for self teaching passionate web front-end developer based in Injibara, Ethiopia. With a keen eye for design and a dedication to creating intuitive user experiences, I specialize in crafting visually appealing and highly functional websites. My journey in web development began in 2024 years ago, and since then, I've honed my skills in various technologies and frameworks to build responsive and dynamic web applications. 
                    this special day of mine today increase our demmand for costmor.
                </p>
                <p>the  best for the brightest I think locally act globaly .</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Section01
