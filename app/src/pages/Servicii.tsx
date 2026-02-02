import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const mainServices = [
  {
    title: 'Zbor de inițiere',
    subtitle: 'Avion',
    description: 'Experimentează senzația zborului la manșa unui avion ușor, însoțit de un instructor experimentat. O experiență de neuitat pentru pasionații de aviație.',
    duration: '20-30 minute',
    price: '350',
    image: '/avion-zbor.jpg',
    features: ['Briefing pre-zbor', 'Zbor cu instructor certificat', 'Certificat de participare'],
  },
  {
    title: 'Zbor cu planorul',
    subtitle: 'Planor',
    description: 'Zbor liniștit și panoramic cu planorul, ideal pentru cei care vor să experimenteze zborul fără motor și să admire peisajele Maramureșului din aer.',
    duration: '15-20 minute',
    price: '250',
    image: '/planor.jpg',
    features: ['Tracțiune cu avion', 'Zbor panoramic', 'Fotografii din aer'],
  },
  {
    title: 'Salt tandem parașutism',
    subtitle: 'Parașutism',
    description: 'Salt cu parașuta de la 3000m însoțit de un instructor profesionist. Adrenalină pură și priveliști spectaculoase pentru iubitorii de senzații tari.',
    duration: '~1 oră (incluzând pregătirea)',
    price: '1.200',
    image: '/parasutism.jpg',
    features: ['Salt de la 3000m', 'Echipament complet', 'Instructor profesionist'],
  },
];

const giftVouchers = [
  {
    title: 'Voucher Zbor Avion',
    description: 'Cadou perfect pentru pasionații de aviație',
    price: '350',
    validity: '12 luni',
  },
  {
    title: 'Voucher Zbor Planor',
    description: 'Experiență unică de zbor fără motor',
    price: '250',
    validity: '12 luni',
  },
  {
    title: 'Voucher Salt Parașută',
    description: 'Pentru iubitorii de adrenalină',
    price: '1.200',
    validity: '12 luni',
  },
];

export function Servicii() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Servicii
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight max-w-2xl mb-6">
            Experiențe de zbor
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Oferim o gamă completă de servicii de aviație sportivă, de la zboruri
            de inițiere până la salturi cu parașuta.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              Zboruri
            </p>
            <h2 className="text-3xl font-medium text-black tracking-tight">
              Alege experiența potrivită
            </h2>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={service.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div className={`relative ${index === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-medium text-black mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-black/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <p className="text-sm text-black/40 mb-8">
                    Durată: {service.duration}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-black/60">
                        <span className="w-1 h-1 bg-black/30 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-black/10">
                    <div>
                      <p className="text-xs text-black/40 mb-1">Preț</p>
                      <p className="text-2xl font-medium text-black">
                        {service.price} <span className="text-base font-normal">lei</span>
                      </p>
                    </div>
                    <a
                      href="https://magazin.aeroclubulromaniei.ro/vouchere-zbor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm tracking-wide hover:bg-black/85 transition-colors duration-300"
                    >
                      <span>Rezervă</span>
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Vouchers */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Vouchere cadou
              </p>
              <h2 className="text-3xl font-medium text-black tracking-tight">
                Oferă un cadou de neuitat
              </h2>
            </div>
            <a
              href="https://magazin.aeroclubulromaniei.ro/vouchere-zbor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-300"
            >
              <span>Magazin online</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {giftVouchers.map((voucher) => (
              <div
                key={voucher.title}
                className="bg-white p-8 border border-black/5 hover:border-black/10 transition-colors duration-300"
              >
                <h3 className="text-lg font-medium text-black mb-2">
                  {voucher.title}
                </h3>
                <p className="text-sm text-black/50 mb-6">
                  {voucher.description}
                </p>
                <div className="flex items-end justify-between pt-6 border-t border-black/5">
                  <div>
                    <p className="text-2xl font-medium text-black">
                      {voucher.price} <span className="text-base font-normal">lei</span>
                    </p>
                    <p className="text-xs text-black/40 mt-1">
                      Valabilitate: {voucher.validity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://magazin.aeroclubulromaniei.ro/vouchere-zbor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-black/20 text-black text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              <span>Cumpără voucher</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
              Rezervă-ți zborul acum
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Contactează-ne pentru a programa zborul tău sau pentru a cumpăra
              un voucher cadou.
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
                href="https://magazin.aeroclubulromaniei.ro/vouchere-zbor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                <span>Magazin online</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
