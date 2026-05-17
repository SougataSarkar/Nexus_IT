import { motion } from 'motion/react';
import { Briefcase, Heart, Rocket, Coffee } from 'lucide-react';

const benefits = [
  { icon: Heart, title: 'Health First', desc: 'Premium medical, dental, and vision for you and your family.' },
  { icon: Rocket, title: 'Growth', desc: 'Annual learning stipend and clear path to leadership.' },
  { icon: Coffee, title: 'Balance', desc: 'Remote-first culture with flexible hours and unlimited PTO.' },
  { icon: Briefcase, title: 'Equipment', desc: 'State-of-the-art workstations provided to every engineer.' },
];

export default function Career() {
  return (
    <section id="career" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Nexus</h2>
            <p className="text-slate-400 text-lg mb-10">
              We're looking for visionary developers, designers, and thinkers who want to build products that matter. At NexusDev, you're not just an employee; you're a builder.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map(b => (
                <div key={b.title}>
                  <b.icon className="text-purple-500 mb-4" size={28} />
                  <h4 className="text-white font-bold mb-2">{b.title}</h4>
                  <p className="text-slate-500 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white text-slate-900 font-bold px-10 py-4 rounded-2xl"
            >
              View Openings
            </motion.button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/work1/400/500" alt="Culture" className="rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work2/400/300" alt="Culture" className="rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/work3/400/300" alt="Culture" className="rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work4/400/500" alt="Culture" className="rounded-3xl border border-white/10" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
