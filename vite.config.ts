import fs from 'fs';
import path from 'path';
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

function serveSwJs() {
  return {
    name: 'serve-sw-js',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/sw.js')) {
          return next();
        }

        const swFile = path.join(process.cwd(), 'public', 'sw.js');
        if (!fs.existsSync(swFile)) {
          return next();
        }

        const content = fs.readFileSync(swFile);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        res.end(content);
      });
    }
  };
}

export default defineConfig({
  plugins: [tailwindcss(), serveSwJs(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
