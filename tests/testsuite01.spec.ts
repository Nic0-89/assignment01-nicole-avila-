import { test, expect } from '@playwright/test';

test.describe('Test suite 01', () => {

  test('Test case 01', async ({ page }) => {
    //perform log in
   await page.goto('https://playwright.dev/'); await page.goto('http://localhost:3000');
   expect(page.url()).toBe('http://localhost:3000/login'); 
   //assertion
   await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); 
   //assertion
   await page.locator('input[type="text"]').fill('tester01');
   await page.locator('input[type="password"]').fill('GteteqbQQgSr88SwNExUQv2ydb7xuf8c');
   await page.getByRole('button', { name: 'Login' }).click();
// log out
 // perform logout
 await page.getByRole('button', { name: 'Logout' }).click();
 expect(page.url()).toBe('http://localhost:3000/login'); //assertion
 await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion


  });


});

