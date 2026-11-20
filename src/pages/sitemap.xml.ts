import type { APIRoute } from 'astro';

// Site de uma página só: o sitemap tem a home. Página nova indexável entra nesta lista.
const PATHS = ['/'];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = PATHS.map(
    (p) => `  <url>\n    <loc>${new URL(p, site).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
