<div align="center">

<img src=".github/assets/desktop-hero.webp" alt="Página inicial do site: à esquerda o título “Olá, mundo. Eu sou o Davi, engenheiro de software full stack.”; à direita a foto do Davi e um cartão de commit com “build ok · deploy no ar”." width="100%">

# Davi Manoel · site pessoal

**Engenheiro de software full stack.** Portfólio em página única: estático, leve, acessível e
feito para carregar rápido até no 4G.

[![Astro 7](https://img.shields.io/badge/Astro-7-0b0c0e?style=flat-square&logo=astro&logoColor=c6ff3d)](https://astro.build)
[![TypeScript strict](https://img.shields.io/badge/TypeScript-strict-0b0c0e?style=flat-square&logo=typescript&logoColor=c6ff3d)](tsconfig.json)
[![JS no navegador](https://img.shields.io/badge/JS_no_navegador-2%2C9_kB-c6ff3d?style=flat-square&labelColor=0b0c0e)](#em-números)
[![Primeira carga](https://img.shields.io/badge/primeira_carga-278_kB-c6ff3d?style=flat-square&labelColor=0b0c0e)](#em-números)
[![Node](https://img.shields.io/badge/node-%E2%89%A522.23-0b0c0e?style=flat-square&logo=nodedotjs&logoColor=c6ff3d)](.nvmrc)

[LinkedIn](https://www.linkedin.com/in/davi-manoel/) · [Site Sob Medida](https://www.sitesobmedida.com.br/) · [GitHub](https://github.com/sondavi1991)

</div>

---

## Em números

Medido no build de produção, primeira visita em desktop, sem cache:

| Métrica | Valor |
| --- | --- |
| Requisições | **9** |
| Peso transferido | **~278 kB** (comprimido) |
| JavaScript | **2,9 kB**, embutido no HTML, sem framework |
| Fontes | 3 arquivos variáveis WOFF2, servidos pelo próprio site |
| Imagens | WebP responsivo; a foto do hero carrega de imediato e os prints dos projetos, sob demanda |

```mermaid
%%{init: {'theme':'base','themeVariables':{'pie1':'#c6ff3d','pie2':'#7a9a26','pie3':'#3d4a14','pie4':'#a3a8b0','pieStrokeColor':'#0b0c0e','pieOuterStrokeColor':'#0b0c0e','pieTitleTextSize':'16px','pieSectionTextColor':'#0b0c0e','pieLegendTextColor':'#a3a8b0'}}}%%
pie showData
    title Primeira carga por tipo (kB comprimidos)
    "Fontes" : 155.1
    "Imagens" : 100.6
    "HTML + JS embutido" : 14.7
    "CSS" : 7.1
```

## Telas

<p align="center">
  <img src=".github/assets/mobile-hero.webp" alt="Versão para celular: topo com o nome, botão Baixar CV e botão de menu; abaixo o título e o texto de apresentação." width="260">
  &nbsp;&nbsp;
  <img src=".github/assets/mobile-menu.webp" alt="Menu lateral aberto no celular, com as seções em letras grandes, o status de disponibilidade e os botões Baixar CV e Ver LinkedIn." width="260">
</p>

<p align="center">
  <img src=".github/assets/desktop-projetos.webp" alt="Seção Projetos: card da Única Instrumentação com segmento, ano, descrição e tecnologias; à direita, o print do site dentro de uma janela de navegador sobre um fundo quadriculado." width="100%">
</p>

<p align="center">
  <img src=".github/assets/desktop-stack.webp" alt="Seção Stack: um teclado com as tecnologias agrupadas em seis linhas, de Linguagens a Dados e IA, e ao lado um painel que explica a tecla selecionada (Laravel)." width="100%">
</p>

## Destaques

- **Código sob o cursor.** No hero, a foto revela trechos reais de código por onde o mouse passa:
  uma máscara em CSS, posicionada por um script de poucas linhas.
- **Abertura do hero.** As palavras do título sobem por trás de uma máscara, o código varre a foto
  uma vez e o commit é digitado caractere por caractere. No celular, a sequência dispara quando a
  foto entra na tela.
- **Animações guiadas pelo scroll, em CSS puro.** A pilha de projetos ganha profundidade (o card de
  trás afunda quando o próximo chega), a seção de números abre em círculo e conta junto com os
  anéis, o texto do Sobre acende palavra por palavra, a carreira é digitada como um `git log` e o
  nome do rodapé sobe letra a letra. Tudo com `animation-timeline` e versão estática onde o
  navegador não suporta.
- **Projetos em janela de navegador.** Cada print entra numa janela desenhada em CSS, com a
  barra de endereço mostrando o domínio do cliente. Projeto que ainda não está no ar aparece sem o
  botão de abrir e com “em breve no ar” na barra.
- **Menu lateral no celular** com `<dialog>` nativo: prende o foco, fecha com Esc ou tocando fora
  e devolve o foco ao botão. O menu destaca a seção que está na tela.
- **Teclado de stack interativo.** Funciona com mouse, toque e Tab. No celular, o painel de
  descrição acompanha a rolagem.
- **Fontes sem depender do Google.** Bricolage Grotesque, Schibsted Grotesk e JetBrains Mono são baixadas no
  build (com o eixo de tamanho óptico da Bricolage) e servidas pelo próprio site, com `preload` e
  fonte reserva calibrada para a página não “pular” enquanto carrega.
- **404 com cara de terminal.** Um link quebrado mostra o `git checkout` que falhou, com o
  endereço que a pessoa tentou abrir, e botões de volta para o início.
- **Conteúdo separado do layout.** Textos, projetos, stack, carreira e FAQ moram num único arquivo
  de dados.

## Como funciona

```mermaid
%%{init: {'theme':'base','themeVariables':{'primaryColor':'#131519','primaryTextColor':'#f1f2ec','primaryBorderColor':'#2a2d33','lineColor':'#a3a8b0','fontFamily':'ui-monospace, monospace'}}}%%
flowchart LR
    data["src/data/site.ts<br/>todo o conteúdo"]:::lime --> comps["src/components/<br/>uma seção por arquivo"]
    css["src/styles/global.css<br/>tokens + estilos"] --> page
    comps --> page["src/pages/index.astro"]
    page --> build{{"astro build"}}:::lime
    img["src/assets/<br/>fotos e prints"] --> build
    fonts["Fonts API<br/>Google → WOFF2 local"] --> build
    build --> dist["dist/<br/>HTML + CSS + WebP + WOFF2"]
    dist --> host["qualquer hospedagem estática"]

    classDef lime fill:#c6ff3d,color:#0b0c0e,stroke:#c6ff3d
```

## Acessibilidade

- Contraste mínimo de 4,5:1 no texto (3:1 em títulos grandes), conferido em 320, 390 e 1440 px.
- Alvos de toque com pelo menos 44 px; sem rolagem horizontal até 320 px, nem com texto a 200%.
- Link “Pular para o conteúdo”, foco visível em tudo, hierarquia de títulos limpa e landmarks.
- A faixa de sites em movimento tem botão de pausa (WCAG 2.2.2) e para sozinha com o mouse ou o
  foco em cima.
- Com “reduzir movimento” ligado, nada se desloca: o retorno visual continua por cor e opacidade.

## Stack

| Camada | Ferramenta |
| --- | --- |
| Framework | [Astro 7](https://astro.build), saída estática |
| Linguagem | TypeScript em modo `strict` |
| Estilos | CSS puro com custom properties |
| Fontes | Fonts API do Astro: Bricolage Grotesque, Schibsted Grotesk e JetBrains Mono |
| Imagens | `astro:assets` + Sharp (WebP em vários tamanhos) |
| Interações | `<script>` nativos, sem framework de UI |

## Rodando localmente

Requer **Node.js 22.23.4 ou mais recente** (há um `.nvmrc` na raiz).

```bash
npm install
npm run dev        # http://localhost:4321
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run check` | Checa tipos e diagnósticos dos `.astro` |

## Estrutura

```text
├── .github/assets/           # imagens deste README
├── public/
│   ├── favicon.svg
│   └── images/hero-mask.png  # máscara do efeito de código no hero
├── src/
│   ├── assets/               # fotos e prints, otimizados no build
│   ├── components/           # uma seção da página por componente
│   ├── data/site.ts          # todo o conteúdo do site
│   ├── layouts/Layout.astro  # <head>, metatags e fontes
│   ├── pages/index.astro     # monta as seções
│   ├── pages/404.astro       # página de “commit não encontrado”
│   └── styles/global.css     # tokens e estilos, por seção
└── astro.config.mjs          # domínio e fontes
```

## Editando o conteúdo

Quase tudo que aparece na página está em [`src/data/site.ts`](src/data/site.ts):

- `SITE`: nome, status, links e o endereço do currículo (`cvUrl`).
- `PROJECTS`: os cards de projetos. Para trocar um print, coloque a imagem em
  `src/assets/projetos/` e importe no topo do arquivo. Sem `url`, o card fica sem o botão
  “Abrir site” (projeto que ainda não está no ar).
- `LIVE_SITES`, `STACK`, `SERVICES`, `CAREER`, `HOUSE_RULES` e `FAQ`: as demais seções.

Cores e espaçamentos ficam nas custom properties do bloco `.dm` em
[`src/styles/global.css`](src/styles/global.css). Para trocar uma fonte, mude o `name` dela em
[`astro.config.mjs`](astro.config.mjs): o CSS usa só as variáveis `--font-display`,
`--font-body` e `--font-mono`.

## Deploy

O build gera arquivos estáticos em `dist/`, prontos para Vercel, Netlify, Cloudflare Pages ou
GitHub Pages. Antes de publicar, ajuste `site` em [`astro.config.mjs`](astro.config.mjs) para o
domínio final.

## Direitos

O código está aberto para consulta e estudo. Textos, fotos e marcas são pessoais ou de clientes e
não podem ser reutilizados sem autorização.

<div align="center">
<br>
<sub>Feito em Ribeirão Preto, SP, por <a href="https://www.linkedin.com/in/davi-manoel/">Davi Manoel</a>.</sub>
</div>
