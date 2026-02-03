
import React from 'react';

const WhyInvest: React.FC = () => {
  const reasons = [
    {
      icon: '📈',
      title: 'Unparalleled Growth',
      desc: 'Strategically located in a region with 15% annual property value appreciation.'
    },
    {
      icon: '🏆',
      title: 'The Gold Standard',
      desc: "Managed by the industry's leading operator with international standards."
    },
    {
      icon: '🌿',
      title: 'Sustainable Architecture',
      desc: 'Green building certifications and renewable energy integration throughout.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <h2 className="text-4xl font-display font-bold text-secondary leading-tight">
            Why Invest in Vinhomes Green Paradise?
          </h2>
          
          <div className="space-y-8">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {r.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">{r.title}</h4>
                  <p className="text-slate-500 font-light leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative p-10">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/10/800/1000" 
              alt="Lifestyle" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary rounded-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
