// internet-in-one-word: one word for the whole internet.
// One word, no trailing newline: the entry is the word and nothing else.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const WORD = "cablegoblin";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");
chmodSync(target, 0o644);
