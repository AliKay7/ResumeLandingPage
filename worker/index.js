export default {
  async fetch(request, env, ctx) {
    const db = env.DB;

    await db.prepare(`INSERT INTO visits (id, count) VALUES (1, 0) ON CONFLICT DO NOTHING`).run();
    await db.prepare(`UPDATE visits SET count = count + 1 WHERE id = 1`).run();

    const { results } = await db.prepare(`SELECT count FROM visits WHERE id = 1`).all();

    return new Response(JSON.stringify({ count: results[0].count }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  
      }
    });
  }
};