import { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import TemplateSelector from "./components/TemplateSelector";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import { defaultResumeData } from "./utils/resumeDefaults";

const STORAGE_KEY = "student-resume-builder-state";

function loadSavedState() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) {
      return null;
    }
    return JSON.parse(storedValue);
  } catch (error) {
    return null;
  }
}

function toFileName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function App() {
  const savedState = loadSavedState();

  const [formData, setFormData] = useState(savedState?.formData || defaultResumeData);
  const [template, setTemplate] = useState(savedState?.template || "classic");
  const [darkMode, setDarkMode] = useState(Boolean(savedState?.darkMode));
  const [isDownloading, setIsDownloading] = useState(false);

  const previewRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        formData,
        template,
        darkMode
      })
    );
  }, [formData, template, darkMode]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((previous) => ({
        ...previous,
        profilePhoto: reader.result ? String(reader.result) : ""
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setFormData((previous) => ({
      ...previous,
      profilePhoto: ""
    }));
  };

  const handleDownloadPdf = async () => {
    if (!previewRef.current || isDownloading) {
      return;
    }

    setIsDownloading(true);
    const safeName = toFileName(formData.fullName || "student-resume") || "student-resume";
    const options = {
      margin: [0.2, 0.2, 0.2, 0.2],
      filename: `${safeName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    try {
      await html2pdf().set(options).from(previewRef.current).save();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleReset = () => {
    setFormData(defaultResumeData);
    setTemplate("classic");
    setDarkMode(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleStartBuilding = () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`app-shell ${darkMode ? "theme-dark" : "theme-light"}`}>
      <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />

      <main className="app-main">
        <HomeSection onStartBuilding={handleStartBuilding} />

        <section className="builder-container" id="builder">
          <div className="builder-grid">
            <div className="builder-left">
              <TemplateSelector template={template} onChangeTemplate={setTemplate} />
              <ResumeForm
                formData={formData}
                onInputChange={handleInputChange}
                onPhotoUpload={handlePhotoUpload}
                onRemovePhoto={handleRemovePhoto}
                onDownloadPdf={handleDownloadPdf}
                onReset={handleReset}
                isDownloading={isDownloading}
              />
            </div>

            <div className="builder-right">
              <ResumePreview formData={formData} template={template} previewRef={previewRef} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

