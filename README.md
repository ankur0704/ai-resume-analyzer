# 🧠  RESUMID-AI Resume Analyzer

AI Resume Analyzer is an intelligent tool built using modern web technologies. AI-powered Resume Analyzer with React, React Router, and Puter.js! Implement seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.

## 🚀 Features
👉 Easy & convenient auth: Handle authentication entirely in the browser using Puter.js—no backend or setup required.

👉 Resume upload & storage: Let users upload and store all their resumes in one place, safely and reliably.

👉 AI resume matching: Provide a job listing and get an ATS score with custom feedback tailored to each resume.

👉 Reusable, modern UI: Built with clean, consistent components for a great-looking and maintainable interface.

👉 Code Reusability: Leverage reusable components and a modular codebase for efficient development.

👉 Cross-Device Compatibility: Fully responsive design that works seamlessly across all devices.

👉 Modern UI/UX: Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

And many more, including code architecture and reusability.

## 🛠️ Tech Stack
- React: is a popular open‑source JavaScript library for building user interfaces using reusable components and a virtual DOM, enabling efficient, dynamic single-page and native apps.

- React Router v7: is the go‑to routing library for React apps, offering nested routes, data loaders/actions, error boundaries, code splitting, and SSR support—all with a smooth upgrade path from v6.

- Puter.com: is an advanced, open-source internet operating system designed to be feature-rich, exceptionally fast, and highly extensible. Puter can be used as: A privacy-first personal cloud to keep all your files, apps, and games in one secure place, accessible from anywhere at any time.

- Puter.js: is a tiny client‑side SDK that adds serverless auth, storage, database, and AI (GPT, Claude, DALL·E, OCR…) straight into your browser app—no backend needed and costs borne by users.

- Tailwind CSS: is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- TypeScript: is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.

- Vite: is a fast build tool and dev server using native ES modules for instant startup, hot‑module replacement, and Rollup‑powered production builds—perfect for modern web development.

- Zustand: is a minimal, hook-based state management library for React. It lets you manage global state with zero boilerplate, no context providers, and excellent performance through selective state subscriptions.




## Limitations

📄 File size & type limits depend on Puter’s free/paid tiers

🌐 Requires internet connection (no offline mode)

🔒 Vendor lock-in → currently tied to Puter APIs (AI, storage, auth)

🧪 No custom backend means limited control over parsing, compliance, or error handling




## AI Provider

- The app uses Puter’s AI API (puter.ai.chat.completions)

- Under the hood, this leverages OpenAI GPT models (e.g., gpt-4.1-mini, gpt-4.1)

- All AI calls are serverless, handled by Puter’s backend

- Cost:

✅ Free tier includes limited credits

💲 Paid usage depends on token count + storage



## Resume Parsing

- Resumes are uploaded through Puter storage APIs

- AI then extracts and analyzes the text directly

- Supported formats: PDF, DOCX, TXT (as allowed by Puter)

⚠️ Note: Parsing accuracy may vary for complex PDFs or image-based resumes (no custom OCR implemented in this repo)



## Data Storage & Privacy

- Resumes and user data are stored in Puter cloud storage

- Authentication handled by puter.auth

- Encryption & GDPR compliance depend on Puter’s policies (not enforced in this repo)

⚠️ If deploying commercially, ensure you provide a privacy disclaimer



## Info
- It calls Puter AI API, which is a wrapper around OpenAI (and possibly other providers), their puter.ai.chat.completions supports models like gpt-4.1-mini, gpt-4.1, gpt-3.5-turbo, etc.

- This AI Resume Analyzer uses Puter’s hosted AI models (likely OpenAI GPT models such as gpt-4.1-mini), depending on what you specify in the puter.ai call.

- It uses Puter.js AI APIs, which under the hood call OpenAI GPT models (like gpt-4.1-mini or gpt-4.1). The exact model depends on what string you’ve set in the code (likely "gpt-4.1-mini" by default).



## Current Summary
- AI Provider → OpenAI GPT models via Puter.js (serverless, free tier + paid scaling).

- Resume parsing → Done by Puter’s file/AI services; may have inconsistency with PDFs/DOCX.

- Data storage → Stored in Puter cloud; encryption/GDPR compliance depends on Puter, not your repo.

- Limitations → File size and format limits are those of Puter (likely PDFs/DOCX only, small files).

- Cost → Free for small use, scales with users/tokens/storage.

- Offline → Not supported, app is fully online/serverless.

- Deployability outside Puter → Possible but requires major refactoring; currently tightly bound to Puter’s ecosystem.





## 🛠️ Future Roadmap  

Planned improvements and ideas for the AI Resume Analyzer:  

- [ ] **Resume Parsing Enhancements**  
  - Add OCR (Tesseract.js) to handle scanned PDF resumes  
  - Improve parsing consistency for `.docx`, `.pdf`, and `.txt`  
  - Support multi-page resumes with structured extraction (Education, Work Experience, Skills)  

- [ ] **AI Model Upgrades**  
  - Allow configurable AI providers (OpenAI, Anthropic, Gemini, Llama, etc.)  
  - Fine-tune or prompt-engineer for HR-specific evaluations  
  - Add keyword matching with job descriptions to measure ATS-friendliness  

- [ ] **Scalability & Cost Optimization**  
  - Implement caching for repeated analyses  
  - Batch process resumes instead of per-request API calls  
  - Add monitoring of API usage and cost estimation dashboard  

- [ ] **User Data & Security**  
  - Encrypt resumes before storing (AES-256)  
  - Add GDPR/CCPA compliance notice and explicit user consent  
  - Auto-delete resumes after a configurable time (e.g., 30 days)  

- [ ] **User Experience (UX) Improvements**  
  - Show AI confidence score / highlight strong vs weak sections  
  - Offer downloadable analysis reports in PDF/Word format  
  - Provide actionable improvement tips (e.g., “Add measurable achievements”)  

- [ ] **Deployment Flexibility**  
  - Decouple Puter.js for storage/auth → allow Firebase, Supabase, or MongoDB  
  - Add Docker support for backend + self-hosted deployment  
  - Offline fallback mode for basic resume parsing (without AI)  

- [ ] **Advanced Features**  
  - Multi-resume comparison for recruiters  
  - Job description matching (rank resumes against a JD)  
  - Integration with LinkedIn or GitHub to auto-import experience  
  - Gamified feedback (scorecard, improvement progress)  
































The project is Deployed on Puter itself--> 
Check out : https://puter.com/app/ai-resume-analyzer-37
