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

##
It calls Puter AI API, which is a wrapper around OpenAI (and possibly other providers), their puter.ai.chat.completions supports models like gpt-4.1-mini, gpt-4.1, gpt-3.5-turbo, etc.

This AI Resume Analyzer uses Puter’s hosted AI models (likely OpenAI GPT models such as gpt-4.1-mini), depending on what you specify in the puter.ai call.

It uses Puter.js AI APIs, which under the hood call OpenAI GPT models (like gpt-4.1-mini or gpt-4.1). The exact model depends on what string you’ve set in the code (likely "gpt-4.1-mini" by default).


## Current Summary
AI Provider → OpenAI GPT models via Puter.js (serverless, free tier + paid scaling).

Resume parsing → Done by Puter’s file/AI services; may have inconsistency with PDFs/DOCX.

Data storage → Stored in Puter cloud; encryption/GDPR compliance depends on Puter, not your repo.

Limitations → File size and format limits are those of Puter (likely PDFs/DOCX only, small files).

Cost → Free for small use, scales with users/tokens/storage.

Offline → Not supported, app is fully online/serverless.

Deployability outside Puter → Possible but requires major refactoring; currently tightly bound to Puter’s ecosystem.

## 🔹 Architecture Diagram

![Architecture](./docs/ai_resume_architecture.png)

































The project is Deployed on Puter itself--> 
Check out : https://puter.com/app/ai-resume-analyzer-37
