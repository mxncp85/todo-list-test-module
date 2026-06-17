import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'
import { chromium, type Browser } from 'playwright'

let browser: Browser

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 1000 })
})

Before(async function () {
  this.context = await browser.newContext()
  this.page = await this.context.newPage()
})

After(async function () {
  await this.page?.close()
  await this.context?.close()
})

AfterAll(async () => {
  await browser?.close()
})
