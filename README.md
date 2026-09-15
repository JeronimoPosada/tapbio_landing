# TapBio

Landing page comercial para un display acrílico de mesa con NFC y QR dinámico, pensado para negocios locales que quieren conectar clientes con reseñas, redes sociales y menús desde un solo toque.

## Sobre el proyecto

TapBio ayuda a restaurantes, cafés y tiendas a convertir cada mesa o mostrador en un punto de conexión directo con su cliente. En lugar de depender de búsquedas largas o pasos extra, el producto permite acercar información útil al instante: reseñas de Google, redes sociales, menú digital y llamadas a la acción claras.

La propuesta resuelve la fricción entre la experiencia física y la digital, reduciendo la pérdida de atención y mejorando la conversión del tráfico local real.

## Stack tecnológico

El proyecto está construido con la stack real que aparece en la configuración y dependencias del repositorio:

- TypeScript
- React 19
- Vite 8
- TanStack Start
- TanStack Router
- Tailwind CSS (dependencia configurada en el proyecto)
- Radix UI + componentes tipo shadcn en `src/components/ui` y `src/components/ul`
- Lucide React para iconografía
- ESLint y Prettier para calidad y formato
- CSS personalizado con variables y estilos de vidrio digital en `src/style.css`

## Instalación y desarrollo local

Requisitos:

- Node.js
- npm

```bash
git clone <URL-del-repositorio>
cd web_tapbio
npm install
npm run dev
```

La app queda disponible en el puerto configurado por Vite, con host `0.0.0.0` y puerto `5173` según `vite.config.ts`.

Para compilar la versión de producción:

```bash
npm run build
```

Para previsualizar la build localmente:

```bash
npm run preview
```

## Estructura del proyecto

```text
.
├── public/                     # Assets estáticos del sitio
├── src/
│   ├── assets/                # Imágenes y recursos del producto
│   ├── components/
│   │   ├── ui/                # Componentes base de interfaz
│   │   ├── ul/                # Componentes ampliados del sistema visual
│   │   ├── tapbio-landing.tsx # Componente principal de la landing
│   │   └── tabio-landing.tsx # Variante o componente complementario
│   ├── hooks/                 # Hooks reutilizables
│   ├── lib/                   # Utilidades y manejo de errores
│   ├── routes/                # Rutas de TanStack Router
│   ├── main.tsx               # Punto de entrada de la app
│   ├── router.tsx             # Configuración del router
│   ├── server.ts              # Servidor del proyecto
│   ├── start.ts               # Configuración de TanStack Start
│   └── style.css              # Estilos globales y sistema visual del brand
├── .gitignore
├── .prettierrc
├── bunfig.toml
├── components.json
├── eslint.config.js
├── index.html
├── package.json               # Scripts y dependencias
├── tsconfig.json
├── vite.config.ts             # Configuración de Vite
├── README.md
└── package-lock.json
```

## Variables de entorno

No hay variables de entorno requeridas por la versión actual del proyecto. El código no referencia `process.env` ni `import.meta.env` en la base de la aplicación.

Ejemplo de archivo de entorno local, si en una etapa futura se agregan configuraciones:

```env
# No se requieren variables de entorno en esta versión del proyecto.
# Si se agregan más adelante, se deben declarar aquí sin incluir valores reales.
```

## Despliegue

Este proyecto se publica como una app frontend generada con Vite. La configuración actual define:

- host local: `0.0.0.0`
- puerto dev: `5173`
- puerto preview: `4173`

El flujo de despliegue recomendado es:

```bash
npm run build
npm run preview
```

Esto genera la salida de producción en `dist/`, lista para publicarse en un hosting estático o un entorno compatible con la build de Vite/TanStack Start.

## Diseño de marca

La identidad visual de TapBio está orientada a una experiencia premium y directa para puntos de contacto físicos.

- Colores principales:
  - Verde: `#19B88F`
  - Dorado: `#F2B632`
  - Azul oscuro / negro: `#17212B`
- Tipografía: estilo moderno y limpio con `Outfit` en la base visual del proyecto.
- Concepto visual: "Vidrio Digital", utilizando superficies translúcidas, brillo sutil, capas de profundidad y un fondo oscuro con acentos de color que imitan una interfaz premium sobre vidrio.

La interfaz refleja esa idea a través de los componentes tipo `glass-surface`, fondos con efecto de profundidad y una narrativa visual orientada a la conexión inmediata entre la experiencia física y la digital.

## Contacto

- WhatsApp: +57 305 340 3401
- Correo: contacto.tapbio@gmail.com

---

TapBio — Conecta. Comparte. Crece.
