// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Deterministic: same bytes on every run. No network, no file reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I fixed the bug by deleting the only line that worked — turns out it was load-bearing.";

// Gate: the entry must be 1–200 characters of real text, not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
