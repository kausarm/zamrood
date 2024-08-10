import React from 'react';

interface DestinationCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-teal-600 font-bold mb-4">{price}</p>
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">See Details</button>
      </div>
    </div>
  );
};

const Destinations: React.FC = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard
          title="Paradise Gateway: Labuan Bajo"
          description="Experience the best of Indonesia's hidden paradise in Labuan Bajo."
          price="IDR 5,200,000"
          imageUrl="/images/labuan-bajo-1.jpg"
        />
        <DestinationCard
          title="Vibrant Snorkeling and Diving: Labuan Bajo"
          description="Explore vibrant coral reefs and marine life in pristine waters."
          price="IDR 5,200,000"
          imageUrl="/images/labuan-bajo-2.jpg"
        />
        <DestinationCard
          title="Spectacular Sunsets: Labuan Bajo"
          description="Witness breathtaking sunsets from the best vantage points."
          price="IDR 5,200,000"
          imageUrl="/images/labuan-bajo-3.jpg"
        />
      </div>
    </section>
  );
};

export default Destinations;
