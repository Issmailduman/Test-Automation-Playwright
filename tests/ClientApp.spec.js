const { test, expect } = require("@playwright/test");
test.only("Client App login", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginBtn = page.locator("[value='Login']");
  const username = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const productsName = 'zara coat 3';
  const products = page.locator(".card-body");
  const addCart= page.locator("text=  Add To Cart");
  await page.goto("https://rahulshettyacademy.com/client/");
 
  await username.type("ismaildumann@web.de");
  await password.fill("HKNclb8318.");
  await loginBtn.click();

  await page.waitForLoadState("networkidle"); // for Server based Application
  //console.log(await products.first().textContent());
  console.log(await products.allTextContents());

  const count = await products.count();
  for(let i=0;i<count;++i){
if( await products.nth(i).locator("b").textContent()=== productsName){
//add to chart
await products.nth(i).locator("text=  Add To Cart").click();
break;

  }}
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li[class*='even']").waitFor();
  const bool= await page.locator("h3:has-text('zara coat 3')").isVisible();
  expect(bool).toBeTruthy();
});
 