
import React from 'react';

const Policy: React.FC = () => {
  const schedule = [
    { step: '1. Booking Deposit', value: '500,000,000 VND', active: true },
    { step: '2. Sales Contract (within 15 days)', value: '15% Value' },
    { step: '3. Construction Milestones', value: '5% every 3 months' },
    { step: '4. Handover (Projected 2026)', value: '25% Value' }
  ];

  return (
    <section id="policy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-10 italic">Flexible Payment Schedule</h2>
            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex justify-between items-center p-6 bg-white rounded-lg shadow-sm border-l-4 ${item.active ? 'border-primary' : 'border-transparent'}`}
                >
                  <span className="font-bold text-secondary text-sm">{item.step}</span>
                  <span className={`font-bold ${item.active ? 'text-primary' : 'text-slate-400'} text-sm`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-10 italic">Investor Privileges</h2>
            <div className="bg-white p-10 rounded-2xl shadow-xl space-y-8">
              <div className="flex gap-6">
                <div className="text-primary text-3xl">🏛️</div>
                <div>
                  <h5 className="font-bold text-secondary text-lg">Interest-Free Loan</h5>
                  <p className="text-slate-500 text-sm font-light mt-1">Up to 70% loan value with 0% interest for 24 months.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-primary text-3xl">🎁</div>
                <div>
                  <h5 className="font-bold text-secondary text-lg">Exclusive Gift Package</h5>
                  <p className="text-slate-500 text-sm font-light mt-1">Free management fee for 3 years for early bird registrations.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-primary text-3xl">⛳</div>
                <div>
                  <h5 className="font-bold text-secondary text-lg">Paradise Lifestyle Card</h5>
                  <p className="text-slate-500 text-sm font-light mt-1">Membership at global resort networks and elite golf clubs.</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 italic">
                  *Terms and conditions apply. Contact us for detailed investment consultation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Policy;
