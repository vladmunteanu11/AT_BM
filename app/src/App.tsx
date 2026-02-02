import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './sections/Footer';
import { Home } from './pages/Home';
import { DateAerodrom } from './pages/DateAerodrom';
import { Inscrieri } from './pages/Inscrieri';
import { Servicii } from './pages/Servicii';
import { Flota } from './pages/Flota';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aerodrom" element={<DateAerodrom />} />
            <Route path="/inscrieri" element={<Inscrieri />} />
            <Route path="/servicii" element={<Servicii />} />
            <Route path="/flota" element={<Flota />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
