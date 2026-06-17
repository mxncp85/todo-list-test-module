import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'
import { chromium } from 'playwright'

let browser

BeforeAll(async () => {
  browser = await chromium.launch({ headless: process.env.HEADLESS !== '0' })
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

