import Navbar from './Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import ServicesOverview from './ServicesOverview'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'

export function HomePage() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesOverview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export function ServicesPage() {
  const services = [
    { title: 'CCTV Camera Installation (HD & IP)', desc: 'High-definition and IP camera systems with professional mounting, wiring, and optimal coverage planning.' },
    { title: 'WiFi Wireless CCTV', desc: 'Smart, wireless cameras for quick setups without complex wiring, mobile view ready.' },
    { title: 'DVR/NVR Setup & Configuration', desc: 'Reliable recording with motion detection, remote viewing setup on mobile and desktop.' },
    { title: 'Home & Shop Surveillance Setup', desc: 'End-to-end packages for homes, shops, and offices based on layout and budget.' },
    { title: 'Video Door Phone Systems', desc: 'Secure entry management with 2-way audio and door release integration.' },
    { title: 'Biometric Attendance Systems', desc: 'Fingerprint, RFID, and face recognition attendance with reporting.' },
    { title: 'Annual Maintenance Contract (AMC)', desc: 'Preventive maintenance, health checks, and priority support to avoid downtime.' },
  ]

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Services</h1>
          <p className="mt-2 text-blue-200/80 max-w-3xl">Professional installation and maintenance services across Berhampur, Ganjam.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-blue-200/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function GalleryPage() {
  const pics = Array.from({ length: 9 }).map((_, i) => `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60&ixid=${i}`)
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Gallery</h1>
          <p className="mt-2 text-blue-200/80">Some of our recent installations and setups.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pics.map((src, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl border border-white/10 bg-slate-900">
                <img src={src} alt="Installation" className="w-full h-52 object-cover group-hover:scale-[1.03] transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="mt-3 text-blue-200/80 max-w-3xl">Odisha Security System is a trusted CCTV and security solutions provider based in Berhampur, Ganjam, Odisha. We focus on reliability, affordability, and long-term customer support.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="mt-2 text-blue-200/80">Skilled technicians with hands-on experience in residential and commercial security setups.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Values</h3>
              <p className="mt-2 text-blue-200/80">Transparency, quick service, and customer-first approach.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-blue-200/80">To secure homes and businesses with reliable, modern surveillance solutions.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function ContactPage() {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    'Hello Odisha Security System, I want to inquire about CCTV installation.'
  )}`;

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <section id="contact" className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-blue-200/80">We respond quickly with same-day support in many cases.</p>

          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10">
                Call: +91 98765 43210
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">
                WhatsApp Us
              </a>
              <div className="text-blue-200/80">Address: Berhampur, Ganjam, Odisha</div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Berhampur%2C%20Ganjam%2C%20Odisha&z=12&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Your Name" required />
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Phone Number" required />
                <input type="email" className="sm:col-span-2 w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Email (optional)" />
                <textarea rows="4" className="sm:col-span-2 w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Tell us about your requirement"></textarea>
              </div>
              <button className="mt-4 w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
