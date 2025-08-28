import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">arshverma</span>
              <span className="logo-subtitle">PORTFOLIO</span>
            </div>
            <p className="footer-tagline">
            Designed to defy expectations.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>AI Integration</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/arsh-verma-squidchemistry/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/squidchemistry" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://x.com/arshverma_off" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://leetcode.com/u/nEjplbqMs5/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; {currentYear} Arsh Verma. All rights reserved.</p>
            <p> Designed to defy expectations</p>
          </div>
          
          <div className="footer-actions">
            <button 
              className="btn btn-outline btn-small"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              BACK TO TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 