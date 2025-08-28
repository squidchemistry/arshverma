import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs.js'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
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

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await emailjs.send(
        'service_s2m8qfa',
        'template_3yic95d',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'arshvermaimm@gmail.com',
        },
        'CMwV0Q9TwOipZBZyx'
      )
      
      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">04.</span>
            GET IN TOUCH
          </h2>
          <div className="title-line"></div>
        </div>

        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-intro">
            <h3>Ready to defy the impossible together?</h3>
            <p>
              I'm always looking for new challenges that push the boundaries of what's 
              possible. Whether you have a project in mind or just want to discuss 
              the future of technology, let's connect.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>S.R.M UNIVERSITY -K.T.R Campus
                  University in Kattankulathur, Kanchipuram, Tamil Nadu.<br />Available for remote work worldwide</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>arshvermaimm@gmail.com<br />Available 24/7 for urgent projects</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">💼</div>
                <div className="info-content">
                  <h4>Availability</h4>
                  <p>Currently accepting new projects<br />Response time: &lt; 2 hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🚀</div>
                <div className="info-content">
                  <h4>Specialties</h4>
                  <p>Full-stack development<br />AI/ML integration<br />Blockchain solutions</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Message sent successfully! I'll get back to you within 2 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    Failed to send message. Please try again or contact me directly at arshvermaimm@gmail.com
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h4>Let's build something extraordinary</h4>
              <p>
                "The best projects start with a simple conversation. Whether you're 
                looking to build the next big thing or just want to explore what's 
                possible, I'm here to help turn your vision into reality."
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/arsh-verma-squidchemistry/" className="social-link">LinkedIn</a>
                <a href="https://github.com/squidchemistry" className="social-link">GitHub</a>
                <a href="https://x.com/arshverma_off" className="social-link">Twitter</a>
                <a href="https://leetcode.com/u/nEjplbqMs5/" className="social-link">LeetCode</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 