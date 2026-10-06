export default function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 lg:px-8 py-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-400 to-sky-500 px-8 py-8 sm:px-12 sm:py-10">
        <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute right-20 top-1/2 h-2 w-2 rounded-full bg-white/80" />
        <div className="absolute right-32 top-1/3 h-1.5 w-1.5 rounded-full bg-white/60" />
        <div className="absolute right-10 bottom-6 h-3 w-3 rounded-full bg-white/70" />

        <svg
          className="absolute right-8 bottom-10 text-white/40"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5L12 0z" />
        </svg>

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-white max-w-xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Don't wait — take the next step toward your brighter future.
            </h2>
            <p className="text-sm sm:text-base text-white/90">
              Your journey begins with one simple action today
            </p>
          </div>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 hover:bg-sky-50 transition shadow-lg whitespace-nowrap">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
}