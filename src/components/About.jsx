export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950/95">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="text-white/70 mt-2">A snapshot of how I think and work.</p>
        </div>

        <div className="md:col-span-2 space-y-6">
          <p className="text-white/80">
            I’m a UI/UX designer with a love for systems, motion, and playful interactions. I design for clarity, but I’m always looking for moments of joy.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">• Design systems & tokens</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">• Rapid prototyping & motion</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">• Accessible, human flows</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80">• Collaboration across product</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
