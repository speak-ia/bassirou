import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Créer un lien de téléchargement pour le CV
    const link = document.createElement('a');
    link.href = '/cv-dr-bassirou-toure.pdf'; // Le fichier PDF sera dans le dossier public
    link.download = 'CV-Dr-Mahamadou-Bassirou-TOURE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/8.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      repeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <div className="container">
        <h1>Dr. MAHAMADOU BASSIROU TOURE</h1>
        <p className="hero-subtitle">Médecin Chirurgien Spécialisé</p>
        <p className="hero-subtitle">Expert en Chirurgie Générale et Spécialisée</p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Prendre RDV
          </a>
          <button className="btn btn-secondary" onClick={downloadCV}>
            Télécharger CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
