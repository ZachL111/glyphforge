import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 73,
    "capacity": 70,
    "latency": 20,
    "risk": 22,
    "weight": 10,
    "score": 94,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 85,
    "capacity": 72,
    "latency": 20,
    "risk": 10,
    "weight": 10,
    "score": 192,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 77,
    "capacity": 75,
    "latency": 19,
    "risk": 6,
    "weight": 12,
    "score": 215,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
