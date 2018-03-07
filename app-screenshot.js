const puppeteer = require('puppeteer');

(async() => {

  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 2000,
    height: 2000
  });

  await page.goto('https://touch4it.sk/kultura', {waitUntil: 'networkidle2'});
  await page.screenshot({path: 'screenshot.png', clip: {x: 0, y: 5950, width: 2000, height: 2000}});
  await browser.close();

})();
