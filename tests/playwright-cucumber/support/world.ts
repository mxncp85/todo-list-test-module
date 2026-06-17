import { setWorldConstructor } from '@cucumber/cucumber'
import type { Browser, BrowserContext, Page } from 'playwright'

class CustomWorld {
  browser: Browser | null = null
  context: BrowserContext | null = null
  page: Page | null = null
  baseUrl = process.env.BASE_URL || 'http://localhost:5173'
}

setWorldConstructor(CustomWorld)
