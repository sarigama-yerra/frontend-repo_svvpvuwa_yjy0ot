import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-inner shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight text-lg">
            Alex Rivera
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-200/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10"
          >
            Let’s talk
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-200/90 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
