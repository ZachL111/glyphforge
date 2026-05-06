import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 79, slack: 37, drag: 25, confidence: 75 };
assert.equal(domainReviewScore(item), 195);
assert.equal(domainReviewLane(item), "ship");
