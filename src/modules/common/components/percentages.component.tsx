import React from "react";

export default function Percentages() {
  return (
    <div className="flex flex-col">
      <p className="text-white font-semibold">
        English
        <span className="ml-1 text-neutral-300 font-normal">
          80%
        </span>
      </p>

      <div className="w-full rounded-full bg-neutral-600 mt-2">
        <div className="p-[5px]  h-full rounded-full bg-gradient-to-br from-yellow-200 to-amber-400"
        ></div>
      </div>
    </div>
  );
}