import { useEffect } from "react";

export function ProjectRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="text-sm text-muted-foreground">
        Przekierowywanie do{" "}
        <a href={url} className="text-primary hover:underline">
          {url}
        </a>
        ...
      </p>
    </div>
  );
}
