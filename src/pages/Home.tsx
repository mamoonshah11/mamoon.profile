import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, MapPin,  } from 'lucide-react'
import Reveal from '../components/Reveal'
import Ticker from '../components/Ticker'
import MatrixPortrait from '../components/MatrixPortrait'
import logo from '../assets/logo.png' // Adjust path depending on your component directory


const STATS = [
  { value: '2028', label: 'BS CS abroad' },
  { value: '2+', label: 'Years building' },
  { value: '10+', label: 'Projects shipped' },
]

const EXPLORE = [
  {
    n: '01',
    title: 'About',
    desc: 'Student, founder & developer from Peshawar with a roadmap to a BS in Computer Science abroad in 2028.',
    to: '/about',
  },
  {
    n: '02',
    title: 'Skills',
    desc: 'The full toolkit — from C and Python to React, TypeScript, Node.js and conversion-rate engineering.',
    to: '/skills',
  },
  {
    n: '03',
    title: 'Services',
    desc: 'Landing pages, CRO audits, web apps and e-commerce automation through  NOVAM Lab.',
    to: '/services',
  },
  {
    n: '04',
    title: 'Projects',
    desc: 'Agencies, client systems and experiments — every one shipped, tested and learned from.',
    to: '/projects',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-40 h-136 w-136 rounded-full bg-mint/20 blur-[140px] animate-glow" />
        <div className="pointer-events-none absolute top-1/3 -left-52 h-112 w-md rounded-full bg-teal-500/10 blur-[140px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(180,220,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(180,220,200,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <span className="pointer-events-none absolute -bottom-24 -right-8 select-none font-display font-bold text-outline text-[38vw] leading-none">
          MM
        </span>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-24">
          {/* Left */}
          <div>
            <Reveal y={18} duration={0.6}>
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-mint/25 bg-mint/6 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                <span className="text-xs text-mint-soft tracking-wide sm:text-sm">
                  Open to work — Remote / Worldwide
                </span>
              </div>
            </Reveal>

            <h1 className="font-display font-bold uppercase leading-[0.88] tracking-tight text-[clamp(3rem,11vw,8.5rem)]">
              <Reveal delay={0.1} y={60}>
                <span className="block">Mian</span>
              </Reveal>
              <Reveal delay={0.2} y={60}>
                <span className="block">Mamoon</span>
              </Reveal>
              <Reveal delay={0.3} y={60}>
                <span className="block text-gradient-mint">Shah</span>
              </Reveal>
            </h1>

            <Reveal delay={0.4} y={24}>
              <p className="mt-8 max-w-md text-base text-fog leading-relaxed sm:text-lg">
                Developer & growth engineer building high-converting web
                experiences. Founder and CEO of{' '}
                <span className="text-mint-soft"> NOVAM Lab</span>{' '}
                — where code meets conversion.
              </p>
            </Reveal>

            <Reveal delay={0.5} y={24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-mint-soft hover:-translate-y-0.5"
                >
                  View Projects
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cloud/20 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-cloud transition-all duration-300 hover:border-mint/60 hover:text-mint hover:-translate-y-0.5"
                >
                  Get In Touch
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.6} y={24}>
              <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2 text-sm text-fog">
                  <MapPin className="h-4 w-4 text-mint" />
                  Peshawar, KPK — PKT (UTC+5)
                </div>
                <div className="flex items-center gap-8">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <div className="font-display text-xl font-bold text-cloud sm:text-2xl">
                        {stat.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-fog">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — code-rain portrait */}
          <Reveal delay={0.35} x={40} y={0}>
            <MatrixPortrait
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Mian Mamoon Shah portrait"
              className="mx-auto w-full max-w-100 lg:max-w-none"
            />
          </Reveal>
        </div>
      </section>

      <Ticker />

    {/* NOVAM lab */}
<section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 md:px-12">
  <Reveal y={20}>
    <div
      className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
      style={{
        background:
          'linear-gradient(135deg, rgba(2,44,34,0.6), rgba(6,95,70,0.3), rgba(9,14,11,0.7))',
        border: '1px solid rgba(52,211,153,0.15)',
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/10 blur-[100px]" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        
        {/* High-Contrast Logo Badge */}
        <div 
  className="flex h-16 shrink-0 items-center justify-center rounded-2xl px-4 py-2.5 border-2 border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.35)] transition-all duration-300"
  style={{
    background: 'radial-gradient(circle, #FFFFFF 40%, #E6FAF7 100%)',
  }}
>
  <img 
    src={logo} 
    alt="NOVAM Lab Logo" 
    className="h-9 w-auto object-contain" 
  />
</div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-3">
            <h3 className="font-display text-xl font-bold text-cloud sm:text-2xl">
              NOVAM Lab
            </h3>
            <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] text-mint-soft">
              My Firm
            </span>
          </div>
          <p className="mt-2 max-w-xl text-sm text-fog leading-relaxed sm:text-base">
            A digital services brand I founded — focused on high-converting
            landing pages, CRO audits and revenue-focused web applications.
            Where code meets conversion.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cloud/20 px-6 py-3 font-display text-xs font-semibold uppercase tracking-widest text-cloud transition-all duration-300 hover:border-mint/60 hover:text-mint hover:-translate-y-0.5"
        >
          Our Services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </Reveal>
</section>

      {/* Explore */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-12 sm:py-28">
        <Reveal y={20}>
          <div className="mb-10 flex items-center gap-3">
            <span className="text-mint text-sm font-semibold tracking-[0.3em] uppercase">
              Explore
            </span>
            <span className="h-px w-12 bg-mint/40" />
            <span className="text-fog text-xs uppercase tracking-[0.25em]">
              Take the tour
            </span>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {EXPLORE.map((card, i) => (
            <Reveal key={card.n} delay={i * 0.08}>
              <Link
                to={card.to}
                className="group relative block h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(22,33,27,0.7), rgba(9,14,11,0.7))',
                  border: '1px solid rgba(180,220,200,0.12)',
                }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-mint/10 blur-3xl transition-all duration-500 group-hover:bg-mint/20" />
                <div className="relative">
                  <span className="font-display font-bold text-outline text-5xl">
                    {card.n}
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 font-display text-xl font-semibold text-cloud sm:text-2xl">
                    {card.title}
                    <ArrowUpRight className="h-5 w-5 text-mint transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="mt-3 text-sm text-fog leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-y border-white/5 bg-panel/40 px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-120 -translate-x-1/2 rounded-full bg-mint/10 blur-[120px]" />
        <Reveal y={24}>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-cloud sm:text-5xl">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.12} y={20}>
          <p className="mx-auto mt-4 max-w-lg text-fog">
            Let's turn it into a high-converting, well-engineered product.
          </p>
        </Reveal>
        <Reveal delay={0.22} y={20}>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-9 py-4 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-mint-soft hover:-translate-y-1"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  )
}
