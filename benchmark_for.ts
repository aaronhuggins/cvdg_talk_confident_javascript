// deno-lint-ignore-file no-explicit-any
const createArray = (length: number) => Array.from({ length }, (_, i) => i)

// deno-lint-ignore no-inferrable-types
const N: number = 10000
const noop = (...args: any[]) => void args
let list = createArray(N)

Deno.bench('for', () => {
  for (let i = 0; i < list.length; i++) {
    noop(list[i])
  }
})

list = createArray(N)

Deno.bench('for..of', () => {
  for (const item of list) {
    noop(item)
  }
})

list = createArray(N)

Deno.bench('forEach', () => {
  list.forEach((item) => {
    noop(item)
  })
})
