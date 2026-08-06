import { skills } from '../data/content'
import { FadeIn } from './Motion'
import './Skills.css'

const categories = [
  { key: 'frontend', label: 'frontend' },
  { key: 'backend', label: 'backend' },
  { key: 'database', label: 'database' },
  { key: 'devops', label: 'devops' },
  { key: 'tools', label: 'tools' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-heading">stack</h2>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="skills-table">
            {categories.map(({ key, label }) => (
              <div key={key} className="skills-row">
                <span className="skills-row__label mono">{label}</span>
                <span className="skills-row__items mono">
                  {skills[key].join(', ')}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
