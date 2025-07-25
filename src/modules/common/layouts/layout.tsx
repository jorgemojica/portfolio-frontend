"use client"
import React from 'react'
import Aside from '../components/aside.component'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useLayout } from '../hooks/useLayout'

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {

    const pathName = usePathname();
    const { title, routes } = useLayout(pathName);

    return (
        <main className="bg-neutral-950 px-48 h-screen flex gap-5 ">
            <Aside />
            <div className="flex-1 py-14 overflow-auto hide-scrollbar">
                <section className="flex  flex-col  px-8 pt-10 pb-12 bg-neutral-900  rounded-2xl border border-neutral-800 relative ">
                    <header className="flex justify-between">
                        <h1 className="text-white text-3xl font-bold mb-3 ">
                            {title}
                        </h1>
                        <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-700">
                            <ul className="flex gap-10">
                                {routes.map((route) => (
                                    <Link
                                        key={route.path}
                                        className={`${pathName === route.path ? "text-yellow-200" : "text-neutral-400"} font-semibold `}
                                        href={route.path}>
                                        {route.name}
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </header>
                    {children}
                </section>
            </div>
        </main>
    )
}