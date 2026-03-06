// RUN THIS:
// redis-server

// BEFORE AND IN PARALLEL WITH RUNNING THIS:
// bun run redis.tsx

import { redis } from 'bun';

await redis.set('message', 'Bun is beautiful');

const cachedData = await redis.get('message');

console.log(cachedData);
