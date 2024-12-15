import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ContactForm />
    </div>
  );
}

export default App;