// eslint-disable-next-line import/no-anonymous-default-export

import { MarkerType, Position } from "reactflow";

export default [
  //  Click to start
  {
    id: "btn",
    type: "input",
    data: { label: "Start Game" },
    position: { x: 500, y: 10 },
    style: { backgroundColor: "green", color: "white" },

    className: "circle",
  },

  // initialization
  {
    id: "rand-no",
    data: { label: "Generate Random Number" },
    position: { x: 300, y: 120 },
  },
  {
    id: "attempts",
    data: { label: "Set attempts = 0" },
    position: { x: 700, y: 120 },
  },

  //await user's input
  {
    id: "guess",
    data: { label: "Input Guess" },
    position: { x: 500, y: 210 },
  },

  //Processing Input
  {
    id: "process-input",
    data: { label: "Processing Input" },
    position: { x: 230, y: 300 },
    className: "light",
    style: {
      backgroundColor: "rgba(128, 0, 128, 0.59)",
      height: 300,
      width: 700,
      fontSize: "22px",
      color: "white",
    },
  },
  {
    id: "subtract-attempts",
    data: { label: "attempts++" },
    position: { x: 500, y: 400 },
  },
  {
    id: "guess-less",
    data: { label: "Guess < Rand-no" },
    position: { x: 250, y: 500 },
  },
  {
    id: "guess-correct",
    data: { label: "Guess = Rand-no" },
    position: { x: 750, y: 500 },
  },
  {
    id: "guess-greater",
    data: { label: "Guess > Rand-no" },
    position: { x: 500, y: 500 },
  },

  // Processed Input
  {
    id: "failed-decision",
    data: { label: "Guess Not correct" },
    position: { x: -100, y: 800 },
    // className: "light",
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.7)",
      height: 250,
      width: 200,
      fontSize: "22px",
      color: "white",
    },
  },
  {
    id: "Win Game",
    data: { label: "You Win" },
    position: { x: 1100, y: 800 },
    // className: "light",
    style: {
      backgroundColor: "rgba(0, 128, 0, 0.7)",
      height: 250,
      width: 200,
      fontSize: "22px",
      color: "white",
    },
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
  },

  {
    id: "retry",
    data: { label: "Retry" },
    position: { x: -75, y: 910 },
  },

  {
    id: "display-randno",
    data: { label: "Display Random Number" },
    position: { x: 1125, y: 970 },
  },
  {
    id: "display-attempts",
    data: { label: "Display number of Attempts tried" },
    position: { x: 1125, y: 870 },
  },
  {
    id: "end-game",
    data: { label: "End Game" },
    position: { x: 900, y: 1250 },
  },
  {
    id: "restart-game",
    data: { label: "Restart Game" },
    position: { x: 1400, y: 1250 },
  },
];
