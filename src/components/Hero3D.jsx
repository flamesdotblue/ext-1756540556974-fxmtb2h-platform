import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://my.spline.design/fintechcardlandingrevolutredesign-URUGf5vVU2SYivOMiGP85hlK/" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
          A glittering rotating credit card
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Modern, glass-morphic finance
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-sky-300 to-emerald-300"> designed for the digital era</span>
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Experience seamless payments, realtime insights, and world-class security—wrapped in a minimalist 3D experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
            <Rocket className="h-4 w-4" />
            Get Started
          </button>
          <button className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
