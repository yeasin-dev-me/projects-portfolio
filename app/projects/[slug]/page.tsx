import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug, 3);

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

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto max-w-6xl py-4 px-4">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <span className={`badge ${categoryColors[project.category]} text-white`}>
              {categoryLabels[project.category]}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-4xl">
            {project.tagline}
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <div className="text-sm text-gray-500">Client</div>
              <div className="text-white font-semibold">{project.client}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Industry</div>
              <div className="text-white font-semibold">{project.industry}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Duration</div>
              <div className="text-white font-semibold">{project.duration}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Role</div>
              <div className="text-white font-semibold">{project.role}</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Code
              </a>
            )}
            {project.swaggerUrl && (
              <a
                href={project.swaggerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                API Docs
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.metrics.map((metric, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-400 font-semibold">{metric.label}</div>
                {metric.subLabel && (
                  <div className="text-sm text-gray-500">{metric.subLabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {project.challengeIntro}
          </p>
          <ul className="space-y-3">
            {project.painPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 text-lg mt-6 leading-relaxed">
            {project.challengeConclusion}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {project.solutionIntro}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {project.solutionPoints.map((point, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3 text-blue-500">
                  {point.title}
                </h3>
                <p className="text-gray-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.techStack.map((stack, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-4 text-blue-500">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="badge badge-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="card p-0 overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400 text-sm">{screenshot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Achievements */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="card bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
              <div className="text-6xl text-blue-500 mb-4">"</div>
              <p className="text-xl text-gray-300 mb-6 italic">
                {project.testimonial.quote}
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-gray-400">{project.testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{project.testimonial.company}</div>
                </div>
              </div>
              {project.testimonial.rating && (
                <div className="flex mt-4">
                  {[...Array(project.testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 px-4 bg-[#111111]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.slug} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Yeasin Arafat. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
