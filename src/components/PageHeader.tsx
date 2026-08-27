import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface PageHeaderProps {
  index: string
  label: string
  title: ReactNode
  subtitle?: string
}

export default function PageHeader({
  index,
  label,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 sm:pt-20 md:px-12">
      <Reveal y={20}>
        <div className="flex items-center gap-3">
          <span className="text-mint text-sm font-semibold tracking-[0.3em] uppercase">
            {index}
          </span>
          <span className="h-px w-12 bg-mint/40" />
          <span className="text-fog text-xs uppercase tracking-[0.25em]">
            {label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08} y={30}>
        <h1 className="mt-5 font-display font-bold uppercase leading-[0.95] tracking-tight text-4xl sm:text-6xl md:text-8xl">
          {title}
        </h1>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.16} y={20}>
          <p className="mt-5 max-w-xl text-base text-fog leading-relaxed sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
