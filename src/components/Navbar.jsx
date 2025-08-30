import React from 'react';
import { CreditCard, Shield, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-sky-400 grid place-items-center">
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">GlintCard</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#security" className="hover:text-white transition flex items-center gap-1"><Shield className="h-4 w-4"/>Security</a>
            <a href="#account" className="hover:text-white transition flex items-center gap-1"><User className="h-4 w-4"/>Account</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm rounded-md border border-white/15 hover:border-white/30 transition">Sign in</button>
            <button className="px-4 py-2 text-sm rounded-md bg-white text-neutral-900 hover:bg-white/90 transition">Get the app</button>
          </div>
        </div>
      </div>
    </header>
  );
}
