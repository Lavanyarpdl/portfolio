import { featuredProject, secondaryProjects } from '../data.js';

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <h2 className="heading">Featured Work</h2>

        <div className="projects-container">
          <div className="glass project-card">
            <div className="project-content">
              <h3>{featuredProject.name}</h3>
              <p className="project-desc">{featuredProject.description}</p>
              <div className="tech-stack">
                {featuredProject.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
              <a className="project-link" href={featuredProject.url} target="_blank" rel="noopener noreferrer">
                View Project
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
            <div className="project-visual" style={{ padding: '32px' }}>
              <img src="/flyro-mockup.png" alt="Flyro Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} />
            </div>
          </div>
        </div>

        <div className="secondary-projects">
          {secondaryProjects.map((project) => (
            <div className="glass mini-project" key={project.label}>
              <h4>{project.label}</h4>
              <p>{project.description}</p>
              <a className="mini-link" href={project.url} target="_blank" rel="noopener noreferrer">
                {project.urlLabel}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
