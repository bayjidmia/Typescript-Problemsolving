// problem-1

const filterEvenNumbers = (values: number[]): number[] => {
  const number = values.filter((value) => value % 2 == 0);
  return number;
};

// problem2

const reverseString = (values: string): string => {
  const reverse = values.split("").reverse().join("");
  return reverse;
};
// problem3
const checkType = (value: string | number): string => {
  if (typeof value === "string") {
    return "string";
  } else {
    return "number";
  }
};

// problem-4
type Obj = {
  id: number;
  name: string;
  age: number;
};

const getProperty = <T extends Obj, K extends keyof T>(
  value: T,
  key: K,
): T[K] => {
  return value[key];
};
