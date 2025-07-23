"use client";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  isLast?: boolean;
}

export default function Achievement({ isLast }: Props) {
  const achievementProperties = useRef<HTMLDivElement>(null);
  const [spanHeight, setSpanHeight] = useState(0);

  useEffect(() => {
    if (achievementProperties.current) {
      const currentHeight = achievementProperties.current.clientHeight;
      setSpanHeight(currentHeight);
    }
  }, []);

  return (
    <article className="flex gap-5 mt-5" ref={achievementProperties}>
      <div className=" flex items-center justify-center h-1 w-1 bg-yellow-200 p-1 rounded-full relative ml-2">
        <span
          style={{
            height: `${spanHeight + 12}px`,
            bottom: `-${spanHeight + 12}px`,
          }}
          className={`${
            isLast && "hidden"
          } border-r  border-neutral-700 w-[1px]  absolute  -bottom-10`}
        ></span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-white font-semibold">Título de Educación</h2>

        <span className="text-yellow-200">
          2016 - 2021
        </span>
        
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
      </div>
    </article>
  );
}