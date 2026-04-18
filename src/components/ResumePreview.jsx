import "./ResumePreview.css";

function toLines(value) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function ResumePreview({ formData, template, previewRef }) {
  const educationList = toLines(formData.education);
  const skillsList = toLines(formData.skills);
  const projectsList = toLines(formData.projects);
  const experienceList = toLines(formData.experience);
  const certificationsList = toLines(formData.certifications);

  return (
    <div className="preview-shell">
      <h3>Live Resume Preview</h3>
      <div className={`resume-sheet ${template === "modern" ? "template-modern" : "template-classic"}`} ref={previewRef}>
        <header className="resume-header">
          <div>
            <h1>{formData.fullName || "Your Full Name"}</h1>
            <p className="contact-line">
              {[formData.email || "youremail@example.com", formData.phone || "+91 XXXXX XXXXX"]
                .filter(Boolean)
                .join(" | ")}
            </p>
            <p className="address-line">{formData.address || "City, State, Country"}</p>
          </div>
          {formData.profilePhoto ? (
            <img src={formData.profilePhoto} alt="Profile" className="profile-photo" />
          ) : (
            <div className="photo-placeholder">Photo</div>
          )}
        </header>

        <section>
          <h2>Career Objective</h2>
          <p>
            {formData.careerObjective ||
              "Write a short and focused objective that highlights your goals and strengths."}
          </p>
        </section>

        <section>
          <h2>Education</h2>
          {educationList.length ? (
            <ul>
              {educationList.map((item, index) => (
                <li key={`edu-${index}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Add education details in the form.</p>
          )}
        </section>

        <section>
          <h2>Skills</h2>
          {skillsList.length ? (
            <ul className="chip-list">
              {skillsList.map((item, index) => (
                <li key={`skill-${index}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Add technical and soft skills.</p>
          )}
        </section>

        <section>
          <h2>Projects</h2>
          {projectsList.length ? (
            <ul>
              {projectsList.map((item, index) => (
                <li key={`proj-${index}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Add key academic or personal projects.</p>
          )}
        </section>

        <section>
          <h2>Internship / Experience</h2>
          {experienceList.length ? (
            <ul>
              {experienceList.map((item, index) => (
                <li key={`exp-${index}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Add internships, roles, or volunteer experience.</p>
          )}
        </section>

        <section>
          <h2>Certifications</h2>
          {certificationsList.length ? (
            <ul>
              {certificationsList.map((item, index) => (
                <li key={`cert-${index}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Add certifications and training.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ResumePreview;

