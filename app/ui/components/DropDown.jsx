"use client";

import clsx from "clsx";
import React, { useState } from "react";

const navlinks = [
  "Kwara",
  "Lagos",
  "Abuja",
  "Oyo",
  "Niger",
  "Ogun",
  "River",
  "Ondo",
];
export default function DropDown() {
  const [state, setState] = useState(false);
  const [display, setDisplay] = useState(navlinks[0]);
  return (
    <li className="flex gap-2 items-center">
      <span>Location</span>
      <div
        onClick={() => {
          setState(!state);
        }}
        className="bg-[#357AFF] p-2 text-white flex items-center relative cursor-pointer"
      >
        {display}
        <span className="ml-1">
          <svg
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.75 0.5L7 6.75L13.25 0.5H0.75Z" fill="white" />
          </svg>
        </span>
        <ul
          className={clsx(
            "absolute top-0 mt-10 border-t border-t-white right-0 left-0 bg-[#357AFF] p-2 list-none flex-col gap-4",
            {
              block: state,
              hidden: !state,
            }
          )}
        >
          {navlinks.map((link, index) => (
            <li
              onClick={() => {
                setDisplay(link);
              }}
              className="py-1"
              key={link}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
