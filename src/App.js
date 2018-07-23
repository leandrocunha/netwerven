import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Faq from './components/Faq';
import FormApply from './components/Form';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <FormApply />
    <Faq />
    <Footer />
  </div>
);

export default App;
