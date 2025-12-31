import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projects Portfolio | Full-Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects: React/Next.js frontends, Django/FastAPI backends, and ML solutions. Proven track record delivering production-ready applications.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Frontend Developer",
    "Machine Learning",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Yeasin Arafat" }],
  openGraph: {
    title: "Projects Portfolio | Full-Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects with proven results",
    type: "website",
    url: "https://projects.yeasindev.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio | Full-Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
