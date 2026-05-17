import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            Building the <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500 bg-clip-text text-transparent italic px-2">Future</span> of Digital Experience
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
            NexusDev delivers high-performance full-stack solutions and premium mobile applications. Your vision, our engineering masterpiece.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="relative group bg-purple-600 text-white font-bold px-10 py-5 rounded-2xl transition-all active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Start Project</span>
            </button>
            <button className="border-2 border-white/10 hover:border-purple-400/50 hover:bg-purple-500/5 text-white font-bold px-10 py-5 rounded-2xl transition-all backdrop-blur-sm active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              View Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full animate-pulse decoration-indigo-200" />
          
          <div className="relative z-10 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/30">
                  <h3 className="text-4xl font-bold text-white mb-2">150+</h3>
                  <p className="text-purple-300 text-sm font-medium uppercase tracking-wider">Apps Launched</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 border border-indigo-500/30">
                  <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
                  <p className="text-indigo-300 text-sm font-medium uppercase tracking-wider">Client Retention</p>
                </div>
                <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-slate-600/20 to-slate-900/20 border border-white/10">
                  <p className="text-slate-300 italic mb-4">"NexusDev transformed our legacy system into a scalable beast. Their app development is peerless."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500" />
                    <div>
                      <p className="text-white font-bold text-sm">Marcus Chen</p>
                      <p className="text-slate-500 text-xs uppercase">CTO, TechFlow</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
