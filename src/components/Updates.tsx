import { motion } from 'motion/react';

const posts = [
  {
    date: "Oct 24, 2025",
    title: "The Future of Cross-Platform Development",
    category: "Insights"
  },
  {
    date: "Sep 12, 2025",
    title: "How AI is Revolutionizing Code Quality",
    category: "Tech"
  },
  {
    date: "Aug 05, 2025",
    title: "NexusDev Expands to New European Hub",
    category: "Company"
  }
];

export default function Updates() {
  return (
    <section id="updates" className="py-24 px-6 bg-white/2 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold text-white">Latest Updates</h2>
          <button className="text-purple-500 font-bold">View all news</button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/50 transition-all group"
            >
              <span className="text-xs font-bold text-purple-500 uppercase tracking-widest">{post.category}</span>
              <p className="text-slate-500 text-sm mt-4 mb-4">{post.date}</p>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                {post.title}
              </h3>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-sm text-slate-400">5 min read</span>
                <span className="text-purple-500 font-bold group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
