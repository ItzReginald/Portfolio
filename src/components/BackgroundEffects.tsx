export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Subtle gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, var(--bg-tertiary) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
