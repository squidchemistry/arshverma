import { useState, useEffect } from 'react'
import './Skills.css'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 82, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'AWS', level: 78, category: 'DevOps' },
    { name: 'GraphQL', level: 85, category: 'API' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'MongoDB', level: 83, category: 'Database' },
    { name: 'Git', level: 92, category: 'Version Control' }
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

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">02.</span>
            SKILLS & EXPERTISE
          </h2>
          <div className="title-line"></div>
        </div>

        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          <div className="skills-intro">
            <h3>Mastering the tools that break boundaries</h3>
            <p>
              I've spent years mastering technologies that others find intimidating. 
              These aren't just skills—they're weapons in my arsenal for creating 
              the impossible.
            </p>
          </div>

          <div className="skills-grid">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="skill-category">
                <h4 className="category-title">{category}</h4>
                <div className="category-skills">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-highlight">
            <div className="highlight-content">
              <h4>Why These Skills Matter</h4>
              <p>
                "I don't just learn technologies—I master them. Every skill in my 
                toolkit has been battle-tested on real projects that pushed the 
                boundaries of what's possible. When you hire me, you're not just 
                getting a developer; you're getting someone who can turn your 
                wildest ideas into reality."
              </p>
            </div>
            <div className="highlight-visual">
              <div className="highlight-icon">⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 