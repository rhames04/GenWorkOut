import { variados } from "./exercises";

export function workoutVariado() {
  var item = variados[Math.floor(Math.random() * variados.length)];
  return item;
}
