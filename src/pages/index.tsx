import React, { useState } from "react";
import "./styles.css";
import { genWorkoutFunc } from "../utils/genWorkoutFunc";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

interface WorkoutProps {
  tipo: string;
  sets: number;
  reps: {
    1: number;
  };
  exercicios: {
    1: string;
  };
  desc_ex: number;
  desc_sets: number;
}

export default function GenerateWorkout() {
  const [result, setResult] = useState<WorkoutProps>({
    tipo: "",
    sets: 0,
    reps: { 1: 0 },
    exercicios: {
      1: "",
    },
    desc_ex: 0,
    desc_sets: 0,
  });
  function workout() {
    const response = genWorkoutFunc("resistencia");
    setResult(response);
  }

  return (
    <div className="main">
      <h1>GenWorkOut</h1>
      <Button variant="primary" onClick={workout}>
        Gerar treino
      </Button>
      <div className="info">
        <div className="infoGroup">
          <div className="subtitle">
            {result.tipo !== "" ? <p>Séries: </p> : ""}
          </div>
          <div className="content">
            {result.tipo !== "" ? <p>{result.sets}</p> : ""}
          </div>
        </div>
        <div className="infoGroup">
          <div className="subtitle">
            {result.tipo !== "" ? <p>Repetições: </p> : ""}
          </div>
          <div className="content">
            {result.tipo !== ""
              ? Object.entries(result.reps).map(([key, value], index) => {
                  return <div key={index}>{value.toString()}</div>;
                })
              : ""}
          </div>
        </div>
        <div className="infoGroup">
          <div className="subtitle">
            {result.tipo !== "" ? <p>Exercícios: </p> : ""}
          </div>
          <div className="content">
            {result.tipo !== ""
              ? Object.entries(result.exercicios).map(([key, value], index) => {
                  return <div key={index}>{value.toString()}</div>;
                })
              : ""}
          </div>
        </div>
        <div className="infoGroup">
          <div className="subtitle">
            {result.tipo !== "" ? <p>Decanso entre exercícios: </p> : ""}
          </div>
          <div className="content">
            {result.tipo !== "" ? <p>{result.desc_ex} seg.</p> : ""}
          </div>
        </div>
        <div className="infoGroup">
          <div className="subtitle">
            {result.tipo !== "" ? <p>Decanso entre séries: </p> : ""}
          </div>
          <div className="content">
            {result.tipo !== "" ? <p>{result.desc_sets} seg.</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
