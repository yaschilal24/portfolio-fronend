 
import React from 'react'
import yas34 from '../image/img-folder/yas34.png'

function Section1() {
  return (
    <div>
        <section  className="profile-section">
  <div  className="profile-container">
    <div  className="profile-column image-column">
      <img src={yas34} alt="Profile Image"/>
    </div>

    <div  className="profile-column info-column gradient-text">
      <ul>
        <li><strong>Birthday:</strong> <span>1 May 1995</span></li>
        <li><strong>Website:</strong> <span>www.YASIada2.com</span></li>
        <li><strong>Phone:</strong> <span>+251 19731527</span></li>
        <li><strong>City:</strong> <span>ADDIS ABABA, ETHIOPIA</span></li>
      </ul>
    </div>

    <div  className="profile-column info-column gradient-text">
      <ul>
        <li><strong>Age:</strong> <span>23</span></li>
        <li><strong>Degree loading:</strong> <span>learn now</span></li>
        <li><strong>Email:</strong> <span>yasiada14@gmail.com</span></li>
        <li><strong>I wanna to Freelance:</strong> <span>searching</span></li>
      </ul>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section1
