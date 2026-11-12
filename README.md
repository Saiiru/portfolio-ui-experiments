# Portfolio UI Experiments

**Objetivo:** Estudar layout, tipografia e componentes de uma apresentação pessoal anterior ao BLACKSITE atual.

**Estado:** Protótipo histórico; README anterior baseado no template do Vite.

**Documentação técnica, origem e próximos passos:** [docs/PROJECT_BRIEF.md](docs/PROJECT_BRIEF.md)

---

## Material original preservado

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# minimal-portfolio


## Publicação como frontend estático

O repositório inclui `vercel.json` com build Vite e saída `dist/`.
O site é totalmente estático: não há backend em Vercel nem banco remoto a configurar.
Build local: `npm ci` (nos estudos React 17, `npm ci --legacy-peer-deps`), `npm test` quando existir e `npm run build`.
Uma URL de produção somente é anunciada após deploy e teste HTTP/navegador. Nenhuma transação real ou credencial deve ser inserida.


## Verificação do código em 12/11/2026

Node 24 · npm run build; npm run lint; Playwright tela 390px; links de quatro repositórios reais

**Limitações:** Protótipo histórico, NÃO é o portfólio principal; sem formulário de contato ativo.



## Publicação GitHub Pages (alternativa a Vercel)

A página estática é construída com a base específica do repositório; o branch de publicação é `gh-pages`. O código e os testes permanecem na branch `main`.

1. Execute localmente `npm test` (quando disponível), `npm run build` e verifique no navegador.
2. Compile com `GITHUB_PAGES=true npm run build` e publique a pasta `dist` com uma ferramenta como `gh-pages` usando a autenticação GitHub autorizada.
3. Confira a resposta HTTP e as interações em `https://saiiru.github.io/portfolio-ui-experiments/`.
