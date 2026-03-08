import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Reviews from "../components/Review";
import Service from "../components/Service";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export default function Home() {
  return (
  <main>
      <Hero />
      <Service />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingContact />
  </main>
  );
}
