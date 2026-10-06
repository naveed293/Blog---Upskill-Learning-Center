const categories = [
  "All",
  "Accounting & Finance",
  "AI",
  "Backend Development",
  "Cloud Computing",
  "Data Science",
  "Digital Marketing",
  "Entrepreneurship",
  "Freelancing",
  "Frontend Development",
  "Game Development",
  "Graphic Design",
  "Microsoft Office",
  "Mobile Development",
  "UI/UX Design",
  "Video Editing & Animation",
  "Web Development",
];

interface CategoriesProps {
  active: string;
  onSelect: (category: string) => void;
}

export default function Categories({ active, onSelect }: CategoriesProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-500"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}