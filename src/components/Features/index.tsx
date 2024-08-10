import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold mb-12">Beyond Premium, Elevate Your Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="feature-item">
          <img src="/images/icon-personal-itineraries.png" alt="Personal Itineraries" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personal Itineraries</h3>
          <p>Curated journeys with tailor-made personal itineraries for a truly unique experience.</p>
        </div>
        <div className="feature-item">
          <img src="/images/icon-exclusive-experiences.png" alt="Exclusive Experiences" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exclusive Experiences</h3>
          <p>Access to exclusive locations and events, creating once-in-a-lifetime memories.</p>
        </div>
        <div className="feature-item">
          <img src="/images/icon-best-facilities.png" alt="Best Facilities" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best Facilities</h3>
          <p>Exclusive, 5-star facilities to pamper and cater to every need of our premium travelers.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
