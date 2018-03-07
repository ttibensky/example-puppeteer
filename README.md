# Example puppeteer node.js app

An example implementation of https://developers.google.com/web/tools/puppeteer/

```bash
docker build . -t ttibensky/example-puppeteer
docker run -it --user root ttibensky/example-puppeteer /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-screenshot.js
docker run -it --user root ttibensky/example-puppeteer /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-screenshot-full-page.js
docker run -it --user root ttibensky/example-puppeteer /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-test-error.js
docker run -it --user root ttibensky/example-puppeteer /usr/bin/chromium-browser --headless --no-sandbox --remote-debugging-port=9222 --disable-gpu & npm install && node app-test-success.js
```

