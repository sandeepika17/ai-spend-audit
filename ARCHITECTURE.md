# Architecture

## Frontend

- Next.js App Router
- Tailwind CSS
- React Client Components

## Backend

### API Routes

- /api/audit
- /api/lead
- /api/summary

## Database

Supabase PostgreSQL stores:

- lead information
- savings data
- audit metadata

## AI Layer

OpenAI API generates spend optimization summaries.

## Email Layer

Resend handles transactional email delivery.

## Deployment

Hosted on Vercel.