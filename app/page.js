import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import TopCategory from "@/components/TopCategory";

export default function Home() {
  return (
    <main className="container">
      <section className="hero_top_slider">
        <HeroSection />
        <TopCategory />
      </section>
      <ImageGallery />
    </main>
  );
}
