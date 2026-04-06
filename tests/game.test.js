const puppeteer = require('puppeteer');
const path = require('path');
const assert = require('assert');

(async () => {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const filePath = `file://${path.join(__dirname, '../index.html')}`;
    await page.goto(filePath);
    await page.waitForSelector('.grid-container');

    console.log("Running TDD Tests...");

    // Test 1: Check CTA Behavior (No focus trapping)
    const cells = await page.$$('.cell:not(.black)');
    await cells[0].click();
    await page.keyboard.press('Z'); // wrong letter
    
    const clickButton = async (name) => {
      const buttons = await page.$$('button');
      for (let btn of buttons) {
        const text = await page.evaluate(el => el.textContent, btn);
        if (text === name) {
          await btn.click();
          return;
        }
      }
      throw new Error(`Button ${name} not found`);
    };

    await clickButton('Check');
    // Ensure error class applied
    await new Promise(r => setTimeout(r, 100));
    let errCells = await page.$$('.cell-value.error');
    assert.strictEqual(errCells.length, 1, "Check button should mark 1 cell as error.");
    
    console.log("✔ Check CTA works.");

    // Test 2: Reveal CTA triggers Game Won and presents "Play Next"
    await clickButton('Reveal');
    await new Promise(r => setTimeout(r, 100));
    
    const congrats = await page.$('.congrats');
    assert.ok(congrats, "Congrats banner should appear after Reveal.");
    console.log("✔ Reveal completes board.");

    // Test 3: Play Next button
    const nextBtn = await page.$$eval('button', btns => Array.from(btns).find(b => b.textContent === 'Next ➔') !== undefined);
    assert.ok(nextBtn, "Play Next button must appear.");
    await clickButton('Next ➔');
    
    // Should reset board
    await new Promise(r => setTimeout(r, 100));
    const noCongrats = await page.$('.congrats');
    assert.strictEqual(noCongrats, null, "Congrats banner should disappear after Play Next.");
    
    // Verify values are cleared
    const valText = await page.$$eval('.cell-value', spans => spans.map(s => s.textContent).join(''));
    assert.strictEqual(valText, '', "Grid should be cleared after Play Next.");
    
    console.log("✔ Play Next cycles board successfully.");
    console.log("All tests passed!");
    
  } catch (err) {
    console.error("Test failed: ", err);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
})();
