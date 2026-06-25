import { describe, it, expect } from "vitest";
import { deepMerge } from "../deepmerge";

describe("deepMerge", () => {
  it("should be a function", () => {
    expect(typeof deepMerge).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => deepMerge(null as any)).toThrow();
  });
});
