import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'

const EMAIL = 'mmamoonshah333@gmail.com'
const PHONE_NUMBER = '923336566638' 
const WEB3FORMS_KEY = '1a78ab83-301e-4468-bcfd-44c4b8691a5c'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/mamoonshah11', Icon: FaGithub },
  { label: 'Instagram', href: 'https://instagram.com/btw._.gulzar', Icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mamoon-shah-972213318/', Icon: FaLinkedin },
]

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [sendVia, setSendVia] = useState<'email' | 'whatsapp'>('email')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (sendVia === 'email') {
      try {
        const formData = new FormData()
        formData.append('access_key', WEB3FORMS_KEY)
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('message', form.message)
        formData.append('subject', `Portfolio message from ${form.name || 'visitor'}`)

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })

        const data = await response.json()

        if (data.success) {
          setSent(true)
          setForm({ name: '', email: '', message: '' })
          window.setTimeout(() => setSent(false), 5000)
        } else {
          alert(`Error: ${data.message || 'Failed to send email.'}`)
        }
      } catch (err) {
        alert('An error occurred while sending the email. Please try again.')
      } finally {
        setLoading(false)
      }
    } else {
      const text = encodeURIComponent(
        `Hi! I'm ${form.name || 'a visitor'}.\nEmail: ${form.email || 'N/A'}\n\nMessage:\n${form.message}`
      )
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')
      setLoading(false)
      setSent(true)
      window.setTimeout(() => setSent(false), 5000)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-cloud placeholder:text-fog/60 outline-none transition-all duration-200 focus:border-mint/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-mint/20'

  return (
    <main>
      <PageHeader
        index="05"
        label="Contact"
        title={
          <>
            Let's build
            <br />
            <span className="text-gradient-mint">something unreal.</span>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left — info */}
          <div>
            <Reveal y={24}>
              <p className="max-w-md text-base leading-relaxed text-fog sm:text-lg">
                Have a project, an idea, or a full-time role in mind? My inbox
                is always open — I usually reply within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.1} y={24}>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-mint/25 bg-mint/6 px-5 py-4 font-display text-sm font-semibold text-mint-soft transition-all duration-300 hover:border-mint/50 hover:-translate-y-0.5 sm:text-base"
              >
                <Mail className="h-5 w-5 text-mint" />
                {EMAIL}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>

            <Reveal delay={0.18} y={24}>
              <div className="mt-6 flex items-center gap-2 text-sm text-fog">
                <MapPin className="h-4 w-4 text-mint" />
                Peshawar, Khyber Pakhtunkhwa, Pakistan — PKT (UTC+5)
              </div>
            </Reveal>

            <Reveal delay={0.26} y={24}>
              <div className="mt-10">
                <div className="mb-4 text-xs uppercase tracking-[0.25em] text-fog">
                  Find me online
                </div>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 text-sm text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/40 hover:text-mint"
                    >
                      <Icon
                        size={16}
                        className="transition-transform duration-300 group-hover:scale-125"
                      />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="panel rounded-3xl p-6 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="h-2 w-2 rounded-full bg-mint/80" />
                <span className="ml-2 text-xs uppercase tracking-[0.2em] text-fog">
                  new_message.contact
                </span>
              </div>

              {/* Delivery method selector */}
              <div className="mb-6">
                <label className="mb-2 block text-sm text-fog">
                  Send Message Via
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSendVia('email')}
                    className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition-all ${
                      sendVia === 'email'
                        ? 'border-mint bg-mint/10 text-mint'
                        : 'border-white/10 bg-white/3 text-fog hover:bg-white/5'
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setSendVia('whatsapp')}
                    className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition-all ${
                      sendVia === 'whatsapp'
                        ? 'border-mint bg-mint/10 text-mint'
                        : 'border-white/10 bg-white/3 text-fog hover:bg-white/5'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-fog">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-fog">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-sm text-fog">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-mint-soft hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    {sendVia === 'email' ? 'Message Sent!' : 'Opening WhatsApp...'}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send via {sendVia === 'email' ? 'Email' : 'WhatsApp'}
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}