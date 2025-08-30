import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}
