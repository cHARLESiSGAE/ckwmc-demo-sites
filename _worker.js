/**
 * Cloudflare Pages Advanced Mode Worker
 *
 * Provides a reliable /api/request-demo endpoint while still serving static assets.
 *
 * Env vars (Cloudflare Pages → Settings → Environment variables):
 * - RESEND_API_KEY (required to actually send)
 * - OUTREACH_TO_EMAIL (optional; default: charlespkon@gmail.com)
 * - OUTREACH_FROM_EMAIL (optional; default: onboarding@resend.dev)
 */

function json(status, data) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function pick(obj, key, maxLen = 2000) {
  const v = obj?.[key];
  if (typeof v !== "string") return "";
  return v.trim().slice(0, maxLen);
}

async function readBody(request) {
  const ct = request.headers.get("content-type") || "";
  if (ct.includes("application/json")) return await request.json();
  const fd = await request.formData();
  return Object.fromEntries(fd.entries());
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/request-demo") {
      if (request.method === "OPTIONS") return new Response(null, { status: 204 });
      if (request.method !== "POST") return json(405, { ok: false, error: "Method not allowed" });

      if (!env.RESEND_API_KEY) {
        return json(500, { ok: false, error: "Server not configured (missing RESEND_API_KEY)" });
      }

      let body;
      try {
        body = await readBody(request);
      } catch {
        return json(400, { ok: false, error: "Invalid request body" });
      }

      const name = pick(body, "name", 200);
      const email = pick(body, "email", 300);
      const market = pick(body, "market", 200);
      const brokerage = pick(body, "brokerage", 200);
      const style = pick(body, "style", 120);
      const timeline = pick(body, "timeline", 60);
      const notes = pick(body, "notes", 5000);

      if (!name || !email) return json(400, { ok: false, error: "Name and email are required." });

      const to = env.OUTREACH_TO_EMAIL || "charlespkon@gmail.com";
      const from = env.OUTREACH_FROM_EMAIL || "onboarding@resend.dev";

      const subject = `New demo request — ${name} (${market || "market not specified"})`;
      const text = [
        "New website demo request:\n",
        `Name: ${name}`,
        `Email: ${email}`,
        market ? `Market: ${market}` : null,
        brokerage ? `Brokerage: ${brokerage}` : null,
        style ? `Style: ${style}` : null,
        timeline ? `Timeline: ${timeline}` : null,
        "\nNotes:",
        notes || "(none)",
      ]
        .filter(Boolean)
        .join("\n");

      const resendResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ from, to, subject, reply_to: email, text }),
      });

      if (!resendResp.ok) {
        const errText = await resendResp.text().catch(() => "");
        if (resendResp.status === 429) {
          return json(429, { ok: false, error: "Email provider rate limit reached. Please try again shortly." });
        }
        return json(502, { ok: false, error: "Failed to send. Please try again later.", providerStatus: resendResp.status, providerBody: errText.slice(0, 2000) });
      }

      return json(200, { ok: true });
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};
