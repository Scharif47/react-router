import whiskey from "./images/whiskey.jpeg";
import hazel from "./images/hazel.jpeg";
import tubby from "./images/tubby.jpeg";

let dogs = [
  {
    id: 1,
    name: "Whiskey",
    age: 1,
    detail: "Whiskey likes to eat and is a happy dog!",
    img: whiskey,
  },
  {
    id: 2,
    name: "Hazel",
    age: 2,
    detail: "Hazel likes Tubby!",
    img: hazel,
  },
  {
    id: 3,
    name: "Tubby",
    age: 3,
    detail: "Tubby is buffed and likes walking!",
    img: tubby,
  },
];

export function getDogs() {
  return dogs;
}

export function getDog(name) {
  return dogs.find((dog) => dog.name === name);
}