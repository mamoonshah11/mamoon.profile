const ITEMS = [
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'Python',
  'C / C++',
  'Vite',
  'Git & GitHub',
  'Vercel',
  'Figma',
  'Shopify',
  'Odoo',
]

function Strip({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex w-max animate-marquee items-center">
      {doubled.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-5 sm:px-8 font-display text-xl sm:text-3xl font-medium uppercase tracking-wide">
            {item}
          </span>
          <span className="h-2 w-2 rounded-full bg-mint" />
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-panel/40 py-5">
      <Strip items={ITEMS} />
    </section>
  )
}
