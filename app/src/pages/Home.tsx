import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    image: '/avion-zbor.jpg',
    title: 'Zbor de inițiere',
    description: 'Experimentează senzația zborului la manșa unui avion',
    price: 'de la 350 lei',
  },
  {
    image: '/planor.jpg',
    title: 'Zbor cu planorul',
    description: 'Zbor liniștit și panoramic fără motor',
    price: 'de la 250 lei',
  },
  {
    image: '/parasutism.jpg',
    title: 'Salt tandem',
    description: 'Salt cu parașuta însoțit de instructor',
    price: 'de la 1.200 lei',
  },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const img = heroRef.current.querySelector('.hero-image') as HTMLElement;
        if (img) {
          const scale = 1 + scrollY * 0.0001;
          const translateY = scrollY * 0.2;
          img.style.transform = `translateY(${translateY}px) scale(${Math.min(scale, 1.1)})`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section - Full screen, minimal */}
      <section ref={heroRef} className="relative h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="hero-image absolute inset-0 will-change-transform">
            <img
              src="/hero-aerodrom.jpg"
              alt="Aerodromul Baia Mare"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <p className="text-white/50 text-sm tracking-[0.2em] uppercase mb-6">
                  Aeroclubul Teritorial "Alexandru Papană"
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6">
                  Aerodromul
                  <br />
                  <span className="text-white/50">Baia Mare</span>
                </h1>

                <p className="text-lg text-white/70 max-w-md leading-relaxed mb-10">
                  Școală de zbor autorizată, aviație sportivă și zboruri de agrement
                  în inima Maramureșului.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/servicii"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
                  >
                    <span>Descoperă serviciile</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                  <Link
                    to="/aerodrom"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Informații piloți</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Location */}
                <p className="text-sm text-white/50">
                  Tăuții-Măgherăuș · 7.5 km de Baia Mare
                </p>

                {/* Stats */}
                <div className="flex items-center gap-8 text-sm">
                  <div className="text-white/50">
                    <span className="text-white font-medium">LRMM</span>
                    <span className="mx-2">·</span>
                    <span>Cod ICAO</span>
                  </div>
                  <div className="text-white/50">
                    <span className="text-white font-medium">184.8 m</span>
                    <span className="mx-2">·</span>
                    <span>Elevație</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40">
            <ArrowDown className="w-4 h-4 animate-bounce" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* About Section - Clean, minimal */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left - Label */}
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Despre noi
              </p>
              <h2 className="text-3xl lg:text-4xl font-medium text-black leading-tight tracking-tight">
                Un punct de referință
                pentru aviația sportivă
              </h2>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-8">
              <div className="max-w-xl">
                <p className="text-lg text-black/60 leading-relaxed mb-6">
                  Aeroclubul Teritorial "Alexandru Papană" Baia Mare este una dintre
                  cele mai importante baze de aviație sportivă din România. Cu o
                  tradiție de peste 90 de ani, am format generații de piloți și
                  parașutiști.
                </p>
                <p className="text-lg text-black/60 leading-relaxed mb-10">
                  Situat în Tăuții-Măgherăuș, la doar 7.5 km de Baia Mare,
                  aerodromul oferă condiții excelente pentru zboruri de agrement,
                  școală de zbor și activități parașutiste.
                </p>

                <div className="flex flex-wrap gap-12 pt-8 border-t border-black/10">
                  <div>
                    <p className="text-4xl font-light text-black mb-1">90+</p>
                    <p className="text-sm text-black/40">Ani de tradiție</p>
                  </div>
                  <div>
                    <p className="text-4xl font-light text-black mb-1">12+</p>
                    <p className="text-sm text-black/40">Aeronave în flotă</p>
                  </div>
                  <div>
                    <p className="text-4xl font-light text-black mb-1">1000+</p>
                    <p className="text-sm text-black/40">Piloți formați</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Full bleed */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/hangar.jpg"
          alt="Hangar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-3">
                Facilități
              </p>
              <h3 className="text-2xl font-medium text-white mb-3">
                Hangar și service autorizat
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Dispunem de hangar modern și service tehnic autorizat pentru
                întreținerea flotei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Grid layout */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Servicii
              </p>
              <h2 className="text-3xl lg:text-4xl font-medium text-black tracking-tight">
                Experiențe de zbor
              </h2>
            </div>
            <Link
              to="/servicii"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-300"
            >
              <span>Vezi toate serviciile</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/servicii"
                className="group block bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-black mb-2 group-hover:text-black/70 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/50 mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium text-black">
                    {service.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark, minimal */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6 tracking-tight">
              Hai să zburăm împreună
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Contactează-ne pentru a programa un zbor sau pentru mai multe
              informații despre cursurile noastre.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
              >
                <span>Contactează-ne</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <a
                href="tel:0726678535"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                <span>0726 678 535</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
