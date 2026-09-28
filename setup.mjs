/* FinSight X — one-command installer.
   Reads files.txt and creates the full project, then runs npm install.
   Usage:  node setup.mjs   */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const RAW = fs.readFileSync("files.txt", "utf8").replace(/^\uFEFF/, "");
const chunks = RAW.split(/^===== FILE:\s*/m).slice(1);

if (chunks.length === 0) {
  console.error("❌ files.txt not found or empty. Put setup.mjs and files.txt in the SAME folder.");
  process.exit(1);
}

console.log(`Creating ${chunks.length} files…\n`);
for (const chunk of chunks) {
  const nl = chunk.indexOf("\n");
  const file = chunk.slice(0, nl).trim().replace(/=+\s*$/, "").trim();
  const content = chunk.slice(nl + 1)
    .replace(/```[a-zA-Z]*\s*$/, "")   // safety: stray code fence
    .replace(/\s+$/, "") + "\n";
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
  console.log("  ✔ " + file);
}

console.log("\nInstalling dependencies (1–2 minutes)…\n");
try {
  execSync("npm install", { stdio: "inherit" });
  console.log("\n✅ DONE! Start the app:\n\n    npm run dev\n\nThen open http://localhost:5173");
} catch {
  console.log("\n⚠ Files created, but npm install failed (internet?). Run manually:  npm install");
}