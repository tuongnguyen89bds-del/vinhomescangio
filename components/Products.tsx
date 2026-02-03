
import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      tag: 'MOST POPULAR',
      title: 'Oceanfront Villas',
      subtitle: '4-5 Bedrooms | Private Infinity Pool | Private Garden',
      img: 'https://picsum.photos/id/352/500/400',
      features: ['450 - 600 m2 Land Area', 'Full Smart-Home Integration', 'Direct Beach Access']
    },
    {
      tag: null,
      title: 'Sky Apartments',
      subtitle: '1-3 Bedrooms | Panoramic Bay View | Concierge Service',
      img: 'https://picsum.photos/id/111/500/400',
      features: ['65 - 120 m2 Living Space', 'Floor-to-Ceiling Windows', 'Resort-style Facilities']
    },
    {
      tag: null,
      title: 'Heritage Shophouses',
      subtitle: 'Commercial & Residential | Prime Streetfront',
      img: 'https://picsum.photos/id/366/500/400',
      features: ['High Footfall Location', 'Modern Colonial Design', 'Dual-entrance System']
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-secondary mb-4 italic">Signature Residences</h2>
          <p className="text-slate-500 font-light">Find the perfect home tailored to your lifestyle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {p.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded">
                    {p.tag}
                  </span>
                )}
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-display font-bold text-secondary mb-2">{p.title}</h4>
                <p className="text-xs text-slate-400 mb-6 font-medium tracking-wide uppercase">{p.subtitle}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full border-2 border-primary text-primary font-bold py-3 rounded hover:bg-primary hover:text-white transition uppercase text-xs tracking-widest">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
