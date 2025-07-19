import Info from "@/modules/profile/component/info.component"
import Image from "next/image"
import React from "react"

export default function Aside() {
    return (
        <aside className="flex flex-col w-1/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
            <div className="flex flex-col gap-5 items-center">
                <div className="bg-gradient-to-br from-neutral-800 to-[#212121] p-4 rounded-[2rem]  ">
                    <Image src="" alt="Logo" width={500} height={500} className='rounded-full w-full max-h-[120px]' />
                </div>
                <h1 className="text-white font-semibold text-2xl text-center">Jorge Andrés Mojica Villamizar</h1>
                <span className="bg-neutral-800 px-4 py-2 rounded-lg">
                    <h2 className="text-white text-xs">Fullstack Web Developer</h2>
                </span>
            </div>
            <div className="flex flex-col items-center gap-5 h-1/2">
                <Info />
            </div>
        </aside>
    )
}