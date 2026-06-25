import { describe, it, expect } from "vitest";
import { pick } from "../pick";

describe("pick", () => {
  it("should be a function", () => {
    expect(typeof pick).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => pick(null as any)).toThrow();
  });
});
