import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/SignupPage';


test.describe.parallel('Signup Functionality', () => {
  test('should signup successfully with valid credentials', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    await page.waitForTimeout(3000); // Wait for 2 seconds to ensure the page is fully loaded
    await signupPage.signup();
    await expect(page.locator("div[class='alert alert-success'] b")).toHaveText('User account created successfully');;
        
  });
});
