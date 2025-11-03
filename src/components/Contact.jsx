import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-x-0 -top-24 h-48 blur-3xl opacity-60" aria-hidden>
        <div className="mx-auto h-full max-w-3xl bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              I’m currently open to full‑time roles and select freelance projects. Tell me about your goals—
              I’ll help turn them into elegant, scalable solutions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:opacity-90">
                <Mail size={16} /> Email me
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/15">
                <Phone size={16} /> +1 (000) 000-0000
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = fd.get('name');
              const body = encodeURIComponent(`Hi, I am ${name}.\n\n${fd.get('message')}`);
              const email = "you@example.com";
              window.location.href = `mailto:${email}?subject=Let%27s%20work%20together&body=${body}`;
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="ada@lovelace.dev" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea name="message" required rows={5} className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Briefly describe your project or the role." />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow hover:brightness-110">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
