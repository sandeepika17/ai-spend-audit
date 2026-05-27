# AI Spend Audit

AI Spend Audit is a full-stack SaaS web application that helps startups and engineering teams identify unnecessary AI tooling expenses and discover cost optimization opportunities. The platform generates AI-powered audit summaries, sends transactional emails, stores audit data in Supabase, and creates shareable audit result pages.

## Who It’s For

This tool is designed for:
- startup founders
- engineering teams
- indie hackers
- SaaS companies using multiple AI tools

The goal is to help teams reduce overspending on AI subscriptions and optimize tool usage.

---

# Live Demo

Deployed URL: https://ai-spend-audit-one-beta.vercel.app/

YOUR_VERCEL_URL: https://vercel.com/sandeepikas-projects

GitHub Repository: https://github.com/sandeepika17/ai-spend-audit

YOUR_GITHUB_URL: https://github.com/sandeepika17/

---

# Screenshots



## Homepage

(Add screenshot here)

```md
![Homepage](./screenshots/homepage.png)
```

---

## Audit Result Page

(Add screenshot here)

```md
![Results](./screenshots/results.png)
```

---

## Email Workflow / Supabase Storage


```

---

# Screen Recording

Loom/YouTube Demo Link:

PASTE_LINK_HERE

(30-second walkthrough recommended)

---

# Features

- AI spend optimization recommendations
- AI-generated summaries using OpenAI
- Shareable audit result URLs
- Transactional emails using Resend
- Supabase database integration
- Responsive modern UI
- Full-stack Next.js architecture

---

# Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Supabase
- OpenAI API
- Resend
- Vercel

---

# Quick Start

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_URL
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create Environment Variables

Create:

```txt
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

OPENAI_API_KEY=

RESEND_API_KEY=
```

---

## 4. Run Locally

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

# Deployment

The application is deployed using Vercel.

To deploy:

1. Push code to GitHub
2. Import repository into Vercel
3. Add environment variables
4. Deploy

---

# Decisions & Trade-offs

## 1. Rule-Based Audit Logic Instead of Fully Dynamic AI Analysis

I used a rule-based pricing engine for recommendations because it provides predictable outputs and keeps API costs low. A fully AI-driven optimization engine would require more usage analytics and significantly more prompt engineering.

---

## 2. URL Query Parameters for Shareable Results

I passed audit data through URL search params instead of persisting every result page in the database. This reduced backend complexity and sped up implementation, though a database-backed results system would scale better long-term.

---

## 3. OpenAI Summaries as Enhancement Layer

The AI summary feature was implemented as a separate enhancement layer so the core audit workflow still functions even if the OpenAI API fails or rate limits occur.

---

## 4. Supabase for Fast Backend Development

I chose Supabase because it simplified database setup, API integration, and deployment compared to building a custom backend from scratch.

## 5. Serverless API Routes Instead of Dedicated Backend Service

Using Next.js API routes allowed the project to remain fully serverless and easier to deploy on Vercel, though a larger production system might separate frontend and backend services.

---

# Architecture Overview

## Frontend
- Next.js App Router
- React Client Components
- Tailwind CSS

## Backend
- Next.js API Routes
- OpenAI API integration
- Resend email integration

## Database
- Supabase PostgreSQL

## Hosting
- Vercel

---

# Future Improvements

- Authentication system
- Saved audit history
- Analytics dashboard
- PDF export
- Team collaboration
- Stripe billing integration

---
