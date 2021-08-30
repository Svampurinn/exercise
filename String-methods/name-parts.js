const Name = "Albus Percival Wulfric Brian Dumbledore";
var firstName = Name.substring(0, Name.indexOf(" ")).trim();
var middleName = Name.substring(
  Name.indexOf(" "),
  Name.lastIndexOf(" ")
).trim();
var lastName = Name.substring(Name.lastIndexOf(" ")).trim();
console.log(firstName);
console.log(middleName);
console.log(lastName);
