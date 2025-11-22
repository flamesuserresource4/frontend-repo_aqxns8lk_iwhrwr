import { Phone, MessageCircle } from 'lucide-react'

export default function CTA() {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    'Hello Odisha Security System, I want to inquire about CCTV installation.'
  )}`;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-950/95">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to secure your space?</h3>
          <p className="mt-2 text-blue-200/80">Call or WhatsApp us for a free on-site assessment and quote.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
