import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sedem | Front-End Engineer",
  description: "Portfolio of a Front-End Engineer specializing in creating beautiful, interactive web experiences",
  keywords: ["Front-End", "React", "TypeScript", "UI/UX", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
