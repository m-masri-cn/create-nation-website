"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {
  words: string[];
};

const TypingText = ({ words }: Props) => {
  return <Typewriter words={words} loop={true} cursor />;
};

export default TypingText;
