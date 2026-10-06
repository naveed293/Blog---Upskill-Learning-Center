import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Scholarship", href: "#", badge: "NEW" },
  { label: "About", href: "#" },
  { label: "Partners", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-slate-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center">
          <Logo className="h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative hover:text-sky-500 transition-colors flex items-center gap-1"
            >
              {item.label}
              {item.badge && (
                <span className="absolute -top-3 -right-6 rounded-full bg-sky-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
            Log in
          </button>
          <button className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white hover:bg-sky-600 transition shadow-sm shadow-sky-200">
            Start Learning
          </button>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 bg-slate-700" />
          <span className="block h-0.5 w-6 bg-slate-700" />
          <span className="block h-0.5 w-6 bg-slate-700" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-sm font-medium text-slate-700">
              {item.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium">
              Log in
            </button>
            <button className="flex-1 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white">
              Start Learning
            </button>
          </div>
        </div>
      )}
    </header>
  );
}