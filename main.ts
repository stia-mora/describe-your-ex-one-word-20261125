import { mkdirSync, writeFileSync } from "node:fs";

// One word that sums up an ex: discontinued.
// Like a product line pulled from the shelves — they stopped making
// that model, and nobody asked them to bring it back.
const word = "discontinued";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
