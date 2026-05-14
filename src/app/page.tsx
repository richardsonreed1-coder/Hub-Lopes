import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionGrid } from "@/components/SectionGrid";
import { Footer } from "@/components/Footer";
import { sections } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {sections.map((section) => (
          <SectionGrid key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}
