# Student Resume Builder Website on Azure

A modern React mini project for college presentation that helps students build resumes with live preview and PDF export.

## Features

- Professional home section and polished UI
- Resume form with all required student fields
- Live resume preview beside form
- Download resume as PDF using `html2pdf.js`
- Reset form button
- Mobile-responsive layout
- Reusable functional React components
- Multiple template styles (Classic + Modern)
- Profile photo upload
- Dark mode toggle
- Local storage auto-save
- Azure Static Web Apps ready

## Tech Stack

- React (functional components + hooks)
- Vite
- Modern CSS
- html2pdf.js

## Project Structure

```text
.
├─ index.html
├─ package.json
├─ staticwebapp.config.json
├─ vite.config.js
├─ public
│  └─ staticwebapp.config.json
└─ src
   ├─ App.js
   ├─ App.css
   ├─ main.jsx
   ├─ utils
   │  └─ resumeDefaults.js
   └─ components
      ├─ Header.jsx
      ├─ Header.css
      ├─ HomeSection.jsx
      ├─ HomeSection.css
      ├─ TemplateSelector.jsx
      ├─ TemplateSelector.css
      ├─ FormField.jsx
      ├─ ResumeForm.jsx
      ├─ ResumeForm.css
      ├─ ResumePreview.jsx
      └─ ResumePreview.css
```

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in terminal (usually `http://localhost:5173`).

4. Create production build:

   ```bash
   npm run build
   ```

## Deploy to Microsoft Azure Static Web Apps

### Option 1: Deploy from GitHub (recommended)

1. Push this project to a GitHub repository.
2. In Azure Portal, create a **Static Web App** resource.
3. Choose your GitHub repository and branch.
4. Use these build settings:
   - App location: `/`
   - Api location: `(leave empty)`
   - Output location: `dist`
5. Finish setup. Azure will create GitHub Actions workflow automatically.
6. Every push to the selected branch will auto-deploy.

### Option 2: Manual build and upload

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the generated `dist` folder with your preferred Azure Static Web Apps deployment method.

## Notes for Presentation

- Show live editing in form and instant changes in preview.
- Switch between templates in front of audience.
- Toggle dark mode and demonstrate responsiveness on mobile size.
- Download the generated resume PDF as final output.
