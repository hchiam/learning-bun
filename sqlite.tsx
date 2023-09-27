// https://bun.sh/docs/api/sqlite

// bun --watch sqlite.tsx

import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const query = db.query("select 'Hello world' as message;");
console.log(query.get()); // => { message: "Hello world" }
console.log(db.serialize());

// const insert = db.prepare("INSERT INTO cats (name) VALUES ($name)");
// const insertCats = db.transaction((cats) => {
//   for (const cat of cats) insert.run(cat);
//   return cats.length;
// });

// const count = insertCats([
//   { $name: "Keanu" },
//   { $name: "Salem" },
//   { $name: "Crookshanks" },
// ]);

// console.log(`Inserted ${count} cats`);
