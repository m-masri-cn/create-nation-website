"use client";
import React from "react";
import SliderSlick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  slides: React.ReactNode[];
};

const Slider = ({ slides }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <SliderSlick arrows={false} {...settings}>
      {slides.map((s) => s)}
    </SliderSlick>
  );
};

export default Slider;
