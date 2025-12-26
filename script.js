let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

// 1. Print Developers by Map
function printDeveloperbyMap() {
  employees.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

// 2. Print Developers by ForEach
function printDeveloperbyForEach() {
  employees.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

// 3. Add Data
function addData() {
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  };
  employees.push(newEmployee);
  console.log(employees);
}

// 4. Remove Admin
function removeAdmin() {
  employees = employees.filter((emp) => emp.profession !== "admin");
  console.log(employees);
}

// 5. Concatenate Array
function concatenateArray() {
  const newArray = [
    { id: 5, name: "alex", age: "22", profession: "designer" },
    { id: 6, name: "emma", age: "21", profession: "developer" },
    { id: 7, name: "robert", age: "23", profession: "manager" }
  ];

  const combinedArray = employees.concat(newArray);
  console.log(combinedArray);
}
