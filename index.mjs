import { getContainerEl } from '@cypress/mount-utils'
import { Application, Controller } from '@hotwired/stimulus'

export function mount(
  controllerIdentifier,
  controllerClass,
  htmlSnippet,
  options = {}
) {
  // Inject the HTML test fixture into the root DOM element that Cypress has prepared for this test
  const root = getContainerEl()
  root.innerHTML = htmlSnippet

  // Register the controller with Stimulus
  const stimulusApplication = Application.start()
  stimulusApplication.debug = true
  stimulusApplication.register(controllerIdentifier, controllerClass)

  // Stop Stimulus after each test so you can browse the Cypres test steps without
  // Stimulus re-initializing the controllers for every DOM snapshot
  Cypress.on('test:after:run', () => {
    stimulusApplication.stop()
  })

  // Wait until next microtick to ensure any async render logic has executed
  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: 'mount',
        message: 'Mounted component',
      })
    }
  })
}
