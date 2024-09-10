import { test, expect } from '@playwright/test';

// test setup
test.beforeAll(async () => {
  // Request1 - get a access token.
  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': 'tester01',
      'password': 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'
    }),
  });
  expect(response.status).toBe(200);
  const data = await response.json();
  console.log(data);
  const accessToken = data.token;
  console.log(accessToken)

  //Request2 - Create a new client.
  const createClientResponse = await fetch('http://localhost:3000/api/client/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-user-auth': JSON.stringify({
        'username': "tester01",
        'token': accessToken
      })
    },
    body: JSON.stringify({
      "name": "Nicole",
      "email": "nicole@email.com",
      "telephone": "13343"
    })
  });

  expect(createClientResponse.status).toBe(200);
});

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  expect(page.url()).toBe('http://localhost:3000/login');
  await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible();
  await page.locator('input[type="text"]').fill('tester01');
  await page.locator('input[type="password"]').fill('GteteqbQQgSr88SwNExUQv2ydb7xuf8c');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  await page.waitForTimeout(2000);
});

// test teardown

test.describe('Test suite 01', () => {
  test('Test case 01', async ({page}) => {
  await page.goto('http://playwright.dev/');

  });
});