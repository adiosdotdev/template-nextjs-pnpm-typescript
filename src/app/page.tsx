export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <section className="w-full max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
          Adios starter
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
          Hello from Adios
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          This Next.js template is ready to build, ship, and run on Adios.
        </p>
        <div className="mt-10 flex flex-col gap-3 text-sm font-semibold sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-slate-950 transition hover:bg-cyan-200"
            href="https://app.adios.dev/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy on Adios
          </a>
          <a
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-white transition hover:border-cyan-300"
            href="https://www.adios.dev/docs/quickstart"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the quickstart
          </a>
        </div>
      </section>
    </main>
  );
}
