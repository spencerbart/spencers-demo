import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl w-full px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Building the Future of Web
          </h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto mb-10">
            I'm Spencer Bartholomew. A Software Engineer & Creative Thinker dedicated to crafting exceptional digital experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
              View Work
            </a>
            <Link href="/contact" className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-24 bg-white dark:bg-zinc-900 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
              alt="Workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
              About Me
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Hello! I'm Spencer. I enjoy building things for the web and solving complex problems. 
              With a background in modern web technologies, I focus on creating responsive, accessible, and performant applications.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or seeking inspiration in the outdoors.
            </p>
            <div className="pt-4">
              <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read more about my journey &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Featured Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A selection of projects that showcase my passion for design and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-800">
              <div className="relative h-64 w-full bg-zinc-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Project 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  A full-stack shopping experience built with Next.js, Stripe, and Tailwind CSS.
                </p>
                <span className="inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-400 underline-offset-4">
                  View Project
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-800">
              <div className="relative h-64 w-full bg-zinc-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                  alt="Project 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Real-time data visualization tool for tracking user metrics and performance.
                </p>
                <span className="inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-400 underline-offset-4">
                  View Project
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-800">
              <div className="relative h-64 w-full bg-zinc-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                  alt="Project 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Task Management App
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Productivity tool for teams to organize workflows and collaborate efficiently.
                </p>
                <span className="inline-block text-sm font-medium text-zinc-900 dark:text-zinc-100 underline decoration-zinc-400 underline-offset-4">
                  View Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 bg-black text-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start a project?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            I'm currently available for freelance work and collaborations. If you have an idea you'd like to discuss, let's chat.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-black text-zinc-500 text-center border-t border-zinc-800 text-sm">
        <p>&copy; {new Date().getFullYear()} Spencer Bartholomew. All rights reserved.</p>
      </footer>
    </main>
  );
}
