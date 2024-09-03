import { describe, expect, test } from "vitest";
import { ping } from "./ping";

describe("ping", () => {
  test.each([
    { site: "google.com", expected: true },
    { site: "https://encore.dev", expected: true },
    { site: "https://not-a-real-site.xyz", expected: false },
    { site: "invalid://scheme", expected: false },
  ])(
    // @ts-ignore
    `should verify that $site is ${"$expected" ? "up" : "down"}`,
    async ({ site, expected }) => {
      const resp = await ping({ url: site });
      expect(resp.up).toBe(expected);
    },
  );
});
