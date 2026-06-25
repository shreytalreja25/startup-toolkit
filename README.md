# 🚀 UNSW Founders: 10-Min Startup Builder Toolkit

This is an interactive React application designed to help you run your 10-minute mini-workshop during your interview at the UNSW Founders MCIC Makerspace. It serves as your visual aid, dynamic prompt generator, and cheat sheet.

---

## ⚡ How to Run Locally

Follow these steps on your laptop before the interview:

1. **Navigate to the app directory:**
   ```bash
   cd c:\Users\shrey\2026\job\AI-Project-Manager\startup-toolkit
   ```
2. **Launch the development server:**
   ```bash
   npm run dev
   ```
3. **Open the application:**
   Open the localhost URL displayed in the terminal (usually `http://localhost:5173`) in your browser.
4. **Make it fullscreen:**
   Press `F11` in Chrome to present it in a clean, distraction-free environment.

---

## 🌐 How to Deploy to Vercel (One-Click)

To share a live URL with the founders during or after the interview, you can deploy it to Vercel for free:

1. **Install the Vercel CLI (Globally):**
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```bash
   vercel login
   ```
3. **Deploy from the directory:**
   Navigate to the `startup-toolkit` folder and run:
   ```bash
   vercel
   ```
   Follow the prompts (accept defaults). Once complete, Vercel will give you a live production-ready URL (e.g., `startup-toolkit-three.vercel.app`).
4. **Subsequent updates:**
   To redeploy updates, just run `vercel --prod`.

---

## 🛠️ Included Tools & Deliverables

This dashboard generates customized prompts for **10 specific, free AI tools**:

1. **v0.dev**: Frontend Landing Page code (React components).
2. **z.ai (GLM 5.2) / Gamma**: Slide-by-slide pitch deck structure.
3. **Higgsfield.ai**: Cinematic promo videos & social media carousels.
4. **NotebookLM**: Audio podcast overview scripts.
5. **Gemini Deep Research**: Market sizing, competitor analysis, and risk matrix.
6. **ElevenLabs / Vapi**: Custom system prompt for an interactive voice receptionist.
7. **Notion AI**: Kanban board backlog, CRM database, and marketing calendar schemas.
8. **Recraft.ai / DALL-E 3**: SVG logo prompts and visual asset hex color codes.
9. **ChatGPT / Gemini**: 3-platform launch copywriting campaign (LinkedIn, X, Instagram).
10. **Manus.im (Manus AI)**: Structured browser operator automation steps for email & calendar integrations.

---

## 🎯 Interview Cheat Sheet Panel (Sidebar)

We have built a strategic checklist directly into the application's sidebar, consisting of:
- **Timeline**: A minute-by-minute blueprint for your 10-minute slot.
- **Skepticism Shield (Q&A)**: Immediate, structured answers to questions about security, cost, hallucination, and copyright.
- **AI Judgement**: Ethical guidelines, data privacy tips, and human-in-the-loop reminders.
- **Local AI (Ollama)**: Running models locally for security-conscious startups.
