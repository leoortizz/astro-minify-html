# astro-minify-html

This Astro integration minifies your static HTML output using [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser) on build time.

## Installation

Install the integration using your preferred package manager.

### `astro add`

```bash
npx astro add astro-html-minifier-terser
```

### Manually

```bash
npm install -D astro-html-minifier-terser
```

```ts
// astro.config.
import { minifyHtml } from "astro-minify-html"

export default defineConfig({
  integrations: [minifyHtml()],
})
```

### Options

Refer to the [html-minifier-terser documentation](https://www.npmjs.com/package/html-minifier-terser#options-quick-reference) for available options.

```ts
export default defineConfig({
  integrations: [htmlMinifier({ removeComments: true })],
})
```
