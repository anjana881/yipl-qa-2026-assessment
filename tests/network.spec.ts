import { test, chromium } from '@playwright/test';

test('Network interception test', async () => {
  const browser = await chromium.launch({ headless: false }); // Launch browser with UI for debugging
  const page = await browser.newPage();

  // Intercept requests using the recommended route method
  await page.route('**/*', (route) => {
    console.log(`Request made: ${route.request().url()}`);
    // Example: Abort image requests to speed up tests
    if (route.request().resourceType() === 'image') {
      route.abort();
    } else {
      route.continue();
    }
  });

  // Intercept responses
  page.on('response', (response) => {
    console.log(`Response received: ${response.url()} with status ${response.status()}`);
  });

  // Navigation
  await page.goto('https://practice.expandtesting.com/notes/app/login');

  await browser.close();
});
