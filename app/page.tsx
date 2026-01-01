import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";

export default function Home() {
  const backendProjects = projectsData.filter((p) => p.category === "backend");
  const frontendProjects = projectsData.filter((p) => p.category === "frontend");
  const mlProjects = projectsData.filter((p) => p.category === "ml");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Yeasin Arafat</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8 animate-slide-up">
            Full Stack Developer & ML Engineer
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-100">
            Building robust backend systems, dynamic frontends, and intelligent machine learning solutions.
            Focused on delivering results that matter.
          </p>

          {/* Social / Contact Links Placeholder */}
          <div className="flex justify-center gap-6 animate-slide-up delay-200">
            <a href="https://github.com/yeasin-dev-me" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
            <Link href="mailto:contact@yeasindev.me" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        
        {/* Backend Projects */}
        {backendProjects.length > 0 && (
          <section className="py-12 border-b border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-purple-500">Backend Engineering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {backendProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Frontend Projects */}
        {frontendProjects.length > 0 && (
          <section className="py-12 border-b border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-cyan-500">Frontend Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frontendProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* ML Projects */}
        {mlProjects.length > 0 && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-green-500">Machine Learning & AI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mlProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 mt-12">
        <div className="container mx-auto max-w-7xl text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yeasin Arafat. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
