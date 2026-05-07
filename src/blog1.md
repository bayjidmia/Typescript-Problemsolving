# How Do Generics Allow You to Build Reusable Components and Functions While Staying Strictly Typed?

## Introduction

When developing applications in TypeScript, developers often need to write code that works with different types of data. For example, sometimes we work with strings, sometimes numbers, and sometimes complex objects.

Without Generics, developers usually write multiple versions of the same function for different data types. This creates repetitive code and makes projects harder to maintain.

Generics solve this problem.

Generics allow us to create reusable components, functions, interfaces, and classes that can work with any data type while still maintaining strict type safety.

In this blog, we will explore:

- What Generics are
- Why they are important
- How they improve reusability
- How they maintain strict typing
- Real-world TypeScript examples
- Generic constraints
- Practical use cases in React and APIs

---

# What Are Generics in TypeScript?

Generics are a feature in TypeScript that allows developers to create reusable code components that work with multiple types.

Instead of hardcoding a specific type like `string` or `number`, Generics use a placeholder type.

Usually, the placeholder is written as `T`.

---

# Problem Without Generics

Suppose we want a function that returns the same value passed into it.

## Example for String

```ts
function identityString(value: string): string {
  return value;
}
```

## Example for Number

```ts
function identityNumber(value: number): number {
  return value;
}
```

Now imagine needing versions for booleans, arrays, objects, and many more types.

This creates unnecessary duplicate code.

---

# Solution Using Generics

Generics allow us to write the function once.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Now the same function works with multiple types.

```ts
identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);
```

Here:

- `T` represents a generic type
- TypeScript automatically keeps the type safe
- The function becomes reusable

---

# How Generics Maintain Strict Typing

One of the biggest advantages of Generics is that they do not remove type safety.

TypeScript still knows exactly what type is being used.

## Example

```ts
function getValue<T>(value: T): T {
  return value;
}

const result = getValue("TypeScript");
```

TypeScript automatically understands:

```ts
result -> string
```

So if we try:

```ts
result.toUpperCase();
```

It works perfectly because TypeScript knows `result` is a string.

But this would fail:

```ts
result.toFixed(2);
```

Because `toFixed()` only exists on numbers.

This is how Generics stay strictly typed.

---

# Generics With Arrays

Generics are extremely useful when working with arrays.

## Example

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

Usage:

```ts
const firstNumber = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);
```

TypeScript automatically infers:

```ts
firstNumber -> number
firstString -> string
```

The same function works for different array types.

---

# Generics With Objects

Generics also work very well with objects.

## Example

```ts
function printData<T>(data: T): T {
  return data;
}
```

Usage:

```ts
const user = printData({
  name: "Bayjid",
  age: 22,
});
```

Now TypeScript knows:

```ts
user.name;
user.age;
```

Both properties remain fully typed.

This improves IntelliSense and catches mistakes during development.

---

# Generic Interfaces

Generics are commonly used with interfaces.

## Example

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Now we can reuse this interface for different API responses.

## Example With User Data

```ts
interface User {
  name: string;
  age: number;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    name: "Bayjid",
    age: 22,
  },
};
```

## Example With Product Data

```ts
interface Product {
  title: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  success: true,
  data: {
    title: "Laptop",
    price: 50000,
  },
};
```

One interface works for multiple data structures.

---

# Generic Constraints

Sometimes we want Generics to accept only specific kinds of values.

This is called a Generic Constraint.

## Example

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

Usage:

```ts
getLength("Hello");
getLength([1, 2, 3]);
```

But this will fail:

```ts
getLength(100);
```

Because numbers do not have a `length` property.

Constraints make Generics even safer.

---

# Real-World Benefits of Generics

## 1. Reusability

Write code once and use it everywhere.

---

## 2. Strong Type Safety

Errors are detected during development instead of runtime.

---

## 3. Better Code Maintenance

Less duplicate code means easier updates.

---

## 4. Improved Developer Experience

Autocomplete and IntelliSense work much better.

---

## 5. Scalability

Generics help large applications stay organized and flexible.

---

# Common Use Cases of Generics

Generics are widely used in:

- API handling
- React components
- Utility functions
- Data tables
- Form handling
- State management
- Collections and arrays

---
