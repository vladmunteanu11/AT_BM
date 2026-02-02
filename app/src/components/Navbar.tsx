import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/aerodrom', label: 'Aerodrom' },
  { href: '/inscrieri', label: 'Înscrieri' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/flota', label: 'Flotă' },
  { href: '/contact', label: 'Contact' },
];

// blahblad


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-elegant'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Text only, elegant */}
            <Link to="/" className="group">
              <div className={`transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                <span className="text-sm font-medium tracking-[0.2em] uppercase">
                  Aerodromul
                </span>
                <span className="text-sm font-normal tracking-[0.2em] uppercase text-current/50 ml-2">
                  Baia Mare
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive(link.href)
                      ? isScrolled
                        ? 'text-black'
                        : 'text-white'
                      : isScrolled
                        ? 'text-black/50 hover:text-black'
                        : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-px bg-current transition-transform duration-300 origin-left ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="tel:0726678535"
                className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-black/50 hover:text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                0726 678 535
              </a>
              <Link
                to="/servicii"
                className={`px-6 py-2.5 text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'bg-black text-white hover:bg-black/85'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                Rezervă zbor
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-elegant-xl transition-transform duration-500 ease-elegant ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            <nav className="flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-4 text-2xl font-medium border-b border-black/5 transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-black'
                      : 'text-black/40 hover:text-black hover:pl-2'
                  }`}
                  style={{
                    animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-8 space-y-4">
              <a
                href="tel:0726678535"
                className="block text-black/50 hover:text-black transition-colors"
              >
                0726 678 535
              </a>
              <Link
                to="/servicii"
                className="block w-full py-4 bg-black text-white text-center text-sm tracking-wide hover:bg-black/85 transition-colors"
              >
                Rezervă zbor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
