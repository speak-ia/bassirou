import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé avec succès ! Le Dr TOURE vous contactera bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact & Appelez la secrétaire (+226 06561386)</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>tourebassirou69@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Téléphone</h4>
                <p>🇲🇱 Mali: +223 76126060/ +223 66126060</p>
                <p>🇧🇫 Burkina: +226 06561386</p>
                <p>🇲🇶 Martinique: +596 696 619216</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Adresse</h4>
                <p>🇲🇱 Bamako, Mali</p>
                <p>🇧🇫 Ouagadougou, Burkina Faso</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <a href="https://www.linkedin.com/in/dr-mahamadou-bassirou-tour%C3%A9-20b71b35b" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontSize: '2rem', transition: 'transform 0.3s ease' }}>
                  <FaLinkedin />
                </a>
                <a href="#" style={{ color: '#2563eb', fontSize: '2rem', transition: 'transform 0.3s ease' }}>
                  <FaFacebook />
                </a>
                <a href="#" style={{ color: '#2563eb', fontSize: '2rem', transition: 'transform 0.3s ease' }}>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre demande ou symptômes..."
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
