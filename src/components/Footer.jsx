import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    'Hello Odisha Security System, I want to inquire about CCTV installation.'
  )}`;

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold">Odisha Security System</h4>
            <p className="mt-2 text-sm text-blue-200/80">Berhampur, Ganjam, Odisha</p>
            <div className="mt-3 flex items-center gap-2 text-blue-200/80">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </div>
            <div className="mt-2 flex items-center gap-2 text-blue-200/80">
              <MessageCircle className="w-4 h-4" /> WhatsApp support available
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-2 text-blue-200/80 space-y-2 text-sm">
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white" aria-label="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Odisha Security System. All rights reserved.</div>
          <div>Designed for performance and security.</div>
        </div>
      </div>
    </footer>
  )
}
