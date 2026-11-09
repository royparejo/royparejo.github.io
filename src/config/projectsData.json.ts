import type { ProjectItem, TagInfo } from './types/configDataTypes';

export const projectTags: Record<string, TagInfo> = {
  Html: {
    name: "Html",
    class: "bg-[#963419] text-white",
    icon: "Html",
  },
  Css: {
    name: "Css",
    class: "bg-[#07436b] text-white",
    icon: "Css",
  },
  Js: {
    name: "Js",
    class: "bg-[#a39535] text-white",
    icon: "Js",
  },
  React: {
    name: "React",
    class: "bg-[#1c7777] text-white",
    icon: "React",
  },
  Flutter: {
    name: "Flutter",
    class: "bg-[#fff] text-black",
    icon: "Flutter",
  },
  Dart: {
    name: "Dart",
    class: "bg-[#07436b] text-white",
    icon: "Dart",
  },
  Firebase: {
    name: "Firebase",
    class: "bg-[#963419] text-white",
    icon: "Firebase",
  },
  Sqlite: {
    name: "Sqlite",
    class: "bg-[#000] text-white",
    icon: "Sqlite",
  },
  Android: {
    name: "Android",
    class: "bg-[#0e5e24] text-white",
    icon: "Android",
  },
  Java: {
    name: "Java",
    class: "bg-[#000] text-white",
    icon: "Java",
  },
  Typescript: {
    name: "TypeScript",
    class: "bg-[#1e5082] text-white",
    icon: "Typescript",
  },
  Node: {
    name: "Node.js",
    class: "bg-[#1f5c24] text-white",
    icon: "Node",
  },
  Tailwind: {
    name: "Tailwind CSS",
    class: "bg-[#0b5c75] text-white",
    icon: "Tailwind",
  },
  Postgresql: {
    name: "PostgreSQL",
    class: "bg-[#234764] text-white",
    icon: "Postgresql",
  },
  Astro: {
    name: "Astro",
    class: "bg-[#231942] text-white",
    icon: "Ast",
  },
};

export const projectsData: ProjectItem[] = [
  {
    slug: "linquendo-web",
    title: "Linquendo — Web & E-commerce",
    shortDescription: "Plataforma web y e-commerce de tarjetas y displays NFC/QR con variaciones de productos, carrito de compras interactivo y generador gratuito de enlaces y códigos QR para reseñas de Google.",
    descriptionHtml: `
      <p><strong>Linquendo</strong> (<a href="https://linquendo.com" target="_blank" rel="noopener noreferrer">linquendo.com</a>) es una plataforma web y tienda online enfocada en potenciar la presencia digital de emprendimientos y negocios mediante soluciones de proximidad (tecnología <strong>NFC</strong> y códigos <strong>QR</strong>) y servicios digitales.</p>
      <p>Su objetivo principal es ayudar a los comercios a multiplicar sus reseñas de 5 estrellas en <strong>Google</strong> y <strong>Tripadvisor</strong> sin fricciones: el cliente solo acerca su celular o escanea el código QR para abrir directamente el formulario de calificación.</p>
      <h3>E-commerce con Variaciones y Carrito de Compras</h3>
      <ul>
        <li><strong>Catálogo de Productos NFC + QR:</strong> Venta de tarjetas PVC con NFC y QR, displays de acrílico para mostrador, expositores de sobremesa, placas adhesivas NFC y tarjetas para menús digitales.</li>
        <li><strong>Variaciones de Producto:</strong> Selección dinámica de modelos, diseños y plataformas (Google, Tripadvisor, versión Blanca/Negra, solo NFC o NFC + QR) con actualización de imágenes y precios en tiempo real.</li>
        <li><strong>Carrito de Compras Interactivo:</strong> Panel lateral deslizable (drawer) con control de cantidades, cálculo instantáneo de subtotales, persistencia local de sesión y flujo de pedido integrado con WhatsApp y métodos de pago locales.</li>
      </ul>
      <h3>Herramienta Libre — Generador de Enlaces y QR de Reseñas de Google</h3>
      <p>Incluye una utilidad web <strong>100% gratuita y sin registro</strong> disponible para cualquier negocio en <a href="https://linquendo.com/generador-enlace-resenas-google/" target="_blank" rel="noopener noreferrer">linquendo.com/generador-enlace-resenas-google</a>:</p>
      <ul>
        <li><strong>Conversión instantánea desde Google Maps:</strong> Permite pegar el enlace compartido de Google Maps de cualquier local o empresa y transformarlo automáticamente en un enlace directo a la ventana de calificación.</li>
        <li><strong>Descarga de Código QR en Alta Calidad:</strong> Genera al instante el código QR listo para compartir digitalmente o descargar en formatos <strong>PNG</strong> y vectorial <strong>SVG</strong> para diseño e impresión.</li>
      </ul>
      <h3>Servicios Digitales y Contenido</h3>
      <ul>
        <li><strong>Soluciones para Negocios:</strong> Secciones dedicadas a Menús Digitales (Carta QR), Tarjetas Digitales de Redes Sociales y Desarrollo de Páginas Web optimizadas para conversión y SEO local.</li>
        <li><strong>Blog Especializado:</strong> Artículos y guías prácticas sobre posicionamiento local, estrategias para obtener más reseñas y uso de tecnología NFC en comercios.</li>
      </ul>
    `,
    link: "https://linquendo.com",
    github: "",
    image: "/projects/linquendo-web/linquedo.home.webp",
    images: [
      "/projects/linquendo-web/linquedo.home.webp",
      "/projects/linquendo-web/linquendo.products.webp",
      "/projects/linquendo-web/linquendo.cart.webp",
      "/projects/linquendo-web/google-review-link-generator.webp",
    ],
    tags: ["Astro", "Typescript", "Tailwind", "Js"],
  },
  {
    slug: "linquendo-redirect-system",
    title: "Sistema de Redireccionamiento",
    shortDescription: "Plataforma full-stack para la gestión de enlaces cortos (NFC/QR) de alta velocidad, analíticas de visitas en tiempo real y panel administrativo.",
    descriptionHtml: `
      <p><strong>Linquendo</strong> es una solución integral de redireccionamiento inteligente (chips físicos NFC y códigos QR) y analíticas de visitas pensada para negocios como cafeterías, hoteles, restaurantes y agencias de turismo.</p>
      <p>El sistema está compuesto por un <strong>servicio de redireccionamiento de alta velocidad</strong> y un <strong>panel administrativo web</strong> que permite gestionar el ciclo de vida de los enlaces y analizar el comportamiento de los usuarios finales.</p>
      <h3>Backend — Motor de Redireccionamiento y API</h3>
      <ul>
        <li><strong>Respuesta ultrarrápida:</strong> Uso de caché en memoria para resolver las URLs de destino en milisegundos sin afectar la experiencia del usuario.</li>
        <li><strong>Analíticas en segundo plano:</strong> Registro asíncrono de cada visita o escaneo (NFC, QR y enlaces directos) sin bloquear la redirección.</li>
        <li><strong>Flujo de activación dinámica:</strong> Enrutamiento automático hacia el formulario de configuración cuando un código físico nuevo requiere ser registrado y activado.</li>
      </ul>
      <h3>Frontend — Linquendo Admin (Panel Administrativo)</h3>
      <ul>
        <li><strong>Gestión de Negocios y Enlaces:</strong> Administración centralizada de comercios, ubicación en mapa y sus canales digitales (sitio web, redes sociales, menús digitales y reseñas).</li>
        <li><strong>Control de Códigos Físicos (NFC/QR):</strong> Generación de códigos por lotes, asignación rápida de destinos, organización por etiquetas y control de estado activo/inactivo.</li>
        <li><strong>Dashboard y Reportes Visuales:</strong> Monitoreo de métricas clave con filtros dinámicos, tablas paginadas y gráficas interactivas de escaneos por plataforma y fecha.</li>
      </ul>
    `,
    link: "",
    github: "",
    image: "/projects/linquendo.admin.1.webp",
    images: [
      "/projects/linquendo.admin.1.webp",
      "/projects/linquendo.admin.2.webp",
    ],
    tags: ["Node", "Typescript", "React", "Tailwind", "Postgresql"],
  },
  {
    slug: "vaccine-card-app",
    title: "Vaccine Card App",
    shortDescription: "Aplicación móvil Flutter para la gestión y visualización de carnets de vacunación digitales, generación y lectura de códigos QR con datos cifrados.",
    descriptionHtml: `
      <p><strong>Vaccine Card App</strong> es una aplicación móvil de demostración desarrollada en Flutter diseñada para gestionar carnets de vacunación digitales de forma ágil y moderna.</p>
      <p>El proyecto nace como una propuesta abierta para explorar una experiencia simple e intuitiva de carnet digital: carnet por persona, certificados de vacunación y escaneo de códigos QR con información cifrada.</p>
      <h3>Características Principales</h3>
      <ul>
        <li><strong>Visualización de carnets:</strong> Organización y consulta de carnets de vacunación por persona.</li>
        <li><strong>Carrusel interactivo:</strong> Navegación fluida y dinámica entre las tarjetas registradas.</li>
        <li><strong>Registro de nuevos carnets:</strong> Formulario para incorporar nuevos registros y dosis.</li>
        <li><strong>Certificado de vacunación:</strong> Vista detallada del certificado oficial.</li>
        <li><strong>Scanner QR integrado:</strong> Lector y generador de códigos QR con información cifrada.</li>
      </ul>
      <h3>Evolución y Ramas del Repositorio</h3>
      <p>El repositorio incluye diferentes ramas para mostrar la evolución del proyecto y distintas formas de implementar la arquitectura y manejo de estado:</p>
      <ul>
        <li><strong>main:</strong> Implementación completa utilizando herramientas nativas del SDK de Flutter (<code>ChangeNotifier</code> + <code>AnimatedBuilder</code>) y navegación con <code>go_router</code>.</li>
        <li><strong>ui-only:</strong> Enfoque centrado exclusivamente en el diseño de la interfaz de usuario.</li>
        <li><strong>riverpod:</strong> Implementación completa utilizando Riverpod como gestor reactivo de estado.</li>
      </ul>
    `,
    link: "",
    github: "https://github.com/royparejo/VaccineCardApp",
    image: "/projects/app-vaccine-card.gif",
    tags: ["Dart", "Flutter"],
  },
  {
    slug: "simplifica-inventory",
    title: "Simplifica Inventario",
    shortDescription: "Solución móvil diseñada para optimizar la gestión de stock en tiempo real. Con una interfaz intuitiva y funciones avanzadas, permite a las empresas controlar cada detalle de sus productos de manera ágil y confiable.",
    descriptionHtml: `
      <p><strong>Simplifica Inventario</strong> es una solución móvil diseñada para optimizar la gestión de stock en tiempo real. Con una interfaz intuitiva y funciones avanzadas, permite a las empresas controlar cada detalle de sus productos de manera ágil y confiable.</p>
      <h3>Características Principales</h3>
      <ul>
        <li><strong>Toma de inventario instantánea:</strong> Mediante escaneo de códigos de barras o QR.</li>
        <li><strong>Transferencias internas:</strong> Entre ubicaciones dentro del mismo almacén, con trazabilidad automática.</li>
        <li><strong>Consulta detallada de productos:</strong> Incluyendo historial, proveedor y stock disponible.</li>
        <li><strong>Impresión de etiquetas y precios:</strong> Facilitando la actualización en góndolas.</li>
        <li><strong>Alertas inteligentes:</strong> Para reposición de stock y cambio de etiquetas.</li>
        <li><strong>Reporte de productos vencidos:</strong> Asegurando cumplimiento normativo y reducción de pérdidas.</li>
      </ul>
      <p>En resumen, esta aplicación convierte la gestión de inventarios en una experiencia moderna, eficiente y segura, ayudando a las empresas a mantener control total sobre sus operaciones y mejorar la productividad.</p>
    `,
    link: "",
    image: "/projects/app-inventory.webp",
    tags: ["Dart", "Flutter"],
    playstore: "https://play.google.com/store/apps/details?id=com.simplifica.inventario",
    appstore: "https://apps.apple.com/us/app/simplifica-inventario/id6776413611"
  },
  {
    slug: "simplifica-repartos",
    title: "Simplifica Repartos",
    shortDescription: "Es una herramienta diseñada para gestionar y coordinar la entrega de productos o mercancías de manera eficiente. Con esta aplicación, los encargados de los despachos pueden planificar rutas, asignar entregas, registrar el estado de cada envío y hacer seguimiento en tiempo real.",
    descriptionHtml: `
      <p><strong>Simplifica Repartos</strong> es una solución móvil integral diseñada para optimizar los procesos de logística de última milla y distribución de productos y mercancías.</p>
      <p>Diseñada pensando en la usabilidad y velocidad de operación en ruta, permite a los transportistas y coordinadores gestionar despachos con total trazabilidad.</p>
      <h3>Características Principales</h3>
      <ul>
        <li><strong>Planificación de rutas:</strong> Organización inteligente de paradas y prioridades de entrega.</li>
        <li><strong>Sincronización Offline:</strong> Almacenamiento local con <strong>SQLite</strong> que permite continuar registrando entregas sin cobertura de red.</li>
        <li><strong>Validación de entregas:</strong> Registro de firmas digitales, capturas fotográficas de evidencia y validación por GPS.</li>
        <li><strong>Reportes en tiempo real:</strong> Comunicación directa con el sistema central para el seguimiento de estados de despacho.</li>
      </ul>
    `,
    link: "",
    image: "/projects/app-repartos.webp",
    tags: ["Dart", "Flutter", "Sqlite"],
    playstore: "https://play.google.com/store/apps/details?id=com.simplifica.solicitudes",
    appstore: "https://apps.apple.com/us/app/simplifica-repartos/id6746261261"
  },
  {
    slug: "plaza-4",
    title: "Plaza 4",
    shortDescription: "Herramienta para el manejo de puntos de los clientes, la aplicación proporciona una tarjeta virtual y el historial de movimientos de los puntos del usuario.",
    descriptionHtml: `
      <p><strong>Plaza 4</strong> es una aplicación móvil de fidelización y lealtad de clientes, creada para brindar una experiencia de usuario rápida, moderna e interactiva.</p>
      <p>Permite a los usuarios consultar sus puntos acumulados en comercios asociados, eliminando la necesidad de tarjetas plásticas físicas.</p>
      <h3>Funcionalidades Destacadas</h3>
      <ul>
        <li><strong>Tarjeta virtual:</strong> Generación de código de barras dinámico para escaneo inmediato en caja.</li>
        <li><strong>Historial de transacciones:</strong> Visualización detallada de movimientos, abonos y canjes de puntos.</li>
        <li><strong>Catálogo de beneficios:</strong> Exploración de recompensas disponibles y promociones vigentes.</li>
        <li><strong>Multiplataforma:</strong> Experiencia idéntica y optimizada tanto en iOS (App Store) como en Android (Google Play).</li>
      </ul>
    `,
    link: "",
    github: "",
    image: "/projects/app-puntos.webp",
    tags: ["Dart", "Flutter"],
    playstore: "https://play.google.com/store/apps/details?id=com.simplifica.puntos",
    appstore: "https://apps.apple.com/us/app/plaza-4/id6740218700",
  },
  {
    slug: "registro-pdv",
    title: "Registro PDV",
    shortDescription: "Herramienta para el registro de asistencia del personal de campo, la aplicación utiliza la cámara y ubicación GPS para un mejor control.",
    descriptionHtml: `
      <p><strong>Registro PDV</strong> es una herramienta corporativa orientada al control de asistencia y verificación de presencia en puntos de venta para promotores, mercaderistas y personal de campo.</p>
      <p>Combina tecnologías de geolocalización y validación biométrica fotográfica para asegurar la presencia física en el lugar de trabajo asignado.</p>
      <h3>Capacidades y Tecnologías</h3>
      <ul>
        <li><strong>Validación por Geocercas:</strong> Verificación de coordenadas GPS contra el radio permitido del punto de venta.</li>
        <li><strong>Registro fotográfico:</strong> Uso de Cámara para captura fotos al ingresar y culminar la jornada.</li>
        <li><strong>Distribución de la app:</strong> App no listada, <i>solo los usuarios con acceso al enlace podrán encontrar y descargar la app en App Store.</i></li>
      </ul>
    `,
    link: "",
    github: "",
    image: "/projects/app-ubicacion.webp",
    tags: ["Dart", "Flutter"],
    playstore: "https://play.google.com/store/apps/details?id=com.createksystem.assist_app",
    appstore: "https://appstoreconnect.apple.com/apps/6444106260/distribution/ios/version/deliverable",
  },
  {
    slug: "himnario-adventista-smi",
    title: "Himnario Adventista SMI",
    shortDescription: "Catálogo de himnos, pentagramas y audios con reproductor. La app permite al usuario descargar los recursos y usarlos sin conexión.",
    descriptionHtml: `
      <p><strong>Himnario Adventista SMI</strong> es una aplicación completa de música y alabanzas diseñada para facilitar el canto congregacional e individual.</p>
      <p>Ofrece una experiencia rica en contenido multimedia, permitiendo reproducir pistas de audio, visualizar partituras musicales y cantar las letras de cada himno.</p>
      <h3>Características Principales</h3>
      <ul>
        <li><strong>Búsqueda rápida:</strong> Localización instantánea de himnos por número, título o fragmentos de letra.</li>
        <li><strong>Reproductor de audio integrado:</strong> Pistas de acompañamiento y coro con control de reproducción en segundo plano.</li>
        <li><strong>Visor de pentagramas:</strong> Partituras digitales en alta resolución con zoom y ajuste de pantalla.</li>
        <li><strong>Descargas Offline:</strong> Capacidad de descargar paquetes de audio y partituras para su uso sin conexión a internet.</li>
      </ul>
    `,
    link: "",
    github: "",
    image: "/projects/app-himnario.webp",
    tags: ["Dart", "Flutter", "Sqlite"],
    playstore: "https://play.google.com/store/apps/details?id=com.createksystem.himnarioamr",
    appstore: "https://apps.apple.com/us/app/himnario-adventista-smi-up/id1551068161",
  },
  {
    slug: "gzampu-zamponia",
    title: "GZampu zampoña",
    shortDescription: "Zampoña es un instrumento musical propio de América latina, contiene sonidos dulces y profundos que relajan la mente.",
    descriptionHtml: `
      <p><strong>GZampu Zampoña</strong> es una aplicación musical interactiva desarrollada para Android que simula la ejecución real de la zampoña, instrumento de viento emblemático del folklore andino.</p>
      <p>Diseñada con alta fidelidad sonora y una interfaz sensible al tacto para ofrecer una experiencia inmersiva tanto a músicos principiantes como avanzados.</p>
      <h3>Detalles Técnicos</h3>
      <ul>
        <li><strong>Audio de baja latencia:</strong> Muestras de sonido grabadas en estudio para cada nota musical.</li>
        <li><strong>Diseño ergonómico:</strong> Distribución de tubos y notas adaptada para pantallas táctiles de múltiples tamaños.</li>
        <li><strong>Persistencia local:</strong> Configuración de afinación y preferencias guardadas con <strong>SQLite</strong>.</li>
        <li><strong>Desarrollo nativo:</strong> Implementado en <strong>Java / Android SDK</strong> optimizado para máxima fluidez y bajo consumo de batería.</li>
      </ul>
    `,
    link: "",
    github: "",
    image: "/projects/app-gzampu.webp",
    tags: ["Android", "Java", "Sqlite"],
    playstore: "https://play.google.com/store/apps/details?id=com.rparejo.zamponia",
    appstore: "",
  },
];
