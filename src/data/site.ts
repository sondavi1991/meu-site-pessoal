import type { ImageMetadata } from 'astro';
import placeholder from '../assets/projetos/placeholder.jpg';

/* ------------------------------------------------------------------ */
/* Dados gerais                                                        */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: 'Davi Manoel',
  title: 'Davi Manoel — Engenheiro de Software',
  description:
    'Engenheiro de software full stack com mais de 10 anos criando sites, landing pages e sistemas sob medida com Laravel, Node.js e WordPress.',
  status: 'Aberto a vagas remotas, PJ ou CLT',
  city: 'Ribeirão Preto, SP',
  cvUrl: '#', // TODO: apontar para o PDF do currículo (ex.: /curriculo-davi-manoel.pdf em public/)
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
  url: string;
  image: ImageMetadata;
}

export const PROJECTS: Project[] = [
  {
    name: 'Scudeller de Almeida',
    segment: 'Advocacia',
    year: '[ANO]',
    description:
      'Site institucional para escritório de advocacia: sóbrio, rápido e pensado para gerar contato.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    url: 'https://scudellerdealmeida.com.br/',
    image: placeholder,
  },
  {
    name: 'Krooze',
    segment: '[Segmento]',
    year: '[ANO]',
    description: '[Em uma frase: o que o cliente precisava e o que você entregou.]',
    tags: ['[Tecnologia]', '[Tecnologia]'],
    url: 'https://krooze.com/',
    image: placeholder,
  },
  {
    name: 'Casa da Mentoria',
    segment: 'Educação',
    year: '[ANO]',
    description: '[Em uma frase: o que o cliente precisava e o que você entregou.]',
    tags: ['[Tecnologia]', '[Tecnologia]'],
    url: 'https://www.casadamentoria.com.br/',
    image: placeholder,
  },
  {
    name: 'Sekiama',
    segment: '[Segmento]',
    year: '[ANO]',
    description: '[Em uma frase: o que o cliente precisava e o que você entregou.]',
    tags: ['[Tecnologia]', '[Tecnologia]'],
    url: 'https://www.sekiama.com.br/',
    image: placeholder,
  },
  {
    name: 'iFinc',
    segment: 'Finanças',
    year: '[ANO]',
    description: '[Em uma frase: o que o cliente precisava e o que você entregou.]',
    tags: ['[Tecnologia]', '[Tecnologia]'],
    url: 'https://ifinc.com.br/',
    image: placeholder,
  },
];

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT_TEXT =
  'Construo sites e sistemas que carregam rápido e continuam rápidos. Mais de dez anos entre WordPress, Laravel e Node.js me ensinaram que velocidade é recurso, segurança não é opcional e o melhor código é aquele que o próximo desenvolvedor consegue ler.';

export const NOW = [
  { label: 'Construindo', value: 'Site Sob Medida, minha empresa' },
  { label: 'Estudando', value: 'Pós em Engenharia de Software' },
  { label: 'Procurando', value: 'Vaga remota full stack ou Laravel, PJ ou CLT' },
  { label: 'Lendo', value: '[Livro que você está lendo]' },
];

/* ------------------------------------------------------------------ */
/* Números                                                             */
/* ------------------------------------------------------------------ */

/** progress: 0 a 1, quanto do anel fica preenchido */
export const RINGS = [
  { label: 'Experiência', value: '10+', sub: 'anos', progress: 1 },
  { label: 'Portfólio', value: '30+', sub: 'sites no ar', progress: 1 },
  { label: 'Mobile-first', value: '100%', sub: 'responsivo', progress: 1 },
  { label: 'Performance', value: '[XX]', sub: 'Lighthouse médio', progress: 0.9 },
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
      { name: 'TypeScript', tag: 'front-end', note: 'Tipagem para projetos maiores e times que precisam de segurança no código.' },
      { name: 'Ruby', tag: 'back-end', note: 'Projetos e manutenções em Ruby quando o cliente já tem essa base.' },
    ],
  },
  {
    name: 'Frameworks',
    keys: [
      { name: 'Laravel', tag: 'sob medida', note: 'Minha escolha para sistemas, painéis e plataformas sob medida: rápido de construir e fácil de manter.' },
      { name: 'Node.js', tag: 'APIs', note: 'APIs, automações e integrações em tempo real.' },
      { name: 'Astro', tag: 'sites', note: 'Sites estáticos muito rápidos, ótimos para landing pages e conteúdo.' },
      { name: 'React', tag: 'front-end', note: 'Interfaces e componentes interativos no front-end.' },
      { name: 'React Native', tag: 'mobile', note: 'Apps híbridos para Android e iOS com uma base de código só.' },
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
];

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    title: 'Landing pages de conversão',
    text: 'Páginas pensadas para tráfego pago: carregam rápido, ficam perfeitas no celular e chegam com rastreamento completo, prontas para a campanha rodar.',
    items: ['CTA forte e texto orientado a conversão', 'Pixel, GA4, GTM e UTMs testados', 'Formulário e WhatsApp integrados'],
  },
  {
    title: 'Sites institucionais',
    text: 'Sites que passam credibilidade e são fáceis de editar depois. Também refaço sites lentos, quebrados ou desalinhados mantendo a identidade visual.',
    items: ['SEO técnico desde a base', 'Painel simples para editar conteúdo', 'Refatoração de sites existentes'],
  },
  {
    title: 'Sistemas sob medida',
    text: 'Plataformas, painéis e integrações com stack moderna em Laravel, Node.js e Astro. Apps mobile híbridos com React Native.',
    items: ['Arquitetura documentada antes do código', 'Entregas semanais, sem surpresa no fim', 'Documentação e passagem de bastão'],
  },
  {
    title: 'Manutenção, segurança e performance',
    text: 'Recupero sites infectados por malware, reprovados no Google Ads ou com alerta de antivírus, e mantenho tudo atualizado e com backup.',
    items: ['Limpeza e blindagem do site', 'Otimização de velocidade', 'Parceria recorrente com gestores de tráfego'],
  },
  {
    title: 'Gestão de projetos e consultoria',
    text: 'Ajudo empresas e times a tirar projetos digitais do papel: defino escopo, prioridades e prazos, escolho a tecnologia certa e acompanho a entrega até o ar, falando a língua do negócio e a do time técnico.',
    items: ['Diagnóstico de sites e sistemas existentes', 'Escopo, cronograma e escolha da stack', 'Acompanhamento de equipes e fornecedores'],
  },
];

/* ------------------------------------------------------------------ */
/* Carreira (timeline estilo git log)                                  */
/* ------------------------------------------------------------------ */

export const CAREER = [
  {
    from: '[ANO]',
    to: 'hoje',
    hash: 'a1f3c9e',
    where: 'Site Sob Medida · Fundador',
    role: 'Engenheiro de Software full stack',
    text: 'Sites, landing pages e sistemas sob medida; parceiro técnico recorrente de gestores de tráfego.',
    current: true,
  },
  {
    from: '[ANO]',
    to: '[ANO]',
    hash: '7d20b4a',
    where: 'Inteligência Relacional · Escola da Inteligência',
    role: 'Desenvolvedor e implementação Moodle',
    text: 'Anos de implementação e evolução de plataformas EAD em Moodle.',
  },
  {
    from: '[ANO]',
    hash: '3c88e17',
    where: 'Formação',
    role: 'Pós em Engenharia de Software',
    text: 'Graduação em Análise e Desenvolvimento de Sistemas e certificação em otimização web.',
  },
  {
    from: '[ANO]',
    hash: '0e91d02',
    where: 'Primeiro commit · [Empresa]',
    role: 'Primeiro site no ar',
    text: '[Conte como tudo começou.]',
  },
];

/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */

export const REVIEWS = [
  { name: '[Nome do cliente]', role: '[Cargo]', company: '[Empresa]', quote: '[Depoimento real do cliente sobre o resultado do projeto.]' },
  { name: '[Nome do cliente]', role: '[Cargo]', company: '[Empresa]', quote: '[Depoimento real do cliente sobre o resultado do projeto.]' },
  { name: '[Nome do cliente]', role: '[Cargo]', company: '[Empresa]', quote: '[Depoimento real do cliente sobre o resultado do projeto.]' },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQ = [
  {
    q: 'Está aberto a vagas fixas?',
    a: 'Sim. Busco vaga remota como full stack, front-end ou PHP com Laravel, de preferência PJ, também aberto a CLT. Em paralelo, sigo atendendo projetos freelas.',
  },
  {
    q: 'Você trabalha com WordPress?',
    a: 'Sim, há mais de 10 anos. Para projetos sob medida recomendo stack própria em Laravel ou Node.js, mais rápida e segura; WordPress quando faz mais sentido para o cliente.',
  },
  {
    q: 'Atende gestores de tráfego e agências?',
    a: 'Sim, como parceiro técnico recorrente: você cuida da campanha, eu cuido das páginas, do rastreamento e da velocidade.',
  },
  {
    q: 'Consegue recuperar um site invadido?',
    a: 'Sim. Já recuperei sites infectados por malware, reprovados no Google Ads e com alerta de antivírus, e entrego com backup e boas práticas.',
  },
  {
    q: 'Quanto custa e qual o prazo de um freela?',
    a: 'Depende do escopo. Me chame no LinkedIn com um resumo e eu respondo com proposta, valor e prazo fechados.',
  },
];

/* ------------------------------------------------------------------ */
/* Código que aparece sob o cursor no hero                             */
/* ------------------------------------------------------------------ */

export const HERO_CODE =
  "Route::post('/lead', [LeadController::class, 'store'])->middleware('throttle:10,1'); export async function track(evt){ gtag('event', evt.name, evt.params); fbq('track','Lead'); } const page = await fetch('/api/landing').then(r=>r.json()); <img loading=\"lazy\" decoding=\"async\" fetchpriority=\"high\"> public function store(Request $r){ $lead = Lead::create($r->validated()); Mail::to(config('app.owner'))->queue(new NovoLead($lead)); return response()->json(['ok'=>true]); } import { defineConfig } from 'astro/config'; export default defineConfig({ output:'static', compressHTML:true }); window.dataLayer = window.dataLayer || []; dataLayer.push({ event:'whatsapp_click', utm_source }); ";
