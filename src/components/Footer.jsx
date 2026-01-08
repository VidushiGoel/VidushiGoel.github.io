import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">VG</span>
            <p className="footer-tagline">
              Building the future, one commit at a time.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/VidushiGoel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/vidushigoel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:goelvidushi09@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed & Built with <FiHeart className="heart-icon" /> by Vidushi Goel
          </p>
          <p className="copyright">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
