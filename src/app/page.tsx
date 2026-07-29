"use client"

import { Wrench, PaintBucket, Droplets, Grid3X3, ArrowUpRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <header className="border-b border-navy/5 bg-white/60 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-tight font-semibold">Servi Hogar Pro</h1>
            <p className="text-xs text-navy/40 -mt-0.5">De Gabriel Tsecos</p>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#servicios" className="text-sm text-navy/50 hover:text-navy transition-colors">Servicios</a>
            <a href="#contacto" className="text-sm text-navy/50 hover:text-navy transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
            <span className="w-8 h-px bg-gold" />
            Servicio integral del hogar
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-8">
            Tu hogar<br />
            <span className="text-gold">en las mejores manos</span>
          </h2>
          <p className="text-navy/70 leading-relaxed text-lg mb-12 max-w-xl">
            Refacciones, mantenimiento y soluciones profesionales para que cada espacio de tu casa esté como merece.
          </p>
          <a
            href="https://wa.me/541140232129"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#25D366]/20 whatsapp-pulse"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Pedir presupuesto
          </a>
        </div>
      </section>

      <section id="servicios" className="border-t border-navy/5 py-24 bg-white/40">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4">
            <span className="w-8 h-px bg-gold" />
            Servicios
          </span>
          <h3 className="text-3xl font-semibold mb-16">¿Qué hacemos?</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Wrench,
                title: "Refacciones",
                desc: "Reparaciones integrales y remodelaciones. Cielorrazos, divisiones, colocación de cerámicos y pisos. Cada detalle importa.",
              },
              {
                icon: PaintBucket,
                title: "Pintura y Mantenimiento",
                desc: "Trabajos de pintura interior y exterior, enduido, lijado y sellado. Mantenimiento general de espacios comunes y particulares.",
              },
              {
                icon: Droplets,
                title: "Sellado contra Humedad",
                desc: "Sistemas de impermeabilización y sellado para combatir filtraciones y humedad en paredes, techos y sótanos. Soluciones definitivas.",
              },
              {
                icon: Grid3X3,
                title: "Colocación de cerámicas, mármol y porcelanato",
                desc: "Instalación profesional de cerámicos, mármol y porcelanato en pisos y paredes. Cortes precisos, nivelación perfecta y terminaciones impecables.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-navy/5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-navy" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{s.title}</h4>
                <p className="text-navy/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
          <p className="text-xl md:text-2xl leading-relaxed font-semibold text-navy/80 text-pretty">
            &ldquo;Cada trabajo es un compromiso personal. Nos tomamos el tiempo necesario para entender lo que necesitás y lo ejecutamos con dedicación, prolijidad y los mejores materiales.&rdquo;
          </p>
        </div>
      </section>

      <section id="contacto" className="border-t border-navy/5 py-24 bg-white/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-gold mb-4 justify-center">
            <span className="w-8 h-px bg-gold" />
            Contacto
          </span>
          <h3 className="text-3xl font-semibold mb-4">Hablemos</h3>
          <p className="text-navy/70 mb-10 max-w-md mx-auto">
            Respondemos consultas, coordinamos visitas y te pasamos presupuesto sin cargo.
          </p>
          <a
            href="https://wa.me/541140232129"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border-b-2 border-gold text-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
          >
            +54 11 4023-2129
          </a>
          <div className="mt-4">
            <a
              href="https://instagram.com/servi.hogarpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/50 hover:text-navy transition-colors"
            >
              Instagram: @servi.hogarpro
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-navy/5 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-xs text-navy/40">
          &copy; {new Date().getFullYear()} Servi Hogar Pro &mdash; De Gabriel Tsecos
        </div>
      </footer>

      <a
        href="https://wa.me/541140232129"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        aria-label="WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform whatsapp-pulse">
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </div>
      </a>
    </>
  )
}
