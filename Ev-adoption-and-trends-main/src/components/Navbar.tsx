"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Insights", href: "/insights" },
    { name: "Optimization", href: "/optimization" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
                    <Zap className="w-6 h-6 fill-current" />
                    <span>EV Analytics</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 rounded-full transition-colors">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}
