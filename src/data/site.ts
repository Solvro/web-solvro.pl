export const MAIN_SITE = "https://solvro.pwr.edu.pl";
export const BLOG = `${MAIN_SITE}/blog`;
export const PORTFOLIO = `${MAIN_SITE}/portfolio`;

export interface ProjectLink {
  name: string;
  slug: string;
  url: string;
  host: string;
  icon: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const projects: ProjectLink[] = [
  {
    name: "Planer",
    slug: "planer",
    url: "https://planer.solvro.pl",
    host: "planer.solvro.pl",
    icon: "/apps/planer.png",
    tagline: "Ułóż plan zajęć bez kolizji",
    description:
      "Ułóż swój plan zajęć na nadchodzący semestr. Sprawdź godziny i prowadzących, wyłap kolizje między grupami i wejdź w zapisy z gotowym planem.",
    tags: ["Plan zajęć", "PWr"],
  },
  {
    name: "Testownik",
    slug: "testownik",
    url: "https://testownik.solvro.pl",
    host: "testownik.solvro.pl",
    icon: "/apps/testownik.svg",
    tagline: "Ucz się do kolokwiów i sesji",
    description:
      "Powtarzaj materiał przed kolokwium i sesją. Bazy pytań współdzielone przez studentów, tryb nauki i powtórek na każdym urządzeniu.",
    tags: ["Nauka", "Sesja"],
  },
  {
    name: "Eventownik",
    slug: "eventownik",
    url: "https://eventownik.solvro.pl",
    host: "eventownik.solvro.pl",
    icon: "/apps/eventownik.svg",
    tagline: "Zapisy i obsługa wydarzeń",
    description:
      "Obsługa wydarzeń od zapisów po wejściówki. Rejestracja uczestników, listy, komunikacja mailowa i odprawa na miejscu.",
    tags: ["Wydarzenia", "Zapisy"],
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
