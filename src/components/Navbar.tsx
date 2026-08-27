import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-xs sm:text-sm uppercase tracking-[0.2em] transition-colors duration-200 ${
      isActive
        ? 'text-mint-soft'
        : 'text-fog hover:text-cloud'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint font-display text-lg font-bold text-ink transition-transform duration-300 group-hover:rotate-6">
            M
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-widest text-cloud sm:block">
            Mamoon<span className="text-mint">.dev</span>
          </span>
          <span className="hidden h-5 w-px bg-white/15 sm:block" />
          <span className="hidden font-display text-[11px] font-medium uppercase tracking-[0.3em] text-fog sm:block">
            NOVAM LAB
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-mint px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-mint-soft hover:-translate-y-0.5"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-cloud lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-white/10 transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 border-t bg-ink/95 backdrop-blur-xl' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? 'bg-mint/10 text-mint-soft'
                    : 'text-fog hover:bg-white/5 hover:text-cloud'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-mint px-4 py-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink"
          >
            Hire me
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
