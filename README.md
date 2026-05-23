# CPS HSAT Prep & Tutor Companion

A premium daily study companion web application designed for students preparing for the Chicago Public Schools (CPS) Selective High Schools Admission Test (HSAT).

## Tech Stack
- **Frontend**: Vanilla HTML5, CSS3 (Vibrant Dark Theme), and ES6 JavaScript.
- **Backend**: Cloudflare Pages Functions (`functions/api/progress.js`).
- **Database**: Cloudflare KV Namespace binding (`PROGRESS_KV`) with LocalStorage fallback.

## Local Development
To run the server locally simulated via Miniflare (Wrangler):
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Production Deployment
The application is connected to Cloudflare Pages for continuous integration (CI/CD):
1. Code pushed to the `main` branch automatically triggers a deployment.
2. In the Cloudflare Pages settings under **Functions**, ensure a KV Namespace is bound to the variable name `PROGRESS_KV`.
