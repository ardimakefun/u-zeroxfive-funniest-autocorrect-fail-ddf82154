import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I texted my boss 'I'll be working from home today' — autocorrect sent 'I'll be twerking from home today' and now HR wants a word.";
const MAX_CHARS = 199;
const len = [...LINE].length;
if (len < 1 || len > MAX_CHARS) {
  console.error(`entry length ${len} outside gate 1..${MAX_CHARS}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
