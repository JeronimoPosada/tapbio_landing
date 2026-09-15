import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Share2,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import googleAsset from "@/assets/acrilico_google-safe.webp.asset.json";
import instagramAsset from "@/assets/acrilico_ig-safe.webp.asset.json";
import menuAsset from "@/assets/acrilico_menu-safe.webp.asset.json";
import facebookAsset from "@/assets/acrilico_fb-safe.webp.asset.json";
import tiktokAsset from "@/assets/acrilico_tiktok-safe.webp.asset.json";
import logoAsset from "@/assets/tapbio-logo-dark.png.asset.json";
import iconAsset from "@/assets/tapbio-icon-official.png.asset.json";

const WHATSAPP = "https://wa.me/573053403401";

const journey = [
  {
    label: "Hazte visible",
    title: "Convierte una buena experiencia en una reseña.",
    copy: "Tu cliente acerca su celular y llega directo a tu perfil de Google, sin buscar tu negocio ni escribir direcciones.",
    image: googleAsset.url,
    alt: "TapBio Tag para reseñas de Google con código protegido",
  },
  {
    label: "Mantén el vínculo",
    title: "De la mesa a tu comunidad digital.",
    copy: "Un gesto basta para abrir Instagram y hacer que quienes ya te visitaron también te encuentren después.",
    image: instagramAsset.url,
    alt: "TapBio Tag para Instagram con código protegido",
  },
  {
    label: "Simplifica la visita",
    title: "Tu menú, disponible en el momento justo.",
    copy: "Actualiza la experiencia sin reimprimir: conecta a cada persona con la información que necesita desde su propio celular.",
    image: menuAsset.url,
    alt: "TapBio Tag para menú digital con código protegido",
  },
  {
    label: "Cierra el recorrido",
    title: "Una tarjeta. Muchas formas de conectar.",
    copy: "El mismo formato puede llevar a reseñas, redes, promociones o el destino digital que mejor apoye a tu negocio.",
    image: facebookAsset.url,
    alt: "TapBio Tag para Facebook con código protegido",
  },
];

const catalog = [
  { name: "Reseñas de Google", image: googleAsset.url, accent: "Impulsa tu reputación" },
  { name: "Menú digital", image: menuAsset.url, accent: "Actualiza sin reimprimir" },
  { name: "Instagram", image: instagramAsset.url, accent: "Haz crecer tu comunidad" },
  { name: "Facebook", image: facebookAsset.url, accent: "Mantén el contacto" },
  { name: "TikTok", image: tiktokAsset.url, accent: "Lleva visitas a tu contenido" },
];

function GlassSurface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className={`glass-surface ${className}`} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}

function PhoneDemo() {
  const [scanState, setScanState] = useState<"scanning" | "connected">("scanning");
  const [scanKey, setScanKey] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setScanState("connected"), 1900);
    return () => window.clearTimeout(timer);
  }, [scanKey]);

  const restartScan = () => {
    setScanState("scanning");
    setScanKey((current) => current + 1);
  };

  return (
    <div
      className="phone-stage"
      aria-label="Demostración de un celular escaneando un TapBio para reseñas de Google"
    >
      <div className="nfc-halo" aria-hidden="true" />
      <div className="scan-acrylic" aria-hidden="true">
        <img src={googleAsset.url} alt="" />
        <span>TapBio Google</span>
      </div>
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span>● ● ●</span>
          </div>
          {scanState === "scanning" ? (
            <div className="scan-view" key={`scan-${scanKey}`}>
              <div className="scan-brand">
                <img src={iconAsset.url} alt="" />
                <span>TapBio</span>
              </div>
              <div className="scan-rings" aria-hidden="true">
                <span />
                <span />
                <span />
                <strong>NFC</strong>
              </div>
              <p className="scan-kicker">Buscando TapBio</p>
              <h3>Acerca tu celular al acrílico</h3>
              <p>Conectando con reseñas de Google…</p>
            </div>
          ) : (
            <div className="review-view" key="connected">
              <div className="connected-check" aria-hidden="true">
                ✓
              </div>
              <p className="scan-kicker">TapBio detectado</p>
              <h3>¿Cómo fue tu experiencia?</h3>
              <div className="review-stars" aria-label="Cinco estrellas">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>Tu opinión ayuda a más personas a encontrarnos.</p>
              <Button type="button" className="review-button" onClick={restartScan}>
                Dejar mi reseña <ChevronRight />
              </Button>
            </div>
          )}
        </div>
      </div>
      <button type="button" className="tap-prompt" onClick={restartScan}>
        <span className="tap-dot" /> Escanear de nuevo
      </button>
    </div>
  );
}

function StorySection() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-step") ?? 0));
        }),
      { rootMargin: "-35% 0px -35% 0px", threshold: 0.1 },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="story-section" id="como-funciona">
      <div className="story-intro section-shell">
        <p className="eyebrow">Del toque a la acción</p>
        <h2>Una experiencia que acompaña cada momento.</h2>
      </div>
      <div className="story-grid section-shell">
        <div className="story-visual" aria-live="polite">
          <div className="product-frame">
            {journey.map((step, index) => (
              <img
                key={step.label}
                className={active === index ? "is-visible" : ""}
                src={step.image}
                alt={step.alt}
              />
            ))}
            <span className="product-edge" aria-hidden="true" />
          </div>
          <div className="step-meter" aria-hidden="true">
            {journey.map((step, index) => (
              <span key={step.label} className={active === index ? "is-active" : ""} />
            ))}
          </div>
        </div>
        <div className="story-copy">
          {journey.map((step, index) => (
            <div
              key={step.label}
              ref={(node) => {
                refs.current[index] = node;
              }}
              data-step={index}
              className={`story-step ${active === index ? "is-active" : ""}`}
            >
              <span>
                0{index + 1} — {step.label}
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TapbioLanding() {
  return (
    <main className="tapbio-site">
      <header className="site-header">
        <div className="brand-link" aria-label="TapBio, inicio">
          <img src={logoAsset.url} alt="TapBio" />
        </div>
        <nav aria-label="Navegación principal">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#disenos">Diseños</a>
        </nav>
        <Button asChild className="whatsapp-button header-cta">
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <MessageCircle /> Hablemos
          </a>
        </Button>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-demo">
          <PhoneDemo />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Vive la experiencia TapBio</p>
          <h1 aria-label="Un toque. Todo tu negocio conectado.">
            <span>Un toque.</span>
            <span>Todo tu negocio</span>
            <span className="text-brand">conectado.</span>
          </h1>
          <p className="hero-lede">
            Convierte cada mesa o mostrador en un punto de conexión con tus clientes. NFC y QR
            dinámico, juntos en un display que sí se quiere tocar.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="whatsapp-button">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle /> Quiero mi TapBio
              </a>
            </Button>
            <a href="#como-funciona" className="scroll-link">
              Descubre cómo funciona <ArrowDown />
            </a>
          </div>
          <div className="hero-note">
            <span>NFC</span>
            <span>QR dinámico</span>
            <span>Listo para usar</span>
          </div>
        </div>
      </section>

      <StorySection />

      <section className="benefits section-shell" aria-labelledby="benefits-title">
        <div className="benefits-heading">
          <p className="eyebrow">Más simple para todos</p>
          <h2 id="benefits-title">Una tarjeta, más momentos de conexión.</h2>
          <p>
            Sin aplicaciones ni pasos innecesarios. TapBio acerca lo importante a las personas que
            ya están en tu negocio.
          </p>
        </div>
        <div className="benefit-grid">
          <GlassSurface className="benefit-card benefit-main">
            <span className="benefit-number">01</span>
            <Share2 />
            <h3>Todo en un mismo lugar</h3>
            <p>Menú, redes y reseñas desde una experiencia directa.</p>
          </GlassSurface>
          <GlassSurface className="benefit-card">
            <span className="benefit-number">02</span>
            <Sparkles />
            <h3>Se siente parte de tu espacio</h3>
            <p>Acrílico limpio, compacto y fácil de integrar en mesas y mostradores.</p>
          </GlassSurface>
          <GlassSurface className="benefit-card">
            <span className="benefit-number">03</span>
            <ArrowRight />
            <h3>Un gesto que mueve a la acción</h3>
            <p>Acerca el celular o escanea. Así de natural.</p>
          </GlassSurface>
        </div>
      </section>

      <section className="catalog-section" id="disenos">
        <div className="section-shell">
          <div className="catalog-heading">
            <div>
              <p className="eyebrow">Elige tu diseño</p>
              <h2>Una intención clara para cada TapBio.</h2>
            </div>
            <p>
              Escoge el objetivo principal para tu negocio. Todos incluyen display acrílico, NFC y
              QR dinámico.
            </p>
          </div>
          <div className="catalog-grid">
            {catalog.map((item, index) => (
              <article className={`catalog-card catalog-${index + 1}`} key={item.name}>
                <div className="catalog-image">
                  <img
                    src={item.image}
                    alt={`Diseño TapBio para ${item.name} con código protegido`}
                    loading="lazy"
                  />
                </div>
                <div className="catalog-info">
                  <span>{item.accent}</span>
                  <h3>{item.name}</h3>
                  <div className="catalog-price">
                    <strong>$50.000</strong>
                    <small>COP</small>
                  </div>
                  <Button asChild variant="ghost" className="catalog-action">
                    <a
                      href={`${WHATSAPP}?text=${encodeURIComponent(`Hola TapBio, me interesa el diseño de ${item.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Elegir este diseño <ArrowRight />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <p className="custom-note">
            ¿Tienes otra idea? También creamos diseños exclusivos{" "}
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              a cotizar.
            </a>
          </p>
        </div>
      </section>

      <section className="final-cta section-shell">
        <GlassSurface className="cta-panel">
          <img src={iconAsset.url} alt="" />
          <p className="eyebrow">Tu próximo cliente ya tiene el celular en la mano</p>
          <h2>Haz que un toque cuente.</h2>
          <p>
            Cuéntanos qué quieres conectar y te ayudamos a elegir el TapBio ideal para tu negocio.
          </p>
          <Button asChild size="lg" className="whatsapp-button">
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent("Hola TapBio, quiero conectar mi negocio.")}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle /> Escríbenos por WhatsApp
            </a>
          </Button>
        </GlassSurface>
      </section>

      <footer className="site-footer section-shell">
        <div>
          <img src={logoAsset.url} alt="TapBio" />
          <p>Conecta. Comparte. Crece.</p>
        </div>
        <div className="footer-contact">
          <a href="mailto:contacto.tapbio@gmail.com">contacto.tapbio@gmail.com</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            +57 305 340 3401
          </a>
        </div>
        <p className="copyright">© 2026 TapBio. Hecho en Colombia.</p>
      </footer>
    </main>
  );
}
