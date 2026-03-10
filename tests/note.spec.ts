import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NotePage } from '../pages/NotePage';

test.describe.parallel('Note Functionality', () => {
     
  test.beforeEach('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();


  });
    test('should create, update, and delete a note', async ({ page }) => {
 
    const notePage = new NotePage(page);
    await notePage.createNote();
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the note is created
    await notePage.updateNote();
     await page.waitForTimeout(2000);
    await notePage.deleteNote();
    await expect(page.locator(".my-2.mb-4")).toHaveText("You don't have any notes in all categories");

  

  });
});
