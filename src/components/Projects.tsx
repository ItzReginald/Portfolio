"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory and payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop and real-time updates.",
    tags: ["React", "Node.js", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923-89705f0a9dbc?w=800",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with AI-powered insights and reporting.",
    tags: ["Vue.js", "Python", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-6">
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
            Selected Work
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            A collection of projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-1.05"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{
                          background: "var(--bg-tertiary)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
