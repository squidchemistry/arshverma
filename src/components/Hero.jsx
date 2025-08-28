import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const texts = [
    "BREAKING CONVENTIONS",
    "DEFYING EXPECTATIONS", 
    "CREATING THE IMPOSSIBLE",
    "BUILDING THE FUTURE"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-name">ARSH VERMA</span>
            <span className="hero-role">FULL-STACK DEVELOPER</span>
          </h1>
          
          <div className="hero-tagline">
            <span className="tagline-prefix">I</span>
            <span className="tagline-text">{texts[currentText]}</span>
          </div>
          
          <p className="hero-description">
            Crafting digital experiences that challenge the status quo and push boundaries.
            Specializing in modern web technologies and innovative solutions.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW MY WORK
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-shape">
            <div className="shape-inner"></div>
          </div>
          <div className="floating-elements">
            <div className="float-element" style={{ '--delay': '0s' }}></div>
            <div className="float-element" style={{ '--delay': '1s' }}></div>
            <div className="float-element" style={{ '--delay': '2s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  )
}

export default Hero 