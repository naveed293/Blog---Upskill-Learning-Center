import { useMemo, useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import BlogCard from "./components/BlogCard";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { posts } from "./data/posts";

export default function App() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/60 to-transparent">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-12 pb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="text-slate-900">Our </span>
            <span className="text-sky-500">Blog</span>
          </h1>
        </div>
      </section>

      <Categories active={active} onSelect={setActive} />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            No posts found in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <CTA />

      <Footer />
    </div>
  );
}