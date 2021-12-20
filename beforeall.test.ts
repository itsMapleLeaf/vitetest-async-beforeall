import { setTimeout } from "node:timers/promises"
import { beforeAll, expect, test } from "vitest"

let beforeAllRan = false

beforeAll(async () => {
  beforeAllRan = true
  await setTimeout(100)
})

test("async beforeAll", () => {
  expect(beforeAllRan).toBe(true)
})
