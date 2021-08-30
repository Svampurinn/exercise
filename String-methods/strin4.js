const aaa = "Einar Helgi   Jóhannsson";

console.log(aaa.lastIndexOf(" ") + 1);

console.log(aaa.split(" ")[1]);
console.log(aaa.charAt(0).toUpperCase() + aaa.substring(1).toLowerCase());
console.log(aaa.replaceAll("  ", " "));
