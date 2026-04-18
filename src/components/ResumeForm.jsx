import FormField from "./FormField";
import "./ResumeForm.css";

function ResumeForm({
  formData,
  onInputChange,
  onPhotoUpload,
  onRemovePhoto,
  onDownloadPdf,
  onReset,
  isDownloading
}) {
  return (
    <div className="resume-form-card">
      <h3>Resume Details</h3>
      <p className="form-caption">
        Enter details below. For list sections, add one point per line for a cleaner preview.
      </p>

      <form className="resume-form" onSubmit={(event) => event.preventDefault()}>
        <FormField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={onInputChange}
          placeholder="Priya Sharma"
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="priya@email.com"
        />
        <FormField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={onInputChange}
          placeholder="+91 98765 43210"
        />
        <FormField
          label="Address"
          name="address"
          value={formData.address}
          onChange={onInputChange}
          placeholder="City, State"
        />
        <FormField
          label="Career Objective"
          name="careerObjective"
          multiline
          value={formData.careerObjective}
          onChange={onInputChange}
          placeholder="A motivated student seeking..."
        />
        <FormField
          label="Education"
          name="education"
          multiline
          value={formData.education}
          onChange={onInputChange}
          placeholder="B.Tech CSE, ABC College (2023-2027)"
        />
        <FormField
          label="Skills"
          name="skills"
          multiline
          value={formData.skills}
          onChange={onInputChange}
          placeholder={"JavaScript\nReact.js\nSQL"}
        />
        <FormField
          label="Projects"
          name="projects"
          multiline
          value={formData.projects}
          onChange={onInputChange}
          placeholder="Smart Attendance System using Face Recognition"
        />
        <FormField
          label="Internship / Experience"
          name="experience"
          multiline
          value={formData.experience}
          onChange={onInputChange}
          placeholder="Web Development Intern at XYZ Tech"
        />
        <FormField
          label="Certifications"
          name="certifications"
          multiline
          value={formData.certifications}
          onChange={onInputChange}
          placeholder="Azure Fundamentals (AZ-900)"
        />

        <label className="form-field">
          <span>Profile Photo (optional)</span>
          <input type="file" accept="image/*" onChange={onPhotoUpload} />
        </label>

        {formData.profilePhoto ? (
          <button type="button" className="small-danger" onClick={onRemovePhoto}>
            Remove Profile Photo
          </button>
        ) : null}

        <div className="form-actions">
          <button type="button" className="primary-button" onClick={onDownloadPdf}>
            {isDownloading ? "Preparing PDF..." : "Download Resume PDF"}
          </button>
          <button type="button" className="secondary-button" onClick={onReset}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResumeForm;
