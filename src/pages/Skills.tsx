import type { ReactNode } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
} from 'react-icons/fa'
import {
  SiTypescript,
  // SiC,
  // SiCplusplus,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiShopify,
  SiOdoo,
  SiTradingview,
} from 'react-icons/si'
import { BarChart3, LineChart, Megaphone, ShoppingBag } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import Ticker from '../components/Ticker'

interface Chip {
  Icon: typeof FaHtml5
  name: string
  color: string
}

const LANGUAGES: Chip[] = [
  { Icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
  { Icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
  { Icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: FaPython, name: 'Python', color: '#3776AB' },
  // { Icon: SiC, name: 'C', color: '#A8B9CC' },
  // { Icon: SiCplusplus, name: 'C++', color: '#00599C' },
]

const FRONTEND: Chip[] = [
  { Icon: FaReact, name: 'React', color: '#61DAFB' },
  { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { Icon: SiVite, name: 'Vite', color: '#646CFF' },
  { Icon: FaFigma, name: 'Figma', color: '#F24E1E' },
]

const BACKEND: Chip[] = [
  { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { Icon: FaGitAlt, name: 'Git', color: '#F05032' },
  { Icon: FaGithub, name: 'GitHub', color: '#FFFFFF' },
  { Icon: FaNpm, name: 'npm', color: '#CB3837' },
]

const PLATFORMS: Chip[] = [
  { Icon: SiVercel, name: 'Vercel', color: '#FFFFFF' },
  { Icon: SiShopify, name: 'Shopify', color: '#7AB55C' },
  { Icon: SiOdoo, name: 'Odoo', color: '#714B67' },
  { Icon: SiTradingview, name: 'TradingView', color: '#2196F3' },
]

function ChipRow({ chips }: { chips: Chip[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {chips.map(({ Icon, name, color }) => (
        <span
          key={name}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-2 text-sm text-fog transition-all duration-300 hover:border-mint/40 hover:bg-white/6 hover:text-cloud"
        >
          <Icon
            size={16}
            color={color}
            className="transition-transform duration-300 group-hover:scale-125"
          />
          {name}
        </span>
      ))}
    </div>
  )
}

interface CardShellProps {
  title: string
  icon: ReactNode
  className?: string
  children: ReactNode
  delay?: number
}

function CardShell({
  title,
  icon,
  className = '',
  children,
  delay = 0,
}: CardShellProps) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="group panel h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:shadow-[0_18px_50px_-20px_rgba(52,211,153,0.25)] sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-mint/25 bg-mint/10">
            {icon}
          </span>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-cloud">
            {title}
          </h3>
        </div>
        {children}
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <main>
      <PageHeader
        index="02"
        label="Skills"
        title={
          <>
            The full
            <br />
            <span className="text-gradient-mint">toolkit.</span>
          </>
        }
        subtitle="Languages, frameworks, platforms and the growth skills that make the difference — everything I use to ship products."
      />

      <Ticker />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 sm:py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <CardShell
            title="Languages & Core"
            icon={
              <span className="font-display text-sm font-bold text-mint">A</span>
            }
            className="md:col-span-4 md:row-span-2"
            delay={0}
          >
            <p className="mb-6 text-sm text-fog leading-relaxed">
              The foundation everything else sits on — from static pages to
              compiled systems.
            </p>
            <ChipRow chips={LANGUAGES} />
            <div className="mt-8 border-t border-white/5 pt-5">
              <div className="font-display text-4xl font-bold text-gradient-mint sm:text-5xl">
                Full-stack
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-fog">
                Front to back, idea to deploy
              </div>
            </div>
          </CardShell>

          <CardShell
            title="Front-End"
            icon={<FaReact size={18} className="text-mint" />}
            className="md:col-span-2"
            delay={0.08}
          >
            <ChipRow chips={FRONTEND} />
          </CardShell>

          <CardShell
            title="Backend & Tools"
            icon={<FaNodeJs size={18} className="text-mint" />}
            className="md:col-span-2"
            delay={0.16}
          >
            <ChipRow chips={BACKEND} />
          </CardShell>

          <CardShell
            title="Platforms & Commerce"
            icon={<ShoppingBag size={18} className="text-mint" />}
            className="md:col-span-3"
            delay={0.1}
          >
            <ChipRow chips={PLATFORMS} />
          </CardShell>

          <CardShell
            title="Growth & Optimization"
            icon={<BarChart3 size={18} className="text-mint" />}
            className="md:col-span-3"
            delay={0.18}
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { Icon: LineChart, label: 'CRO Engineering' },
                { Icon: Megaphone, label: 'Social Growth' },
                { Icon: ShoppingBag, label: 'E-Commerce Ops' },
                { Icon: BarChart3, label: 'Profitability Analysis' },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/3 px-3 py-2.5 text-sm text-fog transition-colors duration-300 hover:border-mint/40 hover:text-cloud"
                >
                  <Icon size={16} className="shrink-0 text-mint" />
                  {label}
                </div>
              ))}
            </div>
          </CardShell>
        </div>
      </section>
    </main>
  )
}
