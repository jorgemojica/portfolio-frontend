
import React from "react"

interface Props {
    children: React.ReactNode
}

export default function AboutPage({ children }: Props) {
    return (
        <main className="flex flex-col w-3/4 px-10 py-10 bg-neutral-900 my-14 rounded-2xl border border-neutral-800 justify-between">
            { children }
        </main>
    )
}