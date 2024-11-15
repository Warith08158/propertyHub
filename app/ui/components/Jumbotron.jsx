import React from "react";
import DropDown from "./DropDown";

export default function Jumbotron() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-left py-20 md:py-28 lg:py-36 space-y-10">
        <h1 className="font-[400] text-[45px] max-w-[720px] tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Look for the perfect location to get accomodation.
        </h1>
        <p className="text-white max-w-[720px] leading-7 font-[400px] text-[20px]">
          This platform also help real estate managers in placing good tenants
          in their real estate property so as not to loose in the business.
        </p>

        <div>
          <div className="bg-white inline-block">
            <div className="flex flex-row items-center">
              <div className="py-4 px-6 bg-[#357AFF] text-white">Buy</div>
              <div className="py-4 px-6">Rent</div>
            </div>
          </div>
          <div className="bg-white py-4 px-6 flex-col hidden w-full items-left gap-2 md:gap-0 md:flex md:flex-row md:items-center md:justify-between list-none max-w-3xl text-base">
            {/* dropdown */}
            <DropDown />
            {/* 2 */}
            <li className="flex gap-2 items-center">
              <span>Property Type</span>
              <div className="bg-[#357AFF] p-2 text-white flex items-center">
                4 Bedroom Duplex
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
              </div>
            </li>

            {/* 3 */}
            <li className="flex gap-2 items-center">
              <span>Price</span>
              <div className="bg-[#357AFF] p-2 text-white flex items-center">
                $25000
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
              </div>
            </li>

            {/* 4 */}
            <li>
              {" "}
              <button className="bg-[#357AFF] p-2 text-white flex items-center">
                Search
              </button>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
