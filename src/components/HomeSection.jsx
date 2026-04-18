import "./HomeSection.css";

function HomeSection({ onStartBuilding }) {
  return (
    <section className="home-section">
      <div className="home-content">
        <span className="pill">Azure Static Web Apps Ready</span>
        <h2>Create a placement-ready resume in minutes</h2>
        <p>
          Build your profile using a live form, switch templates, and export a clean PDF
          instantly. This project is designed for college demos and production-ready hosting.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={onStartBuilding}>
            Start Building Resume
          </button>
          <a href="#builder" className="ghost-link">
            Jump to Builder
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <h3>Highlights</h3>
        <ul>
          <li>Live preview beside form</li>
          <li>PDF download support</li>
          <li>Mobile responsive design</li>
          <li>Multiple templates + dark mode</li>
          <li>Data auto-saves in local storage</li>
        </ul>
      </div>
    </section>
  );
}

export default HomeSection;

