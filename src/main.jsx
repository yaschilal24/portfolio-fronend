import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './assets/compononts/header/header.jsx';
import Section1 from './assets/compononts/section1/Section1';
import HeroSection from './assets/compononts/HeroSection/HeroSection';
import Section01 from './assets/compononts/section01/Section01';
import SkillsSection from './assets/compononts/section2/Section2';
import Section3 from './assets/compononts/section3/Section3';
import Section4 from './assets/compononts/section4/Section4';
import ResumeSection from './assets/compononts/section5/export default ResumeSection;';
import Footer from './assets/compononts/footer/Footer';
 
    


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <HeroSection/>
    <Section01/>
    <Section1/>
    <SkillsSection/>
    <Section3/>
    <Section4/>
    <ResumeSection/>
    <App />
    <Footer/>
      
  </StrictMode>,
)
