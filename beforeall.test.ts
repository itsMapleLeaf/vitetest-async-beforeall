import { setTimeout } from "node:timers/promises"
import { beforeAll, expect, test } from "vitest"

let beforeAllRan = false

beforeAll(async () => {
  await setTimeout(100)
  beforeAllRan = true
})

test("async beforeAll", () => {
  expect(beforeAllRan).toBe(true)
})
