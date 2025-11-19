import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I’ll reply soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="text-white/70 mt-2">Tell me about your project, timeline, and goals.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4">
          <input name="name" required placeholder="Your name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input name="email" type="email" required placeholder="Email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea name="message" required rows="5" placeholder="Project details" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition-colors">Send message</button>
            <span className="text-white/70 text-sm">{status}</span>
          </div>
        </form>

        <p className="text-white/50 text-sm mt-6">Prefer email? hello@alexrivera.design</p>
      </div>
    </section>
  )
}
