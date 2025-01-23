import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex shadow-sm justify-between items-center py-4 px-6">
      <Link href="/">
        <h1 className="font-extrabold italic text-2xl">
          Helloalen<span className="text-[#FE6D3E]">.dev</span>
        </h1>
      </Link>
      <div className="flex items-center gap-6 text-md">
        <Link href="/Portofolios" className="hover:text-[#FE6D3E]">
          <p>Portofolios</p>
        </Link>
        <Link href="#" className="text-[#dcdcdc]">
          <p>Blogs</p>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};
