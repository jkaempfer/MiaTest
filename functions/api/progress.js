// functions/api/progress.js

export async function onRequestGet(context) {
  const { searchParams } = new URL(context.request.url);
  const student = (searchParams.get("student") || "Mia").trim();

  // The KV namespace binding is expected to be named PROGRESS_KV
  const KV = context.env.PROGRESS_KV;

  if (!KV) {
    // If KV is not bound (e.g., direct preview without setup),
    // return a message so the frontend can handle it or fall back to localStorage.
    return new Response(
      JSON.stringify({
        error: "PROGRESS_KV namespace not bound. Please bind a KV namespace named PROGRESS_KV in Cloudflare.",
        student,
        streak: 0,
        lastActiveDate: "",
        scores: {},
        answeredQuestionIds: []
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  try {
    const data = await KV.get(`student:${student}`);
    if (!data) {
      // Return a blank profile for a new student
      const newProfile = {
        student,
        streak: 0,
        lastActiveDate: "",
        scores: {}, // structure: { "CategoryName": { correct: 0, total: 0 } }
        answeredQuestionIds: []
      };
      return new Response(JSON.stringify(newProfile), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(data, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestPost(context) {
  const { searchParams } = new URL(context.request.url);
  const student = (searchParams.get("student") || "Mia").trim();

  const KV = context.env.PROGRESS_KV;

  if (!KV) {
    return new Response(
      JSON.stringify({
        error: "PROGRESS_KV namespace not bound. Saving locally in fallback mode."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  try {
    const body = await context.request.json();
    
    // Validate request structure slightly
    if (typeof body !== 'object' || body === null) {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Save the student progress record
    await KV.put(`student:${student}`, JSON.stringify(body));

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
