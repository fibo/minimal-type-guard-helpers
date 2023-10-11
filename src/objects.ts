/**
 * Use `MaybeObject` generic to get a type that has same attributes as
 * input `T` typed as `unknown`.
 *
 * @example
 *
 * ```ts
 * type Foo = { bar: boolean }
 *
 * type MaybeFoo = MaybeObject<Foo>
 * ```
 */
export type MaybeObject<T extends object> = { [K in keyof T]: unknown }

/**
 * Use `isMaybeObject` as a _type guard_ helper.
 *
 * @example
 *
 * ```ts
 * type Foo = { bar: boolean }
 *
 * const getBar = (arg: unknown): Foo["bar"] | undefined => {
 * 	if (isMaybeObject<Foo>(arg)) return arg.bar
 * }
 * ```
 */
export const isMaybeObject = <T extends object>(
  arg: unknown
): arg is MaybeObject<T> =>
  typeof arg === "object" && arg !== null && !Array.isArray(arg)

/**
 * Use `objectTypeGuard` to create a _type guard_ on object types.
 *
 * @example
 *
 * ```ts
 * type Foo = { bar: boolean }
 *
 * const isFoo = objectTypeGuard<Foo>(({ bar }) => {
 *   return typeof bar === "boolean"
 * })
 * ```
 */
export const objectTypeGuard =
  <T extends object>(check: (obj: MaybeObject<T>) => boolean) =>
  (arg: unknown): arg is T =>
    isMaybeObject<T>(arg) && check(arg)
