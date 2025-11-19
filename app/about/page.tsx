import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full font-sans bg-zinc-50 dark:bg-zinc-950 py-24 px-6">
      <div className="max-w-4xl w-full">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            About Me
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
            I'm Spencer Bartholomew, a Software Engineer & Creative Thinker based in San Francisco. I build accessible, pixel-perfect, and performant web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative h-[400px] md:h-auto w-full rounded-2xl overflow-hidden shadow-lg bg-zinc-200 dark:bg-zinc-800">
             <Image
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                alt="Spencer working"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    My journey in web development began 5 years ago when I discovered the power of code to solve real-world problems. Since then, I've had the privilege of building software for a diverse range of clients, from early-stage startups to established enterprises.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    I specialize in JavaScript/TypeScript ecosystem, with deep expertise in React, Next.js, and Node.js. I'm passionate about UI/UX design and believe that the best digital products are built at the intersection of engineering and design excellence.
                </p>
            </div>
        </div>

        <div className="space-y-16">
            <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Experience</h2>
                <div className="space-y-8">
                    <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 py-2">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Senior Frontend Engineer</h3>
                        <p className="text-zinc-500 dark:text-zinc-500 mb-2">Tech Forward • 2022 - Present</p>
                        <p className="text-zinc-600 dark:text-zinc-400">Leading the frontend team in rebuilding the core platform using Next.js and GraphQL. Improved site performance by 40% and established a new component-driven design system.</p>
                    </div>
                    <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-6 py-2">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Software Developer</h3>
                        <p className="text-zinc-500 dark:text-zinc-500 mb-2">Creative Digital Agency • 2019 - 2022</p>
                        <p className="text-zinc-600 dark:text-zinc-400">Collaborated with designers to implement award-winning responsive user interfaces. Integrated complex third-party APIs and real-time features using WebSockets.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">What I Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Web Development</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Building scalable, SEO-friendly, and performant web applications using modern technologies.</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">UI/UX Design</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Crafting intuitive, accessible, and beautiful user experiences with a focus on micro-interactions.</p>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Performance Optimization</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Auditing and improving web performance to ensure fast load times and smooth interactions.</p>
                    </div>
                </div>
            </section>
            
             <section>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Let's Connect</h2>
                 <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                    Get in Touch
                </Link>
            </section>
        </div>
      </div>
    </main>
  );
}

