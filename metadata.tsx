// https://bun.sh/docs/api/import-meta
// import.meta = way for module to access information about itself

// bun metadata.tsx

console.log(import.meta.dir); // => "/path/to/folder"
console.log(import.meta.file); // => "metadata.tsx"
console.log(import.meta.path); // => "/path/to/file/metadata.tsx"
console.log(import.meta.main); // `true` if file is directly executed by `bun run`
console.log(import.meta.resolveSync("zod")); // resolve an import specifier relative to the directory
