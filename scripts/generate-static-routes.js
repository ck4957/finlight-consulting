import { mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { articles } from '../src/articles.js';

const dist = join(process.cwd(), 'dist');
const index = join(dist, 'index.html');
const routes = ['my-take', ...articles.map((article) => `my-take/${article.slug}`)];

for (const route of routes) {
  const routeDir = join(dist, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(index, join(routeDir, 'index.html'));
}
