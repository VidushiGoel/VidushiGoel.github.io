import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      icon: <FiTrendingUp />,
      title: '93% Build Time Reduction',
      description: 'Achieved through systematic runtime and memory profiling, earning the Execute with Quality award',
    },
    {
      icon: <FiZap />,
      title: '40% Debugging Time Saved',
      description: 'Architected internal performance diagnostics and profiling modules for the engineering team',
    },
    {
      icon: <FiUsers />,
      title: '10+ Enterprise Customers',
      description: 'Helped achieve verification closure for complex SoC designs through timing engine improvements',
    },
    {
      icon: <FiAward />,
      title: 'Fast-Track Promotion',
      description: 'Software Engineer I → II → Lead in just 4 years through consistent technical leadership',
    },
  ]

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            7+ years of building high-impact software at scale
          </p>
        </motion.div>

        <motion.div
          className="experience-main"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="experience-card">
            <div className="experience-header-info">
              <div className="company-info">
                <h3 className="company-name">Cadence Design Systems</h3>
                <span className="role">Lead Software Engineer</span>
              </div>
              <div className="experience-meta">
                <span className="duration">May 2018 - Sep 2025</span>
                <span className="location">7+ years</span>
              </div>
            </div>

            <div className="experience-description">
              <p>
                Led end-to-end design and development of high-performance, multi-core C++
                front-end systems for Xcelium, Cadence's flagship simulation platform used
                by leading semiconductor companies worldwide. Owned feature development and
                debugging for the timing verification engine, directly impacting verification
                closure for complex SoC designs.
              </p>
              <p>
                Beyond core development, I built the tooling ecosystem—Python and Bash
                automation processing 100GB+ daily, improving CI/CD reliability by 50%.
                Mentored engineers on system design principles, OOP/OOD best practices,
                and maintaining clean, scalable architectures in large C++ codebases.
              </p>
            </div>

            <div className="tech-used">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Linux</span>
              <span className="tech-tag">Bash</span>
              <span className="tech-tag">CI/CD</span>
              <span className="tech-tag">Performance Optimization</span>
            </div>
          </div>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
