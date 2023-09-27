// bun run --watch servePort.tsx
// bun --hot servePort.tsx

import { serve } from "bun";

console.log("I restarted at:", Date.now());

console.log("Serving http://localhost:4003/");

serve({
  port: 4003,

  fetch(request) {
    console.log("Accessed http://localhost:4003/");

    return new Response("Hiya!");
  },
});
