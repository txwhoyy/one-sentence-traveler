// one-sentence-traveler — writes one sentence for a traveler from 1800 to /output/entry.txt.
// The sentence (134 characters, sentence + trailing newline = 135 bytes total,
// well under the 200-character file limit):
// "Picture a road from your door to every library and post office on earth, and a letter sent down it arrives before your candle gutters."

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Period vocabulary: every content word is one a person from 1800 would
// know — road, door, library, post office, letter, candle — with no word
// coined after their time. "Earth" is the world they stand on, "gutters"
// is what a candle does as it burns down: the image is the speed, a letter
// arriving before the light dies.
const SENTENCE =
  "Picture a road from your door to every library and post office on earth, and a letter sent down it arrives before your candle gutters.";

const MAX_SENTENCE_CHARS = 200;

if (SENTENCE.trim().length === 0) {
  throw new Error("Sentence must not be blank.");
}
if (SENTENCE !== SENTENCE.trim()) {
  throw new Error("Sentence must not have leading or trailing whitespace.");
}
if (SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
  throw new Error("Sentence must be a single line.");
}
if (SENTENCE.length > MAX_SENTENCE_CHARS) {
  throw new Error(
    `Sentence is ${SENTENCE.length} characters, over the ${MAX_SENTENCE_CHARS} limit.`,
  );
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE + "\n", "utf8");

console.log(SENTENCE);
console.log(`Characters: ${SENTENCE.length}`);
