import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TailoredExperiences from "@/components/TailoredExperiences";
import Destinations from "@/Destinations";
import Gallery from "@/Gallery";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zamrood - Premium Travel Experiences</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <TailoredExperiences />
        <Destinations />
        <Gallery />
        <Articles />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
