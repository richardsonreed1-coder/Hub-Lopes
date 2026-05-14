import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="border-b border-ink/10">
      <div className="container-wide flex flex-col gap-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-ink/60">
          Traffic hub
        </p>
        <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
          {siteConfig.tagline}
        </h1>
        <p className="max-w-prose text-lg text-ink/70">
          {siteConfig.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={siteConfig.ctaPrimary.href}
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            {siteConfig.ctaPrimary.label}
          </a>
          <a
            href={siteConfig.ctaSecondary.href}
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/60"
          >
            {siteConfig.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
