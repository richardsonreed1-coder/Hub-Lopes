import type { HubSection } from "@/lib/site-config";

export function SectionGrid({ section }: { section: HubSection }) {
  return (
    <section
      id={section.id}
      className="border-b border-ink/10 py-16 md:py-20"
    >
      <div className="container-wide">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              {section.title}
            </h2>
            <p className="mt-2 max-w-prose text-ink/70">{section.intro}</p>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="group block h-full rounded-2xl border border-ink/10 bg-white p-6 transition-colors hover:border-ink/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl">{link.title}</h3>
                  {link.badge ? (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      {link.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-ink/70">{link.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink/80 group-hover:text-ink">
                  Open
                  <span aria-hidden>→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
