import Link from "next/link";
import React from "react";

const GetInTouchButton = () => {
  return (
    <Link
      className="text-white px-5 py-2 bg-black rounded-md hover:bg-red-500 transition-all ease-in-out duration-500"
      href="/contact-us"
    >
      Get in Touch
    </Link>
  );
};

export default GetInTouchButton;
