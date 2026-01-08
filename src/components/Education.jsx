import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi'
import './Education.css'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      degree: 'M.S. in Computer Science',
      school: 'University of California, Santa Cruz',
      location: 'Santa Cruz, CA',
      period: 'Fall 2025 - Summer 2027 (Expected)',
      current: true,
      courses: [
        'CSE 240 - Artificial Intelligence',
        'CSE 201 - Algorithms',
        'CSE 186 - Full Stack Web Development',
        'CSE 210A - Programming Languages',
      ],
    },
    {
      degree: 'B.E. in Electronics & Communication',
      school: 'Netaji Subhas University of Technology',
      location: 'Delhi, India',
      period: '2014 - 2018',
      current: false,
      highlight: '79.9%',
    },
  ]

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Continuous learning from fundamentals to cutting-edge AI
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className={`education-card ${edu.current ? 'current' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              {edu.current && <span className="current-badge">Current</span>}

              <div className="education-icon">
                <FiBookOpen />
              </div>

              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-school">{edu.school}</h4>

              <div className="education-meta">
                <span className="meta-item">
                  <FiCalendar />
                  {edu.period}
                </span>
                <span className="meta-item">
                  <FiMapPin />
                  {edu.location}
                </span>
              </div>

              {edu.courses && (
                <div className="education-courses">
                  <h5>Relevant Coursework</h5>
                  <ul>
                    {edu.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.highlight && (
                <div className="education-highlight">
                  <span className="highlight-value">{edu.highlight}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
