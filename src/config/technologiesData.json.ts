import type { TechnologyCategory } from './types/configDataTypes';

export const technologiesData: TechnologyCategory[] = [
  {
    title: "Lenguajes",
    technologies: [
      { title: "JavaScript", icon: "Js" },
      { title: "PHP", icon: "Php" },
      { title: "C#", icon: "Csharp" },
      { title: "Dart", icon: "Dart" },
      { title: "Kotlin", icon: "Kotlin" }
    ]
  },
  {
    title: "Frameworks y Librerías",
    technologies: [
      { title: "Android", icon: "Android" },
      { title: "Flutter", icon: "Flutter" },
      { title: "React", icon: "React" },
      { title: "Firebase", icon: "Firebase" }
    ]
  },
  {
    title: "Bases de Datos",
    technologies: [
      { title: "Sql Server", icon: "Sql" },
      { title: "MySQL", icon: "Mysql" },
      { title: "Sqlite", icon: "Sqlite" }
    ]
  },
  {
    title: "Herramientas Adicionales",
    technologies: [
      { title: "Figma", icon: "Figma" },
      { title: "Git", icon: "Git" },
      { title: "Notion", icon: "Notion" }
    ]
  }
];
