import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Info from './components/Info';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Info />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
