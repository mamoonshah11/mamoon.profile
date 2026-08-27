import { useRef, type MouseEvent } from 'react'
import {
  // ArrowUpRight,
  Bot,
  Building2,
  Calculator,
  CheckCircle2,
  Film,
  Gamepad2,
  LayoutTemplate,
  Music,
  Package,
  QrCode,
  Receipt,
  Server,
  Sparkles,
  Store,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'

interface Project {
  n: string
  category: string
  title: string
  desc: string
  tech: string[]
  github: string
  palette: [string, string, string]
  Icon: LucideIcon
  featured?: boolean
  statusBadge?: string
}

// 1. Flagship Core Applications
const MAIN_PROJECTS: Project[] = [
  {
    n: '01',
    category: 'Full-Stack Web App',
    title: 'eBay Inventory & Order Management System',
    desc: 'Decoupled multi-channel inventory management engine featuring automated SKU synchronization, bulk product publishing, live stock-level tracking, and order fulfillment workflows.',
    tech: ['React', 'Node.js', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#083344', '#155e75', '#22d3ee'],
    Icon: Package,
    featured: true,
  },
  {
    n: '02',
    category: 'Fintech & Ledger App',
    title: 'QistFlow — Smart Installment & Ledger (Qata) System',
    desc: 'Comprehensive installment recovery and customer credit ledger platform featuring automated monthly payment schedules, overdue penalty tracking, instant receipts, and real-time cash flow analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#042f2e', '#0f766e', '#2dd4bf'],
    Icon: Receipt,
  },
  {
    n: '03',
    category: 'Infrastructure & Cloud',
    title: 'High-Performance Cloud RDP Gateway',
    desc: 'Dedicated remote desktop provisioning and virtualization architecture engineered for low-latency session management, isolated environments, and secure remote server access.',
    tech: ['Python', 'Linux Networking', 'Cloud VPS', 'Security Protocols'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#1e1b4b', '#312e81', '#6366f1'],
    Icon: Server,
  },
  {
    n: '04',
    category: 'Audio Web App',
    title: 'Pride Dynamic Music Player',
    desc: 'Modern audio streaming client featuring custom playback engines, dynamic queue orchestration, persistent user playlists, and responsive artist discovery modules.',
    tech: ['React', 'JavaScript', 'Web Audio API', 'Tailwind CSS'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#2e1065', '#5b21b6', '#a78bfa'],
    Icon: Music,
  },
  {
    n: '05',
    category: 'Conversion & Growth',
    title: 'CRO Intelligence & Funnel Optimization Platform',
    desc: 'Data-driven conversion rate optimization system built with real-time user behavior tracking, multivariate A/B testing controllers, and automated checkout funnel enhancements.',
    tech: ['React', 'TypeScript', 'Analytics Engine', 'Tailwind CSS'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#064e3b', '#047857', '#34d399'],
    Icon: TrendingUp,
  },
]

// 2. Upcoming Applications & Pipeline Builds
const UPCOMING_PROJECTS: Project[] = [
  {
    n: '06',
    category: 'E-Commerce ERP Integration',
    title: 'Shopify-Odoo Synapse Micro-App',
    desc: 'Automated bi-directional connector bridging Shopify storefronts with Odoo ERP for live multi-warehouse sync, tax reconciliation, and instant order dispatch automation.',
    tech: ['Shopify API', 'Odoo XML-RPC', 'Python', 'Webhooks'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#4c0519', '#9f1239', '#fb7185'],
    Icon: Store,
    statusBadge: 'In Development',
  },
  {
    n: '07',
    category: 'AI & Web Automation',
    title: 'Autonomous Lead Generation Bot',
    desc: 'Intelligent multi-channel prospecting bot that scours B2B directories, extracts verified business intelligence, and automates customized outreach sequences on autopilot.',
    tech: ['Python', 'Playwright', 'Gemini AI API', 'Data Extraction'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#042f2e', '#115e59', '#2dd4bf'],
    Icon: Bot,
    statusBadge: 'In Testing',
  },
  {
    n: '08',
    category: 'Enterprise Real Estate SaaS',
    title: 'GFPG GrandVista Hospitality & Estate Cloud',
    desc: 'Full-scale property and hotel operations suite supporting multi-role portals (Guests, Hosts, Property Managers) with interactive room booking, availability calendars, and payment processing.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#451a03', '#92400e', '#fbbf24'],
    Icon: Building2,
    featured: true,
    statusBadge: 'Core Build',
  },
  {
    n: '09',
    category: 'Design Systems',
    title: ' NOVAM Lab Templates & UI Kit',
    desc: 'Collection of high-converting agency landing page frameworks, responsive marketing themes, and modular dashboard component blocks built for production-ready velocity.',
    tech: ['Figma', 'HTML5', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#431407', '#7c2d12', '#f97316'],
    Icon: Sparkles,
    statusBadge: 'Design Phase',
  },
]

// 3. Multi-Stack & Language Lab
const LAB_PROJECTS: Project[] = [
  // Python Section
  {
    n: '10',
    category: 'Python Game Engine',
    title: 'Retro Arcade Physics Suite (Snake, Rocket & Dynamic Collision)',
    desc: 'Interactive 2D simulation package containing responsive Snake game loops, momentum-based rocket trajectory propulsion, and velocity-based obstacle physics.',
    tech: ['Python', 'Pygame', 'Physics Modeling'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#14532d', '#15803d', '#4ade80'],
    Icon: Gamepad2,
  },
  {
    n: '11',
    category: 'Python Automation',
    title: 'Automated Matrix & Custom QR Code Generator',
    desc: 'High-density vector QR code generation utility supporting embedded brand badges, error correction resilience, and batch exporting for business assets.',
    tech: ['Python', 'Pillow', 'QRCode Module'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#3b0764', '#6b21a8', '#c084fc'],
    Icon: QrCode,
  },
  // HTML / CSS / JS Section
  {
    n: '12',
    category: 'Front-End Development',
    title: 'Untree.co Furni Modern E-Commerce Storefront',
    desc: 'Responsive, pixel-perfect digital furniture catalog and shopping interface translated faithfully from Figma designs using semantic markup and fluid layouts.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#1e293b', '#334155', '#94a3b8'],
    Icon: LayoutTemplate,
  },
  {
    n: '13',
    category: 'UI/UX Engineering',
    title: 'Netflix Cinematic Streaming Interface',
    desc: 'Authentic dark-mode streaming media dashboard featuring multi-row horizontal carousels, responsive video preview overlays, and category filtering.',
    tech: ['JavaScript', 'HTML5', 'CSS Grid', 'TMDB API'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#450a0a', '#991b1b', '#ef4444'],
    Icon: Film,
  },
  {
    n: '14',
    category: 'Web Application',
    title: 'Mastery Interactive Quiz & Challenge Engine',
    desc: 'Interactive testing platform featuring countdown timers, dynamic multiple-choice question state, real-time score calculation, and progress dashboards.',
    tech: ['JavaScript', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#164e63', '#0891b2', '#22d3ee'],
    Icon: CheckCircle2,
  },
  {
    n: '15',
    category: 'Utility Suite',
    title: 'Precision Calculator & Multi-Tally Machine',
    desc: 'Front-end calculation suite combining memory-backed mathematical expression solvers with a multi-channel tally counting utility for data tracking.',
    tech: ['JavaScript', 'CSS3', 'DOM API'],
    github: 'https://github.com/mamoonshah11',
    palette: ['#422006', '#854d0e', '#facc15'],
    Icon: Calculator,
  },
]

function ProjectCover({
  project,
  featured,
}: {
  project: Project
  featured?: boolean
}) {
  const [c0, c1] = project.palette
  const { Icon } = project

  return (
    <div
      className={`group/cover relative overflow-hidden rounded-2xl border border-white/10 ${
        featured ? 'h-56 sm:h-64' : 'h-48'
      }`}
      style={{
        background: `linear-gradient(135deg, ${c0}, ${c1})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: `linear-gradient(135deg, ${c0}80, transparent 55%)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          size={featured ? 80 : 56}
          strokeWidth={1}
          className="text-white/25 transition-all duration-700 group-hover/cover:scale-110 group-hover/cover:text-white/40"
        />
      </div>
      <span
        className="absolute -bottom-8 -left-2 select-none font-display font-bold"
        style={{
          fontSize: 'clamp(6rem, 20vw, 11rem)',
          WebkitTextStroke: '1px rgba(255,255,255,0.18)',
          color: 'transparent',
        }}
      >
        {project.n}
      </span>
      <div className="absolute right-4 top-4 flex items-center gap-2">
        {project.statusBadge && (
          <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-mint backdrop-blur-sm">
            {project.statusBadge}
          </span>
        )}
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {project.category}
        </span>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  delay,
  featured,
}: {
  project: Project
  delay: number
  featured?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Reveal delay={delay} className={featured ? 'md:col-span-2' : ''}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1"
        style={{
          background: `radial-gradient(620px circle at var(--mx, 50%) var(--my, 50%), rgba(52,211,153,0.10), transparent 45%), linear-gradient(180deg, rgba(22,33,27,0.75), rgba(9,14,11,0.75))`,
          border: '1px solid rgba(180,220,200,0.12)',
        }}
      >
        <ProjectCover project={project} featured={featured} />

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-cloud transition-colors duration-300 group-hover:text-mint-soft sm:text-2xl">
              {project.title}
            </h3>
            <span className="mt-1 shrink-0 font-display font-bold text-outline">
              {project.n}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-fog">{project.desc}</p>

          <div className="mt-auto pt-3">
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-fog"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-mint-soft hover:-translate-y-0.5"
            >
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </a> */}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
}: {
  badge: string
  title: string
  highlight: string
  subtitle: string
}) {
  return (
    <div className="mb-10 mt-20 flex flex-col justify-between gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end">
      <div>
        <span className="font-display text-xs font-semibold uppercase tracking-widest text-mint">
          {badge}
        </span>
        <h2 className="font-display text-2xl font-bold text-cloud sm:text-3xl">
          {title} <span className="text-gradient-mint">{highlight}</span>
        </h2>
      </div>
      <span className="text-xs text-fog">{subtitle}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <main>
      <PageHeader
        index="04"
        label="Projects"
        title={
          <>
            Selected
            <br />
            <span className="text-gradient-mint">work.</span>
          </>
        }
        subtitle="Full-stack enterprise tools, financial ledger apps, cloud systems, upcoming client platforms, and multi-language experimental labs."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:px-12">
        {/* Section 1: Main Flagship Projects */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {MAIN_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.n}
              project={project}
              delay={i * 0.08}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Section 2: Upcoming Apps & Pipeline */}
        <SectionHeading
          badge="In Development"
          title="Upcoming"
          highlight="Applications"
          subtitle="Client suites, micro-apps & enterprise platforms in progress"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {UPCOMING_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.n}
              project={project}
              delay={i * 0.08}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Section 3: Multi-Stack & Language Lab */}
        <SectionHeading
          badge="Experiments & Utilities"
          title="Polyglot"
          highlight="Code Lab"
          subtitle="Python physics engines, automation tools & vanilla JS interfaces"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {LAB_PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.n}
              project={project}
              delay={i * 0.08}
              featured={project.featured}
            />
          ))}
        </div>
      </section>
    </main>
  )
}