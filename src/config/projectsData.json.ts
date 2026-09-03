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
};

export const projectsData: ProjectItem[] = [
  {
    title: "Simplifica Repartos",
    description: "Es una herramienta diseñada para gestionar y coordinar la entrega de productos o mercancías de manera eficiente. Con esta aplicación, los encargados de los despachos pueden planificar rutas, asignar entregas, registrar el estado de cada envío y hacer seguimiento en tiempo real",
    link: "",
    image: "/projects/app-repartos.webp",
    tags: ["Dart", "Flutter", "Sqlite"],
    playstore: "https://play.google.com/store/apps/details?id=com.simplifica.solicitudes",
    appstore: ""
  },
  {
    title: "Plaza 4",
    description: "Herramienta para el manejo de puntos de los clientes, la aplicación proporciona una tarjeta virtual y el historial de movimientos de los puntos del usuario.",
    link: "",
    github: "",
    image: "/projects/app-puntos.webp",
    tags: ["Dart", "Flutter"],
    playstore: "https://play.google.com/store/apps/details?id=com.simplifica.puntos",
    appstore: "https://apps.apple.com/us/app/plaza-4/id6740218700",
  },
  {
    title: "Registro PDV",
    description: "Herramiento para el registro de asistencia usando del personal de campo, la aplicación utiliza la cámara y ubicación GPS para un mejor control.",
    link: "",
    github: "",
    image: "/projects/app-ubicacion.webp",
    tags: ["Dart", "Flutter"],
    playstore: "https://play.google.com/store/apps/details?id=com.createksystem.assist_app",
    appstore: "https://appstoreconnect.apple.com/apps/6444106260/distribution/ios/version/deliverable",
  },
  {
    title: "Himnario Adventista SMI",
    description: "Catalogo de himnos, pentagramas y audios con reproductor. La app permite al usuario descargar los recursos y usarlos sin conexión.",
    link: "",
    github: "",
    image: "/projects/app-himnario.webp",
    tags: ["Dart", "Flutter", "Sqlite"],
    playstore: "https://play.google.com/store/apps/details?id=com.createksystem.himnarioamr",
    appstore: "https://apps.apple.com/us/app/himnario-adventista-smi-up/id1551068161",
  },
  {
    title: "GZampu zampoña",
    description: "Zampoña es un instrumento musical propio de América latina, contiene sonidos dulces y profundos que relajan la mente.",
    link: "",
    github: "",
    image: "/projects/app-gzampu.webp",
    tags: ["Android", "Java", "Sqlite"],
    playstore: "https://play.google.com/store/apps/details?id=com.rparejo.zamponia",
    appstore: "",
  },
];
