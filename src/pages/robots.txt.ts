import type { APIRoute } from 'astro';

// Libera todos os robôs, inclusive os de busca por IA, e aponta o sitemap.
// Em produção o Cloudflare (AI Crawl Control) acrescenta as próprias regras antes destas e pode
// bloquear robôs por user agent: a política de robôs de IA vale o que estiver configurado lá.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
