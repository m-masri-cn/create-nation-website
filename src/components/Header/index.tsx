import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import TypingText from "@/components/TypingText";
import GetInTouchButton from "../GetInTouchButton";

const Header = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-screen">
        <Navbar />
      </div>
      <div className="pt-14">
        <div className="grid grid-cols-2 gap-5">
          <div className="pl-10 col-span-1 h-full flex flex-col justify-center gap-5">
            <div>
              <div className="text-[#635d6f] text-[52px] font-bold">
                <TypingText
                  words={[
                    "People Flourish",
                    "Ideas Grow",
                    "Businesses Develop",
                  ]}
                />
              </div>

              <p className="text-[52px] font-bold">Here.</p>
            </div>
            <p>A Nation Led By Creatives</p>
            <div className="w-max">
              <GetInTouchButton />
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/gif/team-members-gif.gif"
              height={420}
              width={720}
              alt="create nation team members"
              className="h-[600px] object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
