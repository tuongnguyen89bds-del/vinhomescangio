
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/401/1920/1080" 
          alt="Coastal View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center text-white space-y-8 animate-fade-in-up">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6">
              Exclusive Opportunity
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Vinhomes <br />
              <span className="text-primary italic">Green Paradise</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-lg font-light leading-relaxed">
              Experience a new standard of luxury living at the heart of the coast. A masterpiece where architecture meets nature's serenity.
            </p>
          </div>

          <div className="flex space-x-8 pt-4">
            <div className="text-center bg-white/10 backdrop-blur-md p-4 rounded min-w-[100px] border border-white/10">
              <p className="text-2xl font-bold">2.870</p>
              <p className="text-[10px] uppercase opacity-60 tracking-widest">Total Area (Ha)</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md p-4 rounded min-w-[100px] border border-white/10">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-[10px] uppercase opacity-60 tracking-widest">Major Parks</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md p-4 rounded min-w-[100px] border border-white/10">
              <p className="text-2xl font-bold">15km</p>
              <p className="text-[10px] uppercase opacity-60 tracking-widest">Beachfront</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center">
          <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-display font-bold text-secondary mb-2">Receive Investment Guide</h3>
            <p className="text-slate-500 text-sm mb-8">Register now to get exclusive project documents and priority pricing.</p>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-3 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
              />
              <select className="w-full px-4 py-3 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm text-slate-500">
                <option>Interested in Villas</option>
                <option>Interested in Shophouses</option>
                <option>Interested in Apartments</option>
              </select>
              <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-sm tracking-widest hover:bg-primary/90 transition shadow-lg shadow-primary/20">
                REQUEST PRICE LIST
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
