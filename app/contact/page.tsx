import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full font-sans bg-zinc-50 dark:bg-zinc-950 py-24 px-6">
      <div className="max-w-2xl w-full">
        <div className="mb-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Have a project in mind or just want to say hi? Fill out the form below.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                className="px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 w-full px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
