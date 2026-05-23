import { onRequestGet, onRequestPost } from './functions/api/progress.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Route API requests to the functions handler
    if (url.pathname === '/api/progress') {
      const context = { request, env };
      try {
        if (request.method === 'GET') {
          return await onRequestGet(context);
        } else if (request.method === 'POST') {
          return await onRequestPost(context);
        }
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    // If it reaches here and doesn't match our API, return 404.
    // (Static assets like index.html and style.css are automatically served by Cloudflare
    // before this script is invoked).
    return new Response('Not Found', { status: 404 });
  }
};
