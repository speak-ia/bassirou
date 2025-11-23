import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { src: '/2.jpeg', title: 'Bloc opératoire', description: 'Bloc opératoire moderne 🩺' },
    { src: '/b1.jpeg', title: 'Consultation', description: 'Consultation médicale 🧑‍⚕️' },
    { src: '/4.jpeg', title: 'Équipe médicale', description: 'Équipe médicale 👨‍⚕️👩‍⚕️' },
    { src: '/5.jpeg', title: 'Intervention chirurgicale', description: 'Intervention chirurgicale 🔬' },
    { src: '/6.jpeg', title: 'Salle de consultation', description: 'Salle de consultation moderne' },
    { src: '/7.jpeg', title: 'Équipement médical', description: 'Équipement médical de pointe' },
    { src: '/8.jpeg', title: 'Formation médicale', description: 'Formation et enseignement' },
    { src: '/9.jpeg', title: 'Recherche médicale', description: 'Projets de recherche' }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Galerie d'images</h2>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
