import type { ImageMetadata } from 'astro';
import sonhoEMagia from '../assets/projetos/sonho-e-magia.webp';
import sekiama from '../assets/projetos/sekiama.webp';
import jrPedras from '../assets/projetos/jr-pedras.webp';
import elementary from '../assets/projetos/elementary.webp';
import unica from '../assets/projetos/unica.webp';

/* ------------------------------------------------------------------ */
/* Dados gerais                                                        */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: 'Davi Manoel',
  title: 'Davi Manoel — Engenheiro de Software',
  description:
    'Engenheiro de software full stack com mais de 10 anos criando sites, landing pages e sistemas sob medida com Laravel, Node.js e WordPress.',
  status: 'Online · aberto a projetos, parcerias e boas conversas',
  city: 'Ribeirão Preto, SP',
  // download direto do PDF no Drive (abre na mesma aba: o navegador só baixa o arquivo)
  cvUrl: 'https://drive.google.com/uc?export=download&id=1rrYTUbeHgH0g76BYuYi2Xcmck7lcR9zo',
  linkedin: 'https://www.linkedin.com/in/davi-manoel/',
  github: 'https://github.com/sondavi1991',
  empresa: 'https://www.sitesobmedida.com.br/',
};

export const NAV = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' },
];

/* ------------------------------------------------------------------ */
/* Sites no ar (faixa rolando)                                         */
/* ------------------------------------------------------------------ */

export const LIVE_SITES = [
  { name: 'Scudeller de Almeida', url: 'https://scudellerdealmeida.com.br/' },
  { name: 'Sekiama', url: 'https://www.sekiama.com.br/' },
  { name: 'JR Pedras', url: 'https://www.jrpedras.com.br/' },
  { name: 'Única Instrumentação', url: 'https://unicainstrumentacao.com.br/' },
  { name: 'Sonho & Magia Viagens', url: 'https://www.smviagens.com.br/' },
  { name: 'Casa da Mentoria', url: 'https://www.casadamentoria.com.br/' },
  { name: 'Krooze', url: 'https://krooze.com/' },
  { name: 'iFinc', url: 'https://ifinc.com.br/' },
  { name: 'Dra. Amanda Vanzella Chaves', url: 'https://www.draamandavanzellachaves.com.br/' },
];

/* ------------------------------------------------------------------ */
/* Projetos (cards empilhados)                                         */
/* ------------------------------------------------------------------ */

export interface Project {
  name: string;
  segment: string;
  year: string;
  description: string;
  tags: string[];
  /** Sem url, o projeto ainda não está no ar: o card fica sem o botão "Abrir site". */
  url?: string;
  image: ImageMetadata;
}

export const PROJECTS: Project[] = [
  {
    name: 'Única Instrumentação',
    segment: 'Instrumentação industrial',
    year: '2025',
    description:
      'Catálogo de equipamentos de medição e testes para a indústria: tema WordPress próprio em código puro, filtros avançados de produtos e painel administrativo sob medida.',
    tags: ['WordPress', 'Tema próprio', 'Filtros avançados', 'Painel próprio'],
    url: 'https://unicainstrumentacao.com.br/',
    image: unica,
  },
  {
    name: 'Sonho & Magia Viagens',
    segment: 'Turismo pet',
    year: '2024',
    description:
      'Assessoria de viagens para quem não viaja sem o pet: site que explica o processo, passa confiança e leva o tutor direto para o formulário ou o WhatsApp.',
    tags: ['WordPress', 'Elementor', 'GA4'],
    url: 'https://www.smviagens.com.br/',
    image: sonhoEMagia,
  },
  {
    name: 'Elementary',
    segment: 'Sistema · Veterinária',
    year: '2026',
    description:
      'Sistema de gestão para clínicas veterinárias do Elementary Instituto Laboratorial: equipe, pacientes e rotina num lugar só. Lançamento em breve.',
    tags: ['Node.js', 'Fastify', 'React', 'PostgreSQL'],
    image: elementary,
  },
  {
    name: 'Sekiama',
    segment: 'E-commerce · Alimentos',
    year: '2026',
    description:
      'Loja das farofas e ingredientes da Amazônia: tema WordPress feito do zero, com WooCommerce integrado a pagamentos, frete e ERP.',
    tags: ['WordPress', 'Tema próprio', 'WooCommerce', 'ERP'],
    url: 'https://www.sekiama.com.br/',
    image: sekiama,
  },
  {
    name: 'JR Pedras',
    segment: 'Pedras e revestimentos',
    year: '2026',
    description:
      'Vitrine de pedras naturais para uma empresa familiar: front em Astro, backend em Laravel e infraestrutura de ponta para carregar rápido e levar direto ao orçamento.',
    tags: ['Astro', 'Laravel', 'Infra'],
    url: 'https://www.jrpedras.com.br/',
    image: jrPedras,
  },
];

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT_TEXT =
  'Construo sites e sistemas que carregam rápido e continuam rápidos. Em mais de dez anos de WordPress, Laravel e Node.js, aprendi três coisas: velocidade é funcionalidade, segurança não é opcional e o melhor código é o que o próximo dev lê sem xingar o autor. Hoje esse próximo dev às vezes é uma IA, e a regra continua a mesma.';

export const NOW = [
  { label: 'Construindo', value: 'Site Sob Medida, minha empresa' },
  { label: 'Estudando', value: 'Pós em Engenharia de Software' },
  { label: 'Aberto a', value: 'Projetos, parcerias e vagas remotas' },
  { label: 'Lendo', value: 'Competente o Suficiente, do Akita' },
];

/* ------------------------------------------------------------------ */
/* Números                                                             */
/* ------------------------------------------------------------------ */

/** progress: 0 a 1, quanto do anel fica preenchido */
export const RINGS = [
  { label: 'Experiência', value: '10+', sub: 'anos', progress: 1 },
  { label: 'Portfólio', value: '60+', sub: 'sites no ar', progress: 1 },
  { label: 'Café', value: '∞', sub: 'xícaras', progress: 1 },
  // contribuições do último ano no perfil do GitHub (conferir de tempos em tempos)
  { label: 'GitHub · 12 meses', value: '1.6k+', sub: 'contribuições', progress: 1 },
];

export const DELIVERY_CHECKLIST = [
  'Pixel Meta, GA4 e GTM testados',
  'UTMs e eventos de conversão',
  'WhatsApp e formulários funcionando',
  'Imagens leves, cache, scripts enxutos',
  'Layout redondo no celular',
  'Backup e segurança em dia',
];

/* ------------------------------------------------------------------ */
/* Stack (teclado)                                                     */
/* ------------------------------------------------------------------ */

export interface StackKey {
  name: string;
  tag: string;
  note: string;
}

export const STACK_DEFAULT = 'Laravel';

export const STACK: { name: string; keys: StackKey[] }[] = [
  {
    name: 'Linguagens',
    keys: [
      { name: 'PHP', tag: 'back-end', note: 'Base de quase tudo que eu entrego no servidor, de APIs a integrações.' },
      { name: 'JavaScript', tag: 'front-end', note: 'Interações, rastreamento e tudo que roda no navegador.' },
      { name: 'TypeScript', tag: 'front e back', note: 'Tipagem para projetos maiores e times que precisam de segurança no código.' },
      { name: 'Python', tag: 'IA e automação', note: 'Automações, scripts e o ecossistema de IA, de pipelines de RAG a integrações com LLMs.' },
      { name: 'Ruby', tag: 'back-end', note: 'Manutenção e evolução de projetos que já nasceram em Ruby.' },
    ],
  },
  {
    name: 'Back-end',
    keys: [
      { name: 'Laravel', tag: 'sob medida', note: 'Minha escolha para sistemas, painéis e plataformas sob medida: rápido de construir e fácil de manter.' },
      { name: 'Node.js', tag: 'APIs', note: 'APIs, automações e integrações em tempo real.' },
      { name: 'Fastify', tag: 'APIs', note: 'APIs enxutas e rápidas em Node.js, como a do sistema Elementary.' },
    ],
  },
  {
    name: 'Front-end e mobile',
    keys: [
      { name: 'React', tag: 'interfaces', note: 'Interfaces e componentes interativos, de painéis a sistemas inteiros.' },
      { name: 'Vue', tag: 'interfaces', note: 'Interfaces reativas e diretas, quando o projeto pede algo leve ou já nasceu em Vue.' },
      { name: 'Astro', tag: 'sites', note: 'Sites estáticos muito rápidos. Este aqui, por exemplo.' },
      { name: 'React Native', tag: 'mobile', note: 'Apps para Android e iOS com uma base de código só.' },
    ],
  },
  {
    name: 'Web e CMS',
    keys: [
      { name: 'WordPress', tag: '10+ anos', note: 'Mais de uma década de sites e landing pages; uso quando faz sentido para o cliente.' },
      { name: 'Elementor', tag: 'landing pages', note: 'Criação e refatoração de landing pages com edição fácil para o cliente.' },
      { name: 'Moodle', tag: 'EAD', note: 'Implementação e evolução de plataformas de ensino a distância.' },
      { name: 'SEO', tag: 'técnico', note: 'Estrutura, velocidade e marcação certas desde a primeira linha.' },
    ],
  },
  {
    name: 'Medição',
    keys: [
      { name: 'GA4', tag: 'analytics', note: 'Eventos e conversões configurados e testados antes de a campanha rodar.' },
      { name: 'GTM', tag: 'tags', note: 'Todas as tags organizadas em um lugar só, sem código espalhado.' },
      { name: 'Pixel Meta', tag: 'anúncios', note: 'Pixel e eventos de conversão para campanhas no Facebook e Instagram.' },
      { name: 'Google Ads', tag: 'anúncios', note: 'Páginas aprovadas e prontas para campanhas de pesquisa.' },
    ],
  },
  {
    name: 'Dados e IA',
    keys: [
      { name: 'PostgreSQL', tag: 'banco de dados', note: 'Banco relacional de confiança para sistemas que precisam crescer sem perder a consistência.' },
      { name: 'RAG', tag: 'IA aplicada', note: 'Respostas de IA ancoradas nos documentos e dados do próprio cliente, em vez de chute.' },
      { name: 'LLMs', tag: 'IA generativa', note: 'Modelos de linguagem integrados a produtos e ao meu dia a dia de código (salve, Claudinho). Eu decido a arquitetura, reviso cada linha e assino o commit.' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    title: 'Landing pages de conversão',
    text: 'Páginas feitas para aguentar tráfego pago: carregam rápido, ficam redondas no celular e já saem com o rastreamento testado. A campanha liga e os dados chegam.',
    items: ['CTA forte e texto orientado a conversão', 'Pixel, GA4, GTM e UTMs testados', 'Formulário e WhatsApp integrados'],
  },
  {
    title: 'Sites institucionais',
    text: 'Sites que passam confiança e que o cliente edita sem precisar me ligar. Também resgato site lento, quebrado ou feito às pressas, mantendo a identidade visual.',
    items: ['SEO técnico desde a base', 'Painel simples para editar conteúdo', 'Refatoração de sites existentes'],
  },
  {
    title: 'Sistemas sob medida',
    text: 'Quando o problema não cabe num plugin. Com IA escrevendo código cada vez mais rápido, o que faz diferença é decidir o que construir e como as peças se encaixam. Por isso começo pelo negócio e pela arquitetura, e a stack vem depois, escolhida pela necessidade e não pela moda. Plataformas, painéis, integrações e apps.',
    items: ['Arquitetura documentada antes do código', 'Entregas semanais, sem surpresa no fim', 'Documentação e passagem de bastão'],
  },
  {
    title: 'Manutenção, segurança e performance',
    text: 'Site infectado, reprovado no Google Ads ou com a tela vermelha do antivírus? Eu limpo, blindo e deixo tudo atualizado e com backup.',
    items: ['Limpeza e blindagem do site', 'Otimização de velocidade', 'Parceria recorrente com gestores de tráfego'],
  },
  {
    title: 'Gestão de projetos e consultoria',
    text: 'Também conheço o outro lado do balcão: defino escopo, prazos e prioridades, escolho a tecnologia e acompanho o time até o deploy. Traduzo “o cliente quer” para “o dev entende”, e vice-versa.',
    items: ['Diagnóstico de sites e sistemas existentes', 'Escopo, cronograma e escolha da stack', 'Acompanhamento de equipes e fornecedores'],
  },
];

/* ------------------------------------------------------------------ */
/* Carreira (timeline estilo git log)                                  */
/* ------------------------------------------------------------------ */

export const CAREER = [
  {
    from: '2025',
    to: 'hoje',
    hash: 'a1f3c9e',
    where: 'Site Sob Medida · Fundador',
    role: 'Engenheiro de Software full stack',
    text: 'Fundei minha empresa para trabalhar do jeito que acredito: sites, landing pages e sistemas sob medida, e parceria técnica fixa com gestores de tráfego.',
    current: true,
  },
  {
    from: '2022',
    to: 'hoje',
    hash: '5b2e8f1',
    where: 'Agência Ótima Ideia',
    role: 'Gestor de Projetos',
    text: 'Escopo, prazos e prioridades de projetos digitais, fazendo a ponte entre o cliente e o time técnico.',
  },
  {
    from: '2017',
    to: '2025',
    hash: '3c88e17',
    where: 'Freelancer',
    role: 'Desenvolvedor full stack',
    text: 'Sites, landing pages e sistemas para clientes de vários segmentos, do primeiro briefing ao deploy.',
  },
  {
    from: '2013',
    to: '2017',
    hash: '7d20b4a',
    where: 'Inteligência Relacional · Escola da Inteligência',
    role: 'Desenvolvedor PHP e Moodle',
    text: 'Anos colocando plataformas EAD de pé e fazendo elas crescerem sem cair.',
  },
  {
    from: '2009',
    hash: '0e91d02',
    where: 'Primeiro commit · Blogspot',
    role: 'Primeiro site no ar',
    text: 'Subir site no Blogspot conta como deploy, sim. Foi ali que eu peguei gosto pela coisa.',
  },
];

/* ------------------------------------------------------------------ */
/* Regras da casa (seção "Revisado e aprovado", no lugar de depoimentos) */
/* ------------------------------------------------------------------ */

export const HOUSE_RULES = [
  {
    title: 'Escopo antes do código',
    text: 'Escopo combinado e plano no papel antes da primeira linha. Se alguma coisa mudar no meio do caminho, a gente conversa antes de mudar o código.',
  },
  {
    title: 'Nada de “funciona na minha máquina”',
    text: 'Rastreamento testado, backup em dia e documentação na entrega, do site pequeno ao sistema inteiro.',
  },
  {
    title: 'IA com responsabilidade',
    text: 'A IA acelera o trabalho, mas toda linha passa pela minha revisão antes de ir pro ar. Quem assina o commit sou eu.',
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQ = [
  {
    q: 'Dá para te contratar?',
    a: 'Dá: para projetos, para parceria com agências e gestores de tráfego e para vagas remotas, PJ ou CLT. Me chama no LinkedIn.',
  },
  {
    q: 'Atende gestores de tráfego e agências?',
    a: 'Sim, como parceiro técnico recorrente: você cuida da campanha, eu cuido das páginas, do rastreamento e da velocidade.',
  },
  {
    q: 'WordPress ainda presta?',
    a: 'Presta, e faz mais de 10 anos que trabalho com ele. Para quem quer editar tudo sozinho, costuma ser a escolha certa. Quando o projeto pede mais controle e desempenho, vou de Laravel ou Node.js.',
  },
  {
    q: 'Meu site foi invadido. E agora?',
    a: 'Respira. Já recuperei sites com malware, reprovados no Google Ads e com alerta de antivírus. Eu limpo, fecho as portas e devolvo com backup em dia.',
  },
  {
    q: 'Quanto custa?',
    a: 'Depende do escopo (resposta clássica de dev, eu sei). Me manda um resumo no LinkedIn que eu volto com proposta, valor e prazo fechados.',
  },
  {
    q: 'Tabs ou espaços?',
    a: 'O que o .editorconfig do projeto mandar. Padrão do time vem antes de gosto pessoal.',
  },
];

/* ------------------------------------------------------------------ */
/* Código que aparece sob o cursor no hero                             */
/* ------------------------------------------------------------------ */

export const HERO_CODE =
  "Route::post('/lead', [LeadController::class, 'store'])->middleware('throttle:10,1'); export async function track(evt){ gtag('event', evt.name, evt.params); fbq('track','Lead'); } const page = await fetch('/api/landing').then(r=>r.json()); <img loading=\"lazy\" decoding=\"async\" fetchpriority=\"high\"> public function store(Request $r){ $lead = Lead::create($r->validated()); Mail::to(config('app.owner'))->queue(new NovoLead($lead)); return response()->json(['ok'=>true]); } import { defineConfig } from 'astro/config'; export default defineConfig({ output:'static', compressHTML:true }); window.dataLayer = window.dataLayer || []; dataLayer.push({ event:'whatsapp_click', utm_source }); ";
