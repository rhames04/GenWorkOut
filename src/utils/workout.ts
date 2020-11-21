import { workoutVariado } from "./workoutFunc";

const t001 = {
  tipo: "resistencia",
  sets: 3,
  reps: { 1: 21, 2: 15, 3: 9 },
  exercicios: {
    1: workoutVariado(),
    2: workoutVariado(),
    3: workoutVariado(),
  },
  desc_ex: 0,
  desc_sets: 60,
};

const t002 = {
  tipo: "resistencia",
  sets: 8,
  reps: { 1: 10 },
  exercicios: {
    1: workoutVariado(),
    2: workoutVariado(),
  },
  desc_ex: 0,
  desc_sets: 60,
};

const t003 = {
  tipo: "resistencia",
  sets: 4,
  reps: { 1: 30 },
  exercicios: {
    1: "2km run",
    2: workoutVariado(),
  },
  desc_ex: 0,
  desc_sets: 60,
};

const t004 = {
  tipo: "resistencia",
  sets: 3,
  reps: { 1: 20 },
  exercicios: {
    1: "4km run",
    2: workoutVariado(),
  },
  desc_ex: 0,
  desc_sets: 60,
};

const t005 = {
  tipo: "resistencia",
  sets: 1,
  reps: { 1: 0 },
  exercicios: {
    1: "8km run",
  },
  desc_ex: 0,
  desc_sets: 0,
};

const t006 = {
  tipo: "resistencia",
  sets: 3,
  reps: { 1: 30, 2: 20, 3: 10 },
  exercicios: {
    1: workoutVariado(),
    2: workoutVariado(),
  },
  desc_ex: 0,
  desc_sets: 60,
};

export const treinos = [t001, t002, t003, t004, t005, t006];
