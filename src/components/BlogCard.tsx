import { useState } from "react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  gradient: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = post.image && !imgError;

  return (
    <article className="group flex flex-col rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden border border-slate-100">
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
        {showImage && (
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            crossOrigin="anonymous"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute top-3 right-3 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          Blog
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 inline-block w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
          {post.category}
        </span>
        <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-4 text-sm text-slate-500 line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {post.date}
          </span>
          <button className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-sky-600 transition shadow-sm shadow-sky-200">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
}