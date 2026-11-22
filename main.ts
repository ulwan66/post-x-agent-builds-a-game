// Entry program for the post-x bounty (Node 22, standard library only).
// It copies POST.json from the repository root (next to this script) to
// /output/POST.json, where the gate reads it. That is all it has to do.
// The entry is the post itself: a short video on X showing an AI agent
// building a tiny browser game from one prompt, ending with make.fun's
// referral end card and the entrant's referral code.
//
// POST.json is added after the video is posted on X: until then the file
// is absent and this program exits 0 with a warning instead of failing,
// so the repository can be built and checked before the post exists.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The repository root is the directory this script lives in: the grader
// runs `node /bot/main.ts` with the repo at /bot, and a local run uses
// MAKEFUN_BOT_DIR only as a fallback for the output directory, never as
// the source of POST.json — the file is always read from beside the script.
const BOT_DIR = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const postJson = join(BOT_DIR, 'POST.json');
if (!existsSync(postJson)) {
  console.warn('POST.json not present yet (post the video on X first); nothing to copy.');
} else {
  copyFileSync(postJson, join(OUTPUT_DIR, 'POST.json'));
  console.log(`POST.json copied to ${OUTPUT_DIR} (${statSync(postJson).size} bytes)`);
}
