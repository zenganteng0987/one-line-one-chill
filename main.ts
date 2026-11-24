import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Every night the baby monitor plays my lullaby back half a second late, in a voice that learned it from inside the crib.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Best effort: /output may already exist.
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
