"use client";
import { navlinks } from "@/app/data/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Hamburger() {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => {
          setShowNav(() => {
            return !showNav;
          });
        }}
      >
        {showNav ? (
          <svg
            className="text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 6H6m12 4H6m12 4H6m12 4H6"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        )}
      </button>

      {/* header */}
      <ul
        className={clsx(
          "lg:hidden gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto",
          {
            hidden: showNav,
          }
        )}
      >
        <li className="mb-6 hidden max-lg:block">
          <Image src={"/images/logo.png"} alt="logo" width={100} height={0} />
        </li>

        {navlinks.map((link) => {
          return (
            <li
              key={link}
              className="max-lg:border-b border-gray-300 max-lg:py-3"
            >
              <Link
                href="javascript:void(0)"
                className=" hover:text-[#007bff] block font-semibold text-[15px]"
              >
                {link}
              </Link>
            </li>
          );
        })}

        <button className="block bg-[#357AFF] text-white px-6 py-2 rounded-xl shadow">
          Register
        </button>
      </ul>
    </>
  );
}
