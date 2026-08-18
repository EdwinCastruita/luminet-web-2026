# Proyecto: HUUS Web Page (2026)

Este documento sirve como el contexto definitivo para que cualquier Inteligencia Artificial o agente de desarrollo comprenda rápidamente la arquitectura, stack tecnológico, diseño, estructura y convenciones del proyecto **HUUS**.

---

## 1. Visión General del Proyecto

**HUUS** es una empresa de telecomunicaciones y ciberseguridad en México que provee conectividad de alta disponibilidad, internet dedicado, soluciones satelitales, seguridad perimetral y administración de redes para organizaciones, empresas y eventos.

Este repositorio contiene el sitio web corporativo de HUUS, diseñado como una SPA/MPA moderna con landing pages altamente interactivas, fluidas, con estética premium futurista, efectos de iluminación/glow y elementos 3D dinámicos.

---

## 2. Stack Tecnológico Principal

El proyecto está construido sobre las siguientes tecnologías y dependencias:

- **Framework:** [Next.js v16.2.6](https://nextjs.org/) (App Router, React Server Components y Client Components).
- **Librería de UI:** [React v19.2.4](https://react.dev/) y [TypeScript v5](https://www.typescriptlang.org/).
- **Estilos y Layout:** [Tailwind CSS v4](https://tailwindcss.com/) (Usa la nueva arquitectura de Tailwind v4, sin archivo `tailwind.config.js`. Toda la configuración se realiza directamente en el archivo CSS global).
- **Animaciones:** [Framer Motion v12.42.2](https://www.framer.com/motion/) para transiciones de entrada y micro-interacciones de alta fidelidad.
- **Gráficos 3D:** [Three.js v0.184.0](https://threejs.org/) para el renderizado del holograma interactivo de red (`HeroOrbCanvas`).
- **Iconografía:** [Lucide React v1.16.0](https://lucide.dev/) para iconos vectoriales limpios y unificados.

---

## 3. Arquitectura del Directorio

La estructura de carpetas sigue el estándar de Next.js App Router:

```bash
huus-web-page/
├── public/                  # Archivos estáticos (Logos de HUUS, SVGs, etc.)
├── src/
│   ├── app/                 # Directorio del App Router (Rutas, Layouts y CSS Global)
│   │   ├── comunidad/       # Comunidad y Partners
│   │   ├── nosotros/        # Página "Quiénes Somos / Sobre Nosotros"
│   │   ├── soluciones/      # Catálogo de Soluciones/Servicios (Sub-rutas por servicio)
│   │   │   ├── alta-disponibilidad/
│   │   │   ├── ciberseguridad/
│   │   │   ├── comunicaciones-unificadas/
│   │   │   ├── data-centers/
│   │   │   ├── internet-dedicado/
│   │   │   ├── internet-eventos/
│   │   │   ├── internet-pyme/
│   │   │   ├── internet-satelital/
│   │   │   ├── red-wifi/
│   │   │   ├── redes-privadas-virtuales/
│   │   │   ├── sd-wan/
│   │   │   ├── servicios-tics/
│   │   │   └── video-vigilancia/
│   │   ├── globals.css      # Estilos globales y configuración @theme de Tailwind v4
│   │   ├── layout.tsx       # Layout raíz con Navbar y Footer unificados
│   │   ├── page.tsx         # Página de Inicio (Home) interactiva
│   │   └── icon.tsx         # Generador de favicon dinámico
│   │
│   └── components/          # Componentes de React compartidos y modulares
│       ├── BlogGrid.tsx     # Sección de blog y artículos
│       ├── ContactForm.tsx  # Formulario de contacto interactivo
│       ├── Footer.tsx       # Pie de página con enlaces y branding
│       ├── HeroOrbCanvas.tsx# Esfera 3D interactiva de redes hecha en Three.js
│       ├── Navbar.tsx       # Menú de navegación flotante premium con blur
│       ├── Partners.tsx     # Carrusel infinito de logos de partners comerciales
│       ├── SolutionsGrid.tsx# Grid de servicios en Home con efectos hover de glow
│       ├── SuccessCases.tsx # Casos de éxito y testimonios
│       └── WhyChooseUs.tsx  # Sección de diferenciadores competitivos de HUUS
├── package.json             # Scripts de npm y declaración de dependencias
├── tsconfig.json            # Configuración de TypeScript
└── eslint.config.mjs        # Configuración del linter (ESLint)
```

---

## 4. Sistema de Diseño y Estilos (Tailwind CSS v4)

Este proyecto implementa **Tailwind CSS v4**. En lugar de usar un archivo `tailwind.config.js`, las variables de entorno, temas, colores y animaciones personalizadas se definen en `src/app/globals.css` utilizando la directiva `@theme`.

### Paleta de Colores de la Marca (Variables CSS)
- **Primary Indigo:** `#312e81` (`--blue-primary` / `text-blue-primary`)
- **Huus Purple:** `#4a3f83` (`--huus-purple` / `text-huus-purple`)
- **Space Blue Background:** `#00041a` (`--blue-dark` / `bg-blue-dark`)
- **Deep Navy Highlight:** `#0c0f3a` (`--blue-mid` / `bg-blue-mid`)
- **Deep Violet:** `#5b21b6` (`--blue-light` / `bg-blue-light`)
- **Pink CTA:** `#db2777` (`--pink-cta` / `text-pink-cta`)
- **Glow & Blur Effects:** Múltiples variables `--glow-*` para sombras y resplandores radiales de fibra óptica o ciberseguridad.

### Animaciones Customizadas (Disponibles en Tailwind v4)
- `animate-float-orb`: Movimiento orgánico flotante vertical para elementos decorativos y el Canvas 3D.
- `animate-spin-slow` / `animate-spin-reverse`: Rotaciones suaves de fondo.
- `animate-infinite-scroll`: Movimiento continuo horizontal para el carrusel de Partners.
- `animate-pulse-slow`: Pulso de iluminación suave.
- `animate-wave-flow` / `animate-energy-flow`: Animación para trazos SVG que simulan transmisión de datos.
- `animate-shimmer`: Barrido de luz metálica/holográfica (`text-shimmer`).

---

## 5. El Componente 3D: HeroOrbCanvas

El sitio cuenta con un elemento visual de alto impacto en el Hero del Home (`src/components/HeroOrbCanvas.tsx`).
- Es un lienzo interactivo desarrollado en **Three.js puro** (sin librerías adicionales como React Three Fiber).
- Genera proceduralmente una **esfera holográfica de red** con nodos orbitales, partículas conectadas, líneas sinusoidales, y sprites con texturas de resplandor aditivo generadas dinámicamente mediante `canvas` 2D.
- Reacciona suavemente al movimiento del ratón de forma inercial para dar sensación de tridimensionalidad inmersiva.
- Está optimizado con límites en el `pixelRatio` y desactivación de sombras pesadas para garantizar un rendimiento óptimo.

---

## 6. Convenciones de Código y Buenas Prácticas para IAs

Al modificar o expandir este código, sigue las siguientes pautas:

1. **Mantener la consistencia con Tailwind v4:**
   - No intentes crear ni editar un `tailwind.config.js`. Si necesitas agregar un color, fuente o animación, hazlo dentro de `@theme` en `src/app/globals.css`.
   - Utiliza las clases definidas en `@theme` (por ejemplo: `bg-navy-deep`, `bg-navy-card`, `text-huus-purple`, etc.) en lugar de harcodear colores arbitrarios.

2. **Rutas e Internalización:**
   - Todas las páginas de soluciones se encuentran dentro de `/src/app/soluciones/[slug]/page.tsx`. Siguen una estructura uniforme: Hero oscuro y tecnológico con formulario de contacto contextual, sección de beneficios con iconos de Lucide, acordeón de preguntas frecuentes (FAQs), y testimonios o logos de partners.

3. **Uso de Client Components ("use client"):**
   - Agrega la directiva `"use client";` al inicio de los archivos únicamente cuando se utilicen Hooks de React (`useState`, `useEffect`, `useRef`), Framer Motion o interacciones que requieran ejecución en el navegador.

4. **Micro-interacciones y UI Premium:**
   - Las tarjetas deben implementar el efecto de glow en hover mediante la propiedad CSS customizada `--glow-color` y transiciones suaves (`transition-all duration-300`).
   - El degradado principal del Hero debe mantenerse con el fondo espacial oscuro (`from-[#00041a] via-[#060a3a] to-[#01041f]`), garantizando contraste para textos blancos y elementos cian/púrpura brillantes.

5. **Iconografía de Lucide React:**
   - Importa siempre iconos descriptivos desde `lucide-react` para complementar los textos e interfaces.

6. **Comandos de Terminal:**
   - **Desarrollo local:** `npm run dev`
   - **Compilación de producción:** `npm run build`
   - **Ejecución del linter:** `npm run lint`

---


