import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";

export default function Home() {
  const stats = {
    totalProjects: projectsData.length,
    categories: {
      backend: projectsData.filter(p => p.category === "backend").length,
      frontend: projectsData.filter(p => p.category === "frontend").length,
      ml: projectsData.filter(p => p.category === "ml").length,
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Full-Stack Projects</span>
            <br />
            <span className="text-white">That Deliver Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up">
            Backend APIs • React Frontends • ML Solutions
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="card text-center">
              <div className="text-4xl font-bold text-blue-500">{stats.totalProjects}</div>
              <div className="text-gray-400 mt-2">Total Projects</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-purple-500">{stats.categories.backend}</div>
              <div className="text-gray-400 mt-2">Backend</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-cyan-500">{stats.categories.frontend}</div>
              <div className="text-gray-400 mt-2">Frontend</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-green-500">{stats.categories.ml}</div>
              <div className="text-gray-400 mt-2">ML/AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <ProjectFilters />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yeasin Arafat. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
