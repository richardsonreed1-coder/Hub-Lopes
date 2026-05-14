import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="container-wide flex flex-col gap-10 py-16 md:flex-row md:justify-between">
        <div className="max-w-prose">
          <p className="font-display text-3xl">{siteConfig.name}</p>
          <p className="mt-3 text-paper/70">{siteConfig.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="mb-3 uppercase tracking-[0.2em] text-paper/50">
              Contact
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="mt-1 text-paper/70">{siteConfig.contact.location}</p>
          </div>
          <div>
            <p className="mb-3 uppercase tracking-[0.2em] text-paper/50">
              Social
            </p>
            <ul className="space-y-1">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="hover:underline">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 uppercase tracking-[0.2em] text-paper/50">
              Source
            </p>
            <p className="text-paper/70">
              Drop content from lopes-web.vercel.app into{" "}
              <code className="rounded bg-paper/10 px-1 py-0.5 text-paper">
                src/lib/site-config.ts
              </code>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-wide flex h-14 items-center justify-between text-xs text-paper/50">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Traffic hub</span>
        </div>
      </div>
    </footer>
  );
}
