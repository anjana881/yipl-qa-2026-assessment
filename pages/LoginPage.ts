import { Page, Locator } from '@playwright/test';
import FormHelper from '../utils/formHelpers';
const fs=require('fs');
const path = require('path');


export class LoginPage {
   private page: Page;
   private emailInput: Locator;
   private passwordInput: Locator;
  private loginButton: Locator;
    formHelper: FormHelper;

  constructor(page: Page) {
    this.page = page;
    this.formHelper=new FormHelper(page);
      this.loginButton = page.locator('.btn.btn-primary.btn-lg.px-4.me-md-2');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator("button[type='submit']");
  }
   async goto(): Promise<void> {
    await this.page.goto('https://practice.expandtesting.com/notes/app/login');
  }

  async login(): Promise<void> {
    const credentialsPath = path.join(__dirname, '../cred.json');
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));

    await this.emailInput.fill(credentials.email);
    await this.passwordInput.fill(credentials.password);
    await this.formHelper.clickElement(this.loginButton);
    // await this.loginButton.click();
  }
}
