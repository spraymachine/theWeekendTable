import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <a href="#home" className="nav-logo">THE WEEKEND TABLE</a>
        <ul className="nav-links">
          <li><a href="#events" className="nav-link">Events</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
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
          <div className="about-shape"></div>
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
        <p>&copy; 2024 The Weekend Table. All rights reserved. | Roll for initiative!</p>
      </footer>
    </div>
  )
}

export default App
