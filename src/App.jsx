import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  ExternalLink, 
  Check, 
  RotateCcw, 
  BookOpen, 
  HelpCircle, 
  ShieldAlert, 
  Terminal, 
  Rocket, 
  Layers, 
  Layout, 
  Video, 
  Volume2, 
  Search, 
  PhoneCall, 
  Database, 
  Palette, 
  Share2, 
  Cpu,
  User,
  FolderGit2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import avatarImg from './assets/avatar.jpg';

// Custom high-quality SVG components to avoid lucide-react brand icon import issues
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// Preset configurations for fast demonstration
const presets = {
  studybuddy: {
    founderName: 'Nina',
    name: 'StudyBuddy',
    domain: 'EdTech / Student Productivity',
    idea: 'AI study companion that uses course materials to run interactive active-recall mock exams for students.',
    targetAudience: 'UNSW students preparing for exams',
    theme: 'Neon Cyberpunk (Purple & Electric Cyan)',
    feature: 'Generating mock quizzes from raw lecture PDF uploads with instant step-by-step explanations',
    marketingVibe: 'Energetic & Empowering',
    revenueModel: 'Freemium ($9/mo premium tier for unlimited AI exam credits)',
    cta: 'Generate Your First Mock Exam Free'
  },
  ecotrace: {
    founderName: 'Shetal',
    name: 'EcoTrace',
    domain: 'Sustainability & B2B SaaS',
    idea: 'AI-driven supply chain inspector that scans PDF delivery logs to calculate scope 3 carbon emissions.',
    targetAudience: 'Startup founders and corporate sustainability officers',
    theme: 'Warm Organic (Sage Green & Earthy tones)',
    feature: 'Automated OCR bill-of-lading mapping to official international carbon coefficients',
    marketingVibe: 'Serious, Impactful & Professional',
    revenueModel: 'Monthly SaaS subscription ($299/mo starting package)',
    cta: 'Request a Free Carbon Offset Audit'
  },
  podcut: {
    founderName: 'David',
    name: 'PodCut',
    domain: 'Creator Economy / AI Media',
    idea: 'AI browser-agent editing assistant that crops 1-hour raw video podcasts into 10 viral vertical short reels.',
    targetAudience: 'Independent creators, podcasters, and startup marketers',
    theme: 'Sleek Minimalist Dark (Monochrome & Neon Yellow highlights)',
    feature: 'Voice-based layout shifting, face-tracking, and auto-stylized animated captions',
    marketingVibe: 'Friendly, Creative & Humorous',
    revenueModel: 'Pay-per-hour processed ($5 per hour of raw footage)',
    cta: 'Clip Your Podcast Episode Now'
  }
};

// Shrey's Vibe-Coded Projects
const shreysProjects = [
  {
    title: 'Smart Spectra',
    url: 'https://smart-spectra.vercel.app/',
    desc: 'AI-driven spectral analysis and interactive data visualization platform.',
    tech: 'React / ChartJS / Gemini API'
  },
  {
    title: 'Fun Activity Suggestor',
    url: 'https://fun-activity-suggestor.netlify.app/',
    desc: 'Dynamic mood-adaptive activity recommender algorithm.',
    tech: 'JavaScript / API Integration / CSS'
  },
  {
    title: 'Retro Portfolio Website',
    url: 'https://retro-portfolio-liard.vercel.app/',
    desc: 'Vibrant developer portfolio designed with a nostalgic terminal UI.',
    tech: 'HTML / CSS / JS Terminal Simulation'
  },
  {
    title: 'IT Capstone (Rubric Automator)',
    url: 'https://ai-assessment-capstone.vercel.app/',
    desc: 'Educational assessment dashboard automating rubric-based scoring.',
    tech: 'React / OpenAI API / Tailwind'
  },
  {
    title: 'Aiverse Hub',
    url: 'https://aiverse-opal.vercel.app/',
    desc: 'Discovery dashboard mapping and aggregating cutting-edge AI models.',
    tech: 'Vite / Tailwind / API Gateway'
  },
  {
    title: 'CCDC Forms',
    url: 'https://www.ccdcforms.com/',
    desc: 'Commercial compliance form manager built for construction companies.',
    tech: 'Next.js / PostgreSQL / Tailwind'
  },
  {
    title: 'Look Generator',
    url: 'https://look-generator.vercel.app/',
    desc: 'Generative AI platform creating custom outfit combinations and styles.',
    tech: 'React / Stable Diffusion API / CSS'
  }
];

function App() {
  const [form, setForm] = useState({
    founderName: '',
    name: '',
    domain: '',
    idea: '',
    targetAudience: '',
    theme: '',
    feature: '',
    marketingVibe: '',
    revenueModel: '',
    cta: ''
  });

  const [activeTab, setActiveTab] = useState('timeline'); // timeline, skepticism, judgement, localai
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(true); // default open for showcase!
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Load a preset
  const handleLoadPreset = (key) => {
    setForm(presets[key]);
    showToast(`Loaded ${presets[key].name} Preset!`);
  };

  const handleReset = () => {
    setForm({
      founderName: '',
      name: '',
      domain: '',
      idea: '',
      targetAudience: '',
      theme: '',
      feature: '',
      marketingVibe: '',
      revenueModel: '',
      cta: ''
    });
    showToast('Form cleared.');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Prompt copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Get current form values or fallback to default labels
  const f = {
    founderName: form.founderName || '[Founder Name]',
    name: form.name || 'StartupX',
    domain: form.domain || '[Domain/Industry]',
    idea: form.idea || '[1-line Value Proposition]',
    targetAudience: form.targetAudience || '[Target Audience]',
    theme: form.theme || '[Design Theme]',
    feature: form.feature || '[Killer Feature]',
    marketingVibe: form.marketingVibe || '[Marketing Vibe]',
    revenueModel: form.revenueModel || '[Revenue Model]',
    cta: form.cta || '[Call to Action (CTA)]'
  };

  // Github Repo URL
  const gitRepoUrl = "https://github.com/shreytalreja25/startup-toolkit";
  const linkedinUrl = "https://www.linkedin.com/in/shreytalreja25/";
  const deploymentUrl = "https://startup-toolkit-unsw.vercel.app/";
  
  // QR code API link (using qrserver)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(deploymentUrl)}`;

  // 10 Deliverable Prompt Definitions
  const deliverables = [
    {
      id: 'd1',
      title: 'Landing Page Code',
      tool: 'v0.dev',
      toolUrl: 'https://v0.dev',
      icon: <Layout className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Generates a fully interactive single-page React frontend tailored to the startup visual identity.',
      prompt: `Create a stunning modern landing page for a startup named "${f.name}".
Domain: ${f.domain}
Style Theme: ${f.theme}
Target Audience: ${f.targetAudience}
Value Proposition: ${f.idea}
Key Feature to Highlight: ${f.feature}
Call to Action (CTA): ${f.cta}

Make the design extremely premium. It should use a dark color scheme inspired by "${f.theme}" style. Add a beautiful navigation bar with a logo placeholder, a hero section with a bold headline, a visual dashboard preview or graphic showcase of the feature "${f.feature}", a "How it Works" section, a pricing card displaying the "${f.revenueModel}" model, and a high-converting email capture form centered around "${f.cta}". Use modern sans fonts, smooth CSS transitions, glowing hover states, and spacious layouts.`
    },
    {
      id: 'd2',
      title: '5-Slide Pitch Deck',
      tool: 'z.ai (GLM 5.2) / Gamma',
      toolUrl: 'https://chat.z.ai',
      icon: <Layers className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Generates an outline and slide-by-slide script for investors or startup pitches.',
      prompt: `Act as an expert startup incubator mentor. Draft a highly compelling 5-slide pitch deck structure for my startup "${f.name}".
Domain: ${f.domain}
Value Proposition: ${f.idea}
Target Audience: ${f.targetAudience}
Revenue Model: ${f.revenueModel}
Founder: ${f.founderName}

Format it with clear slide titles, visual layout suggestions, and the exact speaker script notes to read:
- Slide 1: The Hook & Problem (Focus on ${f.targetAudience}'s pain point)
- Slide 2: The Solution (How ${f.name} solves it using AI simply)
- Slide 3: The Secret Sauce (Highlighting the killer feature: ${f.feature})
- Slide 4: Business Model (Explaining the ${f.revenueModel} pricing)
- Slide 5: The Team & Vision (Why ${f.founderName} is uniquely positioned to build this)
Keep it punchy, remove all academic jargon, and make it fit the MCIC Makerspace entrepreneurial vibe.`
    },
    {
      id: 'd3',
      title: 'Viral Marketing Promo & Video',
      tool: 'Higgsfield.ai',
      toolUrl: 'https://higgsfield.ai/supercomputer',
      icon: <Video className="w-4 h-4 text-amber-400" />,
      isAgent: true,
      desc: 'Create visual prompt guidelines for Higgsfield Supercomputer to generate marketing videos or carousels.',
      prompt: `Act as a growth marketer specializing in AI-driven media. Create a marketing content prompt for Higgsfield.ai Supercomputer to generate a 5-second cinematic product teaser for "${f.name}".
Startup Name: ${f.name}
Value Proposition: ${f.idea}
Visual Theme: ${f.theme}
Marketing Vibe: ${f.marketingVibe}

Generation Prompt:
"Cinematic 3D render, high-energy startup advertisement. A ${f.theme} themed workspace showing ${f.name} in action, utilizing ${f.feature}. Quick camera pan, cinematic studio lighting, glowing neon details, futuristic elements. ${f.marketingVibe} style, photorealistic, 4k resolution, smooth motion graphics. No text artifacts."

Also, detail the layout requirements for 3 viral carousels explaining the startup to ${f.targetAudience}.`
    },
    {
      id: 'd4',
      title: 'AI Audio overview / Podcast Script',
      tool: 'NotebookLM',
      toolUrl: 'https://notebooklm.google',
      icon: <Volume2 className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Generates a natural-sounding script to paste or guide NotebookLMs voice generation.',
      prompt: `Write a script for two enthusiastic tech podcast hosts discussing the launch of "${f.name}".
The hosts should discuss how ${f.name} uses AI to address the core problem: "${f.idea}" for ${f.targetAudience}.
They should highlight the killer feature: "${f.feature}".
Host A is a tech reviewer who is highly excited about the practical implementation, and Host B is a business-focused co-host who breaks down how the ${f.revenueModel} model works.
The tone should be ${f.marketingVibe}, conversational, natural, with realistic filler words ("like", "right", "uh-huh"), and sound like a native NotebookLM Audio Overview. Mention founder ${f.founderName} as the visionary builder.`
    },
    {
      id: 'd5',
      title: 'Market Analysis & Risk Audit',
      tool: 'Gemini Deep Research',
      toolUrl: 'https://gemini.google.com',
      icon: <Search className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Conducts a detailed search on market sizing, competitors, and key regulatory/reliability risks.',
      prompt: `Perform a deep competitive analysis and market research report for a startup named "${f.name}" operating in ${f.domain}.
Core Value Prop: ${f.idea}
Target Audience: ${f.targetAudience}
Geographic scope: Australian ecosystem (UNSW founders focus) and global market scalability.

Provide a comprehensive, cited report containing:
1. Total Addressable Market (TAM) estimate for this niche.
2. Three direct/indirect competitors, outlining how we disrupt them using "${f.feature}".
3. Top 3 critical risks (such as LLM hallucinations, data security/privacy, and API rate-limiting/token costs) and concrete technical mitigation strategies for a lean team.
Output the analysis in clean Markdown.`
    },
    {
      id: 'd6',
      title: 'AI Voice Receptionist/Concierge',
      tool: 'ElevenLabs / Vapi',
      toolUrl: 'https://elevenlabs.io',
      icon: <PhoneCall className="w-4 h-4 text-amber-400" />,
      isAgent: true,
      desc: 'Generates a developer system instruction prompt for a phone or conversational audio agent.',
      prompt: `You are "${f.name} Assistant", a warm, responsive AI customer concierge bot representing ${f.name}.
Your founder is ${f.founderName}.
Your tone of voice is ${f.marketingVibe}.
Your core value proposition is: "${f.idea}".
If a customer calls or speaks with you, your goal is to explain how we help them and guide them to our Call to Action: "${f.cta}".

Operating Guidelines:
- Speak in clear, short, conversational sentences suitable for low-latency text-to-speech.
- Be helpful and friendly, avoiding complex engineering jargon.
- Explain "${f.feature}" simply.
- If asked about pricing, present the "${f.revenueModel}" pricing model.
- If asked an edge case question you cannot answer, capture their name and email so ${f.founderName} can reach out.`
    },
    {
      id: 'd7',
      title: 'Notion Team Workspace Outline',
      tool: 'Notion AI',
      toolUrl: 'https://notion.so',
      icon: <Database className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Generates a markdown skeleton to paste into Notion for tracking tasks, customers, and launches.',
      prompt: `Generate a markdown-based Notion workspace outline for startup "${f.name}".
Core Idea: ${f.idea}
Founder: ${f.founderName}

The workspace must outline three distinct database tables:
1. A Product Backlog with columns: Task Name, Status (Backlog, In Progress, QA, Done), Priority (Low, Medium, High), and Owner (${f.founderName} / AI agent).
2. A CRM table tracking early-stage outreach to ${f.targetAudience} with columns: Contact Name, Organization, Status (Leads, Contacted, Meeting Scheduled, Closed), and Notes.
3. A Marketing Calendar with columns: Content Topic, Channel (LinkedIn, X, Email), Publish Date, and Target Vibe (${f.marketingVibe}).
Include 3 sample data rows in each table, customized with relevant examples for our core idea.`
    },
    {
      id: 'd8',
      title: 'Brand Assets & SVG Logo',
      tool: 'Recraft.ai / DALL-E 3',
      toolUrl: 'https://recraft.ai',
      icon: <Palette className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Generates vector or image prompts for creating logo sets, icons, and brand palettes.',
      prompt: `Act as a branding expert. Create a visual generation prompt for a logo and brand kit for a modern startup named "${f.name}".
Domain: ${f.domain}
Visual Theme: ${f.theme}
Key Concept: Representing "${f.feature}"

Visual Prompt:
"Vector flat design icon, modern minimalist logo for a startup named ${f.name} in the ${f.domain} space. Theme colors: ${f.theme}. The icon should creatively represent ${f.feature}. Transparent background, clean lines, high resolution, SVGs style, professional branding graphic, corporate identity, Dribbble aesthetic."

Additionally, output a cohesive 4-color hex color palette inspired by the theme "${f.theme}" with styling descriptions.`
    },
    {
      id: 'd9',
      title: '3-Post Launch Social Campaign',
      tool: 'ChatGPT / Gemini',
      toolUrl: 'https://gemini.google.com',
      icon: <Share2 className="w-4 h-4 text-amber-400" />,
      isAgent: false,
      desc: 'Writes professional, punchy launching copywriting posts tailored to your target platforms.',
      prompt: `Write an organic social launch campaign containing 3 distinct posts in a ${f.marketingVibe} tone for "${f.name}".
Founder: ${f.founderName}
Target Audience: ${f.targetAudience}
Core Value Prop: ${f.idea}

Write:
- Post 1 (LinkedIn): A compelling, story-driven founder post sharing why "${f.founderName}" built "${f.name}". Highlight "${f.feature}", tag @UNSW Founders, and guide them to "${f.cta}".
- Post 2 (X / Twitter): A punchy, hook-driven tweet under 280 characters focusing on efficiency gains, utilizing emojis and active hashtags.
- Post 3 (Instagram): Visual styling suggestions combined with copy highlighting the user experience and encouraging them to "${f.cta}".`
    },
    {
      id: 'd10',
      title: 'AI Chief of Staff Operator',
      tool: 'Manus AI (manus.im)',
      toolUrl: 'https://manus.im',
      icon: <Cpu className="w-4 h-4 text-amber-400" />,
      isAgent: true,
      desc: 'Provides structured instructions for Manus AI to execute browser automation across your apps.',
      prompt: `Act as an AI Browser Operator Chief of Staff. I need you to execute a workflow across my workspace for my startup "${f.name}".
Startup Name: ${f.name}
Target Audience: ${f.targetAudience}
CTA Action: ${f.cta}
Founder: ${f.founderName}

Execute the following sequence using your browser tools:
1. Access my CRM in Notion and extract the list of registered users.
2. For each user, draft a personalized onboarding email welcoming them to "${f.name}". Detail how they can perform our call-to-action: "${f.cta}".
3. Draft a follow-up scheduler invitation for a 15-minute feedback chat next Tuesday at 11:00 AM on Google Calendar.
4. Save a summary CSV of onboarding statuses into a shared folder in Google Drive.
Execute all tasks autonomously, asking for clarification only if authentication credentials fail.`
    }
  ];

  return (
    <div className="app-container">
      {/* Sidebar - Interview Strategy & Dashboard */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-badge">UNSW</div>
          <h2 className="logo-title">Founders <span>AI</span> Prep</h2>
        </div>

        {/* Tab Headers */}
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('timeline')}
            id="tab-btn-timeline"
          >
            <Rocket className="w-4 h-4" /> Timeline
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skepticism' ? 'active' : ''}`}
            onClick={() => setActiveTab('skepticism')}
            id="tab-btn-skepticism"
          >
            <HelpCircle className="w-4 h-4" /> Q&A Shield
          </button>
          <button 
            className={`tab-btn ${activeTab === 'judgement' ? 'active' : ''}`}
            onClick={() => setActiveTab('judgement')}
            id="tab-btn-judgement"
          >
            <ShieldAlert className="w-4 h-4" /> Judgement
          </button>
          <button 
            className={`tab-btn ${activeTab === 'localai' ? 'active' : ''}`}
            onClick={() => setActiveTab('localai')}
            id="tab-btn-localai"
          >
            <Terminal className="w-4 h-4" /> Local AI
          </button>
        </div>

        {/* Tab Contents */}
        <div className="tab-content">
          {activeTab === 'timeline' && (
            <div className="info-card">
              <h3><Rocket className="w-5 h-5 text-amber-400" /> Presentation Timeline</h3>
              <div className="timeline-step active">
                <div className="timeline-time">0-1</div>
                <div className="timeline-details">
                  <h4>Hook & Volunteer</h4>
                  <p>Open this app. Pitch: "Solo founding is a 10-minute exercise." Ask Shetal/Nina for a startup idea (or load preset).</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-time">1-2</div>
                <div className="timeline-details">
                  <h4>Rapid Gathering</h4>
                  <p>Type answers into the grid. Emphasize that AI prompt coordination bridges the gap to execution.</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-time">2-8</div>
                <div className="timeline-details">
                  <h4>The 10-Deliverable Demo</h4>
                  <p>Run through deliverables card-by-card. Show how to prompt v0, z.ai, Higgsfield, and Gemini live.</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-time">8-9</div>
                <div className="timeline-details">
                  <h4>The Agent Integration</h4>
                  <p>Show how scaling is done using AI browser agents like Manus AI to run day-to-day operations.</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="timeline-time">9-10</div>
                <div className="timeline-details">
                  <h4>AI Judgement Wrap-up</h4>
                  <p>Debrief on risks (hallucinations, security, IP, costs) and establish human-in-the-loop validation.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skepticism' && (
            <div className="info-card">
              <h3><HelpCircle className="w-5 h-5 text-amber-400" /> Skepticism Shield</h3>
              <div className="accordion">
                <div className="accordion-item">
                  <button 
                    className="accordion-header"
                    onClick={() => setActiveAccordion(activeAccordion === 0 ? null : 0)}
                  >
                    Q: "Isn't AI just generating hallucinations?"
                    <span>{activeAccordion === 0 ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 0 && (
                    <div className="accordion-content">
                      "Yes, models hallucinate. We mitigate this by using AI for scaffolding, coding structure, and draft writing, but keeping humans-in-the-loop before anything goes public. We ground responses using RAG/NotebookLM to keep them factually anchored."
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button 
                    className="accordion-header"
                    onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                  >
                    Q: "What about data privacy and IP theft?"
                    <span>{activeAccordion === 1 ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 1 && (
                    <div className="accordion-content">
                      "Data security is paramount. For confidential processes, founders should avoid copying customer details, review third-party terms of service for Zero Data Retention clauses, or run open-source local models using Ollama."
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button 
                    className="accordion-header"
                    onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                  >
                    Q: "Isn't this just high-level hype?"
                    <span>{activeAccordion === 2 ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 2 && (
                    <div className="accordion-content">
                      "AI is only hyped when people don't know how to deploy it. By teaching founders 'Practical AI'—like coding a responsive web component in v0.dev in 60 seconds—we turn theoretical hype into practical value."
                    </div>
                  )}
                </div>

                <div className="accordion-item">
                  <button 
                    className="accordion-header"
                    onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                  >
                    Q: "What happens when free tier limits hit?"
                    <span>{activeAccordion === 3 ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 3 && (
                    <div className="accordion-content">
                      "We design for cost efficiency. Startups start with free tiers or low-cost API keys (e.g. Gemini's free tier). As they scale, we transition high-volume, low-criticality tasks to local models (Ollama) or set hard spending caps on Cloud providers. This ensures sustainability."
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'judgement' && (
            <div className="info-card">
              <h3><ShieldAlert className="w-5 h-5 text-amber-400" /> AI Judgement & Ethics</h3>
              <div className="judgement-list">
                <div className="judgement-item">
                  <div className="judgement-icon">❶</div>
                  <div className="judgement-text">
                    <h4>Human-in-the-Loop Validation</h4>
                    <p>AI accelerates execution, but humans guarantee quality. Never let AI code deploy to production or send emails to users without explicit manual review.</p>
                  </div>
                </div>
                <div className="judgement-item">
                  <div className="judgement-icon">❷</div>
                  <div className="judgement-text">
                    <h4>Context Window Boundaries</h4>
                    <p>Models degrade in quality as conversations grow too long. Train founders on when to start fresh chats to prevent model drift and hallucination.</p>
                  </div>
                </div>
                <div className="judgement-item">
                  <div className="judgement-icon">❸</div>
                  <div className="judgement-text">
                    <h4>Legal & IP Uncertainty</h4>
                    <p>AI output copyrights are still legally grey in many jurisdictions. Core IP assets should be manually crafted or significantly customized from AI scaffolding.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'localai' && (
            <div className="info-card">
              <h3><Terminal className="w-5 h-5 text-amber-400" /> Ollama & Local AI</h3>
              <div className="judgement-list">
                <p style={{fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.5rem'}}>
                  For startups with high security, privacy, or cost constraints, recommend local models:
                </p>
                <div className="judgement-item">
                  <div className="judgement-icon">⚡</div>
                  <div className="judgement-text">
                    <h4>Install Ollama</h4>
                    <p>Download from <a href="https://ollama.com" target="_blank" rel="noreferrer" style={{color: 'var(--unsw-gold)'}}>ollama.com</a>. Run lightweight models completely locally.</p>
                  </div>
                </div>
                <div className="judgement-item">
                  <div className="judgement-icon">💻</div>
                  <div className="judgement-text">
                    <h4>Run in Terminal</h4>
                    <p><code>ollama run llama3</code> for general tasks or <code>ollama run qwen2.5-coder</code> for coding.</p>
                  </div>
                </div>
                <div className="judgement-item">
                  <div className="judgement-icon">🔌</div>
                  <div className="judgement-text">
                    <h4>IDE & App Integration</h4>
                    <p>Plug Ollama API (localhost:11434) directly into vscode, cursor, or open-webui for 100% offline development.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Panel - Forms & Prompts */}
      <main className="main-content">
        
        {/* Main Header with QR Code */}
        <header className="main-header">
          <div className="header-text">
            <h1>UNSW Founders <span>Practical AI Toolkit</span></h1>
            <p>Empowering student and startup builders to go from zero to prototype using AI.</p>
          </div>
          
          {/* QR Code Card */}
          <div className="qr-card">
            <img 
              src={qrCodeUrl} 
              alt="GitHub Repo QR Code" 
              className="qr-code-img"
            />
            <span className="qr-label">Scan App Repo</span>
          </div>
        </header>

        {/* Collapsible About Me & Projects Section */}
        <section className={`portfolio-accordion ${isPortfolioExpanded ? 'expanded' : ''}`}>
          <button 
            className="portfolio-trigger" 
            onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
          >
            <div className="portfolio-title-layout">
              <User className="w-5 h-5 text-amber-400" />
              <h2>Meet Shrey | <span>Practical AI Project Officer Candidate</span></h2>
              <span className="portfolio-badge">7 Vibe-Coded Projects</span>
            </div>
            {isPortfolioExpanded ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-amber-400" />}
          </button>
          
          {isPortfolioExpanded && (
            <div className="portfolio-body">
              {/* Profile Card */}
              <div className="profile-card">
                <div className="avatar-wrapper">
                  <img src={avatarImg} alt="Shrey Talreja" className="profile-avatar" />
                </div>
                <div className="profile-meta">
                  <h3>Shrey Talreja <span>Practical AI Builder & Educator</span></h3>
                  <p>
                    Passionate software builder bridging high-level AI architectures with scrappy, rapid, and functional prototyping. 
                    Committed to activating the UNSW student and startup ecosystem by demonstrating concrete, plain-language AI operations 
                    that drive workflow speed, lower MVP barriers, and foster hands-on learning.
                  </p>
                  <div className="profile-socials">
                    <a href={gitRepoUrl} target="_blank" rel="noreferrer" className="social-link">
                      <GithubIcon className="w-4 h-4" /> GitHub Profile
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-link">
                      <LinkedinIcon className="w-4 h-4" /> LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div>
                <h3 className="projects-grid-header"><FolderGit2 className="w-4 h-4 inline mr-1 text-amber-400" /> Showcasing Live AI & Full-Stack Projects</h3>
                <div className="projects-grid">
                  {shreysProjects.map((proj, idx) => (
                    <a 
                      href={proj.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-card" 
                      key={idx}
                    >
                      <div className="project-card-header">
                        <span className="project-title">
                          {proj.title}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted" />
                      </div>
                      <p className="project-desc">{proj.desc}</p>
                      <span className="project-tech">{proj.tech}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Requirements Input Form Panel */}
        <section className="form-panel">
          <div className="form-grid">
            <div className="form-group">
              <label>Founder Name</label>
              <input 
                type="text" 
                name="founderName"
                value={form.founderName} 
                onChange={handleInputChange} 
                placeholder="e.g. Nina" 
              />
            </div>
            <div className="form-group">
              <label>Startup Name</label>
              <input 
                type="text" 
                name="name"
                value={form.name} 
                onChange={handleInputChange} 
                placeholder="e.g. StudyBuddy" 
              />
            </div>
            <div className="form-group">
              <label>Domain / Industry</label>
              <input 
                type="text" 
                name="domain"
                value={form.domain} 
                onChange={handleInputChange} 
                placeholder="e.g. EdTech / Productivity" 
              />
            </div>
            <div className="form-group">
              <label>Core Idea (1-Line Value Prop)</label>
              <input 
                type="text" 
                name="idea"
                value={form.idea} 
                onChange={handleInputChange} 
                placeholder="AI study companion that..." 
              />
            </div>
            <div className="form-group">
              <label>Target Audience</label>
              <input 
                type="text" 
                name="targetAudience"
                value={form.targetAudience} 
                onChange={handleInputChange} 
                placeholder="e.g. UNSW students" 
              />
            </div>
            <div className="form-group">
              <label>Design Theme / Style</label>
              <input 
                type="text" 
                name="theme"
                value={form.theme} 
                onChange={handleInputChange} 
                placeholder="e.g. Neon Cyberpunk" 
              />
            </div>
            <div className="form-group">
              <label>Killer Feature</label>
              <input 
                type="text" 
                name="feature"
                value={form.feature} 
                onChange={handleInputChange} 
                placeholder="e.g. Mock quizzes from pdf" 
              />
            </div>
            <div className="form-group">
              <label>Marketing Vibe</label>
              <input 
                type="text" 
                name="marketingVibe"
                value={form.marketingVibe} 
                onChange={handleInputChange} 
                placeholder="e.g. Energetic & Bold" 
              />
            </div>
            <div className="form-group">
              <label>Revenue Model</label>
              <input 
                type="text" 
                name="revenueModel"
                value={form.revenueModel} 
                onChange={handleInputChange} 
                placeholder="e.g. Freemium ($9/mo)" 
              />
            </div>
            <div className="form-group">
              <label>Call to Action (CTA)</label>
              <input 
                type="text" 
                name="cta"
                value={form.cta} 
                onChange={handleInputChange} 
                placeholder="e.g. Generate Your First Mock Exam" 
              />
            </div>
          </div>
          
          <div className="preset-selector-row">
            <div className="preset-btn-group">
              <span style={{color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', alignSelf: 'center', marginRight: '0.5rem'}}>Presets:</span>
              <button className="preset-btn" onClick={() => handleLoadPreset('studybuddy')}>🎓 StudyBuddy (EdTech)</button>
              <button className="preset-btn" onClick={() => handleLoadPreset('ecotrace')}>🌿 EcoTrace (SaaS)</button>
              <button className="preset-btn" onClick={() => handleLoadPreset('podcut')}>🎬 PodCut (Creator)</button>
            </div>
            <button className="clear-btn" onClick={handleReset}>
              <RotateCcw className="w-3.5 h-3.5" /> Clear Form
            </button>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="deliverables-section">
          <h2><Sparkles className="w-6 h-6 text-amber-400" /> Generated Startup Starter Kit (10 Deliverables)</h2>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.75rem'}}>
            {deliverables.map((item, idx) => (
              <div className="deliverable-card" key={item.id}>
                <div className="card-header">
                  <div className="card-badge-group">
                    <span className="deliverable-num">{idx + 1}</span>
                    <span className="tool-badge">
                      {item.icon}
                      {item.tool}
                    </span>
                    {item.isAgent && <span className="agent-badge">AI Agent</span>}
                  </div>
                  
                  <div className="card-actions">
                    <button 
                      className={`action-btn ${copiedId === item.id ? 'copy-success' : ''}`}
                      onClick={() => handleCopyToClipboard(item.prompt, item.id)}
                    >
                      {copiedId === item.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedId === item.id ? 'Copied!' : 'Copy Prompt'}
                    </button>
                    <a 
                      href={item.toolUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="action-btn launch-btn"
                    >
                      <ExternalLink className="w-4 h-4" /> Launch Tool
                    </a>
                  </div>
                </div>

                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <div className="prompt-container">
                  <div className="prompt-header">
                    <span className="prompt-label">Customized Prompt Template</span>
                  </div>
                  <div className="prompt-text">
                    {item.prompt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
