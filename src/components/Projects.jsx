import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration App',
    description:
      'A low-latency collaborative editor with presence, comments, and offline sync. Built with CRDTs and WebSockets.',
    tags: ['React', 'WebSockets', 'CRDT', 'Tailwind'],
    link: '#',
  },
  {
    title: 'AI‑Powered Portfolio Generator',
    description:
      'A templating engine that turns a JSON resume into a polished website using AI-assisted layout decisions.',
    tags: ['FastAPI', 'OpenAI', 'MongoDB', 'Framer'],
    link: '#',
  },
  {
    title: 'Design System & Component Library',
    description:
      'A cohesive, accessible UI kit with tokens, theming, and composable primitives. Published as a versioned package.',
    tags: ['TypeScript', 'Radix', 'Storybook', 'CSS Vars'],
    link: '#',
  },
];

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition" aria-hidden>
        <div className="h-full w-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.15)_0deg,rgba(59,130,246,0.15)_120deg,rgba(16,185,129,0.15)_240deg,rgba(236,72,153,0.15)_360deg)]" />
      </div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <a href={link} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
            <span>Live</span>
            <ExternalLink size={16} />
          </a>
        </div>
        <p className="mt-3 text-sm text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80"
            >
              <Code size={12} /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A selection of recent work that showcases product thinking, engineering depth, and attention to detail.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">
            Get in touch
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
