import React from 'react';

interface ArticleCardProps {
  title: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
    </div>
  );
};

const Articles: React.FC = () => {
  return (
    <section className="container mx-auto py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-12 text-center">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ArticleCard
          title="Top Places to Dive in Indonesia"
          imageUrl="/images/article-1.jpg"
        />
        <ArticleCard
          title="The Best Hiking Trails in Komodo"
          imageUrl="/images/article-2.jpg"
        />
        <ArticleCard
          title="Uncovering the Hidden Gems of Bali"
          imageUrl="/images/article-3.jpg"
        />
      </div>
    </section>
  );
};

export default Articles;
