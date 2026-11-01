[![pages-build-deployment](https://github.com/rakesh-kumar-t/rakesh-kumar-t.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/rakesh-kumar-t/rakesh-kumar-t.github.io/actions/workflows/pages/pages-build-deployment)
[![Build and deploy GitHub Pages](https://github.com/rakesh-kumar-t/rakesh-kumar-t.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/rakesh-kumar-t/rakesh-kumar-t.github.io/actions/workflows/node.js.yml)

# Portfolio

This portfolio uses Angular 22, standalone components, zoneless change detection,
the application builder, SCSS, and Vitest. Shared portfolio models live in
the Angular library at `src/libs/portfolio/models`. Its `src/index.ts` barrel
exports the public model API for imports such as:

```ts
import type { SkillGroup } from '@rakesh-portfolio/model';
```

## Development

Run `npm start` and open `http://localhost:4200/`.

Generate a standalone component with:

```bash
ng generate component component-name
```

## Build

Run `npm run build` to create an optimized production build in `dist/portfolio/`.
Build the reusable models library with `npm run build:models`; its package is
written to `dist/model/`.

## Tests

Run `npm test` to execute the unit tests with [Vitest](https://vitest.dev/).

For more information, see the [Angular CLI documentation](https://angular.dev/tools/cli).
