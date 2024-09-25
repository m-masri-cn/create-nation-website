import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/mock";
import React from "react";

const ServicesSection = () => {
  return (
    <div id="services" className="flex flex-col gap-10">
      <h1 className="text-6xl border-b border-white/30 pb-3 ml-10">
        Create <span className="text-red-400">What?!</span>
      </h1>

      <div className="flex flex-col">
        {SERVICES.map((s, i) => (
          <ServiceCard key={`service-${i}`} service={s} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
