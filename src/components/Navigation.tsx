"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="flex items-center justify-between"
          style={{
            background: isScrolled ? "var(--bg-primary)" : "transparent",
            backdropFilter: isScrolled ? "blur(12px)" : "none",
            borderRadius: isScrolled ? "9999px" : "0",
            padding: isScrolled ? "10px 20px" : "0",
            border: isScrolled ? "1px solid var(--border)" : "none",
          }}
        >
          <motion.a
            href="#home"
            className="text-xl font-medium"
            style={{ color: "var(--text-primary)" }}
            whileHover={{ scale: 1.02 }}
          >
            sedem.
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium rounded-full"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
            }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
