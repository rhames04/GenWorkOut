import { treinos } from "./workout";

export function genWorkoutFunc(tipoDeTreino: string) {
  const resultado = [];
  for (let index = 0; index < treinos.length; index++) {
    const element = treinos[index];

    if (element.tipo === tipoDeTreino) {
      resultado.push(element);
    }
  }

  return resultado[Math.floor(Math.random() * resultado.length)];
}
