import { Github, Mail } from 'lucide-react'
import { personal } from '../data/content'
import { HeroReveal } from './Motion'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <HeroReveal delay={0}>
          <h1 className="hero__name">{personal.name}</h1>
        </HeroReveal>

        <HeroReveal delay={0.05}>
          <p className="hero__role mono">{personal.role}</p>
        </HeroReveal>

        <HeroReveal delay={0.1}>
          <p className="hero__stack mono">
            {personal.stack.join(' · ')}
          </p>
        </HeroReveal>

        <HeroReveal delay={0.15}>
          <p className="hero__bio">{personal.bio}</p>
        </HeroReveal>

        <HeroReveal delay={0.2}>
          <div className="hero__links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__link link link--underline"
            >
              <Github size={14} strokeWidth={1.5} />
              github
            </a>
            <span className="hero__sep mono">/</span>
            <a
              href={`mailto:${personal.email}`}
              className="hero__link link link--underline"
            >
              <Mail size={14} strokeWidth={1.5} />
              email
            </a>
          </div>
        </HeroReveal>
      </div>
    </section>
  )
}
