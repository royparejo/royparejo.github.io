import type { HeroData } from './types/configDataTypes';

export const heroData: HeroData = {
  metaTitle: "Portfolio - Programador Full-Stack",
  metaDescription: "Mi objetivo es aprender y mejorar constantemente, participando en proyectos innovadores que me permitan ampliar mis conocimientos y aportar soluciones creativas y efectivas.",
  name: "Roy",
  role: "Flutter Developer.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEKxEznXA719A/profile-displayphoto-crop_800_800/B4DZ9mfBTKHgAI-/0/1784130837003?e=1790208000&v=beta&t=W9LNJ1uV91CzVq4rv7_8cPz_Tly97KEygLN4r2ejxJ0",
  avatarAlt: "Roy Parejo",
  bioHtml: `En los últimos años me enfocado en el desarrollo móvil, pasando por android con java y kotlin y posteriormente el SDK Flutter con Dart para agilizar el desarollo multiplataforma. En el desarrollo con Flutter utilizo <strong>arquitectura limpia</strong> y manejadores de estado como <strong>Provider</strong>, <strong>BLoC</strong> y <strong>Riverpod</strong>. Tengo experiencia con aplicaciones de geolocalización, mapas, tiempo real, offline, webview y siempre trato de usar buenas practicas como princiopios <strong>SOLID</strong>.`,
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rparejo/",
      icon: "Linkedin",
      displayText: "LinkedIn"
    },
    {
      name: "GitHub",
      url: "https://github.com/royparejo",
      icon: "Github",
      displayText: "GitHub"
    },
    {
      name: "Gmail",
      url: "mailto:freddzg@gmail.com",
      icon: "Gmail",
      displayText: "freddzg@gmail.com"
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/4050770/roy-parejo",
      icon: "Stackoverflow",
      displayText: "Stack overflow"
    }
  ]
};
