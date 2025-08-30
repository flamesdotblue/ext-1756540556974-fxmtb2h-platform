import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} GlintCard. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
