import { useState, useEffect } from 'react'
import './Clock.css'

const Clock = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedTimezones, setSelectedTimezones] = useState([])
  const [newTimezone, setNewTimezone] = useState('')

  // Popular timezone options
  const timezoneOptions = [
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Kolkata',
    'Asia/Dubai',
    'Australia/Sydney',
    'Pacific/Auckland',
    'America/Sao_Paulo',
    'Africa/Cairo',
    'Europe/Moscow'
  ]

  // Get user's local timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  useEffect(() => {
    // Initialize with user's local timezone
    setSelectedTimezones([userTimezone])
    setIsVisible(true)

    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [userTimezone])

  // Format time for a specific timezone
  const formatTimeForTimezone = (timezone) => {
    try {
      const timeString = currentTime.toLocaleTimeString('en-US', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      const dateString = currentTime.toLocaleDateString('en-US', {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      })

      return { timeString, dateString }
    } catch (error) {
      console.error('Error formatting time for timezone:', timezone, error)
      return { timeString: '--:--:--', dateString: 'Invalid timezone' }
    }
  }

  // Get timezone display name
  const getTimezoneDisplayName = (timezone) => {
    if (timezone === userTimezone) {
      return `${timezone} (Local)`
    }
    return timezone.replace('_', ' ').replace('/', ', ')
  }

  // Add new timezone
  const addTimezone = () => {
    if (newTimezone && !selectedTimezones.includes(newTimezone)) {
      setSelectedTimezones([...selectedTimezones, newTimezone])
      setNewTimezone('')
    }
  }

  // Remove timezone
  const removeTimezone = (timezone) => {
    if (selectedTimezones.length > 1) {
      setSelectedTimezones(selectedTimezones.filter(tz => tz !== timezone))
    }
  }

  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.querySelector('.clock')
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
    <section id="clock" className="clock">
      <div className="clock-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">03.</span>
            WORLD CLOCK
          </h2>
          <div className="title-line"></div>
        </div>

        <div className={`clock-content ${isVisible ? 'visible' : ''}`}>
          <div className="clock-intro">
            <h3>Time Around the World</h3>
            <p>
              Track time across different time zones with this interactive world clock.
              Your local time is automatically detected, and you can add additional 
              time zones to monitor global time simultaneously.
            </p>
          </div>

          <div className="timezone-controls">
            <h4>Add Time Zone</h4>
            <div className="timezone-selector">
              <select 
                value={newTimezone} 
                onChange={(e) => setNewTimezone(e.target.value)}
                className="timezone-dropdown"
              >
                <option value="">Select a timezone...</option>
                {timezoneOptions
                  .filter(tz => !selectedTimezones.includes(tz))
                  .map(timezone => (
                    <option key={timezone} value={timezone}>
                      {timezone.replace('_', ' ').replace('/', ', ')}
                    </option>
                  ))
                }
              </select>
              <button 
                onClick={addTimezone} 
                className="btn btn-primary btn-small"
                disabled={!newTimezone}
              >
                Add Zone
              </button>
            </div>
          </div>

          <div className="clocks-grid">
            {selectedTimezones.map((timezone) => {
              const { timeString, dateString } = formatTimeForTimezone(timezone)
              const isLocal = timezone === userTimezone

              return (
                <div key={timezone} className={`clock-card ${isLocal ? 'local' : ''}`}>
                  <div className="clock-header">
                    <h4 className="timezone-name">
                      {getTimezoneDisplayName(timezone)}
                    </h4>
                    {!isLocal && selectedTimezones.length > 1 && (
                      <button 
                        onClick={() => removeTimezone(timezone)}
                        className="remove-btn"
                        title="Remove timezone"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  <div className="clock-display">
                    <div className="time-display">
                      {timeString}
                    </div>
                    <div className="date-display">
                      {dateString}
                    </div>
                  </div>
                  {isLocal && (
                    <div className="local-indicator">
                      <span>🏠 Local Time</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="clock-footer">
            <p className="clock-note">
              Times update in real-time and are synchronized with your system clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clock