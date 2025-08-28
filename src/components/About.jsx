import { useState, useEffect } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">01.</span>
            ABOUT ME
          </h2>
          <div className="title-line"></div>
        </div>

        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <div className="about-intro">
              <h3>I'm a developer who believes in breaking the rules</h3>
              <p>
                When everyone else is following the same old patterns, I'm exploring 
                uncharted territories. My approach? Question everything, experiment 
                relentlessly, and create solutions that others haven't even imagined.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-number">2+</span>
                <span className="detail-label">Years of Defying Conventions</span>
              </div>
              <div className="detail-item">
                <span className="detail-number">50+</span>
                <span className="detail-label">Projects That Broke the Mold</span>
              </div>
              <div className="detail-item">
                <span className="detail-number">100%</span>
                <span className="detail-label">Commitment to Innovation</span>
              </div>
            </div>

            <div className="about-philosophy">
              <h4>My Philosophy</h4>
              <p>
                "The best code isn't just functional—it's revolutionary. I don't just 
                solve problems; I redefine what's possible. Every project is an opportunity 
                to push boundaries and create something that makes people say 'I didn't 
                know this could be done.'"
              </p>
            </div>

            <div className="about-cta">
              <a className="btn btn-outline" href="/Arsh_Verma_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image">
              <img src="/arsh-profile.jpg" alt="Arsh Verma" />
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-circle">
                  <span className="stat-number">React</span>
                  <span className="stat-label">Expert</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-circle">
                  <span className="stat-number">Node.js</span>
                  <span className="stat-label">Advanced</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-circle">
                  <span className="stat-number">Python</span>
                  <span className="stat-label">Proficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 