"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItemsProps = {
    label: string
    href: string
}

export const NavItems = ({ label, href }: NavItemsProps) => {

    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link href={href} className={cn(
            "text-zinc-400 flex items-center gap-2 font-medium hover:border-b border-zinc-400 mb-1 transition-all",
            isActive && "text-zinc-50 mb-1 borde-b border-zinc-50"
        )} >
            {label}
        </Link>
    )
}