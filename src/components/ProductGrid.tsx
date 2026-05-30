import React from 'react';
import { motion } from 'motion/react';

const products = [
  { id: 1, name: "Monogram Canvas Alma", category: "Bags", price: "$2,100", urgency: "Only 3 left", bg: "bg-stone-800", hoverBg: "bg-stone-700" },
  { id: 2, name: "Tailored Wool Blazer", category: "Ready-to-Wear", price: "$3,450", bg: "bg-neutral-800", hoverBg: "bg-neutral-700" },
  { id: 3, name: "Silk Cashmere Scarf", category: "Accessories", price: "$650", bg: "bg-zinc-800", hoverBg: "bg-zinc-700" },
  { id: 4, name: "Silhouette Ankle Boot", category: "Shoes", price: "$1,420", bg: "bg-stone-900", hoverBg: "bg-stone-800" },
  { id: 5, name: "LV Initiales Belt", category: "Belts", price: "$690", urgency: "Selling fast", bg: "bg-neutral-900", hoverBg: "bg-neutral-800" },
  { id: 6, name: "Capucines Compact Wallet", category: "Wallets", price: "$1,050", bg: "bg-zinc-900", hoverBg: "bg-zinc-800" },
  { id: 7, name: "Obsidian Sunglasses", category: "Sunglasses", price: "$580", bg: "bg-stone-800", hoverBg: "bg-stone-700" },
  { id: 8, name: "Cashmere Turtleneck", category: "Ready-to-Wear", price: "$1,850", bg: "bg-neutral-800", hoverBg: "bg-neutral-700" },
];

export function ProductGrid() {
  return (
    <section id="collections" className="py-24 bg-luxury-cream text-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Collection
          </motion.h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative aspect-square mb-3 flex items-center justify-center overflow-hidden bg-[#E6E0D5]">
                <div className={`absolute inset-0 ${product.bg} transition-opacity duration-700 ease-in-out flex items-center justify-center opacity-100 group-hover:opacity-0`}>
                  <span className="text-white/20 font-serif text-2xl px-6 text-center">{product.name}</span>
                </div>
                <div className={`absolute inset-0 ${product.hoverBg} transition-opacity duration-700 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform`}>
                  <img src={`https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop`} alt={product.name} className="w-full h-full object-cover mix-blend-overlay opacity-30" />
                  <span className="text-white/40 font-serif text-xl absolute">View Details</span>
                </div>
                
                {/* Urgency Badge */}
                {product.urgency && (
                  <div className="absolute top-3 left-3 bg-luxury-white/90 backdrop-blur-sm text-luxury-black text-[10px] uppercase tracking-wider px-2 py-1 font-medium select-none z-10">
                    {product.urgency}
                  </div>
                )}

                {/* Quick Add Button */}
                <div className="absolute overflow-hidden bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                  <button className="w-full bg-luxury-black text-luxury-cream py-3 uppercase tracking-widest text-[9px] hover:bg-luxury-gold transition-colors duration-300">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{product.category}</span>
                <h3 className="text-[11px] font-medium uppercase tracking-wider mb-1">{product.name}</h3>
                <span className="text-[11px] text-luxury-gold italic font-serif mt-1">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
