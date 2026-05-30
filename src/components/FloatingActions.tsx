import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ShoppingBag, X } from 'lucide-react';

export function FloatingActions() {
  const [showStickyAdd, setShowStickyAdd] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky add to bag when past hero section (approx 100vh)
      if (window.scrollY > window.innerHeight) {
        setShowStickyAdd(true);
      } else {
        setShowStickyAdd(false);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExitIntent]);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-luxury-gold text-luxury-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40">
        <MessageCircle size={28} strokeWidth={1.5} />
      </button>

      {/* Sticky Add to Bag (Mobile focused, visible on desktop too) */}
      <AnimatePresence>
        {showStickyAdd && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-30 pointer-events-none"
          >
            <div className="bg-luxury-black border-t border-luxury-cream/10 px-4 py-3 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto text-luxury-cream">
              <div className="hidden sm:block">
                <p className="font-serif text-lg italic text-luxury-gold mb-1">Monogram Canvas Alma</p>
                <p className="text-[11px] font-mono">$2,100</p>
              </div>
              <button className="w-full sm:w-auto bg-luxury-cream text-luxury-black px-8 py-3 uppercase tracking-widest text-[9px] hover:bg-luxury-gold transition-colors flex items-center justify-center space-x-2">
                <ShoppingBag size={18} />
                <span>Add to Bag</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-luxury-cream p-1 relative w-full max-w-md shadow-2xl"
            >
              <div className="border border-luxury-gold/30 p-8 text-center bg-luxury-black text-luxury-cream">
                <button 
                  onClick={() => setShowExitIntent(false)}
                  className="absolute top-4 right-4 text-luxury-cream/40 hover:text-luxury-cream transition-colors"
                >
                  <X size={24} strokeWidth={1} />
                </button>
                <h3 className="font-serif text-3xl mb-2 italic text-luxury-gold">Before you go.</h3>
                <p className="text-[10px] opacity-60 leading-relaxed max-w-sm mb-6 uppercase tracking-[0.2em] mx-auto">Unlock early access to our upcoming collection and private events.</p>
                
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border-b border-luxury-cream/30 py-3 mb-6 bg-transparent focus:outline-none focus:border-luxury-gold transition-colors text-center text-luxury-cream placeholder:text-luxury-cream/30 font-light"
                />
                
                <button 
                  onClick={() => setShowExitIntent(false)}
                  className="w-full bg-luxury-gold text-luxury-black py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-luxury-cream transition-colors"
                >
                  Unlock Access
                </button>
                
                <button 
                  onClick={() => setShowExitIntent(false)}
                  className="mt-4 text-[9px] text-luxury-cream/40 hover:text-luxury-cream uppercase tracking-[0.2em] underline underline-offset-4"
                >
                  No thanks, I'll pass
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
