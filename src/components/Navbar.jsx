import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="font-semibold tracking-tight text-white">YourName.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#resume" className="hover:text-white transition">Resume</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition text-white/90">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition text-white/90">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="mailto:you@example.com" className="p-2 rounded-md hover:bg-white/10 transition text-white/90">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
