import { strict as assert } from "node:assert";
import { describe, it } from "node:test";

import { getStatus, Status } from "./index.ts";

describe("getStatus", () => {
  it("should return OK", () => {
    assert.strictEqual(getStatus(), Status.OK);
  });
});
