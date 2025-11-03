import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name • Built with passion and a sprinkle of Spline magic
        </div>
      </footer>
    </div>
  );
}

export default App;
