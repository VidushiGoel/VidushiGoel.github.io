import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactLinks = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'goelvidushi09@gmail.com',
      href: 'mailto:goelvidushi09@gmail.com',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'VidushiGoel',
      href: 'https://github.com/VidushiGoel',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'vidushigoel',
      href: 'https://linkedin.com/in/vidushigoel',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Santa Cruz, CA',
      href: null,
    },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            I'm currently seeking Summer 2026 internship opportunities in software engineering
            and AI/ML. Whether you want to discuss a potential role, collaborate on a project,
            or just say hello—I'd love to hear from you.
          </p>

          <motion.a
            href="mailto:goelvidushi09@gmail.com"
            className="btn btn-primary contact-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FiMail />
            Say Hello
          </motion.a>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              className="contact-link-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="link-content"
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-label">{link.label}</span>
                  <span className="link-value">{link.value}</span>
                </a>
              ) : (
                <div className="link-content">
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-label">{link.label}</span>
                  <span className="link-value">{link.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
