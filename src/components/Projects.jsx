import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/content'
import { FadeIn, StaggerContainer, StaggerItem } from './Motion'
import './Projects.css'

function ProjectItem({ project }) {
  return (
    <article className="project panel">
      <div className="project__header">
        <div className="project__title-row">
          <h3 className="project__name">{project.name}</h3>
          {project.status && (
            <span className="project__status mono">{project.status}</span>
          )}
        </div>
        <span className="project__year mono">{project.year}</span>
      </div>

      <p className="project__stack mono">
        {project.stack.join(' · ')}
      </p>

      <p className="project__desc">{project.description}</p>

      {project.image && (
        <div className="project__preview">
          <img src={project.image} alt="" loading="lazy" />
        </div>
      )}

      <div className="project__actions">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Github size={13} strokeWidth={1.5} />
            source
          </a>
        ) : (
          <span className="btn btn--disabled">
            <Github size={13} strokeWidth={1.5} />
            source
          </span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <ExternalLink size={13} strokeWidth={1.5} />
            demo
          </a>
        ) : (
          !project.github && null
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project__ext link"
            aria-label={`Abrir ${project.name} no GitHub`}
          >
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-heading">projects</h2>
        </FadeIn>

        <StaggerContainer className="projects-list">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectItem project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
