"use client";
import React from "react";

export default function Hamburger() {
  return (
    <>
      <button
        className="lg:hidden"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Hambuger
      </button>
      <div className="absolute -bottom-6">nav</div>
    </>
  );
}
