import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe.parallel('Login Functionality', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();
    await page.waitForTimeout(3000); // Wait for 2 seconds to ensure the page is fully loaded
    await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app');

  });
});
