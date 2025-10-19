import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Qui est Dr. Mahamadou Bassirou TOURE?</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Médecin malien passionné par la santé infantile, je me spécialise actuellement en chirurgie pédiatrique 
              à l'Université Joseph-Ki-Zerbo de Ouagadougou, après avoir obtenu mon Doctorat en médecine générale 
              à Bamako avec les félicitations du jury.
            </p>
            <p>
              Mon parcours est marqué par un engagement fort dans la prise en charge des pathologies infantiles complexes, 
              notamment les traumatismes thoraciques, sujet de ma thèse soutenue en 2021.
            </p>
            <p>
              J'ai participé activement à des congrès médicaux et je poursuis mes recherches dans le cadre de mon 
              résidanat en chirurgie pédiatrique au Centre Hospitalier Universitaire Pédiatrique Charles de Gaulle.
            </p>
            <p>
              Mon expérience m'a permis d'approfondir mes compétences en diagnostic, traitement chirurgical et 
              accompagnement post-opératoire des enfants au CHU de Martinique et de Guadeloupe.
            </p>
          </div>
          
          <div className="about-image">
            <img src="/9.jpeg" alt="Dr. Mahamadou Bassirou TOURE au travail" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
