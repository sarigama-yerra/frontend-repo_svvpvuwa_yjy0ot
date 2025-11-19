export default function Work() {
  const projects = [
    {
      title: 'Nebula Finance',
      tag: 'Fintech Dashboard',
      description:
        'Design system and data viz for a multi-platform investing product. Focus on realtime clarity and delight.',
      year: '2024',
    },
    {
      title: 'Orbit Health',
      tag: 'Mobile App',
      description:
        'Patient-first flows for scheduling, adherence, and telehealth. High empathy, low friction.',
      year: '2023',
    },
    {
      title: 'Echo Studio',
      tag: 'Design Tool',
      description:
        'Prototyping tool with playful microinteractions and multiplayer. Made complexity feel simple.',
      year: '2022',
    },
  ];

  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-white/70 mt-2">A few recent projects and the problems they solve.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 hover:border-white/20 transition-colors">
              <div className="text-xs text-white/60 mb-2">{p.tag} • {p.year}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">{p.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{p.description}</p>
              <div className="mt-4">
                <a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm">View case study →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
