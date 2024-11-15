"use client";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky right-0 left-0 top-0 bg-white">
      <div className="py-4 px-4 max-w-screen-xl mx-auto flex items-center justify-between">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={150}
          height={150}
          className="hidden md:block"
        />

        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="md:hidden"
        />

        {/* right side */}
        <div className="flex items-center gap-8">
          {/* navigation links */}
          <nav className="list-none hidden lg:flex items-center gap-8">
            <li>Home</li>
            <li>About Us</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>Companies</li>
            <li>Manage Referrals</li>
            <li>Login</li>
          </nav>

          <div className="flex items-center gap-8 relative">
            <button className="hidden sm:block bg-[#357AFF] text-white px-6 py-2 rounded-xl shadow">
              Register
            </button>
            <button
              className="lg:hidden"
              onClick={() => {
                console.log("clicked");
              }}
            >
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
