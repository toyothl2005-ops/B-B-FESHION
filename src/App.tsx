/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Editorial } from './components/Editorial';
import { PressTicker } from './components/PressTicker';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-black font-sans selection:bg-luxury-gold/30">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Editorial />
        <PressTicker />
        <Waitlist />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
