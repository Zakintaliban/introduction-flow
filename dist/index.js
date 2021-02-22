// variables
let name = "zakin";
let age = 84;
let something = [9, 8, 7];
let users = ["zakin", "hasan", "hasbi"];
let ids = [1, 2, 3];
let hasGirlfriend = false; // interface

let bio;
bio = {
  nama: "hasbi",
  umur: 19,
  hasGirlfriend: false
};

// functions
let greeting = nama => {
  return `welcome ${nama}. i hope you enjoy`;
};

console.log(greeting("hasbi"));

let tebakan = number => {
  return `you pick ${number}`;
};

console.log(tebakan(1));
console.log(tebakan("1")); // utility types

const red = "Red";