import React, { useState } from 'react';
import { motion } from 'motion/react';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('submitted');
      // Here you would typically send to an API
    }
  };

  return (
    <section className="relative py-32 bg-luxury-black text-luxury-white overflow-hidden flex justify-center items-center">
      {/* Decorative center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-luxury-gold" />
      
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-luxury-gold mb-4 mt-8">
            JOIN THE CIRCLE
          </h2>
          
          <p className="text-[10px] opacity-60 leading-relaxed mb-12 uppercase tracking-[0.2em]">
            Be first to access new collections and private events
          </p>

          {status === 'idle' ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto border-b border-luxury-cream/30 focus-within:border-luxury-gold transition-colors duration-300">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                required
                className="bg-transparent border-none outline-none py-4 px-2 flex-grow text-luxury-cream placeholder:text-luxury-cream/30 font-light tracking-wide rounded-none"
              />
              <button 
                type="submit" 
                className="py-4 px-6 text-luxury-gold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors duration-300"
              >
                Request Access
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-4 text-luxury-gold tracking-widest uppercase"
            >
              Invitation Requested.
            </motion.div>
          )}

          <p className="text-luxury-cream/40 text-[9px] uppercase tracking-[0.15em] mt-6 font-light">
            Invitation only. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
