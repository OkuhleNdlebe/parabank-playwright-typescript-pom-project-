import {Locator, Page, expect } from '@playwright/test';

export class OpenNewAccountPage {
    readonly page: Page;
    readonly openNewAccountLink: Locator;
    readonly accountTypeSelect: Locator;
    readonly openNewAccountButton: Locator;
    readonly newAccountId: Locator;
    readonly accountOpenedHeading: Locator;
    readonly successMessage: Locator;
    readonly newAccountMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account' });
        this.accountTypeSelect = page.locator('#type');
        this.openNewAccountButton = page.getByRole('button', { name: 'Open New Account' });
        this.newAccountId = page.locator('#newAccountId');
        this.accountOpenedHeading = page.getByRole('heading', { name: 'Account Opened!' });
        this.successMessage = page.getByText('Congratulations, your account');
        this.newAccountMessage = page.getByText('Congratulations, your account');
    }   


    async goTo() {
        await this.openNewAccountLink.click();
       // await expect(this.accountOpenedHeading).toBeVisible();
    }

    async selectAccountType(accountType: string) {
        await this.accountTypeSelect.selectOption(accountType);
    }   

    async submitAccountForm() {
        await this.openNewAccountButton.click();
    }   

    async getNewAccountId() {
        await expect(this.newAccountId).toBeVisible();
        return await this.newAccountId.textContent();
    }

    async verifyAccountCreation(newAccountId: string) {
        await expect(this.accountOpenedHeading).toBeVisible();
        await expect(this.successMessage).toBeVisible();
        // const newAccountMessageText = await this.newAccountMessage.textContent();
        // expect(newAccountMessageText).toContain(newAccountId);
    }   

}