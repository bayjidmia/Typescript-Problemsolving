// problem-1

const filterEvenNumbers = (values: number[]): number[] => {
  const number = values.filter((value) => value % 2 === 0);
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
    return "String";
  } else {
    return "Number";
  }
};

// problem-4
type User = {
  id: number;
  name: string;
  age: number;
};

const getProperty = <T extends User, K extends keyof T>(
  value: T,
  key: K,
): T[K] => {
  return value[key];
};

// problem-5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (value: Book) => {
  return {
    ...value,
    isRead: true,
  };
};
// problem-6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// pb-7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((item) => arr2.includes(item));
};
