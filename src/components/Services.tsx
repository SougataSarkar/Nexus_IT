import { motion } from 'motion/react';
import { Database, Smartphone, Layers, Shield, Zap, Cpu } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Full Stack Web',
    desc: 'Scalable backend architectures meeting responsive, high-fidelity frontends.',
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native iOS and Android development using Swift, Kotlin, and React Native.',
    color: 'purple'
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    desc: 'User-centric interfaces that blend aesthetic beauty with functional clarity.',
    color: 'pink'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Vulnerability assessments and robust encryption to protect your enterprise.',
    color: 'emerald'
  },
  {
    icon: Zap,
    title: 'Cloud Solutions',
    desc: 'Serverless architecture, AWS/GCP migration, and DevOps automation.',
    color: 'orange'
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    desc: 'Embedding LLMs and machine learning models into your existing workflows.',
    color: 'indigo'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-black/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">What we provide</h2>
          </div>
          <p className="text-slate-400 max-w-md">
            From initial discovery to final deployment, we provide end-to-end expertise for modern digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl group-hover:bg-purple-600/20 transition-all" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center text-purple-400 mb-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <s.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-purple-500 group-hover:gap-4 transition-all">
                  Read more <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
