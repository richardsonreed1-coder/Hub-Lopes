export type HubLink = {
  title: string;
  href: string;
  description: string;
  badge?: string;
};

export type HubSection = {
  id: string;
  title: string;
  intro: string;
  links: HubLink[];
};

export const siteConfig = {
  name: "Lopes",
  tagline: "Traffic hub — every channel, one entry point.",
  description:
    "Central directory for Lopes properties, campaigns, and offers. Replace this copy with content sourced from lopes-web.vercel.app.",
  ctaPrimary: { label: "See the latest", href: "#featured" },
  ctaSecondary: { label: "Contact", href: "#contact" },
  contact: {
    email: "hello@lopes.example",
    location: "TBD",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const sections: HubSection[] = [
  {
    id: "featured",
    title: "Featured",
    intro:
      "Top destinations. Swap these entries for the headline links from lopes-web.vercel.app.",
    links: [
      {
        title: "Main site",
        href: "https://lopes-web.vercel.app/",
        description: "Primary Lopes web property.",
        badge: "Live",
      },
      {
        title: "Latest campaign",
        href: "#",
        description: "Replace with active campaign or launch.",
      },
      {
        title: "Newsletter",
        href: "#",
        description: "Email list / lead capture target.",
      },
    ],
  },
  {
    id: "channels",
    title: "Channels",
    intro: "Where Lopes shows up across the web.",
    links: [
      { title: "Instagram", href: "#", description: "Daily posts and reels." },
      { title: "YouTube", href: "#", description: "Long-form video." },
      { title: "TikTok", href: "#", description: "Shorts and trends." },
      { title: "LinkedIn", href: "#", description: "Professional updates." },
    ],
  },
  {
    id: "offers",
    title: "Work with us",
    intro: "Services, products, and partnerships.",
    links: [
      {
        title: "Services",
        href: "#",
        description: "What we do for clients.",
      },
      {
        title: "Shop",
        href: "#",
        description: "Products or merch, if applicable.",
      },
      {
        title: "Press / Inquiries",
        href: "#contact",
        description: "Booking and media requests.",
      },
    ],
  },
];
