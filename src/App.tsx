import { ArrowUpRight, Newspaper } from "lucide-react";
import type { ReactNode } from "react";

import { SocialIcon } from "@/components/social-icon";
import { BLOG, MAIN_SITE, PORTFOLIO, projects, socials } from "@/data/site";
import { cn } from "@/lib/utils";

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function LinkCard({
  href,
  event,
  icon,
  label,
  hint,
  primary = false,
}: {
  href: string;
  event: string;
  icon: ReactNode;
  label: string;
  hint: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      data-umami-event={event}
      className={cn(
        "group flex h-14 items-center gap-3.5 rounded-xl border px-4 transition-colors",
        primary
          ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-card hover:border-foreground/15 hover:bg-accent",
        focusRing,
      )}
    >
      <span
        className={cn(
          "grid size-5 shrink-0 place-items-center",
          !primary && "text-foreground/80",
        )}
      >
        {icon}
      </span>
      <span className="flex-1 truncate text-[15px] font-medium">{label}</span>
      <span
        className={cn(
          "hidden text-sm min-[360px]:inline",
          primary ? "text-primary-foreground/60" : "text-muted-foreground",
        )}
      >
        {hint}
      </span>
      <ArrowUpRight
        className={cn(
          "size-4 shrink-0 transition-colors",
          primary
            ? "text-primary-foreground/60 group-hover:text-primary-foreground"
            : "text-muted-foreground/70 group-hover:text-foreground",
        )}
      />
    </a>
  );
}

function App() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pt-16 pb-8 sm:pt-24">
      <header className="flex flex-col items-center text-center">
        <img
          src="/logo/logo_solvro_color.png"
          alt="Logo Koła Naukowego Solvro"
          width={72}
          height={56}
          className="h-14 w-auto"
        />
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">
          KN Solvro
        </h1>
        <p className="mt-1.5 max-w-xs text-sm text-pretty text-muted-foreground">
          Koło naukowe Politechniki Wrocławskiej. Tworzymy aplikacje, które
          ułatwiają studiowanie.
        </p>
      </header>

      <nav aria-label="Linki" className="mt-10">
        <ul className="flex flex-col gap-2.5">
          <li>
            <LinkCard
              primary
              href={MAIN_SITE}
              event="main-site-hero"
              label="Poznaj KN Solvro"
              hint="solvro.pwr.edu.pl"
              icon={
                <img
                  src="/logo/logo_solvro_mono.svg"
                  alt=""
                  width={20}
                  height={16}
                  className="h-4 w-auto"
                />
              }
            />
          </li>
          <li>
            <LinkCard
              href={BLOG}
              event="blog"
              label="Blog"
              hint="Nowości z koła"
              icon={<Newspaper className="size-[18px]" strokeWidth={1.75} />}
            />
          </li>
          {socials.map((social) => (
            <li key={social.name}>
              <LinkCard
                href={social.url}
                event={`social-${social.name.toLowerCase()}`}
                label={social.name}
                hint={social.handle}
                icon={<SocialIcon name={social.name} className="size-[18px]" />}
              />
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="projects" className="mt-12">
        <h2
          id="projects"
          className="text-center text-xs font-medium text-muted-foreground"
        >
          Nasze aplikacje
        </h2>
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <a
                href={project.url}
                title={project.tagline}
                data-umami-event={`project-${project.slug}`}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border border-border/70 bg-card px-2 pt-3.5 pb-3 transition-colors hover:border-foreground/15",
                  focusRing,
                )}
              >
                <img
                  src={project.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
                <span className="text-[13px] font-medium">{project.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center">
          <a
            href={PORTFOLIO}
            data-umami-event="portfolio"
            className={cn(
              "group inline-flex items-center gap-1 rounded-sm text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
              focusRing,
            )}
          >
            i wiele więcej w naszym portfolio
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </a>
        </p>
      </section>

      <footer className="mt-auto pt-10 text-center text-xs text-muted-foreground/80">
        <a
          href="https://github.com/Solvro"
          data-umami-event="github-org"
          className={cn(
            "rounded-sm transition-colors hover:text-foreground",
            focusRing,
          )}
        >
          Open source na GitHubie
        </a>
        <span aria-hidden="true" className="mx-2">
          ·
        </span>
        © {new Date().getFullYear()} KN Solvro
      </footer>
    </main>
  );
}

export default App;
