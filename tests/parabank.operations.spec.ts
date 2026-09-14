import { test } from '@playwright/test';
import { OpenNewAccountPage } from '../pages/OpenNewAccountPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';

let newAccountId: string | null = null;
let fromAccountId: string | null = null;
``

test.beforeEach(async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

test.describe.serial('Account creation and transfer', () => {
  let newAccountId: string;
  let fromAccountId: string;

  test('Opens a new banking account', async ({ page }) => {
    const accountPage = new OpenNewAccountPage(page);
    await accountPage.goTo();
    await accountPage.selectAccountType('1');
    await page.waitForLoadState('networkidle');
    await accountPage.submitAccountForm();
    newAccountId = await accountPage.getNewAccountId();
    await accountPage.verifyAccountCreation(newAccountId);
  });

  test('Transfer funds between own banking accounts', async ({ page }) => {
    const transferPage = new TransferFundsPage(page);
    await transferPage.goTo();
    const transferAmount = '100';
    const accountId = await transferPage.getFromAccountId();
    if (accountId === null) {
      throw new Error('No source account is available for transfer');
    }
    fromAccountId = accountId;
    await transferPage.fillTransferDetails(transferAmount, newAccountId);
    await page.waitForLoadState('networkidle');
    await transferPage.submitTransfer();
    await transferPage.verifyTransferSuccess(transferAmount, fromAccountId, newAccountId);
  });
});

// test('Opens a new banking account', async ({ page }) => {
//   const accountPage = new OpenNewAccountPage(page);
//   await accountPage.goTo();
//   await accountPage.selectAccountType('1');
//   await page.waitForLoadState('networkidle');
//   await accountPage.submitAccountForm();
//   newAccountId = await accountPage.getNewAccountId();
//   await accountPage.verifyAccountCreation(newAccountId);
// });

// test('Transfer funds between own banking accounts', async ({ page }) => {
//   test.skip(newAccountId === null || newAccountId === undefined, 'Skipping test because newAccountId is not set');
//   const transferPage = new TransferFundsPage(page);
//   await transferPage.goTo();
//   let transferAmout = '100';
//   fromAccountId = await transferPage.getFromAccountId();
//   await transferPage.fillTransferDetails(transferAmout, newAccountId);
//   await page.waitForLoadState('networkidle');
//   await transferPage.submitTransfer();
//   await transferPage.verifyTransferSuccess(transferAmout, fromAccountId, newAccountId);
// });