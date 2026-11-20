import type { APIRoute } from 'astro';
import { ABOUT_TEXT, CAREER, FAQ, NOW, PROJECTS, SERVICES, SITE, STACK } from '../data/site';

// Resumo do site em Markdown, no formato do llmstxt.org. Sai dos mesmos dados da página,
// então qualquer mudança em src/data/site.ts aparece aqui no próximo build.
export const GET: APIRoute = ({ site }) => {
  const home = new URL('/', site).href;
  const secao = (id: string) => `${home}#${id}`;

  const servicos = SERVICES.map((s) => `- **${s.title}**: ${s.text}`);

  const projetos = PROJECTS.map((p) => {
    const nome = p.url ? `[${p.name}](${p.url})` : `${p.name} (ainda não está no ar)`;
    return `- ${nome}: ${p.segment}, ${p.year}. ${p.description} Tecnologias: ${p.tags.join(', ')}.`;
  });

  const stack = STACK.map((g) => `- ${g.name}: ${g.keys.map((k) => k.name).join(', ')}`);

  const carreira = CAREER.map((c) => {
    const periodo = 'to' in c && c.to ? `${c.from}–${c.to}` : c.from;
    return `- ${periodo} · ${c.role}, ${c.where}. ${c.text}`;
  });

  const agora = NOW.map((n) => `- ${n.label}: ${n.value}`);

  const faq = FAQ.map((f) => `- **${f.q}** ${f.a}`);

  const md = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    `${SITE.jobTitle} em ${SITE.city}, fundador da [${SITE.empresaNome}](${SITE.empresa}). ${ABOUT_TEXT}`,
    '',
    `Status: ${SITE.status}.`,
    '',
    '## Página',
    '',
    `- [Site pessoal](${home}): portfólio em página única, com projetos, serviços, stack, carreira e contato.`,
    `- [Projetos](${secao('projetos')}): trabalhos em produção, com prints e links.`,
    `- [Serviços](${secao('servicos')}): o que dá para contratar.`,
    `- [Contato](${secao('contato')}): currículo e LinkedIn.`,
    '',
    '## Serviços',
    '',
    ...servicos,
    '',
    '## Projetos',
    '',
    ...projetos,
    '',
    '## Stack',
    '',
    ...stack,
    '',
    '## Carreira',
    '',
    ...carreira,
    '',
    '## Agora',
    '',
    ...agora,
    '',
    '## Perguntas frequentes',
    '',
    ...faq,
    '',
    '## Contato',
    '',
    `- [LinkedIn](${SITE.linkedin}): o melhor canal para propostas, parcerias e vagas.`,
    `- [GitHub](${SITE.github}): código e contribuições.`,
    `- [Currículo em PDF](${SITE.cvUrl})`,
    '',
  ].join('\n');

  return new Response(md, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
