import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 lg:px-8 pb-8">
      <div className="rounded-2xl bg-white border border-slate-100 p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="text-sm text-slate-600 mb-4 max-w-xs">
              Empowering Afghan Youth with Skills for a Digital Future - <span className="font-semibold text-slate-800">Powered by Upskill</span>
            </p>
            <div className="flex gap-3 mb-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:text-sky-500 hover:bg-sky-50 transition"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-700 mb-2">Let's Connect</p>
            <div className="h-20 w-20 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-400">
              QR Code
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-sky-500">Tech Services</a></li>
              <li><a href="#" className="hover:text-sky-500">Online Courses</a></li>
              <li><a href="#" className="hover:text-sky-500">Scholarship</a></li>
              <li><a href="#" className="hover:text-sky-500">Careers</a></li>
              <li><a href="#" className="hover:text-sky-500">Student Projects</a></li>
              <li><a href="#" className="hover:text-sky-500">Partners</a></li>
              <li><a href="#" className="hover:text-sky-500">Corporate Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Helpful Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-sky-500">About Us</a></li>
              <li><a href="#" className="hover:text-sky-500">Our Instructors</a></li>
              <li><a href="#" className="hover:text-sky-500">Success Stories</a></li>
              <li><a href="#" className="hover:text-sky-500">Blog</a></li>
              <li><a href="#" className="hover:text-sky-500">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Information</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-sky-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sky-500">Contact Us</a></li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <span className="text-sky-500">📍</span> Kabul, Afghanistan
              </p>
              <p className="flex items-center gap-2">
                <span className="text-sky-500">📞</span> +93 78 176 5151
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <div className="flex gap-4">
            <a href="#" className="hover:text-sky-500">Privacy & Policy</a>
            <a href="#" className="hover:text-sky-500">Terms & Condition</a>
          </div>
          <div className="text-right">
            <p>© 2026 Upskill Online. All rights reserved.</p>
            <p>Powered by <span className="text-sky-500 font-medium">Upskill</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}