import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FiGithub,
  FiShield,
  FiZap,
  FiCpu,
  FiLayers,
  FiCheckCircle,
  FiAlertTriangle,
  FiDatabase,
  FiUsers,
  FiStar,
  FiArrowRight
} from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 'pr-agent',
      title: 'PR Risk Assessment Agent',
      tagline: 'Autonomous AI that guards your codebase',
      description: 'An intelligent agent that analyzes pull requests in real-time, combining deterministic heuristics with GPT-4 reasoning to surface security risks before they reach production.',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      icon: <FiShield />,
      features: [
        { icon: <FiAlertTriangle />, label: '15+ Risk Signals', desc: 'Auth, payments, DB, security' },
        { icon: <FiZap />, label: 'Real-time Analysis', desc: 'FastAPI REST endpoint' },
        { icon: <FiCpu />, label: 'ReAct Pattern', desc: 'Multi-step reasoning' },
      ],
      architecture: {
        flow: ['PR Diff', 'Heuristics Engine', 'LangChain Agent', 'Risk Report'],
        highlight: 'Weighted scoring across security-critical patterns'
      },
      stats: [
        { value: '15+', label: 'Risk Patterns' },
        { value: '1-10', label: 'Risk Score' },
        { value: '<5s', label: 'Analysis Time' },
      ],
      tech: ['Python', 'LangChain', 'GPT-4', 'FastAPI'],
      github: 'https://github.com/VidushiGoel',
    },
    {
      id: 'ensemble-reviewer',
      title: 'Ensemble Resume Reviewer',
      tagline: 'Three AI models. One objective review.',
      description: 'Why trust one AI when you can have three? This system orchestrates GPT-4, Claude, and Gemini in parallel, using confidence-weighted voting to deliver unbiased, comprehensive resume feedback.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      icon: <FiLayers />,
      features: [
        { icon: <FiStar />, label: '12 Scoring Criteria', desc: 'Content, ATS, presentation' },
        { icon: <FiCheckCircle />, label: 'Disagreement Detection', desc: 'Flags subjective areas' },
        { icon: <FiZap />, label: 'Parallel Processing', desc: '30-60 sec total time' },
      ],
      architecture: {
        flow: ['Resume', 'GPT-4 + Claude + Gemini', 'Ensemble Voting', 'Report'],
        highlight: 'Confidence-weighted aggregation eliminates model bias'
      },
      stats: [
        { value: '$0.50', label: 'Per Review' },
        { value: '3', label: 'AI Models' },
        { value: '99%', label: 'Cost Savings' },
      ],
      tech: ['Python', 'OpenAI', 'Anthropic', 'Google AI'],
      github: 'https://github.com/VidushiGoel',
    },
    {
      id: 'slugbook',
      title: 'SlugBook',
      tagline: 'Social, but make it bulletproof.',
      description: 'A full-stack social platform built with obsessive attention to quality. Every line of code is tested—frontend, backend, and E2E. Because social apps shouldn\'t break.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      icon: <FiUsers />,
      features: [
        { icon: <FiDatabase />, label: 'RESTful API', desc: 'Node.js + PostgreSQL' },
        { icon: <FiLayers />, label: 'Modern React', desc: 'Hooks, Router, Material-UI' },
        { icon: <FiCheckCircle />, label: '100% Coverage', desc: 'RTL + Supertest + Puppeteer' },
      ],
      architecture: {
        flow: ['React Frontend', 'Express API', 'PostgreSQL', 'Auth Layer'],
        highlight: 'Complete test pyramid: unit, integration, E2E'
      },
      stats: [
        { value: '100%', label: 'Test Coverage' },
        { value: '3', label: 'Test Layers' },
        { value: 'Full', label: 'Stack' },
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      github: null,
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
            AI systems and full-stack applications built with intention
          </p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          className="project-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-tab ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
              style={{ '--tab-gradient': project.gradient }}
            >
              <span className="tab-icon">{project.icon}</span>
              <span className="tab-title">{project.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Project Showcase */}
        <motion.div
          key={activeProject}
          className="project-showcase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ '--project-gradient': projects[activeProject].gradient }}
        >
          <div className="showcase-header">
            <div className="showcase-icon">
              {projects[activeProject].icon}
            </div>
            <div className="showcase-intro">
              <h3 className="showcase-title">{projects[activeProject].title}</h3>
              <p className="showcase-tagline">{projects[activeProject].tagline}</p>
            </div>
            {projects[activeProject].github ? (
              <a
                href={projects[activeProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-github"
              >
                <FiGithub />
                <span>View Code</span>
                <FiArrowRight />
              </a>
            ) : (
              <span className="showcase-github private">
                <FiGithub />
                <span>Private Repo</span>
              </span>
            )}
          </div>

          <p className="showcase-description">
            {projects[activeProject].description}
          </p>

          <div className="showcase-content">
            {/* Features */}
            <div className="showcase-features">
              <h4>Key Features</h4>
              <div className="features-grid">
                {projects[activeProject].features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-text">
                      <span className="feature-label">{feature.label}</span>
                      <span className="feature-desc">{feature.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="showcase-stats">
              {projects[activeProject].stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Flow */}
          <div className="showcase-architecture">
            <h4>How It Works</h4>
            <div className="architecture-flow">
              {projects[activeProject].architecture.flow.map((step, idx) => (
                <div key={idx} className="flow-step">
                  <span className="step-text">{step}</span>
                  {idx < projects[activeProject].architecture.flow.length - 1 && (
                    <span className="step-arrow">
                      <FiArrowRight />
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="architecture-highlight">
              {projects[activeProject].architecture.highlight}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="showcase-tech">
            {projects[activeProject].tech.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
