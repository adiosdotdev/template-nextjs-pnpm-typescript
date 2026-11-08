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

## Build compiler

The default `build` script uses Turbopack, including deployments through the
provided `adios.yaml`:

```bash
pnpm run build
```

`build:turbopack` remains an alias for the same compiler. For applications that
need webpack plugins or loaders, use:

```bash
pnpm run build:webpack
```

To deploy with webpack, change `pnpm run build` to `pnpm run build:webpack`
in `adios.yaml`, keeping `set -e` and the standalone asset-copy commands.
Keep the frozen lockfile dependency command and existing package-manager
policies when changing compilers. Verify your pages, API routes, CSS and client
interactions after adapting custom compiler configuration.
