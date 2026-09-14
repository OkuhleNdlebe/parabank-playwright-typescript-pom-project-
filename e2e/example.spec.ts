import { test, expect } from '@playwright/test';

test('Register the page ', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page.locator('[id="customer.firstName"]').fill('Okuhle');
  await page.locator('[id="customer.lastName"]').fill('Ndlebe');
  await page.locator('[id="customer.address.street"]').fill('Mthatha');
  await page.locator('[id="customer.address.city"]').fill('UAT');
  await page.locator('[id="customer.address.state"]').fill('East Cape ');
  await page.locator('[id="customer.address.zipCode"]').fill('233');
  await page.locator('[id="customer.phoneNumber"]').fill('0387464');
  await page.locator('[id="customer.ssn"]').fill('234');
  await page.locator('[id="customer.username"]').fill('btest');
  await page.locator('[id="customer.password"]').fill('password');
  await page.locator('#repeatedPassword').fill('paswword');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.locator('[id="customer.password"]').fill('pass');
  await page.locator('#repeatedPassword').fill('pass');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('heading', { name: 'Welcome btest' }).click();
 
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  await page.getByRole('heading', { name: 'Accounts Overview' }).click();
  await page.getByRole('cell', { name: '*Balance includes deposits' }).click();
  
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.locator('input[name="payee.name"]').click();
  await page.locator('input[name="payee.name"]').fill('Okuhle ');
  await page.locator('input[name="payee.address.street"]').click();
  await page.locator('input[name="payee.address.street"]').fill('Ndlebe');
  await page.locator('input[name="payee.address.city"]').click();
  await page.locator('input[name="payee.address.city"]').fill('Cape Town ');
  await page.locator('input[name="payee.address.state"]').click();
  await page.locator('input[name="payee.address.state"]').fill('East Cape');
  await page.locator('input[name="payee.address.zipCode"]').click();
  await page.locator('input[name="payee.address.zipCode"]').fill('123');
  await page.locator('input[name="payee.phoneNumber"]').click();
  await page.locator('input[name="payee.phoneNumber"]').fill('1234433');
  await page.locator('input[name="payee.accountNumber"]').click();
  await page.locator('input[name="payee.accountNumber"]').fill('56483');
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('56483');
  await page.locator('input[name="amount"]').click();
  await page.locator('input[name="amount"]').fill('30');
  await page.getByRole('button', { name: 'Send Payment' }).click();
  await page.getByRole('heading', { name: 'Bill Payment Complete' }).click();
  await page.getByText('See Account Activity for more').click();
  await page.getByRole('link', { name: 'Find Transactions' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
  
 
});

test('Open New Bank Account', async ({ page }) => {
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('heading', { name: 'Open New Account' }).click();
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await page.getByText('Congratulations, your account').click();


  // Click the get started link.
  test('get started link', async ({ page }) => {
   await page.getByRole('link', { name: 'Transfer Funds' }).click();
   await page.locator('#amount').click();
   await page.locator('#amount').fill('56');
   await page.getByRole('button', { name: 'Transfer' }).click();
   await page.getByRole('heading', { name: 'Transfer Complete!' }).click();
  });

   test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  });
   test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  });
   test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  });

});
