// https://bun.sh/docs/api/file-io

// bun --watch fileIO.tsx

const foo = Bun.file("fileIO.tsx"); // relative to cwd
console.log(foo.type); // MIME type
console.log(foo.size, "bytes"); // number of bytes
console.log(await foo.text()); // contents as a string
// console.log(await foo.stream()); // contents as ReadableStream
// console.log(await foo.arrayBuffer()); // contents as ArrayBuffer
