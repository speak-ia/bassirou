import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Une intervention réussie pour la fente palatine de mon fils. Le Dr TOURE est très professionnel et rassurant.",
      author: "Amadou TRAORE"
    },
    {
      text: "Le Dr TOURE explique tout avec clarté et patience. On se sent écouté et en confiance totale.",
      author: "Mariam KEITA"
    },
    {
      text: "Grâce au Dr TOURE, mon enfant a retrouvé une vie normale après son opération. Un médecin exceptionnel.",
      author: "Boubacar SANGARE"
    },
    {
      text: "Nous tenons à remercier le Dr Mahamadou Bassirou TOURE pour son excellent travail et sa contribution précieuse au sein de notre équipe médicale.",
      author: "Chef de Service - CHU de Martinique 🇲🇶",
      isSpecial: true,
      hasImage: true,
      imagePath: "/Attestation Bassirou.jpg"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Témoignages de patients</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.isSpecial ? 'special-testimonial' : ''}`}>
              {testimonial.hasImage ? (
                <div className="testimonial-image-container">
                  <img 
                    src={testimonial.imagePath} 
                    alt="Attestation de remerciements" 
                    className="testimonial-image"
                  />
                  <p className="testimonial-author">— {testimonial.author}</p>
                </div>
              ) : (
                <>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <p className="testimonial-author">— {testimonial.author}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
