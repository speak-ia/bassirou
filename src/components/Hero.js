import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCV = () => {
    // Ouvrir le CV dans Google Drive
    window.open('https://drive.google.com/file/d/1rLOXUqRLuF0CxYNVQ5h2SPaxgxEktkQL/view?usp=sharing', '_blank');
  };

  return (
    <section className="hero" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/backgr.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      repeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <div className="container">
        <h1>Dr. MAHAMADOU BASSIROU TOURE</h1>
        <p className="hero-subtitle">Médecin diplômé d'état spécialiste en chirurgie pédiatrique générale (viscéral et orthopédique)</p>
        <p className="hero-subtitle">Engagé pour la santé et le bien-être des enfants du Mali</p>
        
        <div className="hero-buttons">
          <a href="( +223 66126060/ 76126060)" className="btn btn-primary">
            Appelez la secrétaire
          </a>
          <button className="btn btn-secondary" onClick={openCV}>
          Mon CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
