const { chromium } = require("/Users/daniel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const logs = [];

  page.on("console", (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on("pageerror", (err) => logs.push(`[pageerror] ${err.message}`));

  await page.goto("http://127.0.0.1:4173/index.html", { waitUntil: "networkidle" });

  const version = await page.locator("#versionTag").textContent();

  await page.click("#demoButton");
  await page.waitForTimeout(1000);
  const demoStatus = await page.locator("#imageStatus").textContent();
  const demoPreviewVisible = await page.locator("#previewFrame").evaluate((el) =>
    el.classList.contains("visible")
  );

  await page.evaluate(() => {
    document.querySelector("a-scene").emit("enter-vr");
  });
  await page.waitForTimeout(400);
  await page.evaluate(() => {
    document.querySelector("a-scene").emit("exit-vr");
  });
  await page.waitForTimeout(600);
  const afterXrStatus = await page.locator("#imageStatus").textContent();

  await page.setInputFiles("#fileInput", "./demo-panorama.png");
  await page.waitForTimeout(1500);
  const uploadStatus = await page.locator("#imageStatus").textContent();

  await browser.close();

  console.log(
    JSON.stringify(
      {
        version,
        demoStatus,
        demoPreviewVisible,
        afterXrStatus,
        uploadStatus,
        logs,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
