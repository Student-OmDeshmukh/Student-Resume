import "./TemplateSelector.css";

function TemplateSelector({ template, onChangeTemplate }) {
  return (
    <div className="template-selector">
      <p className="selector-label">Resume Template</p>
      <div className="selector-buttons">
        <button
          type="button"
          className={template === "classic" ? "is-active" : ""}
          onClick={() => onChangeTemplate("classic")}
        >
          Classic
        </button>
        <button
          type="button"
          className={template === "modern" ? "is-active" : ""}
          onClick={() => onChangeTemplate("modern")}
        >
          Modern
        </button>
      </div>
    </div>
  );
}

export default TemplateSelector;

