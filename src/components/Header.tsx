import { siteConfig, sections } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper/80 backdrop-blur sticky top-0 z-10">
      <div className="container-wide flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          {siteConfig.name}
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-ink/70 transition-colors hover:text-ink"
            >
              {section.title}
            </a>
          ))}
          <a
            href="#contact"
            className="text-ink/70 transition-colors hover:text-ink"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
