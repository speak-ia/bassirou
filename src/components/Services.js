import React from 'react';
import { FaStethoscope, FaUserMd, FaVideo, FaHeartbeat } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaStethoscope />,
      title: "Chirurgie Pédiatrique",
      description: "Spécialisé dans la prise en charge chirurgicale des enfants, avec expertise en traumatismes thoraciques et pathologies complexes."
    },
    {
      icon: <FaUserMd />,
      title: "Consultations Spécialisées",
      description: "Diagnostic et suivi personnalisé pour les pathologies infantiles, du diagnostic initial au suivi post-opératoire."
    },
    {
      icon: <FaVideo />,
      title: "Téléconsultations",
      description: "Consultations à distance pour une prise en charge rapide et efficace des enfants au Mali et dans la sous-région."
    },
    {
      icon: <FaHeartbeat />,
      title: "Recherche Médicale",
      description: "Participation active aux congrès médicaux et recherches cliniques en chirurgie pédiatrique."
    }
  ];

  const pathologies = [
    "Fente palatine chez l'enfant",
    "Fente labio-palatine", 
    "Maladie de Blount",
    "Omphalocèles",
    "Traumatismes thoraciques",
    "Pathologies infantiles complexes",
    "Chirurgie pédiatrique générale",
    "Accompagnement post-opératoire"
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Mes Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#1e293b' }}>
            Pathologies Prises en Charge
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem',
            marginTop: '2rem'
          }}>
            {pathologies.map((pathology, index) => (
              <div key={index} style={{
                background: '#f8fafc',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ color: '#2563eb', fontWeight: '500' }}>{pathology}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
