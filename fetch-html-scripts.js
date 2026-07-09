import fs from 'fs';

async function run() {
  const url = "https://right-puppy-dda.notion.site/Constitui-o-Soquinho-de-2026-ae1f68fac51145908f3824c939c14866";
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
    }
  });
  const html = await res.text();
  console.log("Status:", res.status);
  console.log("HTML length:", html.length);
  fs.writeFileSync('notion_raw_html.html', html);
  
  // Search for script tags or potential content
  const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
  console.log("Found script tags:", scripts.length);
  for (let i = 0; i < scripts.length; i++) {
    const text = scripts[i];
    if (text.includes("Constit") || text.includes("Soquinho") || text.includes("page") || text.includes("state")) {
      console.log(`Script ${i} length:`, text.length, "contains key terms");
      fs.writeFileSync(`script_${i}.txt`, text);
    }
  }
}

run().catch(console.error);
