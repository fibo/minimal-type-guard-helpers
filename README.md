# minimal-type-guard-helpers

> minimal type-guard helpers

It provides few helpers to create type-guards.
This package is implemented with ECMAScript modules. CommonJS is not supported.

## Synopsis

```ts
import { arrayTypeGuard, isLiteralType, isMaybeObject } from "minimal-type-guard-helpers"

export const myItems = ["foo", "bar"] as const
export type MyItem = (typeof myItems)[number]
export const isMyItem = isLiteralType<MyItem>(myItems)

type MyItems = MyItem[]
const isMyItems = arrayTypeGuard<MyItem>(isMyItem)

type Foo = { bar: boolean }

const getBar = (arg: unknown): Foo["bar"] | undefined => {
  if (isMaybeObject<Foo>(arg)) return arg.bar
}

const isFoo = objectTypeGuard<Foo>(({ bar }) => {
  return typeof bar === "boolean"
})
```

## License

[MIT](https://fibo.github.io/mit-license)

