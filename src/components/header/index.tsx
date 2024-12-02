"use client"

import Link from "next/link"
import { NavItems } from "../navitems"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: "/"
    },
    {
        label: 'Projectos',
        href: "/projects"
    },
]

export const Header = () => {
    return (
        <header className="absolute z-20 h-24 top-0 w-full flex items-center justify-center">
            <section className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-md sm:text-2xl font-bold">Jenilson Francisco</h1>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-7">
                    {NAV_ITEMS.map(item => (
                        <NavItems
                            {...item}
                            key={item.label}

                        />
                    ))}
                </nav>
            </section>
        </header>
    )
}