export function GET(req) {
    return new Response(JSON.stringify({ message: 'Hello from Next.js!' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  }
  