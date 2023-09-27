// bun --watch index.tsx

import { myFunction } from ".";

describe("test", () => {
  it("works", () => {
    expect(myFunction()).toBe(1);
  });
});
