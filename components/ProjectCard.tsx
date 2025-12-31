import Link from "next/link";
import Image from "next/image";
import { ProjectDetail } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectDetail;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    backend: "bg-purple-600",
    frontend: "bg-cyan-600",
    ml: "bg-green-600",
  };

  const categoryLabels = {
    backend: "Backend",
    frontend: "Frontend",
    ml: "ML/AI",
  };

  // Get top 3 metrics
  const topMetrics = project.metrics.slice(0, 3);

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="card group cursor-pointer h-full flex flex-col">
        {/* Project Image */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-900">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          <div className="absolute top-3 left-3">
            <span className={`badge ${categoryColors[project.category]} text-white`}>
              {categoryLabels[project.category]}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {topMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-blue-500">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 2).map((stack, index) => (
                <div key={index}>
                  {stack.items.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded mr-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <span className="text-blue-500 font-semibold group-hover:text-blue-400 flex items-center">
              View Case Study
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
