import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[2px] bg-luxury-gold z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <motion.nav 
        className={`fixed top-0 w-full z-40 transition-colors duration-500 ${isScrolled ? 'bg-luxury-black/80 backdrop-blur-md border-b border-luxury-cream/10 text-luxury-cream' : 'bg-transparent text-luxury-white'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button className="p-2">
                <Menu strokeWidth={1.5} className={isScrolled ? 'text-luxury-black' : 'text-luxury-white'} />
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8">
              {['Collections', 'Lookbook', 'Heritage', 'Stores'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 hover:opacity-100 transition-opacity duration-300">
                  {item}
                </a>
              ))}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.6em] uppercase">B&B FASHION</span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className="p-1 hover:text-luxury-gold transition-colors duration-300">
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button className="p-1 hover:text-luxury-gold transition-colors duration-300 hidden sm:block">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button className="p-1 hover:text-luxury-gold transition-colors duration-300 relative">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-luxury-gold text-luxury-black text-[8px] px-1 h-3.5 min-w-[14px] flex items-center justify-center rounded-full font-bold">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
