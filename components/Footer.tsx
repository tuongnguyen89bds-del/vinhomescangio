
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">Green Paradise</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Defining the pinnacle of coastal luxury living with world-class architecture and a commitment to sustainable excellence.
            </p>
          </div>

          <div>
            <h6 className="font-bold text-primary text-xs uppercase tracking-widest mb-8">Projects</h6>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-primary transition">The Grand Villa</a></li>
              <li><a href="#" className="hover:text-primary transition">Sapphire Towers</a></li>
              <li><a href="#" className="hover:text-primary transition">Heritage Avenue</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-primary text-xs uppercase tracking-widest mb-8">Company</h6>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Investors</a></li>
              <li><a href="#" className="hover:text-primary transition">Media Center</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-primary text-xs uppercase tracking-widest mb-8">Newsletter</h6>
            <p className="text-xs text-white/40 mb-6">Subscribe for the latest project updates.</p>
            <div className="flex bg-white/5 rounded overflow-hidden">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-transparent border-none px-4 py-3 text-sm focus:ring-0 w-full"
              />
              <button className="bg-primary px-4 hover:bg-primary/80 transition">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            © 2024 Vinhomes Green Paradise. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['fb', 'ig', 'yt'].map((social) => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition group">
                <span className="text-xs font-bold text-white/40 group-hover:text-white uppercase">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
