import Link from "next/link";
import React from "react";
import GetInTouchButton from "@/components/GetInTouchButton";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <p>Menu</p>
        <p>Icon</p>
      </div>

      <div className="flex items-center gap-5">
        <Link
          className="hover:text-red-500 transition-all ease-in-out duration-500 "
          href="#who-we-are"
        >
          Who we are
        </Link>
        <Link
          className="hover:text-red-500 transition-all ease-in-out duration-500 "
          href="/#services"
        >
          Services
        </Link>
        <Link
          className="hover:text-red-500 transition-all ease-in-out duration-500 "
          href="/#our-work"
        >
          Work
        </Link>
        <Link
          className="hover:text-red-500 transition-all ease-in-out duration-500 "
          href="/careers"
        >
          Careers
        </Link>

        <GetInTouchButton />
      </div>
    </div>
  );
};

export default Navbar;
