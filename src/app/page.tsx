import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Story from "@/components/ui/Story";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </>
  );
}
