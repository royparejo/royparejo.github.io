export interface SocialLink {
  name: string;
  url: string;
  icon: 'Linkedin' | 'Github' | 'Gmail' | 'Stackoverflow' | 'Discord' | 'Playstore' | 'Appstore' | 'Link' | string;
  displayText?: string;
}

export interface HeroData {
  metaTitle: string;
  metaDescription: string;
  name: string;
  role: string;
  avatarUrl: string;
  avatarAlt: string;
  bioHtml: string;
  socialLinks: SocialLink[];
}

export interface TagInfo {
  name: string;
  class: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  playstore?: string;
  appstore?: string;
}

export interface TechnologyItem {
  title: string;
  icon: string;
}

export interface TechnologyCategory {
  title: string;
  technologies: TechnologyItem[];
}

export interface CertificateItem {
  title: string;
  institution: string;
  description: string;
  certificateUrl: string;
  logoUrl: string;
  logoAlt: string;
  imagePosition?: 'left' | 'right';
}

export interface AboutMeData {
  avatarUrl: string;
  avatarAlt: string;
  paragraphsHtml: string[];
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FooterData {
  name: string;
  githubUrl: string;
}
