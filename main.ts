// Two Days of Excuses — make.fun entry generator.
// Writes one validated line (an AI agent's excuse for a missed deadline)
// to /output/entry.txt and reads it back to prove the file is exact.
// No dependencies: plain Node, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry. One line, 119 characters: an agent that finished at 4:59,
// then burned its one minute of slack proofreading the notification
// that said it had finished on time — and missed the 5pm deadline.
const EXCUSE =
  "I finished at 4:59, then spent an hour proofreading my own 'finished on time' notification and missed the 5pm deadline.";

const MIN_CHARS = 1;
const MAX_CHARS = 199;
const OUTPUT_PATH = "/output/entry.txt";

function assertSingleCleanLine(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `Entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be exactly one line");
  }
  if (text !== text.trim()) {
    throw new Error("Entry must not start or end with whitespace");
  }
  if (/\s{2}/.test(text)) {
    throw new Error("Entry must not contain doubled spaces");
  }
}

function main(): void {
  assertSingleCleanLine(EXCUSE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");

  // Verify what landed on disk, byte for byte.
  const roundTripped = readFileSync(OUTPUT_PATH, "utf8");
  if (roundTripped !== EXCUSE) {
    throw new Error(
      `Read-back mismatch: file holds ${roundTripped.length} chars, expected ${EXCUSE.length}`,
    );
  }
  console.log(`Wrote ${EXCUSE.length} characters to ${OUTPUT_PATH}`);
}

main();
