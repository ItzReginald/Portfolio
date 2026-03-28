"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-medium mb-4"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            About
          </h2>
        </motion.div>

        <div className="space-y-6" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          <p>
            I&apos;m a Front-End Developer with experience building websites and web applications.
            I focus on creating clean, functional interfaces that work well for users.
          </p>
          <p>
            I work with HTML, CSS, JavaScript, React, and modern web technologies.
            I value writing clean code and building things that work properly.
          </p>
          <p>
            Outside of work, I enjoy learning new technologies and improving my skills.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects" },
            { value: "30+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-3xl font-medium mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
