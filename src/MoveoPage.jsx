import React from "react";
import "./App.css";

// Import your Moveo images from the media folder
import moveoImg from "./media/moveo.png";
import moveoHlsImg from "./media/moveo_hls.jpeg";
import moveoStructureImg from "./media/moveo_structure.svg"; // Add this import

function MoveoPage(props) {
  return (
    <div className="App">
      <main>
        {/* === ABOUT MOVEO === */}
        <section className="section">
          <h2>About Moveo</h2>
          <p className="section-desc">
            Tel Aviv-based technology & creative agency, founded by elite IDF tech officers.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li>Founded in 2012, HQ in Tel Aviv</li>
              <li>250+ professionals, offices in Tel Aviv & London</li>
              <li>Custom tech, digital, and creative solutions</li>
              <li>Ranked #27 fastest-growing Israeli company (2023)</li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={moveoImg}
                alt="Moveo Group Tel Aviv office"
                className="section-photo"
              />
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* === MOVEO STRUCTURE === */}
        <section className="section">
          <h2>Moveo Structure</h2>
          <p className="section-desc">
            Moveo Group is made up of several specialized companies and brands.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li><strong>HQ</strong></li>
              <li><strong>Moveo Software</strong></li>
              <li><strong>Moveo HLS</strong></li>
              <li><strong>Creative</strong></li>
              <li><strong>Boost</strong></li>
              <li><strong>Medical</strong></li>
              <li><strong>Payro</strong></li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={moveoStructureImg}
                alt="Moveo Group Structure"
                className="section-photo"
              />
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* === MOVEO HLS SECTION === */}
        <section className="section">
          <h2>Moveo HLS</h2>
          <p className="section-desc">
            Moveo HLS specializes in Homeland Security, Defense, and Public Safety digital solutions.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li>Dedicated division of Moveo Group focused on HLS, defense, and public sector innovation</li>
              <li>Partners with Israeli and global defense companies, government agencies, and security organizations</li>
              <li>Expertise in secure digital platforms, command & control, intelligence, and operational systems</li>
              <li>Projects include web/mobile apps, secure portals, and digital transformation for defense & HLS clients</li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={moveoHlsImg}
                alt="Moveo HLS digital defense solutions"
                className="section-photo"
              />
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* === TYPES OF CLIENTS (HLS) === */}
        <section className="section">
          <h2>Types of Clients</h2>
          <p className="section-desc">
            Moveo HLS partners with defense, homeland security, and public safety organizations.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li>Israeli Ministry of Defense & security agencies</li>
              <li>Global defense contractors & integrators</li>
              <li>Homeland security and emergency response organizations</li>
              <li>Public sector and government digital transformation projects</li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={props.clientsImg}
                alt="Clients"
                className="section-photo"
              />
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* === TECHNOLOGIES (HLS) === */}
        <section className="section">
          <h2>Technologies</h2>
          <p className="section-desc">
            Moveo HLS leverages secure, scalable, and innovative technologies for defense and security.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li>Custom web & mobile platforms for command & control</li>
              <li>Secure cloud and on-premise solutions</li>
              <li>Integration with defense-grade communication and intelligence systems</li>
              <li>Advanced data visualization, mapping, and real-time dashboards</li>
              <li>Compliance with strict security and accessibility standards</li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={props.techImg}
                alt="Technologies"
                className="section-photo"
              />
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* === WORK METHODOLOGY (HLS) === */}
        <section className="section">
          <h2>Work Methodology</h2>
          <p className="section-desc">
            Moveo HLS delivers with agile, secure, and mission-critical project management.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li>Agile and iterative development tailored for defense/HLS</li>
              <li>Strict confidentiality and security protocols</li>
              <li>Close collaboration with client teams and stakeholders</li>
              <li>Rapid prototyping and user validation</li>
              <li>End-to-end delivery: from requirements to deployment and support</li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={props.workMethodologyImg}
                alt="Work Methodology"
                className="section-photo"
              />
            </div>
          </div>
        </section>
        <div className="section-divider"></div>

        {/* === COMPANY VALUES (HLS) === */}
        <section className="section">
          <h2>Company Values</h2>
          <p className="section-desc">
            The core values that drive Moveo HLS’s success in defense and public safety.
          </p>
          <div className="section-flex">
            <ul className="section-text">
              <li>Security & confidentiality</li>
              <li>Reliability and trust</li>
              <li>Innovation</li>
              <li>Creativity</li>
              <li>Dedication</li>
            </ul>
            <div className="section-img-wrapper">
              <img
                src={props.valuesImg}
                alt="Values"
                className="section-photo"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MoveoPage;