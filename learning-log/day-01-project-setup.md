# Day 1: Project Setup + Product Spine

**Date Completed:** October 28, 2024  
**Time Invested:** ~4 hours  
**Status:** ✅ Complete

---

## 🎯 What We Built

1. Next.js project initialized
2. Landing page with product promise
3. Git repository setup
4. Deployed to Vercel (live on internet)
5. Auto-deploy configured via GitHub

**Live URL:** https://milly-ai.vercel.app

---

## 📚 Concept (What & Why)

### What is Next.js?
Next.js is a **React framework** that handles all the complex configuration for you. Think of it as "React with batteries included."

**Analogy:** If React is like buying car parts, Next.js is buying a fully assembled car that just works.

### Why Next.js?
1. **Server-Side Rendering (SSR):** Pages load faster, better for SEO
2. **File-based routing:** `app/page.tsx` = homepage, `app/about/page.tsx` = /about page
3. **API routes built-in:** Can build backend and frontend in one project
4. **Zero config:** Just works out of the box
5. **Vercel integration:** Deploy in seconds

**Alternative:** Could use plain React + Express.js, but you'd spend weeks configuring everything.

### What is Vercel?
**Platform as a Service (PaaS)** that hosts your app. You push code → it automatically builds and deploys.

**Why Vercel?**
- Made by the Next.js team (perfect integration)
- Free tier is generous for MVPs
- Automatic HTTPS, global CDN, previews
- Zero DevOps knowledge needed

**Alternative:** AWS, Google Cloud, but requires infrastructure knowledge.

### What is Git/GitHub?
**Git:** Version control system (like "Track Changes" but for code)  
**GitHub:** Cloud storage for your Git repositories

**Why it matters:**
- Can revert to previous versions if you break something
- Collaboration tool (when working with others)
- Acts as backup
- Enables CI/CD (Continuous Integration/Deployment)

---

## 🏗️ Architecture (How It Fits)

### The Stack (What Talks to What)

```
Your Computer (Dev Environment)
    ↓
  Git/GitHub (Version Control)
    ↓
  Vercel (Build & Deploy)
    ↓
  Internet (Live Site)
```

### File Structure

```
milly-ai/
├── app/
│   ├── page.tsx          ← Homepage (what users see at /)
│   ├── layout.tsx        ← Wrapper for all pages
│   └── globals.css       ← Global styles
├── public/               ← Static files (images, etc.)
├── package.json          ← Dependencies list
├── next.config.ts        ← Next.js configuration
└── tailwind.config.ts    ← Styling configuration
```

### Request Flow (How Users See Your Site)

1. User types `milly-ai.vercel.app` in browser
2. Request hits Vercel's CDN (Content Delivery Network)
3. Vercel serves the pre-built static HTML/CSS/JS
4. Browser renders the page
5. React "hydrates" (makes it interactive)

**Why this matters:** Understanding this flow helps you debug issues and optimize performance.

---

## 💻 Code (What's Happening)

### The Landing Page Breakdown

```typescript
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
```

**Line by line:**
- `export default function Home()` - Creates a React component called Home
- `return (...)` - Returns JSX (HTML-like syntax in JavaScript)
- `<main>` - Semantic HTML5 tag for main content
- `className="..."` - Tailwind CSS utility classes

**Tailwind Classes Explained:**
- `min-h-screen` = minimum height is 100% of viewport (full screen)
- `bg-gray-900` = dark gray background (#111827)
- `text-white` = white text color

### The Promise Box

```typescript
<div className="bg-blue-900/30 border-2 border-blue-600 rounded-lg p-8 mb-8">
```

**CSS Concepts:**
- `bg-blue-900/30` = blue background at 30% opacity (the `/30` is alpha)
- `border-2 border-blue-600` = 2px solid border in blue
- `rounded-lg` = 8px border radius (rounded corners)
- `p-8` = padding 32px on all sides (8 × 4px)
- `mb-8` = margin bottom 32px

**Why this works:** High contrast (dark bg + bright blue) draws attention to the core promise.

### The CTA (Call to Action)

```typescript
<a href="/auth" className="inline-block bg-blue-600 hover:bg-blue-700...">
```

**Key concepts:**
- `<a>` tag with `href` creates a link
- `inline-block` allows padding on an inline element
- `hover:bg-blue-700` - Tailwind state variant (color changes on hover)
- `transition` - smooth animation between states

---

## 🔄 Pattern (Reusable Knowledge)

### Pattern 1: Landing Page Structure

**The Formula:**
1. **Hero** - Big headline + value prop
2. **Promise** - Core differentiator (highlighted)
3. **CTA** - Single, clear action

**Why:** This structure converts visitors → users. It's battle-tested across thousands of products.

**Reusable:** Every product you build should follow this. Change the words, keep the structure.

### Pattern 2: Git Workflow

**The Basic Flow:**
```bash
# Make changes to code
git add .               # Stage all changes
git commit -m "message" # Save snapshot with description
git push                # Send to GitHub
```

**Why:** This workflow is universal across all software teams. Learn it once, use it forever.

### Pattern 3: Deployment Pipeline

**The Modern Flow:**
```
Local Dev → Git Push → Auto Build → Auto Deploy → Live
```

**Why:** Called "Continuous Deployment" (CD). Changes go live in minutes, not days.

**Contrast with old way:**
- Old: Manual uploads via FTP, server configuration, downtime
- New: Push code, everything happens automatically

---

## 🎨 Product Decisions

### Decision 1: Next.js over alternatives

**Options considered:**
- Plain React (Vite)
- Remix
- SvelteKit
- Astro

**Why Next.js:**
- ✅ Best Vercel integration (our host)
- ✅ Largest community = more help available
- ✅ App Router is modern and powerful
- ✅ Built-in API routes (we'll need for voice integration)

**Tradeoff:** Slightly heavier than alternatives, but worth it for features.

### Decision 2: Tailwind CSS

**Options considered:**
- CSS Modules
- Styled Components
- Plain CSS
- Chakra UI / Material UI

**Why Tailwind:**
- ✅ Utility-first = prototype fast
- ✅ No context switching (style in HTML)
- ✅ Consistent design system
- ✅ Tree-shaking = small production bundle

**Tradeoff:** HTML looks messy with lots of classes, but speed > elegance in MVPs.

### Decision 3: "Finish-by" as product spine

**Why this matters:**
This is your **core differentiator**. Every other cooking app shows recipes. You promise **arrival time**.

**Product positioning:**
- Not: "Here's how to cook salmon"
- But: "Dinner will be ready at 7:00 PM"

**Why it works:**
- Solves the #1 pain point (timing stress)
- Easy to understand
- Easy to measure success (±2 minutes)
- Hard for competitors to copy (requires scheduling engine)

**This is YOUR Google Maps moment:** Just like Maps promises arrival time, you promise dinner time.

---

## 🧠 Key Learnings

### Technical Concepts
1. **Framework vs Library:** Next.js (framework) has opinions and structure. React (library) is just a tool.
2. **SSR (Server-Side Rendering):** Pages are built on the server, sent as HTML. Faster initial load.
3. **Hydration:** Static HTML becomes interactive when React loads in browser.
4. **File-based routing:** File structure = URL structure. Simple mental model.

### Development Workflow
1. **Local dev (`pnpm dev`):** Run code on your machine, see changes instantly
2. **Version control (Git):** Save snapshots, enable collaboration, act as backup
3. **Deployment (Vercel):** Code → internet in 60 seconds
4. **Auto-deploy:** Push to GitHub → automatic production deploy

### Product Strategy
1. **Lead with the promise:** "Arrive dinner on time" is the entire product in 4 words
2. **Non-negotiable finish time:** This is the spine. Everything else supports this.
3. **Constraint = Feature:** The ±2 minute constraint isn't a limitation, it's a commitment.

---

## 🎓 Skills Acquired

### New Skills
- ✅ Set up Next.js project from scratch
- ✅ Deploy to production (Vercel)
- ✅ Git workflow (init, add, commit, push)
- ✅ Connect GitHub to deployment platform
- ✅ Basic Tailwind CSS utility classes

### Conceptual Understanding
- ✅ How web apps get from code to users
- ✅ The role of frameworks in development
- ✅ Why version control matters
- ✅ What "deployment" actually means
- ✅ The value of Platform-as-a-Service (PaaS)

---

## 🔮 What's Next (Day 2)

**Goal:** Database + Authentication

**You'll learn:**
1. **What databases do** - How apps remember things
2. **SQL basics** - The language of databases
3. **Row Level Security** - How to secure user data
4. **Authentication flows** - How magic links work
5. **Client vs Server code** - Where different code runs

**Why it matters:** 
- Can't build multi-user apps without a database
- Can't have users without authentication
- Security is not optional
- This pattern applies to every SaaS product

---

## 📌 Takeaway Quote

> "Next.js + Vercel + GitHub is the modern 'hello world' stack. Master this flow once, and you can ship any web app to production in an hour."

---

## 🔗 Resources Referenced

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

---

**Next:** [Day 2 - Database & Authentication →](./day-02-database-auth.md)