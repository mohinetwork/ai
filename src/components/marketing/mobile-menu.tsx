"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, Routes } from "@/constants";
import { Button } from "../ui/button";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex flex-col flex-1 overflow-y-auto px-4 pb-4"
                >
                    <nav className="flex flex-col gap-1 mt-2">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-foreground/70 hover:text-foreground font-medium transition-colors px-3 py-2 rounded-lg hover:bg-foreground/5"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-4 pt-4 border-t border-foreground/10">
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
