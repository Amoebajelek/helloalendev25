import Image from "next/image";
import React from "react";
import IconInstagram from "@/public/icon-instagram.svg";

export const Footer = () => {
  return (
    <div className="flex bg-white shadow-sm justify-between items-center py-4 px-6">
      <p>
        Copyright © 2024 · <span className="font-bold italic">Helloalen.dev</span>
      </p>
      <Image src={IconInstagram} alt="Icon Instagram" width={24} />
    </div>
  );
};
