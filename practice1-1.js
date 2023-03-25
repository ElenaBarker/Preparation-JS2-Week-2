let people = [
  { name: "Bob", age: 30 },
  { name: "Hamed", age: 15 },
  { name: "John", age: 20 },
  { name: "Elise", age: 35 },
  { name: "Nasir", age: 24 },
];

 const allAdults = people.filter((person) => person.age>25);
 const allPeopleNames = people.map((person) => person.name);
 console.log(allAdults);
 console.log(allPeopleNames);