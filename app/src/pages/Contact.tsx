import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    label: 'Telefon',
    value: '0726 678 535',
    href: 'tel:0726678535',
  },
  {
    label: 'Email',
    value: 'baiamare@aeroclubulromaniei.ro',
    href: 'mailto:baiamare@aeroclubulromaniei.ro',
  },
  {
    label: 'Adresă',
    value: 'Str. 66, Nr. 5, Tăuții-Măgherăuș, MM',
  },
  {
    label: 'Program',
    value: 'Regim HX (Răsărit - Apus)',
  },
];

const faqs = [
  {
    q: 'Ce vârstă trebuie să am pentru a zbura?',
    a: 'Pentru zboruri de agrement nu există limită de vârstă. Pentru cursurile de pilot, vârsta minimă este 16 ani pentru planor și 17 ani pentru avion.',
  },
  {
    q: 'Am nevoie de programare pentru un zbor?',
    a: 'Da, recomandăm să ne contactați cu cel puțin 3-5 zile în avans pentru a programa zborul.',
  },
  {
    q: 'Ce se întâmplă dacă vremea nu este bună?',
    a: 'Siguranța este prioritatea noastră. Dacă condițiile meteorologice nu permit zborul, vom reprograma.',
  },
  {
    q: 'Pot oferi un voucher cadou?',
    a: 'Da, oferim vouchere cadou pentru toate serviciile noastre, valabile 12 luni.',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 100);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Contact
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight max-w-2xl mb-6">
            Hai să vorbim
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Contactează-ne pentru orice informație legată de serviciile și
            facilitățile noastre.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                Informații
              </p>
              <h2 className="text-2xl font-medium text-black mb-10 tracking-tight">
                Date de contact
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-black hover:text-black/70 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-black">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-black/10">
                <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                  Social
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/AeroclubulRomaniei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-300"
                  >
                    Facebook
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://aeroclubulromaniei.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-300"
                  >
                    Aeroclubul României
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-neutral-50 p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <p className="text-lg font-medium text-black mb-2">
                    Mesaj trimis
                  </p>
                  <p className="text-black/50 mb-8">
                    Îți mulțumim. Te vom contacta în curând.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-black/60 hover:text-black transition-colors duration-300"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                    Formular
                  </p>
                  <h3 className="text-xl font-medium text-black mb-8 tracking-tight">
                    Trimite-ne un mesaj
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-black text-sm focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                        placeholder="Ion Popescu"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-black text-sm focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                        placeholder="ion@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-black text-sm focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/30"
                        placeholder="07xx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] uppercase text-black/40 mb-2">
                        Mesaj *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-black/10 text-black text-sm focus:outline-none focus:border-black/30 transition-colors resize-none placeholder:text-black/30"
                        placeholder="Cum te putem ajuta?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-sm tracking-wide hover:bg-black/85 transition-all duration-300 mt-8"
                    >
                      <span>Trimite mesajul</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              Locație
            </p>
            <h2 className="text-2xl font-medium text-black tracking-tight">
              Unde ne găsești
            </h2>
          </div>
          <div className="aspect-[21/9] bg-neutral-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.1234567890123!2d23.45!3d47.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM5JzAwLjAiTiAyM8KwMjcnMDAuMCJF!5e0!3m2!1sro!2sro!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aerodromul Baia Mare"
              className="grayscale"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-8 text-sm text-black/50">
            <p>Coordonate: 47°40'N, 23°28'E</p>
            <p>Cod ICAO: LRMM</p>
            <p>Elevație: 184.8 m</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-medium text-black tracking-tight">
              Întrebări frecvente
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="pb-8 border-b border-black/5 last:border-0 last:pb-0"
              >
                <h3 className="font-medium text-black mb-3">{faq.q}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">
              Ești gata să zbori?
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Rezervă-ți acum un zbor și trăiește experiența unică a aviației
              sportive.
            </p>
            <Link
              to="/servicii"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-all duration-300"
            >
              <span>Vezi serviciile</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
