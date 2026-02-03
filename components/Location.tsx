
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4 italic">Strategic Location</h2>
        <p className="text-white/60 font-light max-w-2xl mx-auto">
          Perfectly positioned at the gateway of the coastal economic zone, connecting you to major hubs within minutes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
          <img 
            src="https://picsum.photos/id/164/1200/600" 
            alt="Master Plan Map" 
            className="w-full h-auto grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
