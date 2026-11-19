# Jayanth Thalla — Portfolio

Personal portfolio for **Jayanth Thalla**, a full-stack AI engineer. The site brings together selected projects, technical writing, GitHub activity, and ways to get in touch.

**Live site:** [thallajayanth.vercel.app](https://thallajayanth.vercel.app)

## Features

- Responsive portfolio homepage with project, technology, and contact sections
- Dedicated project and blog pages
- Blog posts authored in MDX under `content/blogs/`
- Light and dark themes
- GitHub contribution activity
- Optional visitor counter backed by Upstash Redis
- Page analytics through Vercel Analytics

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- MDX for blog content
- Motion and Base UI components
- Upstash Redis for the optional visitor counter
- Vercel Analytics

## Run locally

Use Node.js and npm, then install the project dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Optional environment variables

The site works without Redis credentials. Without them, the visitor counter displays `0` and does not persist visits. To enable the counter, create `.env.local` in the project root:

```dotenv
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

Keep credentials out of source control. Environment files are ignored by Git.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/                 App Router pages, API routes, and homepage sections
components/          Shared components and UI
content/blogs/       MDX blog posts
lib/                 Shared helpers, MDX loading, and Redis setup
public/              Images, icons, and other static assets
```

## Writing a blog post

Add an `.mdx` file to `content/blogs/` with frontmatter for the post metadata. For example:

```md
---
title: "Post title"
description: "A short summary of the post."
publishedAt: "2026-01-31"
readingTime: "5 min read"
tags:
  - Engineering
---

# Post title

Write the post content here.
```

The filename becomes the post's URL slug.

## Deployment

The site can be deployed to [Vercel](https://vercel.com/). Configure the optional Upstash environment variables in the deployment environment if the persistent visitor counter is desired.
