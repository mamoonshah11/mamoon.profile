import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'

const TERMINAL_LINES = [
  '$ mamoon init',
  '> loading skills ... done',
  '> building next project ...',
  '> status: open to work',
]

function TypeTerminal() {
  const [done, setDone] = useState(0)
  const [chars, setChars] = useState('')

  useEffect(() => {
    if (done >= TERMINAL_LINES.length) return
    const line = TERMINAL_LINES[done]
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setChars(line.slice(0, i))
      if (i >= line.length) {
        window.clearInterval(id)
        window.setTimeout(() => setDone((d) => d + 1), 450)
      }
    }, 38)
    return () => window.clearInterval(id)
  }, [done])

  const cursor = done >= TERMINAL_LINES.length ? '' : '▋'

  return (
    <div className="pointer-events-none absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-65 rounded-xl border border-mint/25 bg-ink/80 backdrop-blur-md px-4 py-3 font-mono text-[11px] leading-relaxed text-mint-soft shadow-[0_10px_40px_-10px_rgba(52,211,153,0.4)]">
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-mint/80" />
        <span className="ml-1 text-[10px] uppercase tracking-[0.2em] text-fog">
          mamoon@pk:~$
        </span>
      </div>
      <div className="whitespace-pre-wrap wrap-break-word">
        {TERMINAL_LINES.slice(0, done).map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
        {done < TERMINAL_LINES.length && (
          <span className="block">
            {chars}
            <span className="animate-pulse text-cloud">{cursor}</span>
          </span>
        )}
      </div>
    </div>
  )
}

interface MatrixPortraitProps {
  src: string
  alt: string
  className?: string
}

export default function MatrixPortrait({
  src,
  alt,
  className = '',
}: MatrixPortraitProps) {
  return (
    <div className={className}>
      <div
        className="relative overflow-hidden rounded-4xl border border-mint/20 bg-panel"
        style={{
          boxShadow:
            '0 0 60px -20px rgba(52,211,153,0.45), inset 0 0 40px rgba(5,8,7,0.4)',
        }}
      >
        {/* image */}
        <img
          src={src}
          alt={alt}
          className="block aspect-4/5 w-full object-cover grayscale-35"
          draggable={false}
        />

        {/* edge glow + frame */}
        <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-linear-to-b from-ink/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-ink/60 to-transparent" />

        {/* top-left chip */}
        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full border border-mint/30 bg-ink/70 px-3 py-1.5 backdrop-blur-sm">
          <Terminal className="h-3.5 w-3.5 text-mint" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-mint-soft">
            System::Mamoon
          </span>
        </div>

        {/* corner brackets */}
        <span className="pointer-events-none absolute left-3 top-12 h-5 w-5 border-l-2 border-t-2 border-mint/50" />
        <span className="pointer-events-none absolute right-3 top-12 h-5 w-5 border-r-2 border-t-2 border-mint/50" />

        {/* typewriter terminal */}
        <TypeTerminal />
      </div>
    </div>
  )
}
