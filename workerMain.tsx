// https://bun.sh/docs/api/workers

// WARNING: still experimental as of time of writing

// bun --watch workerMain.tsx
// bun --watch worker.tsx

const workerURL = new URL("worker.tsx", import.meta.url).href;
const worker = new Worker(workerURL);

worker.addEventListener("open", () => {
  console.log("worker is ready");
});

worker.postMessage("main message");
worker.onmessage = (event) => {
  console.log(event.data);
};
