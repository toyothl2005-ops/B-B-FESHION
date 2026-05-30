import React from 'react';

export function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase text-luxury-gold mb-6">Shop</h4>
            <ul className="space-y-4 text-[9px] uppercase tracking-[0.15em] opacity-40">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bags</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ready to Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fine Jewelry</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase text-luxury-gold mb-6">Services</h4>
            <ul className="space-y-4 text-[9px] uppercase tracking-[0.15em] opacity-40">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase text-luxury-gold mb-6">Company</h4>
            <ul className="space-y-4 text-[9px] uppercase tracking-[0.15em] opacity-40">
              <li><a href="#" className="hover:text-white transition-colors">The Heritage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foundation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase text-luxury-gold mb-6">Connect</h4>
            <ul className="space-y-4 text-[9px] uppercase tracking-[0.15em] opacity-40">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[9px] uppercase tracking-[0.15em] opacity-40">
          <p className="mb-4 md:mb-0">© 2025 B&B FASHION. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
