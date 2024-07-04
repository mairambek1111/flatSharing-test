import Hero from "@/components/Hero/Hero";
import Works from "@/components/works/Works";
import Community from "@/components/community/community";
import Cards from "@/components/Cards/Cards";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Works />
        <Community />
        <Cards />
      </main>
    </>
  );
}
