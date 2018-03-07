const puppeteer = require('puppeteer');
const assert = this.chai ? this.chai.assert : require('assert');

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
  await page.click('#navbar-toggle');
  await page.click('a[data-drupal-link-system-path="culture"]', {waitUntil: 'networkidle2'});
  const result = await page.evaluate(() => document.querySelector('img[alt="Samo"]')) !== null;
  assert.equal(true, result);
  await browser.close();

})();
