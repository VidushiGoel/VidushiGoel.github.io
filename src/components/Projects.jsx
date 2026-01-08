import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'PR Risk Assessment Agent',
      subtitle: 'Agentic AI System',
      description:
        'An autonomous AI agent that automates pull request risk assessment using the LangChain ReAct pattern and GPT-4o. The system implements multi-step agentic reasoning with custom tool orchestration for heuristics analysis and knowledge retrieval. Features weighted pattern detection across 15+ security signals (auth, payments, database changes) with LLM synthesis for intelligent risk scoring and actionable mitigation recommendations.',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'GPT-4o'],
      github: 'https://github.com/VidushiGoel',
      featured: true,
    },
    {
      title: 'SlugBook',
      subtitle: 'Full-Stack Social Media Platform',
      description:
        'A comprehensive social media application built with a modern tech stack. Features a scalable RESTful API handling complex user interactions, authentication flows, and real-time updates. The frontend implements modern React patterns with hooks, context, and Material-UI for a polished user experience. Achieved 100% test coverage across the entire stack using React Testing Library, Supertest, and Puppeteer E2E tests.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Material-UI'],
      github: null,
      featured: true,
    },
    {
      title: 'Ensemble AI Resume Reviewer',
      subtitle: 'Multi-Model AI System',
      description:
        'A cost-effective alternative to professional resume review services, leveraging the power of multiple frontier AI models. The system orchestrates GPT-4, Claude 3.5, and Gemini 1.5 in parallel, implementing confidence-weighted ensemble voting and intelligent disagreement detection across 12 scoring criteria. Delivers comprehensive feedback at $0.50 per review (vs $100-300 for human services) with 30-60 second processing time.',
      technologies: ['Python', 'OpenAI API', 'Anthropic API', 'Google AI', 'Async'],
      github: 'https://github.com/VidushiGoel',
      featured: true,
    },
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Recent work exploring AI agents, full-stack development, and intelligent systems
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <div className="project-content">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View on GitHub"
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {!project.github && (
                    <span className="project-link disabled">
                      <FiGithub />
                      <span>Private Repo</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
