import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'



const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/mamoonshah11', Icon: FaGithub },
  { label: 'Vercel', href: 'https://vercel.com/scale-up6', Icon: SiVercel }, // Replace with your Vercel profile link
  { label: 'Instagram', href: 'https://instagram.com/btw._.gulzar', Icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mamoon-shah-972213318/', Icon: FaLinkedin },
]

const QUICK_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5 bg-ink px-5 sm:px-8 md:px-12 pb-8 pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <button
              type="button"
              onClick={scrollTop}
              className="group flex cursor-pointer items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint font-display text-lg font-bold text-ink transition-transform duration-300 group-hover:rotate-6">
                M
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-cloud">
                Mamoon<span className="text-mint">.dev</span>
              </span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-fog leading-relaxed">
              Developer & growth engineer building high-converting web
              experiences from Peshawar, Pakistan.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={scrollTop}
                className="text-sm text-fog transition-colors duration-200 hover:text-mint-soft"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-fog transition-all duration-300 hover:border-mint/40 hover:text-mint hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={scrollTop}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-fog transition-colors duration-300 hover:border-mint/40 hover:text-mint cursor-pointer"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 md:flex-row">
          <span className="text-sm text-fog">
            © 2026 Mian Mamoon Shah. All rights reserved.
          </span>
          <span className="text-sm text-fog uppercase tracking-[0.2em]">
            Designed & built in Peshawar
          </span>
        </div>
      </div>
    </footer>
  )
}