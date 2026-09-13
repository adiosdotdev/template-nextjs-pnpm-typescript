# Next.js TypeScript Adios Template

This is a Next.js TypeScript starter configured to deploy on Adios with pnpm.

## Develop

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Adios

This template includes an `adios.yaml` manifest. Deploy it from the project root:

```bash
adios up
```

Links:

- [Deploy on Adios](https://app.adios.dev/signup)
- [Adios quickstart](https://www.adios.dev/docs/quickstart)
- [Next.js documentation](https://nextjs.org/docs)

## Build with Turbopack

The default `build` script uses webpack. To opt in to Turbopack, run:

```bash
pnpm run build:turbopack
```

For deployment, change `pnpm run build` to `pnpm run build:turbopack`
in `adios.yaml`, keeping `set -e` and the standalone asset-copy commands.
Alternatively, set `scripts.build` to `next build --turbopack` in `package.json`.
Adios runs your selected command and reports compilation failures.

Applications with custom webpack plugins or loaders should retain webpack until
their configuration has been adapted and tested with Turbopack. Keep the frozen
lockfile dependency command and existing package-manager policies when switching
compilers. No persistent Next.js compiler cache is required.
