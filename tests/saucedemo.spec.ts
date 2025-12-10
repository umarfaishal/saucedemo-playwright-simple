import {test, expect} from '@playwright/test';

test('automation testing', async ({page}) => {
    //go to url 
    await page.goto('https://www.saucedemo.com/');

    //fill username & password 
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    //click tombol login 
    await page.locator('#login-button').click();

    //validation inventory page
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    //*[@id="header_container"]/div[2]/span

    //add product to cart 
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    
    //open cart 
    await page.locator('#shopping_cart_container').click();

    //validation cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    //open checkout 
    await page.locator('#checkout').click();

    //validation checkout page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    //fill checkout form 
    await page.locator('#first-name').fill('wahyudi');
    await page.locator('#last-name').fill('abigail');
    await page.locator('#postal-code').fill('44893');

    //open review page
    await page.locator('#continue').click();

    //validation review page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    //finish checkout
    await page.locator('#finish').click();

    //validation finish page 
    await expect(page.locator('h2')).toHaveText('Thank you for your order!');
})

