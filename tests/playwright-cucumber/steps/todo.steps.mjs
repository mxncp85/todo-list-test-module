import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Given('Je suis sur la page de la todo list', async function () {
  await this.page.goto(this.baseUrl, { waitUntil: 'networkidle' })
})

Given('une tâche {string} existe', async function (texte) {
  await this.page.getByLabel('Nouvelle tâche').fill(texte)
  await this.page.getByRole('button', { name: 'Ajouter' }).click()
  await expect(this.page.getByText(texte, { exact: true })).toBeVisible()
})

When("j'ajoute une tâche {string}", async function (texte) {
  await this.page.getByLabel('Nouvelle tâche').fill(texte)
})

When("j'appuie sur le bouton {string}", async function (label) {
  await this.page.getByRole('button', { name: label }).click()
})

When('je supprime la tâche {string}', async function (texte) {
  const item = this.page.locator('li.todo-item', { hasText: texte })
  await item.getByRole('button', { name: 'Supprimer' }).click()
})

When('je coche la tâche {string}', async function (texte) {
  const item = this.page.locator('li.todo-item', { hasText: texte })
  await item.getByRole('button', { name: 'Marquer comme terminée' }).click()
})

When('je filtre sur {string}', async function (filtreLabel) {
  await this.page.getByRole('tab', { name: filtreLabel }).click()
})

Then('la tâche {string} est ajoutée', async function (texte) {
  await expect(this.page.getByText(texte, { exact: true })).toBeVisible()
})

Then("la tâche {string} n'est plus visible", async function (texte) {
  await expect(this.page.getByText(texte, { exact: true })).not.toBeVisible()
})

Then('la tâche {string} est visible', async function (texte) {
  await expect(this.page.getByText(texte, { exact: true })).toBeVisible()
})

Then('la tâche {string} est marquée comme terminée', async function (texte) {
  const item = this.page.locator('li.todo-item', { hasText: texte })
  await expect(item).toHaveClass(/todo-item--completed/)
  await expect(item.getByRole('button', { name: 'Marquer comme non terminée' })).toBeVisible()
})

