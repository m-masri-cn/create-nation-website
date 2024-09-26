import OurWorkSection from "./components/OurWorkSection";
import ServicesSection from "./components/ServicesSection";
import WhoWeAreSection from "./components/WhoWeAreSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 transform -skew-y-[3.2deg] bg-black h-40 -top-10"></div>

      <div className="absolute z-10 flex flex-col gap-10">
        <WhoWeAreSection />

        <ServicesSection />

        <OurWorkSection />
      </div>
    </div>
  );
}
