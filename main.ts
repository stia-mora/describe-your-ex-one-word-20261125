import { mkdirSync, writeFileSync } from "node:fs";

// One word that sums up an ex: discontinued.
// Like a product line pulled from the shelves — they stopped making
// that model, and nobody asked them to bring it back.
const word = "discontinued";

// Gate self-check: the contest asks for exactly one word, so refuse to
// ship anything with whitespace in it, or nothing at all.
if (word.length === 0 || /\s/.test(word)) {
  throw new Error(`entry breaks the gate, not one word: ${JSON.stringify(word)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
