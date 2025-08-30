import React from 'react';
import { Shield, Sparkles, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Glittering 3D Aesthetic',
    desc: 'A glass-morphic credit card rendered in realtime for an immersive, modern feel.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Bank‑grade Security',
    desc: 'Biometric authentication, dynamic CVV, and end-to-end encryption by default.'
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: 'Smart Payments',
    desc: 'One-tap freeze, virtual cards, and auto-categorized transactions across devices.'
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Realtime Insights',
    desc: 'Clear analytics and notifications that keep you in control of your spend.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 opacity-60 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full blur-3xl bg-fuchsia-500/10" />
        <div className="absolute right-20 bottom-0 h-64 w-[28rem] rounded-full blur-3xl bg-sky-400/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Powerful features, minimalist design</h2>
          <p className="mt-3 text-white/80">Everything you need to move faster and manage smarter—built on a secure, modern foundation.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-fuchsia-400/30 to-sky-400/30 text-white mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/80">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <a href="#" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">Explore all features</a>
        </div>
      </div>
    </section>
  );
}
