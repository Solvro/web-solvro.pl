export const MAIN_SITE = "https://solvro.pwr.edu.pl";

export interface ProjectLink {
  name: string;
  url: string;
  host: string;
  description: string;
  tags: string[];
}

export const projects: ProjectLink[] = [
  {
    name: "Planer",
    url: "https://planer.solvro.pl",
    host: "planer.solvro.pl",
    description:
      "Ułóż swój plan zajęć na nadchodzący semestr. Sprawdź godziny i prowadzących, wyłap kolizje między grupami i wejdź w zapisy z gotowym planem.",
    tags: ["Plan zajęć", "PWr"],
  },
  {
    name: "Testownik",
    url: "https://testownik.solvro.pl",
    host: "testownik.solvro.pl",
    description:
      "Powtarzaj materiał przed kolokwium i sesją. Bazy pytań współdzielone przez studentów, tryb nauki i powtórek na każdym urządzeniu.",
    tags: ["Nauka", "Sesja"],
  },
  {
    name: "Eventownik",
    url: "https://eventownik.solvro.pl",
    host: "eventownik.solvro.pl",
    description:
      "Obsługa wydarzeń od zapisów po wejściówki. Rejestracja uczestników, listy, komunikacja mailowa i odprawa na miejscu.",
    tags: ["Wydarzenia", "Zapisy"],
  },
  {
    name: "PromoCHATor",
    url: "https://promochator.solvro.pl",
    host: "promochator.solvro.pl",
    description:
      "Znajdź promotora pracy dyplomowej. Opisz temat, a system dobierze prowadzących z PWr, których dorobek naukowy najlepiej do niego pasuje.",
    tags: ["Praca dyplomowa", "AI"],
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
];
