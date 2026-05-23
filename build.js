const fs = require('fs');
const path = require('path');

// Read all required files
const indexHtml = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
const styleCss = fs.readFileSync(path.join(__dirname, 'public', 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'public', 'app.js'), 'utf8');
const questionsJs = fs.readFileSync(path.join(__dirname, 'public', 'questions.js'), 'utf8');
const progressJs = fs.readFileSync(path.join(__dirname, 'functions', 'api', 'progress.js'), 'utf8');

// Compile into a single ES6 Worker bundle
const workerCode = `
// Auto-generated worker bundle
${progressJs}

const ASSETS = {
  '/': {
    content: ${JSON.stringify(indexHtml)},
    type: 'text/html; charset=utf-8'
  },
  '/style.css': {
    content: ${JSON.stringify(styleCss)},
    type: 'text/css; charset=utf-8'
  },
  '/app.js': {
    content: ${JSON.stringify(appJs)},
    type: 'application/javascript; charset=utf-8'
  },
  '/questions.js': {
    content: ${JSON.stringify(questionsJs)},
    type: 'application/javascript; charset=utf-8'
  }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Serve static assets
    if (ASSETS[path]) {
      return new Response(ASSETS[path].content, {
        headers: { 'Content-Type': ASSETS[path].type }
      });
    }
    
    // Route API requests
    if (path === '/api/progress') {
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
    
    return new Response('Not Found', { status: 404 });
  }
};
`;

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Write the self-contained worker
fs.writeFileSync(path.join(distDir, 'worker.js'), workerCode, 'utf8');
console.log('Successfully bundled assets and worker API into dist/worker.js');
