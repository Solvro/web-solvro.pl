export const MAIN_SITE = "https://solvro.pwr.edu.pl";
export const BLOG = `${MAIN_SITE}/blog`;
export const PORTFOLIO = `${MAIN_SITE}/portfolio`;

export interface ProjectLink {
  name: string;
  slug: string;
  url: string;
  icon: string;
  tagline: string;
}

export const projects: ProjectLink[] = [
  {
    name: "Planer",
    slug: "planer",
    url: "https://planer.solvro.pl",
    icon: "/apps/planer.png",
    tagline: "Ułóż plan zajęć bez kolizji",
  },
  {
    name: "Testownik",
    slug: "testownik",
    url: "https://testownik.solvro.pl",
    icon: "/apps/testownik.svg",
    tagline: "Ucz się do kolokwiów i sesji",
  },
  {
    name: "Eventownik",
    slug: "eventownik",
    url: "https://eventownik.solvro.pl",
    icon: "/apps/eventownik.svg",
    tagline: "Zapisy i obsługa wydarzeń",
  },
];

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Solvro",
    handle: "@Solvro",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/knsolvro/",
    handle: "@knsolvro",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/knsolvro",
    handle: "@knsolvro",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/knsolvro/",
    handle: "@knsolvro",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@knsolvro",
    handle: "@knsolvro",
  },
];
