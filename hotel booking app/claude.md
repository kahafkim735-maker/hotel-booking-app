# CLAUDE.md - VoyageStay Hotel Booking Platform

## Build & Development Commands
- Install Dependencies: `npm install`
- Run Development Server: `npm run dev`
- Build for Production: `npm run build`
- Lint Code: `npm run lint`

## Architecture & Code Conventions
- **Frontend:** React 18+ (Vite) styled with Tailwind CSS and Lucide React icons.
- **Backend / DB:** Supabase PostgreSQL for user session state, hotel inventory, and booking records persistence.
- **State Management:** React `useState` / `useEffect` hooks integrated with async Supabase table queries (`public.hotels` and `public.bookings`).
- **Design Inspiration:** Original Booking.com-inspired architecture featuring search filters, property categories, detailed hotel modals, checkout forms, and confirmation summaries.

## Claude Code Guidelines
- Always inspect project structure before adding new components.
- Maintain modular, responsive CSS classes using Tailwind utility classes.
- Ensure all Supabase database queries include error handling and fallback mock states when environment keys are unconfigured.