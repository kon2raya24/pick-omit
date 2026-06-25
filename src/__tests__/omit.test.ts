import { describe, it, expect } from "vitest";
import { omit } from "../omit";

describe("omit", () => {
  it("should be a function", () => {
    expect(typeof omit).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => omit(null as any)).toThrow();
  });
});
