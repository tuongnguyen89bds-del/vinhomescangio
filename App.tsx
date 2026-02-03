
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Progress from './components/Progress';
import WhyInvest from './components/WhyInvest';
import Location from './components/Location';
import Products from './components/Products';
import Policy from './components/Policy';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Progress />
        <WhyInvest />
        <Location />
        <Products />
        <Policy />
      </main>
      <Footer />
    </div>
  );
};

export default App;
