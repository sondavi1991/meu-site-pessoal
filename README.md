# Davi Manoel — site pessoal

Site pessoal e portfólio de **Davi Manoel**, engenheiro de software full stack. Página única,
estática e rápida, feita com [Astro](https://astro.build): sem framework de UI no cliente, só
HTML, CSS e alguns scripts pequenos.

## Destaques

- **Zero JavaScript de framework no navegador.** As interações (código revelado sob o cursor no
  hero, teclado da stack, relógio do rodapé) são scripts nativos de poucas linhas.
- **Animações guiadas por scroll em CSS puro** (`animation-timeline: view()`), com fallback
  estático onde o navegador não suporta e respeito a `prefers-reduced-motion`.
- **Imagens otimizadas no build** com `astro:assets`: WebP em vários tamanhos, com `srcset` e
  `sizes`.
- **Conteúdo separado da apresentação.** Textos, projetos, stack, carreira e FAQ ficam em um único
  arquivo de dados; os componentes só cuidam do layout.
- **Acessível:** HTML semântico, navegação por teclado, foco visível e
  `aria-*` onde precisa.

## Stack

| Camada     | Ferramenta                                  |
| ---------- | ------------------------------------------- |
| Framework  | Astro 7 (saída estática)                    |
| Linguagem  | TypeScript (modo `strict`)                  |
| Estilos    | CSS puro com custom properties              |
| Fontes     | Bricolage Grotesque, Geist e JetBrains Mono |
| Imagens    | `astro:assets` + Sharp                      |

## Como rodar

Requer **Node.js 22.23.4 ou mais recente** (há um `.nvmrc` na raiz).

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:4321
```

| Comando           | O que faz                                    |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento           |
| `npm run build`   | Gera o site estático em `dist/`              |
| `npm run preview` | Serve o build de produção localmente         |
| `npm run check`   | Checa tipos e diagnósticos dos `.astro`      |

## Estrutura

```text
├── public/
│   ├── favicon.svg
│   └── images/hero-mask.png      # máscara do efeito de código no hero
├── src/
│   ├── assets/                   # imagens otimizadas no build
│   ├── components/               # uma seção da página por componente
│   ├── data/site.ts              # todo o conteúdo do site
│   ├── layouts/Layout.astro      # <head>, metatags e fontes
│   ├── pages/index.astro         # monta as seções
│   └── styles/global.css         # tokens e estilos, organizados por seção
└── astro.config.mjs
```

## Editando o conteúdo

Quase tudo que aparece na página está em [`src/data/site.ts`](src/data/site.ts):

- `SITE`: nome, status, links (LinkedIn, GitHub, empresa) e o link do currículo (`cvUrl`).
- `PROJECTS`: os cards de projetos. Para trocar o print, coloque a imagem em
  `src/assets/projetos/` e importe no topo do arquivo.
- `LIVE_SITES`, `STACK`, `SERVICES`, `CAREER`, `REVIEWS` e `FAQ`: as demais seções.

As cores e fontes ficam nas custom properties do bloco `.dm` em
[`src/styles/global.css`](src/styles/global.css).

## Deploy

O build gera arquivos estáticos em `dist/`, prontos para qualquer hospedagem estática (Vercel,
Netlify, Cloudflare Pages, GitHub Pages). Antes de publicar, ajuste `site` em
[`astro.config.mjs`](astro.config.mjs) para o domínio final.

## Direitos

O código está aberto para consulta e estudo. Textos, fotos e marcas são pessoais ou de clientes e
não podem ser reutilizados sem autorização.
