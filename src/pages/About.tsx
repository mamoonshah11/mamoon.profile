import { Award, GraduationCap, MapPin, FlaskConical, Globe, Users } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import MatrixPortrait from '../components/MatrixPortrait'

const TIMELINE = [
  {
    year: '2028',
    title: 'BS Computer Science — Abroad',
    desc: 'Planning to apply for an undergraduate degree overseas. Next chapter after F.Sc.',
    tag: 'Planned',
    accent: true,
  },
  {
    year: '2025',
    title: 'F.Sc Pre-Engineering / Computer Science',
    desc: 'Islamia College Peshawar — currently studying, in progress.',
    tag: 'In progress',
    accent: false,
  },
  {
    year: 'Past',
    title: 'Matriculation',
    desc: 'Completed secondary education and started the software journey.',
    tag: 'Completed',
    accent: false,
  },
]

export default function About() {
  return (
    <main>
      <PageHeader
        index="01"
        label="About"
        title={
          <>
            Built in Peshawar,
            <br />
            <span className="text-gradient-mint">built for the world.</span>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left — bio + cards */}
          <div>
            <Reveal y={24}>
              <p className="text-base text-fog leading-relaxed sm:text-lg">
                I'm <span className="text-cloud">Mian Mamoon Shah</span> — a
                student and developer from Peshawar with a simple obsession:
                turning code into results. I split my time between my F.Sc at{' '}
                <span className="text-mint-soft">Islamia College Peshawar</span>{' '}
                and running{' '}
                <span className="text-mint-soft">
                  NOVAM Lab
                </span>
                , an agency focused on high-converting landing pages, CRO audits
                and revenue-focused web tools.
              </p>
            </Reveal>

            <Reveal delay={0.12} y={24}>
              <p className="mt-6 text-base text-fog leading-relaxed sm:text-lg">
                My edge is the blend: front-end engineering with a marketer's
                instinct. I don't just build interfaces — I build the pages and
                products that move numbers. Next stop: a BS in Computer Science
                abroad in 2028.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Reveal delay={0.18}>
                <div className="panel flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-mint/25 bg-mint/10">
                    <Award className="h-5 w-5 text-mint" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-cloud">
                      Certified Web Developer
                    </div>
                    <div className="mt-1 text-sm text-fog">
                      Professional web development certification.
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="panel flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-mint/25 bg-mint/10">
                    <MapPin className="h-5 w-5 text-mint" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-cloud">
                      Peshawar, Pakistan
                    </div>
                    <div className="mt-1 text-sm text-fog">
                      PKT (UTC+5) — remote-friendly worldwide.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right — portrait + timeline */}
          <div className="flex flex-col gap-10">
            <MatrixPortrait
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Mian Mamoon Shah portrait"
              className="mx-auto w-full max-w-sm"
            />
          </div>
        </div>

        {/* NOVAM LAB */}
        <div className="mt-20">
          <Reveal delay={0.1}>
            <div className="mb-8 flex items-center gap-3">
              <FlaskConical className="h-5 w-5 text-mint" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cloud">
                Company
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} y={24}>
            <div
              className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
              style={{
                background:
                  'linear-gradient(135deg, rgba(22,33,27,0.7), rgba(9,14,11,0.7))',
                border: '1px solid rgba(180,220,200,0.12)',
              }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/8 blur-[100px]" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10">
                    <FlaskConical className="h-6 w-6 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-cloud sm:text-3xl">
                      NOVAM LAB
                    </h3>
                    <span className="text-sm text-fog">Technology & Innovation</span>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-sm text-fog leading-relaxed sm:text-base">
                  A technology lab focused on building innovative web solutions,
                  experimental tools and digital products. From concept to deployment
                  — shipping software that pushes boundaries.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/2 p-4">
                    <Globe className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <div>
                      <div className="font-display text-sm font-semibold text-cloud">
                        Web Solutions
                      </div>
                      <div className="mt-1 text-xs text-fog">
                        Full-stack apps, SaaS platforms and digital tools.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/2 p-4">
                    <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <div>
                      <div className="font-display text-sm font-semibold text-cloud">
                        R&D
                      </div>
                      <div className="mt-1 text-xs text-fog">
                        Experimental projects and emerging tech exploration.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/2 p-4">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <div>
                      <div className="font-display text-sm font-semibold text-cloud">
                        Consulting
                      </div>
                      <div className="mt-1 text-xs text-fog">
                        Tech strategy and product development for clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <Reveal delay={0.1}>
            <div className="mb-8 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-mint" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cloud">
                Education path
              </span>
            </div>
          </Reveal>

          <div className="relative ml-4 max-w-2xl border-l border-white/10 pl-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.title} delay={0.12 + i * 0.1} y={30}>
                <div className="relative mb-8 last:mb-0">
                  <span
                    className={`absolute -left-10.25 top-2 h-3.75 w-3.75 rounded-full border-2 ${
                      item.accent
                        ? 'border-mint bg-mint shadow-[0_0_18px_rgba(52,211,153,0.8)]'
                        : 'border-mint/50 bg-ink'
                    }`}
                  />
                  <div
                    className={`rounded-2xl p-6 ${
                      item.accent ? 'border border-mint/30' : 'panel'
                    }`}
                    style={
                      item.accent
                        ? {
                            background:
                              'linear-gradient(180deg, rgba(22,33,27,0.7), rgba(9,14,11,0.7))',
                          }
                        : undefined
                    }
                  >
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`font-display text-2xl font-bold ${
                          item.accent ? 'text-mint' : 'text-cloud'
                        }`}
                      >
                        {item.year}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                          item.accent
                            ? 'border border-mint/30 bg-mint/15 text-mint-soft'
                            : 'border border-white/10 bg-white/5 text-fog'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="mb-1.5 font-display font-semibold text-cloud">
                      {item.title}
                    </div>
                    <p className="text-sm text-fog leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
