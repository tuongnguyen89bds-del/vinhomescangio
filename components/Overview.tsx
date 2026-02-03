
import React from 'react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/id/652/800/600" 
                alt="Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded shadow-xl hidden md:block">
              <h4 className="text-3xl font-bold text-white">500+</h4>
              <p className="text-[10px] text-white/80 uppercase tracking-widest font-bold">Global Investors</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-secondary leading-tight">
              A New Paradise Unveiled
            </h2>
            <p className="text-slate-600 leading-relaxed font-light text-lg">
              Vinhomes Green Paradise is not just a residence; it's a statement of prestige. Located on the most beautiful coastline, this project combines sustainable urban planning with world-class amenities to create a true sanctuary for its residents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { icon: '🌱', title: 'Eco-Living', desc: '60% Green coverage' },
                { icon: '🛡️', title: 'Safe Haven', desc: '24/7 Elite security' },
                { icon: '🏊', title: 'Grand Pools', desc: 'Olympics standard' },
                { icon: '🛍️', title: 'Luxury Retail', desc: 'International brands' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">{item.icon}</span>
                  <div>
                    <h5 className="font-bold text-secondary">{item.title}</h5>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
