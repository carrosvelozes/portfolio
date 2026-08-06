import { ArrowUpRight, Github, Mail } from 'lucide-react'
import { personal } from '../data/content'
import { FadeIn } from './Motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-heading">contact</h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <ul className="contact-list">
            <li>
              <a href={`mailto:${personal.email}`} className="contact-item link">
                <Mail size={14} strokeWidth={1.5} />
                <span className="contact-item__label mono">email</span>
                <span className="contact-item__value">{personal.email}</span>
                <ArrowUpRight size={13} strokeWidth={1.5} className="contact-item__arrow" />
              </a>
            </li>
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item link"
              >
                <Github size={14} strokeWidth={1.5} />
                <span className="contact-item__label mono">github</span>
                <span className="contact-item__value">carrosvelozes</span>
                <ArrowUpRight size={13} strokeWidth={1.5} className="contact-item__arrow" />
              </a>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
