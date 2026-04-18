import "./Header.css";

function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <p className="brand-kicker">Mini Project</p>
          <h1 className="brand-title">Student Resume Builder Website on Azure</h1>
        </div>
        <button className="mode-button" type="button" onClick={onToggleDarkMode}>
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;

