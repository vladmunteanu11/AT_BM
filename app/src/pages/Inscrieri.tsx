import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Pilot Avion Ușor',
    subtitle: 'LAPL',
    description: 'Licență pentru pilotarea avioanelor ușoare cu maximum 3 pasageri.',
    duration: '6-12 luni',
    age: '17 ani',
    price: 'Gratuit pentru tineri',
  },
  {
    title: 'Pilot Planor',
    subtitle: 'SPL',
    description: 'Licență pentru pilotarea planoarelor și motoplanourilor.',
    duration: '6-12 luni',
    age: '16 ani',
    price: 'Gratuit pentru tineri',
  },
  {
    title: 'Parașutism',
    subtitle: 'AFF',
    description: 'Curs complet de parașutism cu metoda Accelerated Free Fall.',
    duration: '3-6 luni',
    age: '16 ani',
    price: 'Gratuit pentru tineri',
  },
];

const requirements = [
  'Vârsta minimă: 16 ani pentru planorism și parașutism, 17 ani pentru avion',
  'Certificat medical aeronautic valabil',
  'Cazier judiciar fără antecedente penale',
  'Cetățenie română sau rezidență legală în România',
];

const documents = [
  'Copie CI/Pașaport',
  'Certificat medical aeronautic',
  'Cazier judiciar',
  'Adeverință de la locul de muncă sau școală',
  '4 fotografii tip buletin',
];

const steps = [
  {
    number: '01',
    title: 'Completează formularul',
    description: 'Accesează platforma online și completează formularul de înscriere.',
  },
  {
    number: '02',
    title: 'Pregătește documentele',
    description: 'Adună toate documentele necesare conform listei.',
  },
  {
    number: '03',
    title: 'Examen medical',
    description: 'Efectuează examenul medical aeronautic la un medic autorizat.',
  },
  {
    number: '04',
    title: 'Validare înscriere',
    description: 'Vino la aerodrom pentru validarea finală a înscrierii.',
  },
];

export function Inscrieri() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Înscrieri
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight max-w-2xl mb-6">
            Începe-ți cariera în aviație
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Cursuri gratuite de planorism și parașutism pentru tinerii cu vârste
            între 16 și 23 de ani.
          </p>
        </div>
      </section>

      {/* Free Courses Banner */}
      <section className="py-10 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-2">
                Oportunitate
              </p>
              <h2 className="text-xl font-medium text-white">
                Cursuri gratuite pentru tineri
              </h2>
              <p className="text-white/40 text-sm mt-1">
                Vârsta 16-23 ani · Locuri limitate
              </p>
            </div>
            <a
              href="https://legitimare.ar.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
            >
              <span>Înscrie-te online</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              Cursuri disponibile
            </p>
            <h2 className="text-3xl font-medium text-black tracking-tight">
              Alege-ți specializarea
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="p-8 border border-black/5 hover:border-black/10 transition-colors duration-300"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                  {course.subtitle}
                </p>
                <h3 className="text-xl font-medium text-black mb-3">
                  {course.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="space-y-2 text-sm text-black/50 mb-6">
                  <p>Durată: {course.duration}</p>
                  <p>Vârstă minimă: {course.age}</p>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-sm font-medium text-black">
                    {course.price}*
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Documents */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Requirements */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Condiții
              </p>
              <h3 className="text-2xl font-medium text-black mb-8 tracking-tight">
                Condiții de înscriere
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-black/60"
                  >
                    <span className="w-1 h-1 bg-black/30 rounded-full mt-2.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Documente
              </p>
              <h3 className="text-2xl font-medium text-black mb-8 tracking-tight">
                Documente necesare
              </h3>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-black/60"
                  >
                    <span className="w-1 h-1 bg-black/30 rounded-full mt-2.5 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              Proces
            </p>
            <h2 className="text-3xl font-medium text-black tracking-tight">
              Cum te înscrii
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <p className="text-5xl font-light text-black/10 mb-4">
                  {step.number}
                </p>
                <h3 className="font-medium text-black mb-2">{step.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-black/10 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-4">
                Contact
              </p>
              <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
                Ai întrebări?
              </h2>
              <p className="text-white/50 leading-relaxed mb-10">
                Contactează-ne pentru orice informație suplimentară despre
                cursurile noastre și procesul de înscriere.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
              >
                <span>Contactează-ne</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <span className="text-white/60 text-xs">Tel</span>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Telefon</p>
                  <p className="text-white">0726 678 535</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <span className="text-white/60 text-xs">@</span>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Email</p>
                  <p className="text-white">baiamare@aeroclubulromaniei.ro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-10 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <span className="text-black/30 text-xs mt-0.5">*</span>
            <p className="text-black/50 text-sm leading-relaxed">
              Locurile pentru cursurile gratuite sunt limitate și se ocupă în
              ordinea înscrierii. Pentru cursurile cu plată, contactați-ne pentru
              informații despre tarife și disponibilitate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
