// https://bun.sh/docs/api/workers

// WARNING: still experimental as of time of writing

// bun --watch workerMain.tsx
// bun --watch worker.tsx

// prevents TS errors
declare var self: Worker;

self.onmessage = (event: MessageEvent) => {
  console.log(event.data);
  postMessage("worker message");
};
