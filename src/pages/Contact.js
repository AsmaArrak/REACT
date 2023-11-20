
import PizzaLeft from "../assets/3.jpg";
import "../styles/Contact.css";
import React, { useState } from 'react';
import axios from 'axios';




function Contact() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };


  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1> Contactez-Nous</h1>

        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <label htmlFor="name">Nom</label>
          <input name="name" placeholder="Entrez Votre Nom..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Entrez Votre Email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Entrer votre message..."
            name="message"
            type="email"
            
           onChange={handleChange}
            required
          ></textarea>
          <button type="submit"> envoyez</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
