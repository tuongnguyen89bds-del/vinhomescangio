
import React from 'react';

const Progress: React.FC = () => {
  const phases = [
    {
      status: 'Phase 1 - Completed',
      title: 'Core Foundation',
      img: 'https://picsum.photos/id/431/400/300'
    },
    {
      status: 'Phase 2 - Ongoing',
      title: 'Villas & Superstructure',
      img: 'https://picsum.photos/id/442/400/300'
    },
    {
      status: 'Phase 3 - Upcoming',
      title: 'Greenery & Amenities',
      img: 'https://picsum.photos/id/453/400/300'
    }
  ];

  return (
    <section id="progress" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary mb-4 italic">Construction Progress</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={phase.img} 
                  alt={phase.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{phase.status}</p>
                <h4 className="text-xl font-bold text-secondary">{phase.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Progress;
