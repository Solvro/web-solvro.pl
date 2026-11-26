import { useEffect } from "react";

export function ProjectRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <p className="text-sm text-muted-foreground">
        Przekierowywanie do{" "}
        <a
          href={url}
          className="text-primary underline-offset-4 hover:underline"
        >
          {url}
        </a>
      </p>
    </main>
  );
}
