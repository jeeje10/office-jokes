// Make the AI Judge Laugh: Office Jokes — make.fun entry.
// Writes one joke about office life (under 200 characters) to
// /output/entry.txt. The joke rings true about every office: the
// 15-minute standup where 14 minutes go to deciding whose turn it is
// to report that nothing happened.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Our standup is 15 minutes, so we spend 14 deciding whose turn it is to say nothing happened.";

// Gate guard: the entry must be 1–199 characters and not only whitespace.
if (entry.length < 1 || entry.length > 199 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
