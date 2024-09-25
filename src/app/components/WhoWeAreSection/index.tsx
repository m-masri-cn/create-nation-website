import Image from "next/image";
import React from "react";
import Slider from "@/components/Slider";

const WhoWeAreSection = () => {
  const images = [
    "/img/client-10pro.png",
    "/img/client-AB.png",
    "/img/client-BHM.png",
    "/img/client-RAWNAQ.png",
    "/img/client-SEA.png",
    "/img/client-SHAMS.png",
    "/img/client-SYLVAN.png",
  ];

  return (
    <div
      id="who-we-are"
      className="flex flex-col gap-5 bg-black text-white px-28 py-10"
    >
      <div className="grid grid-cols-5 gap-16">
        <div className="col-span-3 flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl border-b border-white/30 pb-3">
              Create <span className="text-red-400">Who?!</span>
            </h1>

            <p className="font-bold text-lg">
              The next generation of marketing enthusiasts lead by purpose and
              passion to deliver growth to your business, by spinning creative
              content into result-driven tactics. Inspired by the vibrant
              record-breaking city of our birth we bring original, bold,
              trend-setting ideas that will make your brand stand out.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="border-b border-white/30 pb-1">
              We love getting our clients recognized
            </p>

            <Slider
              slides={images.map((img, i) => (
                <Image key={i} src={img} height={120} width={120} alt={img} />
              ))}
            />
          </div>
        </div>
        <div className="col-span-2">
          <Image
            src="/img/cn-create-who.webp"
            width={720}
            height={420}
            alt="create nation create who image"
          />
        </div>
      </div>
      <Image
        src="/img/team-members.webp"
        width={720}
        height={420}
        alt="create nation team members"
        className="border-8 border-[#ffffff2b] rounded-md w-full object-cover"
      />
    </div>
  );
};

export default WhoWeAreSection;
