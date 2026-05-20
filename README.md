# Roomify

A React Router application for building AI-assisted room visualizations.

## Start Building

### Install dependencies

```bash
npm install
```

### Start development

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Environment Variables

Create a local env file from the example:

```bash
copy .env.local.example .env.local
```

Then update `.env.local` with your Puter worker URL:

```env
VITE_PUTER_WORKER_URL=https://your-puter-worker-subdomain.puter.work
```

This file is ignored by git so local secrets are not committed.

## Build for Production

```bash
npm run build
```

## Deploy

Use the `build/` output and any Node-friendly hosting platform.

---

Built with React Router.
