import React from 'react';
import { motion } from 'motion/react';

export function Editorial() {
  return (
    <section id="heritage" className="w-full bg-luxury-black text-luxury-white overflow-hidden border-t border-luxury-cream/10">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Image area */}
        <motion.div 
          className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto min-h-[50vh] lg:min-h-screen relative overflow-hidden bg-stone-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550614000-4b95d4ebfaad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 hover:scale-105 transition-transform duration-[20s] ease-linear" />
        </motion.div>

        {/* Right: Text area */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative">
          {/* Subtle grain */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          <motion.div 
            className="max-w-md relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-luxury-gold mb-4 mt-8">
              THE ARTISAN <br />
              <span className="italic text-luxury-gold">STORY</span>
            </h2>
            
            <p className="text-[10px] opacity-60 leading-relaxed max-w-sm mb-4">
              For over a century, our ateliers have been sanctuaries of craftsmanship. Every stitch, every fold, and every monogram tells a story of uncompromising dedication to the art of travel and living.
            </p>
            
            <p className="text-[10px] opacity-60 leading-relaxed max-w-sm mb-8">
              We don't simply create objects; we craft companions for a lifetime, utilizing techniques passed down through generations of master artisans.
            </p>

            <a href="#discover" className="inline-block border-b border-luxury-gold text-luxury-gold uppercase tracking-[0.2em] text-[9px] pb-1 hover:text-white hover:border-white transition-colors duration-300">
              Discover the Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
