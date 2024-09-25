import WhoWeAreSection from "./components/WhoWeAreSection";

export default function Home() {
  return (
    <div className="relative ">
      <div className="absolute inset-0 transform -skew-y-[3.5deg] bg-black h-20 -top-10"></div>

      <div className="absolute z-10 w-full">
        <WhoWeAreSection />
      </div>
    </div>
  );
}
