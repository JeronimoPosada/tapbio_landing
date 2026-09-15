import { createFileRoute } from "@tanstack/react-router";
import { TapbioLanding } from "@/components/tapbio-landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TapBio | Conecta tu negocio con un toque" },
      {
        name: "description",
        content:
          "TapBio conecta reseñas, menú y redes con tecnología NFC y QR dinámico para negocios locales en Colombia.",
      },
      { property: "og:title", content: "TapBio | Conecta. Comparte. Crece." },
      {
        property: "og:description",
        content: "Convierte cada mesa o mostrador en un punto de conexión con tus clientes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <TapbioLanding />;
}
