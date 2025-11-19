import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 text-white/60">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alex Rivera — UI/UX Designer</p>
          <div className="text-sm">Built with love, motion, and a sprinkle of 3D</div>
        </div>
      </footer>
    </div>
  )
}

export default App
