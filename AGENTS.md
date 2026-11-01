# Project Guidelines

## Shared models and utilities

- Define shared interfaces and type aliases in the models library, with each model in its own file under `src/libs/portfolio/models/src/lib/`.
- Export every model from `src/libs/portfolio/models/src/index.ts` and import it through `@rakesh-portfolio/model`.
- Keep injectable shared utilities and calculation logic in the utils library under `src/libs/portfolio/utils/src/lib/`; consume them through `@rakesh-portfolio/utils`.
- Do not define shared model interfaces or types inside app components or utility services.
