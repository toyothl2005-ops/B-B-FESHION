import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const publications = ["VOGUE", "HARPER'S BAZAAR", "FORBES", "GQ", "ELLE", "VANITY FAIR", "TATLER"];

const reviews = [
  {
    author: "Eleanor T.",
    quote: "A masterpiece of understated elegance. It completely elevates every room it enters.",
    location: "New York",
  },
  {
    author: "Marcus V.",
    quote: "The craftsmanship is unparalleled. You can feel the heritage in the weight of the hardware.",
    location: "London",
  },
  {
    author: "Sofia R.",
    quote: "Quiet luxury defined. It whispers rather than shouts, which is exactly what I was looking for.",
    location: "Milan",
  }
];

export function PressTicker() {
  return (
    <section className="py-24 bg-luxury-black text-luxury-cream border-t border-luxury-cream/10 overflow-hidden">
      {/* Ticker */}
      <div className="relative flex overflow-x-hidden mb-24">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...publications, ...publications, ...publications].map((pub, i) => (
            <span key={i} className="mx-12 font-serif text-2xl tracking-[0.2em] opacity-40 uppercase">
              {pub}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...publications, ...publications, ...publications].map((pub, i) => (
            <span key={i} className="mx-12 font-serif text-2xl tracking-[0.2em] opacity-40 uppercase">
              {pub}
            </span>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                "{review.quote}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-luxury-cream/30" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{review.author}</span>
                <span className="text-[8px] uppercase tracking-widest text-luxury-cream/40">• Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Add Marquee Keyframes to global css or inline here */}
      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
          left: 100%;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
