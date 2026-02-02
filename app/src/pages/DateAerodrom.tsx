import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const runwaySpecs = [
  { label: 'Lungime', value: '500 m' },
  { label: 'Lățime', value: '30 m' },
  { label: 'Direcții', value: '09 / 27' },
  { label: 'Suprafață', value: 'Iarbă/Beton' },
];

const taxiwaySpecs = [
  { label: 'Lungime', value: '610 m' },
  { label: 'Lățime', value: '20 m' },
  { label: 'Denumire', value: 'Alfa' },
];

const commSpecs = [
  { label: 'Frecvență', value: '135.210 MHz' },
  { label: 'Cod ICAO', value: 'LRMM' },
  { label: 'Elevație', value: '184.8 m' },
];

const facilities = [
  { name: 'Hangar', available: true },
  { name: 'Service tehnic', available: true, note: 'Wilga, Planor' },
  { name: 'Combustibil', available: false },
  { name: 'Cazare', available: true, note: '6.1 km' },
  { name: 'Restaurant', available: true, note: '2.5 km' },
];

export function DateAerodrom() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Informații pentru piloți
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight max-w-2xl mb-6">
            Date tehnice aerodrom
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Specificații tehnice, frecvențe radio și facilități disponibile
            pentru piloții care vizitează Aerodromul Baia Mare.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <p className="text-3xl lg:text-4xl font-light text-white mb-1">LRMM</p>
              <p className="text-sm text-white/40">Cod ICAO</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light text-white mb-1">184.8 m</p>
              <p className="text-sm text-white/40">Elevație</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light text-white mb-1">135.210</p>
              <p className="text-sm text-white/40">MHz Frecvență</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light text-white mb-1">HX</p>
              <p className="text-sm text-white/40">Regim funcționare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Locație
              </p>
              <h2 className="text-3xl font-medium text-black mb-8 tracking-tight">
                Aerodrom Tăuții-Măgherăuș
              </h2>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-black/60">
                  <span className="w-1 h-1 bg-black/30 rounded-full mt-2.5 flex-shrink-0" />
                  Str. 66, Nr. 5, Tăuții-Măgherăuș, Maramureș
                </li>
                <li className="flex items-start gap-3 text-black/60">
                  <span className="w-1 h-1 bg-black/30 rounded-full mt-2.5 flex-shrink-0" />
                  7.5 km față de centrul Baia Mare
                </li>
                <li className="flex items-start gap-3 text-black/60">
                  <span className="w-1 h-1 bg-black/30 rounded-full mt-2.5 flex-shrink-0" />
                  Regim HX (Răsărit - Apus)
                </li>
                <li className="flex items-start gap-3 text-black/60">
                  <span className="w-1 h-1 bg-black/30 rounded-full mt-2.5 flex-shrink-0" />
                  Telefon: 0726 678 535
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=47.667,23.467"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-300"
              >
                <span>Vezi pe hartă</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="bg-neutral-50 p-8 lg:p-10">
              <h3 className="text-lg font-medium text-black mb-8">
                Coordonate
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-wide mb-2">
                    Latitudine
                  </p>
                  <p className="text-2xl font-light text-black">47°40'N</p>
                </div>
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-wide mb-2">
                    Longitudine
                  </p>
                  <p className="text-2xl font-light text-black">23°28'E</p>
                </div>
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-wide mb-2">
                    Elevație
                  </p>
                  <p className="text-2xl font-light text-black">184.8 m</p>
                </div>
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-wide mb-2">
                    Cod ICAO
                  </p>
                  <p className="text-2xl font-light text-black">LRMM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              Specificații
            </p>
            <h2 className="text-3xl font-medium text-black tracking-tight">
              Date tehnice
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Runway */}
            <div className="bg-white p-8 border border-black/5">
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Pistă
              </p>
              <h3 className="text-xl font-medium text-black mb-6">
                Runway 09/27
              </h3>
              <div className="space-y-0">
                {runwaySpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-4 border-b border-black/5 last:border-0"
                  >
                    <span className="text-sm text-black/50">{spec.label}</span>
                    <span className="font-medium text-black">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Taxiway */}
            <div className="bg-white p-8 border border-black/5">
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Cale de rulaj
              </p>
              <h3 className="text-xl font-medium text-black mb-6">
                Taxiway Alfa
              </h3>
              <div className="space-y-0">
                {taxiwaySpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-4 border-b border-black/5 last:border-0"
                  >
                    <span className="text-sm text-black/50">{spec.label}</span>
                    <span className="font-medium text-black">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="bg-white p-8 border border-black/5">
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Comunicații
              </p>
              <h3 className="text-xl font-medium text-black mb-6">
                Radio & Identificare
              </h3>
              <div className="space-y-0">
                {commSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-4 border-b border-black/5 last:border-0"
                  >
                    <span className="text-sm text-black/50">{spec.label}</span>
                    <span className="font-medium text-black">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Facilități
              </p>
              <h2 className="text-3xl font-medium text-black mb-6 tracking-tight">
                Servicii disponibile
              </h2>
              <p className="text-black/60 leading-relaxed">
                Aerodromul oferă facilități de bază pentru piloții care
                tranzitează sau fac escală în Baia Mare.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {facilities.map((facility) => (
                  <div
                    key={facility.name}
                    className={`p-6 border ${
                      facility.available
                        ? 'border-black/10 bg-white'
                        : 'border-black/5 bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span
                        className={`font-medium ${
                          facility.available ? 'text-black' : 'text-black/40'
                        }`}
                      >
                        {facility.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 ${
                          facility.available
                            ? 'bg-black text-white'
                            : 'bg-black/10 text-black/40'
                        }`}
                      >
                        {facility.available ? 'Da' : 'Nu'}
                      </span>
                    </div>
                    {facility.note && (
                      <p className="text-xs text-black/50">{facility.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-10 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="text-black/30 text-xs mt-0.5">i</span>
            <div>
              <p className="font-medium text-black/70 mb-2">Notă importantă</p>
              <p className="text-black/50 text-sm leading-relaxed max-w-3xl">
                Conform procedurilor aerodromului, înregistrarea aeronavelor în
                Registrul de Mișcări este obligatorie la sosire. Vă rugăm să vă
                asigurați că datele sunt completate corect. Tarifele pentru
                aterizare și staționare/hangarare sunt conform Ordinului MTI
                1503/2018.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
              Planifici un zbor?
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Contactează-ne pentru informații suplimentare despre condițiile de
              zbor sau pentru a rezerva hangarare.
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
    </div>
  );
}
