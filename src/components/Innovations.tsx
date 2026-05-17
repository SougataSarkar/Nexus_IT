import { motion } from 'motion/react';

const innovations = [
  {
    title: "Quantum Ledger",
    tag: "Fintech",
    desc: "A next-gen payment processing engine using blockchain with zero gas fees.",
    img: "https://picsum.photos/seed/quantum/800/600"
  },
  {
    title: "EcoPulse AI",
    tag: "Sustainability",
    desc: "Predictive analytics for energy consumption in smart cities.",
    img: "https://picsum.photos/seed/eco/800/600"
  },
  {
    title: "OmniHealth App",
    tag: "Health",
    desc: "HIPAA-compliant telemedicine platform with real-time vitals monitoring.",
    img: "https://picsum.photos/seed/health/800/600"
  }
];

export default function Innovations() {
  return (
    <section id="innovations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Innovation Hub</h2>
        
        <div className="space-y-24">
          {innovations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 rounded-[2rem] blur-2xl group-hover:bg-purple-600/30 transition-all" />
                  <img 
                    src={item.img} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="px-4 py-1.5 rounded-full bg-purple-600/20 text-purple-400 text-xs font-bold uppercase tracking-widest border border-purple-500/30">
                  {item.tag}
                </span>
                <h3 className="text-4xl font-bold text-white mt-6 mb-6">{item.title}</h3>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <button className="text-white font-bold pb-1 border-b-2 border-purple-600 hover:border-purple-400 transition-colors">
                  Explore Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
