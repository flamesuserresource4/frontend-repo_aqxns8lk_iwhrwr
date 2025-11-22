import { Menu, Phone, MessageCircle, Shield } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink = "text-slate-300 hover:text-white transition";
  const active = ({ isActive }) =>
    isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white";

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    "Hello Odisha Security System, I want to inquire about CCTV installation."
  )}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-lg bg-blue-600/90 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold tracking-tight">Odisha Security System</div>
              <div className="text-xs text-blue-200/80">Berhampur, Ganjam, Odisha</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={active} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition border border-white/10"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={baseLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-3">
              <a href="tel:+919876543210" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-500 text-white">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
