import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dieValue, setDieValue] = useState(1)
  const [isDieRolling, setIsDieRolling] = useState(false)
  const dieTimeoutsRef = useRef([])

  useEffect(() => {
    return () => {
      dieTimeoutsRef.current.forEach((t) => clearTimeout(t))
      dieTimeoutsRef.current = []
    }
  }, [])

  const dieGlyph = (value) => (['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][value - 1] ?? '⚀')

  const rollDie = () => {
    if (isDieRolling) return

    setIsDieRolling(true)

    const next = 1 + Math.floor(Math.random() * 6)
    // Swap the face mid-animation so it “lands” after a roll.
    dieTimeoutsRef.current.push(setTimeout(() => setDieValue(next), 420))
    dieTimeoutsRef.current.push(setTimeout(() => setIsDieRolling(false), 900))
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <a href="#home" className="nav-logo">THE WEEKEND TABLE</a>
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#events" className="nav-link" onClick={() => setIsMenuOpen(false)}>Events</a></li>
          <li><a href="#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">THE WEEKEND TABLE</h1>
          <h2 className="hero-subtitle">Board Game Events</h2>
          <p className="hero-description">
            Join us for epic board game sessions every weekend! 
            Discover new games, meet fellow enthusiasts, and create unforgettable memories 
            around the table. Where strategy meets fun, and every roll counts!
          </p>
          <a href="#events" className="cta-button">Join Our Next Event</a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section events">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">Saturday, March 15</div>
            <h3 className="event-title">Strategy Night</h3>
            <p className="event-description">
              Dive deep into complex strategy games. From Terraforming Mars to Scythe, 
              challenge your tactical mind and compete for glory!
            </p>
            <a href="https://www.instagram.com/the.weekend.table" target="_blank" rel="noopener noreferrer" className="event-link">
              Learn More
            </a>
          </div>
          <div className="event-card">
            <div className="event-date">Sunday, March 16</div>
            <h3 className="event-title">Family Fun Day</h3>
            <p className="event-description">
              Perfect for families! Kid-friendly games, cooperative adventures, 
              and games that bring everyone together. All ages welcome!
            </p>
            <a href="https://www.instagram.com/the.weekend.table" target="_blank" rel="noopener noreferrer" className="event-link">
              Learn More
            </a>
          </div>
          <div className="event-card">
            <div className="event-date">Saturday, March 22</div>
            <h3 className="event-title">Euro Games Extravaganza</h3>
            <p className="event-description">
              Explore the best of European board game design. From worker placement 
              to engine building, experience the elegance of Euro-style gaming.
            </p>
            <a href="https://www.instagram.com/the.weekend.table" target="_blank" rel="noopener noreferrer" className="event-link">
              Learn More
        </a>
      </div>
        </div>
      </section>

      {/* Past Events Gallery Section */}
      <section id="gallery" className="section gallery">
        <h2 className="section-title">Past Events</h2>
        <p style={{ 
          fontFamily: 'Orbitron', 
          fontSize: '1.2rem', 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: 'var(--brutal-black)'
        }}>
          Relive the memories from our amazing board game sessions!
        </p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-image">
              <div className="gallery-placeholder">🎲</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">February 24, 2024</div>
              <h3 className="gallery-title">Epic Strategy Showdown</h3>
              <p className="gallery-description">Intense battles and strategic masterminds!</p>
            </div>
          </div>
          <div className="gallery-item gallery-item-large">
            <div className="gallery-image">
              <div className="gallery-placeholder">🎮</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">February 17, 2024</div>
              <h3 className="gallery-title">Family Game Night</h3>
              <p className="gallery-description">Laughter, fun, and unforgettable moments with families!</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <div className="gallery-placeholder">🏆</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">February 10, 2024</div>
              <h3 className="gallery-title">Tournament Champions</h3>
              <p className="gallery-description">Crowning the ultimate board game champions!</p>
            </div>
          </div>
          <div className="gallery-item gallery-item-tall">
            <div className="gallery-image">
              <div className="gallery-placeholder">🎯</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">February 3, 2024</div>
              <h3 className="gallery-title">New Game Launch</h3>
              <p className="gallery-description">Discovering exciting new board games together!</p>
            </div>
          </div>
          <div className="gallery-item gallery-item-tall">
            <div className="gallery-image">
              <div className="gallery-placeholder">🎪</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">January 27, 2024</div>
              <h3 className="gallery-title">Game Festival</h3>
              <p className="gallery-description">A full day of gaming, food, and community spirit!</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <div className="gallery-placeholder">🎨</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">January 20, 2024</div>
              <h3 className="gallery-title">Creative Games Night</h3>
              <p className="gallery-description">Artistic and creative board games showcase!</p>
            </div>
          </div>
          <div className="gallery-item gallery-item-wide">
            <div className="gallery-image">
              <div className="gallery-placeholder">🌟</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">January 13, 2024</div>
              <h3 className="gallery-title">Anniversary Celebration</h3>
              <p className="gallery-description">Celebrating one year of amazing board game events!</p>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <div className="gallery-placeholder">⚔️</div>
            </div>
            <div className="gallery-info">
              <div className="gallery-date">January 6, 2024</div>
              <h3 className="gallery-title">Medieval Games</h3>
              <p className="gallery-description">Knights, castles, and epic medieval adventures!</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a 
            href="https://www.instagram.com/the.weekend.table?igsh=YW96MWhzc2p3a3ow" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gallery-cta"
          >
            View More on Instagram
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>The Weekend Table</strong> is a vibrant community of board game enthusiasts 
              dedicated to bringing people together through the joy of tabletop gaming.
            </p>
            <p>
              We host regular events featuring a diverse collection of modern board games, 
              from quick party games to epic strategy sessions. Whether you're a seasoned 
              gamer or completely new to the hobby, there's a place for you at our table.
            </p>
            <p>
              Our mission is simple: create unforgettable gaming experiences, foster 
              connections, and celebrate the art of board game design. Every weekend 
              is a new adventure!
            </p>
          </div>
          <button
            type="button"
            className={`about-die ${isDieRolling ? 'rolling' : ''}`}
            onClick={rollDie}
            aria-label={`Roll the dice. Current value: ${dieValue}`}
          >
            <span className="die-face" aria-hidden="true">{dieGlyph(dieValue)}</span>
            <span className="die-hint" aria-hidden="true">Tap to roll</span>
          </button>
      </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p style={{ fontFamily: 'Orbitron', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Follow us on Instagram for the latest events, game highlights, and community updates!
          </p>
          <div className="contact-links">
            <a 
              href="https://www.instagram.com/the.weekend.table?igsh=YW96MWhzc2p3a3ow" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              Instagram
            </a>
            <a 
              href="mailto:info@theweekendtable.com" 
              className="contact-link"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a
          href="https://manidodla.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-card"
        >
          <div className="footer-card-left">
            <span className="footer-label">Designed by</span>
            <span className="footer-name">Mani Dodla</span>
          </div>
          
        </a>
      </footer>
    </div>
  )
}

export default App
