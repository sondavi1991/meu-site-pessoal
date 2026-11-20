// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Fontes baixadas no build e servidas pelo próprio site (sem requisição ao Google no navegador).
// Para trocar uma família, mude só o `name`: o resto do CSS usa as variáveis abaixo.
const google = fontProviders.google();

export default defineConfig({
  // Domínio final: usado no canonical, no sitemap, no robots.txt, nas metatags e nos dados estruturados.
  // Se mudar, refaça também public/og.jpg (o domínio aparece escrito na imagem).
  site: 'https://davimanoel.com.br',
  compressHTML: true,
  // Uma página só: o CSS vai embutido no HTML e não bloqueia a primeira pintura com outra requisição.
  build: { inlineStylesheets: 'always' },
  fonts: [
    {
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      provider: google,
      weights: ['500 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
      // eixo de tamanho óptico: títulos grandes usam o corte "display" automaticamente
      options: { experimental: { variableAxis: { opsz: [['12', '96']] } } },
    },
    {
      name: 'Schibsted Grotesk',
      cssVariable: '--font-body',
      provider: google,
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: google,
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
