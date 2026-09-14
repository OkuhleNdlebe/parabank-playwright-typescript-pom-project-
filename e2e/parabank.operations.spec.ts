import { test, expect } from '@playwright/test';
import { OpenNewAccountPage } from '../pages/OpenNewAccountPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';
import { faker } from '@faker-js/faker';
import path from 'path';

let newAccountId: string | null;
let fromAccountId: string | null;

test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

test('Open New Bank Account', async ({ page }) => {
    const accountPage = new OpenNewAccountPage(page);
    await accountPage.goTo();
    accountPage.selectAccountType('1');
    await page.waitForLoadState('networkidle');
    await accountPage.submitAccountForm(); // Submit the form to open a new account
    newAccountId = await accountPage.getNewAccountId(); // Store the new account ID for later use
    expect(newAccountId).toBeTruthy(); // Assert that the new account ID is not null or undefined
    if (newAccountId) {
        await accountPage.verifyAccountCreation(newAccountId);
    }


});
// test('Open New Bank Account', async ({ page }) => {
//  await page.getByRole('link', { name: 'Open New Account' }).click();
//  await page.getByRole('heading', { name: 'Open New Account' }).click();
//  await page.locator('#type').selectOption('1');
//  await page.getByRole('button', { name: 'Open New Account' }).click();
//  await page.getByText('Congratulations, your account').click();
// });

test ('Transfer Fundss between own banking accounts', async ({ page }) => {
    test.skip( newAccountId === null || newAccountId === undefined, 'New account ID is not available. Skipping the test.');
    const transferFundsPage = new TransferFundsPage(page);
    await transferFundsPage.goTo();
    let transferAmount = '30';
    if (newAccountId) {
        await transferFundsPage.fillTransferForm(transferAmount, newAccountId);
    }
    fromAccountId = await transferFundsPage.getFromAccountId();
    await transferFundsPage.fillTransferDetails(transferAmount, newAccountId);
    await page.waitForLoadState('networkidle');

    await transferFundsPage.submitTransfer();
    if (fromAccountId && newAccountId) {
        await transferFundsPage.verifyTransferSuccess(transferAmount, fromAccountId, newAccountId);
    }
  
});

// test('Account Overview', async ({ page }) => {
//  await page.getByRole('link', { name: 'Accounts Overview' }).click();
//  await page.getByRole('heading', { name: 'Accounts Overview' }).click();
//  await page.getByRole('cell', { name: '*Balance includes deposits' }).click();
// });  

// test('Transfer Funds', async ({page}) =>{
// await page.getByRole('link', { name: 'Transfer Funds' }).click();
// await page.getByRole('heading', { name: 'Transfer Funds' }).click();
// await page.locator('#amount').click();
// await page.locator('#amount').fill('30');
// await page.locator('#fromAccountId').selectOption('15120');
// await page.locator('#toAccountId').selectOption('15120');
// await page.getByRole('button', { name: 'Transfer' }).click();
// await page.getByRole('heading', { name: 'Transfer Complete!' }).click();
// await page.getByText('See Account Activity for more').click();
// });

// test('Bill Pay',async ({page}) => {
//  await page.getByRole('link', { name: 'Bill Pay' }).click();
//  await page.getByRole('heading', { name: 'Bill Payment Service' }).click();
//  await page.locator('input[name="payee.name"]').click();
//  await page.locator('input[name="payee.name"]').fill('Capitect ');
//  await page.locator('input[name="payee.address.street"]').click();
//  await page.locator('input[name="payee.address.street"]').press('CapsLock');
//  await page.locator('input[name="payee.address.street"]').press('CapsLock');
//  await page.locator('input[name="payee.address.street"]').fill('Stellies');
//  await page.locator('input[name="payee.address.city"]').click();
//  await page.getByRole('table').click();
//  await page.locator('input[name="payee.address.city"]').click();
//  await page.locator('input[name="payee.address.city"]').fill('Stellenboach ');
//  await page.locator('input[name="payee.address.state"]').click();
//  await page.locator('input[name="payee.address.state"]').fill('West Cape ');
//  await page.locator('input[name="payee.address.zipCode"]').click();
//  await page.locator('input[name="payee.address.zipCode"]').click();
//  await page.locator('input[name="payee.address.zipCode"]').fill('1234');
//  await page.locator('input[name="payee.phoneNumber"]').click();
//  await page.locator('input[name="payee.phoneNumber"]').fill('123456789');
//  await page.locator('input[name="payee.accountNumber"]').click();
//  await page.locator('input[name="payee.accountNumber"]').fill('78656');
//  await page.locator('input[name="verifyAccount"]').click();
//  await page.locator('input[name="verifyAccount"]').fill('78656');
//  await page.locator('input[name="amount"]').click();
//  await page.locator('input[name="amount"]').fill('80');
//  await page.getByRole('button', { name: 'Send Payment' }).click();
//  await page.getByRole('heading', { name: 'Bill Payment Complete' }).click();
//  await page.getByText('See Account Activity for more').click();
// });