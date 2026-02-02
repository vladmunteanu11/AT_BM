import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

const aircraft = [
  {
    name: 'PZL-104 Wilga 35A',
    type: 'Avion utilitar',
    image: `${base}avion-zbor.jpg`,
    description: 'Avion utilitar polonez, robust și versatil, ideal pentru zboruri de agrement, școală de zbor și remorcarea planoarelor.',
    specs: {
      echipaj: '1 pilot',
      capacitate: '3 pasageri',
      anvergura: '11.12 m',
      motor: 'AI-14R 260 CP',
      vmax: '200 km/h',
    },
    uses: ['Zbor școală', 'Remorcare', 'Agrement'],
  },
  {
    name: 'SZD-50 Puchacz',
    type: 'Planor bipost',
    image: `${base}planor.jpg`,
    description: 'Planor polonez cu două locuri, excelent pentru școala de planorism și zboruri de agrement. Performanțe foarte bune și confort sporit.',
    specs: {
      echipaj: '1 pilot',
      capacitate: '1 pasager',
      anvergura: '16.0 m',
      motor: 'Fără motor',
      vmax: '250 km/h',
    },
    uses: ['Planorism', 'Școală', 'Acrobație'],
  },
  {
    name: 'SZD-30 Pirat',
    type: 'Planor monopost',
    image: `${base}planor.jpg`,
    description: 'Planor monoloc clasic, foarte popular pentru zborul solo și performanță. Ideal pentru piloții care doresc să progreseze.',
    specs: {
      echipaj: '1 pilot',
      capacitate: '-',
      anvergura: '15.0 m',
      motor: 'Fără motor',
      vmax: '220 km/h',
    },
    uses: ['Planorism', 'Solo', 'Performanță'],
  },
];

const stats = [
  { value: '12+', label: 'Aeronave' },
  { value: '8', label: 'Tipuri' },
  { value: '90+', label: 'Ani experiență' },
  { value: '1000+', label: 'Piloți formați' },
];

export function Flota() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Flotă
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight max-w-2xl mb-6">
            Aeronavele noastre
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            O flotă diversificată de aeronave moderne și bine întreținute,
            pregătite să îți ofere cea mai bună experiență de zbor.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-light text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aircraft List */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              Aeronave
            </p>
            <h2 className="text-3xl font-medium text-black tracking-tight">
              Descoperă flota
            </h2>
          </div>

          <div className="space-y-24">
            {aircraft.map((plane, index) => (
              <div
                key={plane.name}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* Image */}
                <div className={index === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={plane.image}
                      alt={plane.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                    {plane.type}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-medium text-black mb-4 tracking-tight">
                    {plane.name}
                  </h3>
                  <p className="text-black/60 leading-relaxed mb-8">
                    {plane.description}
                  </p>

                  {/* Uses */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {plane.uses.map((use) => (
                      <span
                        key={use}
                        className="px-3 py-1 text-xs text-black/60 border border-black/10"
                      >
                        {use}
                      </span>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/10">
                    {Object.entries(plane.specs).map(([key, value]) => (
                      <div key={key} className="py-2">
                        <p className="text-xs text-black/40 uppercase tracking-wide mb-1">
                          {key === 'vmax' ? 'Viteză max' : key}
                        </p>
                        <p className="text-black">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Întreținere
              </p>
              <h2 className="text-3xl font-medium text-black mb-6 tracking-tight">
                Siguranță și calitate
              </h2>
              <p className="text-black/60 leading-relaxed mb-8">
                Toate aeronavele noastre sunt supuse unor controale tehnice
                riguroase și întrețineri periodice conform standardelor AACR.
                Siguranța pasagerilor și a piloților este prioritatea noastră.
              </p>
              <ul className="space-y-4">
                {[
                  'Verificări tehnice zilnice',
                  'Inspecții periodice autorizate',
                  'Personal tehnic calificat',
                  'Piese de schimb originale',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-black/60"
                  >
                    <span className="w-1 h-1 bg-black/30 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 lg:p-10 border border-black/5">
              <h3 className="text-lg font-medium text-black mb-8">
                Certificări
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Certificare AACR', status: 'Valabilă' },
                  { label: 'Autorizație funcționare', status: 'Valabilă' },
                  { label: 'Asigurare RCA/Aviație', status: 'Valabilă' },
                ].map((cert) => (
                  <div
                    key={cert.label}
                    className="flex items-center justify-between py-4 border-b border-black/5 last:border-0"
                  >
                    <span className="text-black/60">{cert.label}</span>
                    <span className="text-xs px-3 py-1 bg-neutral-100 text-black/70">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
              Vrei să zbori cu noi?
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Rezervă-ți acum un zbor cu una dintre aeronavele noastre și
              trăiește experiența unică a zborului.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/servicii"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
              >
                <span>Vezi serviciile</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                <span>Contactează-ne</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
