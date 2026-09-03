# AGENT.md - Roy Parejo Portfolio

Guía y contexto para agentes de Inteligencia Artificial y desarrolladores que trabajen en este repositorio.

---

## 📌 Visión General del Proyecto

- **Propósito:** Portafolio personal web de **Roy Parejo**, enfocado en su perfil como **Flutter Developer / Mobile & Full-Stack Developer**.
- **Tipo de Aplicación:** Sitio web estático (SSG - Static Site Generation) de una sola página (Landing Page) con navegación suave por secciones.
- **Framework Principal:** [Astro v4](https://astro.build/) (v4.12+)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/) + CSS Vanilla en bloques `<style is:global>`
- **Tipografía:** `Source Code Pro Variable` vía `@fontsource-variable/source-code-pro`
- **Despliegue:** GitHub Pages automatizado mediante GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🛠️ Stack Tecnológico

| Herramienta / Paquete | Versión | Propósito |
| :--- | :--- | :--- |
| **astro** | `^4.12.2` | Framework web estático y generador de páginas |
| **@astrojs/tailwind** | `^5.1.0` | Integración oficial de Tailwind CSS para Astro |
| **tailwindcss** | `^3.4.7` | Framework CSS utilitario para estilos |
| **@astrojs/check** | `^0.8.2` | Herramienta de diagnóstico y comprobación de tipos para Astro |
| **typescript** | `^5.5.3` | Tipado estático (configuración estricta con `astro/tsconfigs/strict`) |
| **@fontsource-variable/source-code-pro** | `^5.0.19` | Fuente monospace principal |

---

## 📂 Estructura del Proyecto

```text
royparejo.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline de despliegue a GitHub Pages en push a main
├── public/                       # Archivos estáticos (favicon, imágenes de proyectos, etc.)
│   └── projects/                 # Capturas/banners de las aplicaciones (.webp)
├── src/
│   ├── components/               # Componentes UI modulares organizados por alcance
│   │   ├── Global/               # Componentes reutilizables y globales
│   │   │   ├── Badge.astro       # Badge genérico (ej. "Open To Work")
│   │   │   ├── Footer.astro      # Pie de página y copyright
│   │   │   ├── Header.astro      # Barra de navegación fija y toggle de tema
│   │   │   ├── Section.astro     # Contenedor estándar para secciones
│   │   │   ├── SocialIcons.astro # Botón/enlace reutilizable de redes y enlaces externos
│   │   │   ├── TechnologyIcons.astro # Pill/badge de tecnología
│   │   │   └── ThemeToggle.astro # Botón conmutador de tema claro/oscuro
│   │   ├── Home/                 # Secciones y componentes específicos de la página de inicio
│   │   │   ├── AboutMe.astro     # Reseña personal y trayectoria
│   │   │   ├── AboutMeSection.astro # Contenedor de sección Sobre mí
│   │   │   ├── Certificates.astro # Sección y lista de certificados/cursos
│   │   │   ├── CertificatesSection.astro # Contenedor de sección de certificados
│   │   │   ├── Projects.astro    # Listado de últimos proyectos con límite configurable
│   │   │   ├── Technologies.astro # Grid categorizado de habilidades técnicas
│   │   │   └── TechnologiesSection.astro # Contenedor de sección de tecnologías
│   │   ├── NotFound/             # Componentes para rutas no encontradas (404)
│   │   │   └── NotFound.astro    # Vista e ilustración de página 404
│   │   └── Project/              # Componentes de proyectos y detalle
│   │       ├── ProjectArticle.astro # Artículo detallado del proyecto con 4 secciones
│   │       ├── ProjectCard.astro # Tarjeta de proyecto clickeable y reusable
│   │       └── ProjectsList.astro # Listado completo de proyectos
│   ├── config/                   # Configuración y datos dinámicos desacoplados
│   │   ├── types/
│   │   │   └── configDataTypes.ts # Interfaces TypeScript para todas las entidades
│   │   ├── aboutMeData.json.ts   # Párrafos y avatar de la sección Sobre mí
│   │   ├── certificatesData.json.ts # Listado de certificados
│   │   ├── footerData.json.ts    # Datos del pie de página
│   │   ├── heroData.json.ts      # Datos del hero, perfil y redes sociales
│   │   ├── navData.json.ts       # Enlaces de la barra de navegación
│   │   ├── projectsData.json.ts  # Proyectos, tags, shortDescription y descriptionHtml
│   │   └── technologiesData.json.ts # Categorías y habilidades técnicas
│   ├── icons/                    # Componentes Astro de iconos SVG (en inglés sin abreviaturas)
│   ├── layouts/
│   │   └── Layout.astro          # Layout base (HTML, Head, SEO metadata, tema dinámico)
│   ├── pages/
│   │   ├── 404.astro             # Página de error 404
│   │   ├── index.astro           # Página de inicio principal (con últimos proyectos)
│   │   └── projects/
│   │       ├── [slug].astro      # Página dinámica por slug de proyecto
│   │       └── index.astro       # Listado general de proyectos
│   └── env.d.ts                  # Declaraciones de tipos globales de Astro
├── astro.config.mjs              # Configuración de Astro con integración Tailwind
├── package.json                  # Scripts y dependencias del proyecto
├── tailwind.config.mjs           # Configuración de Tailwind CSS con darkMode: 'class'
└── tsconfig.json                 # Configuración de TypeScript (`astro/tsconfigs/strict`)
```

---

## 🚀 Comandos y Scripts

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias del proyecto |
| `npm run dev` / `npm start` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `npm run build` | Compila el sitio estático para producción en la carpeta `./dist` |
| `npm run preview` | Previsualiza localmente el build de producción generado |
| `npx astro check` | Ejecuta la verificación de tipos y diagnóstico de componentes Astro |

---

## 📐 Convenciones de Código y Arquitectura

### 1. Componentes Astro (`.astro`)
- Nombrados completamente en **inglés** en formato PascalCase sin abreviaturas (ej. `TechnologiesSection.astro`, `AboutMeSection.astro`, `SocialIcons.astro`, `ThemeToggle.astro`).
- Utilizar el frontmatter (`---`) al inicio del archivo para imports, props typing con TypeScript (`interface Props`) y consumo de datos dinámicos.
- Mantener los componentes funcionales, presentacionales y reutilizables.
- Para pasar contenido dinámico a un contenedor, usar `<slot />`.

### 2. Capa de Datos Desacoplada (`src/config/`)
- Todos los datos estáticos residen en archivos `src/config/<entidad>Data.json.ts`.
- Las interfaces y tipos estrictos de TypeScript residen en `src/config/types/configDataTypes.ts`.
- Los componentes `.astro` importan y renderizan estos datos dinámicamente en lugar de tener información hardcodeada en el template.

### 3. Estilos y Sistema de Temas (Claro / Oscuro)
- Soporte dinámico para **Dark Mode** y **Light Mode** configurado vía `darkMode: 'class'` en Tailwind.
- Script inline preventivo en `<head>` para evitar parpadeos (FOUC), persistiendo preferencias en `localStorage` y detectando `prefers-color-scheme`.
- Navbar superior con efecto `backdrop-blur-md`, fondo translúcido y bordes sutiles adaptados a ambos modos.
- Priorizar clases utilitarias de **Tailwind CSS**.
- Asegurar diseño responsivo (`sm:`, `md:`, `lg:`) en todas las vistas y componentes.
- Mantener la coherencia tipográfica utilizando la fuente monospace `Source Code Pro Variable`.

### 4. Iconos
- Todos los iconos se manejan como componentes `.astro` ubicados en `src/icons/` organizados por carpetas en inglés (`Social/`, `Technologies/`, `Theme/`, `Titles/`).
- Se mapean mediante diccionarios en los componentes para renderizado dinámico según la clave definida en las entidades de datos.

### 5. Gestión de Proyectos y Tecnologías
- **Proyectos:** Definidos en `src/config/projectsData.json.ts` con sus respectivos tags y enlaces.
- **Habilidades:** Definidas en `src/config/technologiesData.json.ts` agrupadas por categoría.

---

## 🤖 Pautas para Agentes de IA

1. **Integridad de Código:** Conservar comentarios relevantes, configuración de despliegue y estructura modular.
2. **Nomenclatura:** Mantener todos los nuevos nombres de archivos exclusivamente en inglés y sin abreviaciones.
3. **Validación:** Antes de dar por finalizado un cambio sustancial, asegurarse de que la build compile correctamente (`npm run build` o `npx astro check`).
4. **Rutas e Imports:** Utilizar rutas relativas consistentes (`../components/`, `../icons/`, etc.) y mantener la convención de nombres en inglés.
5. **Optimización de Assets:** Guardar imágenes públicas en `public/projects/` en formatos ligeros modernos (preferiblemente `.webp` o `.avif`).
