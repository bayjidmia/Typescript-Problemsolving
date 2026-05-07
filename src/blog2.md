# Why is `any` Called a "Type Safety Hole" and Why is `unknown` Safer?

## Introduction

TypeScript provides two special types:

- `any`
- `unknown`

Both can store any kind of value, but they behave very differently.

`any` removes TypeScript’s type checking, while `unknown` keeps type safety by forcing developers to check the type before using it.

---

# Why is `any` a "Type Safety Hole"?

The `any` type disables TypeScript’s safety system.

## Example

```ts
let value: any = 10;

value.toUpperCase();
```

TypeScript will not show any error, even though numbers do not have `toUpperCase()`.

This can cause runtime errors.

That is why `any` is called a:

> "Type Safety Hole"

Because it breaks type safety.

---

# Why is `unknown` Safer?

`unknown` can also hold any value, but TypeScript does not allow operations without checking the type first.

## Example

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

This is safer because TypeScript verifies the type before allowing string methods.

---

# What is Type Narrowing?

Type narrowing means checking a value’s type to make it more specific.

TypeScript uses checks like:

- `typeof`
- `instanceof`
- `in`

to understand the actual type.

## Example

```ts
if (typeof value === "string")
```

Here TypeScript narrows `value` from `unknown` to `string`.

---

# Conclusion

`any` is dangerous because it disables type checking and increases runtime errors.

`unknown` is safer because it forces developers to verify types using type narrowing before using values.

For better TypeScript practices:

- Avoid `any`
- Prefer `unknown`
