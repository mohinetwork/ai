"use client";

import Link from "next/link";
import { NAV_LINKS, Routes } from "@/constants";
import { Button } from "../ui/button";
import { cn } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1 overflow-y-auto px-4 pb-6"
                >
                    <nav className="flex flex-col gap-1 mt-2">
                        {NAV_LINKS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-sm text-foreground/70 hover:text-foreground font-medium",
                                    "transition-colors px-3 py-2.5 rounded-lg hover:bg-foreground/5"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-4 border-t border-foreground/10">
                        <a href={Routes.AnmixAI} onClick={() => setIsOpen(false)}>
                            <Button variant="white" className="w-full" type="button">
                                Start for free
                            </Button>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
