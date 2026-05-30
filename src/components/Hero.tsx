import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Image/Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/40 to-luxury-black z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60" />
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-luxury-white leading-[0.9] mb-6 uppercase italic"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          NEW COLLECTION <br />
          <span className="italic">SS25</span>
        </motion.h1>
        
        <motion.p 
          className="text-luxury-white/60 text-sm font-light leading-relaxed mb-8 max-w-sm"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Crafted for those who define the moment
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#collections" className="border border-luxury-gold px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300 w-full sm:w-auto text-center">
            Explore Collection
          </a>
          <a href="#film" className="text-[11px] uppercase tracking-[0.2em] border-b border-white/20 pb-1 hover:border-white transition-colors duration-300 w-full sm:w-auto text-center">
            Watch Film
          </a>
        </motion.div>
      </div>
    </section>
  );
}
