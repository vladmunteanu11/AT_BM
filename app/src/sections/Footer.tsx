import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  navigare: [
    { label: 'Acasă', href: '/' },
    { label: 'Aerodrom', href: '/aerodrom' },
    { label: 'Înscrieri', href: '/inscrieri' },
    { label: 'Servicii', href: '/servicii' },
    { label: 'Flotă', href: '/flota' },
    { label: 'Contact', href: '/contact' },
  ],
  servicii: [
    { label: 'Zbor de inițiere', href: '/servicii' },
    { label: 'Planorism', href: '/servicii' },
    { label: 'Parașutism tandem', href: '/servicii' },
    { label: 'Vouchere cadou', href: '/servicii' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-8">
              <span className="text-sm font-medium tracking-[0.2em] uppercase">
                Aerodromul
              </span>
              <span className="text-sm font-normal tracking-[0.2em] uppercase text-white/40 ml-2">
                Baia Mare
              </span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-10">
              Școală de zbor autorizată și aviație sportivă în Maramureș.
              Tradiție și pasiune pentru zbor din 1930.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:0726678535"
                className="block text-white/60 hover:text-white transition-colors duration-300"
              >
                0726 678 535
              </a>
              <a
                href="mailto:baiamare@aeroclubulromaniei.ro"
                className="block text-white/60 hover:text-white transition-colors duration-300"
              >
                baiamare@aeroclubulromaniei.ro
              </a>
              <p className="text-white/40">
                Str. 66, Nr. 5, Tăuții-Măgherăuș
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Navigation */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
                  Navigare
                </h4>
                <ul className="space-y-3">
                  {footerLinks.navigare.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
                  Servicii
                </h4>
                <ul className="space-y-3">
                  {footerLinks.servicii.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
                  Legături
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://aeroclubulromaniei.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      Aeroclubul României
                      <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://legitimare.ar.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      Legitimare AR
                      <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/AeroclubulRomaniei"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      Facebook
                      <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {currentYear} Aerodromul Baia Mare
            </p>
            <p className="text-white/30 text-xs">
              Aeroclubul Teritorial "Alexandru Papană"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
