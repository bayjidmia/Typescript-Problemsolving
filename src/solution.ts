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

const check = checkType("123");
console.log(check);
