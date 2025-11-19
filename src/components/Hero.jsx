import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for freelance • Summer 2025
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(56,189,248,0.35)]">
          UI/UX Designer crafting playful, modern experiences
        </h1>
        <p className="mt-5 text-white/80 max-w-2xl mx-auto">
          I blend motion, systems thinking, and 3D to build interfaces that feel alive.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#work" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">See selected work</a>
          <a href="#contact" className="rounded-lg border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors">Get in touch</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900"></div>
    </section>
  );
}
