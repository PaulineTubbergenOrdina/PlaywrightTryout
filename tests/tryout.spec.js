import { welkomsttekst, urls, zoekknop, zoekveld, titeltekst, welkomsttekstTikfout } from '../page_objects/wikipedia.po'
import { test, expect } from '@playwright/test'

test.describe('Wikipedia', () => {
  test('checks that I can visit wikipedia', async ({page}) => {
    await page.goto(urls.basicUrl)
  })

  test('Checks that I can find the Platypus page on the English Wikipedia', async ({page}) => {
    // go to the English Wikipedia page
    await page.goto(urls.englishUrl)
    // check that the page is in English
    await expect(page.locator(welkomsttekst)).toContainText('Welcome to')
    // search for the Platypus
    await page.locator(zoekveld).fill('Platypus')
    await page.locator(zoekknop).click()
    // check that the Platypus page was found
    await expect(page.locator(titeltekst)).toBeVisible()
    await expect(page.locator(titeltekst)).toHaveText('Platypus')
  })

  test('fails on purpose', async ({page}) => {
    // go to the English Wikipedia page
    await page.goto(urls.englishUrl)
    // check that the page is in English
    await expect(page.locator(welkomsttekstTikfout)).toContainText('Welcome to')
    // search for the Platypus
    await page.locator(zoekveld).fill('Platypus')
    await page.locator(zoekknop).click()
    // check that the Platypus page was found
    await expect(page.locator(titeltekst)).toBeVisible()
    await expect(page.locator(titeltekst)).toHaveText('Platypus')
  })
})