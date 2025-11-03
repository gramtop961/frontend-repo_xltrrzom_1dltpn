import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(120,119,198,0.35),rgba(0,0,0,0)_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} className="text-fuchsia-400" />
            <span>Building delightful products</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I’m <span className="bg-gradient-to-tr from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">Your Name</span> —
            crafting fast, modern, and accessible web experiences.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl">
            Full‑stack developer with a passion for elegant interfaces and scalable systems. I blend design thinking with engineering to ship impactful products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:opacity-90 transition">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-5 py-3 font-medium border border-white/15 hover:bg-white/15 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
