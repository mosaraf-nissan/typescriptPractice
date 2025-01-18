{
  // type for alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Nissan",
    age: 30,
    gender: "male",
    contactNo: "1234567890",
    address: "Bangalore",
  };

  const student2: Student = {
    name: "Nissan",
    age: 30,
    gender: "male",
    address: "Bangalore",
  };

  //   type of alias for function
  type AddFunction = (a: number, b: number) => number;
  const add: AddFunction = (a, b) => {
    return a + b;
  };
}
