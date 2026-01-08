import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: <FiCode />,
      title: 'Full-Stack Development',
      description: 'Building scalable applications with React, Node.js, and modern cloud infrastructure',
    },
    {
      icon: <FiCpu />,
      title: 'Systems & Performance',
      description: '7+ years optimizing high-performance C++ applications for enterprise verification platforms',
    },
    {
      icon: <FiLayers />,
      title: 'AI & Machine Learning',
      description: 'Exploring LLMs, agentic AI, and intelligent automation through graduate research',
    },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineer at heart, lifelong learner by choice
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a software engineer currently pursuing my M.S. in Computer Science at
              UC Santa Cruz, with a passion for building systems that make a real impact.
              My journey in tech spans over 7 years of shipping production code, leading
              teams, and solving complex engineering challenges.
            </p>
            <p>
              At Cadence Design Systems, I led the development of high-performance
              verification engines used by major semiconductor companies worldwide. I
              progressed from Software Engineer I to Lead in just 4 years, driven by
              a focus on technical excellence and delivering measurable results.
            </p>
            <p>
              Now, I'm channeling my systems expertise into the exciting world of AI
              and machine learning. I'm particularly fascinated by agentic AI systems
              and how they can augment human capabilities in software development and
              beyond.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
