import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Mobile App (Android/iOS)',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: 'Mobile App (Android/iOS)', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Let's build something <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">legendary</span> together.</h2>
          <p className="text-slate-400 text-lg mb-12 font-medium">
            Ready to start your next project? Or just want to say hi? We're always open to discussing new ideas and creative partnerships.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 text-slate-300 group p-4 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email us</p>
                <p className="font-bold text-lg">hello@nexusdev.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-300 group p-4 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-fuchsia-600/20 flex items-center justify-center text-fuchsia-400 shadow-[0_0_15px_rgba(192,38,211,0.2)]">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call us</p>
                <p className="font-bold text-lg">+1 (555) NEXUS-IT</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-300 group p-4 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Visit us</p>
                <p className="font-bold text-lg">Silicon Valley, CA / Berlin, DE</p>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle size={64} className="text-green-500 mb-6 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400">Thank you for reaching out. Our team will get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-purple-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-2">Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-2">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Project Type</label>
                <div className="relative">
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>Mobile App (Android/iOS)</option>
                    <option>Full Stack Web App</option>
                    <option>UI/UX Design</option>
                    <option>Enterprise AI Solutions</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    â–¼
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Message</label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-purple-500 outline-none transition-all resize-none" 
                  placeholder="Tell us about your project..." 
                />
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:opacity-50 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25"
              >
                {status === 'loading' ? 'Sending...' : <>Send Message <Send size={20} /></>}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center font-bold">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
      
      <footer className="mt-24 pt-12 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>&copy; 2026 NexusDev IT Solutions. All rights reserved.</p>
      </footer>
    </section>
  );
}
