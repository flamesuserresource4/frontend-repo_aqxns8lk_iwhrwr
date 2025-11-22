import Spline from '@splinetool/react-spline';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    'Hello Odisha Security System, I want to inquire about CCTV installation.'
  )}`;

  return (
    <section className="relative h-[80vh] min-h-[540px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <ShieldCheck className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-100">Trusted CCTV & Security Solutions</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Protect Your Home & Business with Odisha Security System
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            Fast installation, expert technicians, and same-day support across Berhampur, Ganjam. HD/IP CCTV, WiFi CCTV, DVR/NVR setup, video door phones, and more.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
