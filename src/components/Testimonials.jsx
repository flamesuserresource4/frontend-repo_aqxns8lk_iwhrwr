import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rakesh, Berhampur',
    text: 'Professional team, quick installation, and crystal clear camera quality. Highly recommended!'
  },
  {
    name: 'Anita, Shop Owner',
    text: 'They configured my DVR and remote viewing perfectly. Great support even after installation.'
  },
  {
    name: 'Sanjay, Office Manager',
    text: 'Affordable pricing and timely service. Their AMC keeps our system running smoothly.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What Customers Say</h2>
        <p className="mt-2 text-blue-200/80">Building trust with real experiences.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
              </div>
              <p className="mt-3 text-blue-100/90">“{t.text}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
