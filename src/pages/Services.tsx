import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'

const SERVICES = [
  {
    n: '01',
    name: 'High-Converting Landing Pages',
    desc: 'Purpose-built pages engineered for speed, clarity and conversion — designed for the audience, not the template.',
    agency: true,
  },
  {
    n: '02',
    name: 'CRO Audits & Optimization',
    desc: 'Data-backed teardowns of funnels and flows, turning drop-offs into measurable revenue.',
    agency: true,
  },
  {
    n: '03',
    name: 'Web Applications',
    desc: 'Modern React applications — decoupled, scalable and built to ship fast under real deadlines.',
    agency: false,
  },
  {
    n: '04',
    name: 'E-Commerce Automation',
    desc: 'Workflow automation across Shopify and Odoo — listings, inventory and order flows that run themselves.',
    agency: false,
  },
  {
    n: '05',
    name: 'Profitability & ROI Tools',
    desc: 'Speed-to-revenue calculators, ROI estimators and AI-assisted profitability analyzers.',
    agency: true,
  },
  {
    n: '06',
    name: 'Social & Growth Strategy',
    desc: 'Content direction and social management that compounds brand presence, one week at a time.',
    agency: true,
  },
]

export default function Services() {
  return (
    <main>
      <PageHeader
        index="03"
        label="Services"
        title={
          <>
            What I
            <br />
            <span className="text-gradient-mint">do.</span>
          </>
        }
        subtitle="Everything ships through  NOVAM Lab(Founder and CEO) — where conversion engineering meets clean code."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:px-12">
        <div className="mx-auto max-w-4xl">
          {SERVICES.map((service, i) => (
            <Reveal key={service.n} delay={i * 0.08} y={26}>
              <div
                className="group flex flex-col gap-4 rounded-2xl py-7 transition-all duration-300 hover:bg-white/2 hover:pl-3 sm:flex-row sm:items-center sm:gap-8"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  borderTop:
                    i === 0 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                }}
              >
                <span className="font-display text-3xl font-bold text-outline transition-all duration-300 group-hover:text-mint sm:text-4xl group-hover:[-webkit-text-stroke:0px]">
                  {service.n}
                </span>
                <div className="flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-cloud transition-colors duration-300 group-hover:text-mint-soft sm:text-xl">
                      {service.name}
                    </h3>
                    {service.agency && (
                      <span className="rounded-full border border-mint/25 bg-mint/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-mint-soft">
                        NOVAM Lab
                      </span>
                    )}
                  </div>
                  <p className="max-w-lg text-sm leading-relaxed text-fog">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <p className="mb-6 text-fog">
              Want one of these for your business?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-9 py-4 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-mint-soft hover:-translate-y-1"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
