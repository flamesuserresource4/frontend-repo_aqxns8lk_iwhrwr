import { Camera, Wifi, HardDrive, Home, DoorOpen, Fingerprint, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: Camera, title: 'CCTV Camera Installation (HD & IP)', desc: 'High-definition and IP cameras for crystal clear surveillance.' },
  { icon: Wifi, title: 'WiFi Wireless CCTV', desc: 'Wire-free solutions for quick, clean setups.' },
  { icon: HardDrive, title: 'DVR/NVR Setup & Configuration', desc: 'Reliable recording and remote playback.' },
  { icon: Home, title: 'Home & Shop Surveillance Setup', desc: 'Complete packages tailored to your space.' },
  { icon: DoorOpen, title: 'Video Door Phone Systems', desc: 'Identify visitors and control access securely.' },
  { icon: Fingerprint, title: 'Biometric Attendance Systems', desc: 'Accurate time tracking for offices and schools.' },
  { icon: Wrench, title: 'Annual Maintenance Contract (AMC)', desc: 'Proactive health checks and quick fixes.' },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Services</h2>
            <p className="mt-2 text-blue-200/80 max-w-2xl">Installation, configuration, and maintenance for CCTV and security systems.</p>
          </div>
          <Link to="/services" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10">View All</Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:border-blue-500/30 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
