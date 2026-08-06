import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data/content'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', ...navLinks.map((l) => l.href.slice(1))]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navigate = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a
          href="#home"
          className="navbar__logo mono"
          onClick={(e) => {
            e.preventDefault()
            navigate('#home')
          }}
        >
          lm
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link mono link link--underline ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(link.href)
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn--icon navbar__theme"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            <motion.span
              key={theme}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="navbar__theme-icon"
            >
              {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
            </motion.span>
          </button>

          <button
            type="button"
            className="btn btn--icon navbar__menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fechar' : 'Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={14} strokeWidth={1.5} /> : <Menu size={14} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="navbar__mobile-links container">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="navbar__mobile-link mono"
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
