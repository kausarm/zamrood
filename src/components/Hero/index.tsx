const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/im-header.png')" }}>
      <div className="absolute inset-0 "></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-9xl text-z-gold mb-4 font-thesignature">
          Premium Travel
        </h1>
        <h1 className="text-5xl font-bold mb-4 ">
          Beyond Expectation
        </h1>
        <p className="text-xl mb-8">Experience the finest that Indonesia has to offer with our curated selection of premium trips, ensuring comfort every step of the way.</p>
        <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-700">Plan Your Trip</button>
      </div>
    </section>
  );
};

export default Hero;
