import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Quantum Finance Platform",
      description: "A revolutionary financial platform that uses quantum algorithms to predict market trends with unprecedented accuracy.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "Python", "AWS"],
      category: "web",
      link: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Design System",
      description: "An intelligent design system that automatically generates UI components based on user behavior and preferences.",
      image: "/project2.jpg",
      technologies: ["TypeScript", "Next.js", "TensorFlow", "PostgreSQL"],
      category: "ai",
      link: "#",
      github: "#",
      featured: true
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description: "A secure, transparent voting system built on blockchain technology that ensures election integrity.",
      image: "/project3.jpg",
      technologies: ["Solidity", "React", "Node.js", "Ethereum"],
      category: "blockchain",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 4,
      title: "Real-time Collaboration Tool",
      description: "A collaborative platform that enables real-time editing and communication across multiple users.",
      image: "/project4.jpg",
      technologies: ["React", "Socket.io", "MongoDB", "Redis"],
      category: "web",
      link: "#",
      github: "#",
      featured: false
    },
    {
      id: 5,
      title: "IoT-Based-Smoke-Detection-and-Alert-System",
      description: "An IoT-powered Smoke and Gas Detection system that continuously monitors air quality for dangerous gas concentrations and smoke particles, providing instant mobile alerts, buzzer warnings, and cloud data logging.",
      image: "/project5.jpg",
      technologies: ["NodeMCU ESP8266",	"Arduino IDE",
        "MQ-135 Sensor",	"Blynk IoT App",
        "Buzzer, LEDs",	"Firebase",
        "Breadboard, Resistors, Jumper Wires",	"C++ Firmware Code"],
      category: "iot",
      link: "https://github.com/squidchemistry/IoT-Based-Smoke-Detection-and-Alert-System",
      github: "https://github.com/squidchemistry/IoT-Based-Smoke-Detection-and-Alert-System",
      featured: false
    },
    {
      id: 6,
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard that provides real-time insights and predictions for business intelligence.",
      image: "/project6.jpg",
      technologies: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
      category: "ai",
      link: "#",
      github: "#",
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'iot', label: 'IoT' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">04.</span>
            FEATURED PROJECTS
          </h2>
          <div className="title-line"></div>
        </div>

        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <div className="projects-intro">
            <h3>Projects that defy expectations</h3>
            <p>
              These aren't just projects—they're proof that the impossible is possible. 
              Each one represents a challenge I accepted, a boundary I pushed, and a 
              solution that changed the game.
            </p>
          </div>

          <div className="projects-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <div className="placeholder-text">{project.title}</div>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>View Live</span>
                      </a>
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <div className="cta-content">
              <h4>Ready to see more?</h4>
              <p>
                I have dozens more projects that showcase my ability to think outside 
                the box and deliver solutions that exceed expectations.
              </p>
              <button onClick={() => window.location.href = "https://github.com/squidchemistry?tab=repositories"} className="btn btn-primary">
                VIEW ALL PROJECTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 