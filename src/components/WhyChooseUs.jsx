import { Zap, Wallet, Headphones, Wrench } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Installation',
    desc: 'Same-day installation support with minimal downtime.'
  },
  {
    icon: Wallet,
    title: 'Affordable Packages',
    desc: 'Transparent pricing for homes, shops, and businesses.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Always-on assistance for maintenance and issues.'
  },
  {
    icon: Wrench,
    title: 'Expert Team',
    desc: 'Skilled technicians with years of field experience.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Why Choose Us</h2>
        <p className="mt-2 text-blue-200/80 max-w-2xl">We are a trusted CCTV installation and security solutions provider delivering reliable protection for homes and businesses in Berhampur.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
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
