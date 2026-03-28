"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Git / GitHub", level: 90 },
  { name: "Figma", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-medium mb-4"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            Skills
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: "var(--bg-tertiary)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--text-primary)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
