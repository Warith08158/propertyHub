"use client";
import React from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";
import { navlinks } from "@/app/data/data";

export default function Header() {
  return (
    <header className="sticky right-0 left-0 top-0 bg-white">
      <div className="py-4 px-4 max-w-screen-xl mx-auto flex items-center justify-between">
        <Image src={"/images/logo.png"} alt="logo" width={100} height={0} />

        {/* right side */}
        <div className="flex items-center gap-8">
          {/* navigation links */}
          <nav className="list-none hidden lg:flex items-center gap-8">
            {navlinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </nav>

          <div className="flex items-center gap-8 relative">
            <button className="hidden sm:block bg-[#357AFF] text-white px-6 py-2 rounded-xl shadow">
              Register
            </button>
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  );
}
