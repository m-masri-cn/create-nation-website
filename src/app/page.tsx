import ServicesSection from "./components/ServicesSection";
import WhoWeAreSection from "./components/WhoWeAreSection";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="absolute inset-0 transform -skew-y-[3.5deg] bg-black h-20 -top-10"></div>

      <WhoWeAreSection />

      <ServicesSection />
    </div>
  );
}
