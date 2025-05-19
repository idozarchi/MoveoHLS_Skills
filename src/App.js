import './App.css';
import React, { useState } from 'react';
import MoveoPage from './MoveoPage';

// Import your local images
import aboutImg from './media/about.jpeg';
import highschoolImg from './media/highschool.jpeg';
import armyImg from './media/yahalom.jpeg';
import freelanceImg from './media/freelance.avif';
import infinitylabsImg from './media/infinityLabs.jpeg';
import knowledgeImg from './media/knowledge.jpg';
import navyImg from './media/navy.jpeg';

// If you have a clients section, import the image:
import clientsImg from './media/clients.avif';
import techImg from './media/tech.avif';
import workMethodologyImg from './media/Work-Methodology.jpg.webp';
import valuesImg from './media/values.png';

function App() {
  const [showMoveo, setShowMoveo] = useState(false);

  // Scroll to top when switching between pages
  const handleNavClick = (showMoveoPage) => {
    setShowMoveo(showMoveoPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick(false)}
              aria-current={!showMoveo ? "page" : undefined}
            >
              Ido Zarchi
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick(true)}
              aria-current={showMoveo ? "page" : undefined}
            >
              Moveo
            </button>
          </li>
        </ul>
      </nav>

      {showMoveo ? (
        <MoveoPage
          clientsImg={clientsImg}
          techImg={techImg}
          workMethodologyImg={workMethodologyImg}
          valuesImg={valuesImg}
        />
      ) : (
        <main>
          {/* === ABOUT SECTION === */}
          <section id="about" className="section about">
            <h2>Hello, I'm Ido</h2>
            <p className="section-desc">A quick review of who I am and where I'm from.</p>
            <div className="section-flex">
              <div className="section-text">
                <ul>
                  <li>I’m into coffee, bikes, and dismantling things just to see how they work</li>
                  <li>I keep things calm and steady — curious, not chaotic</li>
                  <li>I browse second-hand cars for fun (even when I don’t need one)</li>
                  <li>Best nights? Cooking a homemade meal and having a beer with my girlfriend</li>
                  <li>My dreams range from building a killer gaming PC with an RTX 5090 to someday developing my own product.</li>
                </ul>
              </div>
              <img
                src={aboutImg}
                alt="Portrait of Ido Zarchi"
                className="about-photo"
              />
            </div>
          </section>
          <div className="section-divider"></div>

          {/* === HIGH SCHOOL SECTION === */}
          <section id="highschool" className="section highschool">
            <h2>High School (2014 - 2018)</h2>
            <p className="section-desc">Where my passion for technology and coding began...</p>
            <div className="section-flex">
              <ul className="section-text">
                <li>Graduated from Ohel-Shem High School</li>
                <li>Discovered a passion for software development at the age of 14 (As a proper nerd)</li>
                <li>Participated in coding clubs and hackathons</li>
                <li><strong>Memorable moment:</strong> Found a hidden Domino’s discount page with my friends — they forgot to take it down, so we ate like kings for three years straight.</li>
              </ul>
              <div className="section-img-wrapper">
                <img
                  src={highschoolImg}
                  alt="Ohel-Shem High School building"
                  className="section-photo"
                />
              </div>
            </div>
          </section>
          <div className="section-divider"></div>

          {/* === ARMY SECTION === */}
          <section id="army" className="section army">
            <h2>Army (2018 - 2022)</h2>
            <p className="section-desc">My journey through the Israeli Navy and Yahalom unit.</p>
            <div className="section-flex">
              <ul className="section-text">
                <li>Started in Israeli Navy Officer Training</li>
                <li>Served in Yahalom, elite Combat Engineering unit</li>
                <li>Lead instructor in EOD division of Yahalom</li>
                <li>Gained discipline, adaptability, and leadership skills</li>
              </ul>
              <div className="army-images army-images-column">
                <img
                  src={navyImg}
                  alt="Israeli Navy ship"
                  className="section-photo"
                />
                <img
                  src={armyImg}
                  alt="Yahalom unit"
                  className="section-photo"
                />
              </div>
            </div>
          </section>
          <div className="section-divider"></div>

          {/* === FREELANCE SECTION === */}
          <section id="freelance" className="section freelance">
            <h2>Freelance (2022 - 2024)</h2>
            <p className="section-desc">Building real-world projects and client relationships as a self-taught developer.</p>
            <div className="section-flex">
              <ul className="section-text">
                <li>Self-taught front-end web development</li>
                <li>Specialized in React and modern web tech</li>
                <li>Improved communication and project delivery skills</li>
              </ul>
              <div className="section-img-wrapper">
                <img
                  src={freelanceImg}
                  alt="Freelance web development workspace"
                  className="section-photo"
                />
              </div>
            </div>
          </section>
          <div className="section-divider"></div>

          {/* === INFINITY LABS SECTION === */}
          <section id="infinitylabs" className="section infinitylabs">
            <h2>Infinity Labs (2024 - 2025)</h2>
            <p className="section-desc">Sharpening my skills and learning full stack development in a professional environment.</p>
            <div className="section-flex">
              <ul className="section-text">
                <li>Joined to become a full stack developer</li>
                <li>Learned C, Java, REST APIs, React, Agile</li>
                <li>Worked in teams and delivered projects</li>
                <li>Grew technically and personally</li>
              </ul>
              <div className="section-img-wrapper">
                <img
                  src={infinitylabsImg}
                  alt="Infinity Labs R&D office"
                  className="section-photo"
                />
              </div>
            </div>
          </section>
          <div className="section-divider"></div>

          {/* === KNOWLEDGE SECTION === */}
          <section id="knowledge" className="section knowledge">
            <h2>Knowledge</h2>
            <p className="section-desc">My technical toolbox: languages, frameworks, and tools I use.</p>
            <div className="section-flex">
              <ul className="section-text">
                <li><strong>Languages:</strong> JavaScript, Java, C, HTML5, CSS, Python, C#</li>
                <li><strong>Frameworks/Libraries:</strong> React, Node.js, Next.js</li>
                <li><strong>Tools:</strong> Git, Postman</li>
                <li><strong>Databases:</strong> MongoDB, MySQL</li>
                <li><strong>Favorite Subjects:</strong> concurrency, memory management</li>
              </ul>
              <div className="section-img-wrapper">
                <img
                  src={knowledgeImg}
                  alt="Knowledge and technology concept"
                  className="section-photo"
                />
              </div>
            </div>
          </section>
        </main>
      )}
      <footer className="footer">
        <div>
          <span>Contact: </span>
          <a href="mailto:idozarhi1@gmail.com">idozarhi1@gmail.com</a> | 
          <a href="https://www.linkedin.com/in/idozarchi/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/idozarchi" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div style={{ marginTop: "0.7rem", fontSize: "0.98rem", opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} Ido Zarchi. All rights reserved to moveo-hls because that is what I've signed.
        </div>
      </footer>
    </div>
  );
}

export default App;
