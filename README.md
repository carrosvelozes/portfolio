# Portfolio — Leonardo Moraes

Portfólio pessoal moderno construído com React, Vite e Framer Motion.

## Stack

- **React 19** — UI componentizada
- **Vite** — build rápido e HMR
- **Framer Motion** — animações discretas
- **Lucide React** — ícones consistentes
- **CSS custom properties** — design system com dark/light mode

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/     # Navbar, Hero, About, Projects, Skills, Contact...
├── data/           # Conteúdo centralizado (content.js)
├── hooks/          # useTheme
└── index.css       # Design system
```

## Deploy

O build gera a pasta `dist/` pronta para deploy em GitHub Pages, Vercel, Netlify ou similar.

Para GitHub Pages, configure `base` no `vite.config.js` se necessário:

```js
export default defineConfig({
  base: '/portfolio-main/',
  plugins: [react()],
})
```
