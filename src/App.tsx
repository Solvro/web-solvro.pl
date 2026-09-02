import { ArrowUpRight, ExternalLink } from "lucide-react";

import { SocialIcon } from "@/components/social-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MAIN_SITE, projects, socials } from "@/data/site";

const facts = [
  {
    label: "Wydział",
    value: "Informatyki i Telekomunikacji",
  },
  {
    label: "Uczelnia",
    value: "Politechnika Wrocławska",
  },
  {
    label: "Kod",
    value: "Otwarty na GitHubie",
  },
];

function App() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-14 px-5 py-10 sm:px-6 sm:py-16">
      <header className="flex flex-col items-center text-center">
        <img
          src="/logo/logo_solvro_mono.svg"
          alt="Logo Koła Naukowego Solvro"
          width={102}
          height={80}
          className="h-20 w-auto drop-shadow-[0_0_40px_oklch(0.78_0.13_262/55%)]"
        />
        <Badge variant="secondary" className="mt-6 rounded-full">
          Koło naukowe Politechniki Wrocławskiej
        </Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Solvro
        </h1>
        <p className="mt-4 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
          Budujemy oprogramowanie, które realnie ułatwia studiowanie na PWr - od
          układania planu zajęć, przez naukę do sesji, po organizację wydarzeń.
        </p>
      </header>

      <section aria-labelledby="main-site">
        <h2 id="main-site" className="sr-only">
          Strona główna koła
        </h2>
        <a
          href={MAIN_SITE}
          data-umami-event="main-site-hero"
          className="group block rounded-2xl border border-primary/40 bg-linear-to-br from-primary/20 to-transparent p-6 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-widest text-primary uppercase">
                Strona główna
              </p>
              <p className="mt-2 text-xl font-semibold sm:text-2xl">
                solvro.pwr.edu.pl
              </p>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                Poznaj koło, nasze sekcje i rekrutację. Tam znajdziesz pełne
                informacje o Solvro.
              </p>
            </div>
            <ArrowUpRight className="size-6 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      </section>

      <section aria-labelledby="projects" className="flex flex-col gap-5">
        <div>
          <h2 id="projects" className="text-xl font-semibold tracking-tight">
            Nasze projekty
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Narzędzia, z których na co dzień korzystają studenci Politechniki
            Wrocławskiej.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.name}>
              <Card className="border-border/60 bg-card/60 py-0 backdrop-blur transition-colors hover:border-primary/50">
                <CardContent className="p-5 sm:p-6">
                  <a
                    href={project.url}
                    data-umami-event={`project-${project.name.toLowerCase()}`}
                    className="group block rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {project.name}
                        </h3>
                        <p className="mt-0.5 font-mono text-xs text-primary/80">
                          {project.host}
                        </p>
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <p className="mt-3 text-sm text-pretty text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </a>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>

        <Button asChild variant="outline" className="w-full">
          <a href="https://github.com/Solvro" data-umami-event="github-org">
            Zobacz wszystkie projekty na GitHubie
            <ExternalLink />
          </a>
        </Button>
      </section>

      <section aria-labelledby="about" className="flex flex-col gap-5">
        <h2 id="about" className="text-xl font-semibold tracking-tight">
          Kim jesteśmy
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          Solvro to koło naukowe działające przy Wydziale Informatyki i
          Telekomunikacji Politechniki Wrocławskiej. Pracujemy w zespołach
          projektowych - frontend, backend, mobile, design i&nbsp;zarządzanie
          projektem - dowożąc aplikacje, które trafiają do realnych
          użytkowników, a nie do szuflady. Nasz kod powstaje otwarcie
          i&nbsp;jest dostępny na GitHubie.
        </p>
        <dl className="grid gap-4 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-border/60 bg-card/40 p-4"
            >
              <dt className="text-xs tracking-widest text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-pretty">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="socials" className="flex flex-col gap-5">
        <h2 id="socials" className="text-xl font-semibold tracking-tight">
          Znajdź nas w sieci
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                data-umami-event={`social-${social.name.toLowerCase()}`}
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <SocialIcon
                  name={social.name}
                  className="size-5 shrink-0 text-primary"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium">{social.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {social.handle}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto flex flex-col gap-4">
        <Separator />
        <p className="text-xs text-pretty text-muted-foreground">
          Koło Naukowe Solvro · Wydział Informatyki i Telekomunikacji ·
          Politechnika Wrocławska
        </p>
        <p className="text-xs text-pretty text-muted-foreground">
          solvro.pl to nasza wizytówka i&nbsp;domena projektów. Pełne informacje
          o&nbsp;kole znajdziesz na{" "}
          <a
            href={MAIN_SITE}
            data-umami-event="main-site-footer"
            className="text-primary hover:underline"
          >
            solvro.pwr.edu.pl
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
