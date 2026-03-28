"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-xl mx-auto px-6">
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
            Contact
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Let&apos;s work together
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full"
              placeholder="Message"
              rows={5}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-4 text-base font-medium rounded-full"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
            }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--text-tertiary)" }}
          >
            Or reach out directly
          </p>
          <div className="space-y-2">
            <a
              href="mailto:sedem066@outlook.com"
              className="block text-base font-medium hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              sedem066@outlook.com
            </a>
            <a
              href="tel:+233505060771"
              className="block text-base font-medium hover:underline"
              style={{ color: "var(--text-primary)" }}
            >
              050 506 0771
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
