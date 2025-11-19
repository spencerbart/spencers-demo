import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 text-center sm:text-left">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-200 dark:border-zinc-800">
            <Image
              src="/globe.svg" // Placeholder for a profile picture
              alt="Spencer Bartholomew"
              fill
              className="object-cover p-4 dark:invert"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Spencer Bartholomew
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Software Engineer & Creative Thinker
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <section className="w-full space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            About Me
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Hello! I'm Spencer. I enjoy building things for the web and solving complex problems. 
            This is my corner of the internet where I share my projects and thoughts.
          </p>
        </section>

        {/* Links/Projects Section */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="#"
            className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-transparent p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:underline">
              My Projects
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Check out what I've been working on recently.
            </p>
          </a>
          
          <a
            href="#"
            className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-transparent p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 group-hover:underline">
              Contact Me
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Get in touch for collaborations or just to say hi.
            </p>
          </a>
        </div>
        
      </main>
    </div>
  );
}
