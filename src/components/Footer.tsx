"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              sedem.
            </a>
            <p
              className="text-sm mt-2"
              style={{ color: "var(--text-tertiary)" }}
            >
              Building digital experiences.
            </p>
          </div>

          <div className="flex gap-8">
            {["Work", "Skills", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </a>
            ))}
          </div>

          <p
            className="text-sm"
            style={{ color: "var(--text-tertiary)" }}
          >
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
