// @flow

// variables
let name: string = "zakin";
let age: number = 84;
let something: any = [9, 8, 7];
let users: string[] = ["zakin", "hasan", "hasbi"];
let ids: number[] = [1, 2, 3];
let hasGirlfriend: boolean = false;

// interface
let bio: Bio;
bio = {
  nama: "hasbi",
  umur: 19,
  hasGirlfriend: false,
};

interface Bio {
  nama: string;
  umur: number;
  hasGirlfriend: boolean;
}

// functions
let greeting = (nama: string): string => {
  return `welcome ${nama}. i hope you enjoy`;
};

console.log(greeting("hasbi"));

let tebakan = (number: string | number): string | number => {
  return `you pick ${number}`;
};

console.log(tebakan(1));
console.log(tebakan("1"));

// utility types

type Color = "Red" | "Green" | "Blue";
const red: Color = "Red";
