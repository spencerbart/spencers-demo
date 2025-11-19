"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 flex justify-between items-center p-6 ${isHome ? 'text-white' : 'text-zinc-900 dark:text-zinc-50'}`}>
      <div className="text-xl font-bold">
        <Link href="/">Spencer</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/about" className={`transition-colors ${isHome ? 'hover:text-zinc-300' : 'hover:text-zinc-600 dark:hover:text-zinc-300'}`}>
          About
        </Link>
        <Link href="/contact" className={`transition-colors ${isHome ? 'hover:text-zinc-300' : 'hover:text-zinc-600 dark:hover:text-zinc-300'}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

