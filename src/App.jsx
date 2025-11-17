
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://portfolio-backend-ejye.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResult(data.message || data.error);
    } catch (err) {
      setResult('Something went wrong.');
    }
  };

  return (
    <section id="contact" className="section1">
      <div className="container1">
        <h2 className='gradient-text1'>Contact Me</h2>
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" rows="5" required onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn gradient-text1">Send Message</button>
        </form>
        <div id="formResult">{result}</div>
      </div>
    </section>
  );
}

export default App;

