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
): arg is {
	[K in keyof T]: unknown
} => typeof arg === "object" && arg !== null && !Array.isArray(arg)

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
	<T extends object>(check: (obj: { [K in keyof T]: unknown }) => boolean) =>
	(arg: unknown): arg is T =>
		isMaybeObject<T>(arg) && check(arg)
