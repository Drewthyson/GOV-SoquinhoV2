import fs from 'fs';

async function run() {
  const url = "https://cdn.jsdelivr.net/npm/notion-client/src/notion-api.ts";
  const res = await fetch(url);
  const text = await res.text();
  fs.writeFileSync('notion_api_source.ts', text);
  console.log("Downloaded, length:", text.length);
}

run().catch(console.error);
