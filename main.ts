import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I texted my boss 'I'll be working from home today' — autocorrect sent 'I'll be twerking from home today' and now HR wants a word.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
