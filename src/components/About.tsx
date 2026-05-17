import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Globe } from 'lucide-react';

const values = [
  { icon: Target, title: 'Precision', desc: 'We deliver code that is clean, optimized, and built to scale.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Pushing boundaries with the latest tech in AI and Cloud.' },
  { icon: Users, title: 'Expertise', desc: 'A global team of diverse developers with deep vertical knowledge.' },
  { icon: Globe, title: 'Global reach', desc: 'Serving clients from Silicon Valley to Singapore.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Engineering Excellence for the Digital Age
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            NexusDev was founded on the principle that technology should be an enabler, not a hurdle. We bridge the gap between complex problems and elegant code.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all" />
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform relative z-10">
                <v.icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
