import { about, education, experience, personal } from '../data/content'
import { FadeIn } from './Motion'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <FadeIn>
          <h2 className="section-heading">about</h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="about__body">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about__text">{p}</p>
            ))}
            <p className="about__location mono">{personal.location}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="about__entries">
            <div className="about__group">
              <h3 className="about__label mono">education</h3>
              <ul className="about__list">
                {education.map((item) => (
                  <li key={item.title} className="about__entry">
                    <div className="about__entry-main">
                      <span className="about__entry-title">{item.title}</span>
                      <span className="about__entry-period mono">{item.period}</span>
                    </div>
                    <span className="about__entry-sub mono">{item.institution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__group">
              <h3 className="about__label mono">experience</h3>
              <ul className="about__list">
                {experience.map((item) => (
                  <li key={item.title} className="about__entry">
                    <div className="about__entry-main">
                      <span className="about__entry-title">{item.title}</span>
                      <span className="about__entry-period mono">{item.period}</span>
                    </div>
                    <span className="about__entry-sub mono">
                      {item.company} — {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
