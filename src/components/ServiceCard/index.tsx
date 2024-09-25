import { IService } from "@/interface";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const BG_COLORS = ["#FFF", "#111013eb"];
const TEXT_COLORS = ["black", "white"];

type Props = {
  service: IService;
  index: number;
};

const ServiceCard = ({ service, index }: Props) => {
  const bgIndex = Math.floor(index / 2) % BG_COLORS.length;
  const textIndex = Math.floor(index / 2) % TEXT_COLORS.length;

  const bgClass = `bg-[${BG_COLORS[bgIndex]}]`;
  const textClass = `text-${TEXT_COLORS[textIndex]}`;

  return (
    <div
      className={clsx("grid grid-cols-2 gap-5 px-10 py-32", bgClass, textClass)}
    >
      <div className="col-span-1 flex flex-col gap-3 justify-center order-2">
        <h3 className="font-bold text-xl">{service.title}</h3>
        <p className="text-[#9690a2]">{service.description}</p>
        <div className="flex gap-3 flex-wrap">
          {service.subServices.map((s, i) => (
            <div key={`sub-service-${i}`}>{s}</div>
          ))}
        </div>
      </div>
      <div className="col-span-1 order-1">
        <Image
          src={service.image}
          height={1080}
          width={1080}
          alt={`${service.title} image`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
