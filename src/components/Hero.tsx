"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Front-End Developer",
  "Web Developer",
  "UI Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedRole, setDisplayedRole] = useState("");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedRole(
          isDeleting
            ? currentRole.slice(0, displayedRole.length - 1)
            : currentRole.slice(0, displayedRole.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex mb-8"
        >
          <span
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "var(--bg-secondary)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-medium mb-6"
          style={{
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--accent)" }}>Sedem</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl mb-8 h-10 flex items-center justify-center"
          style={{ color: "var(--text-secondary)" }}
        >
          {displayedRole}
          <span className="animate-pulse ml-1">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          I build clean, responsive websites with modern web technologies.
          Focused on creating simple, user-friendly experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 text-base font-medium rounded-full"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
            }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 text-base font-medium rounded-full"
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
