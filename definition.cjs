const { defineComponentFramework } = require('cypress')

const stimulusDep = {
  // Unique, semantic identifier.
  type: 'hotwired-stimulus',

  // Human readable name.
  name: 'Hotwired Stimulus',

  // Package name install from `npm`.
  package: '@hotwired/stimulus',

  /**
   * Similar to package, but can include a version or tag.
   * Used during setup to generate an install command for users.
   * Eg: `solid-js@next`
   */
  installer: '@hotwired/stimulus',

  // Human readable description.
  description: 'A modest JavaScript framework for the HTML you already have.',

  // Minimum supported version.
  minVersion: '^3.1.0',
}

/**
 * The actual definition.
 */
module.exports = defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: 'cypress-ct-stimulus',

  /**
   * The label that shows up when configuring Component Testing
   * for the first time.
   */
  name: 'Hotwired Stimulus',

  /**
   * Supported bundlers. Can be "webpack" and/or "vite".
   * In this example we only support Solid.js with Vite.
   */
  supportedBundlers: ['webpack'],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   * In this example, if a module matching `stimulusDep`
   * is found in the user's project,
   * Stimulus will automatically be selected when configuring Component Testing.
   */
  detectors: [stimulusDep],

  /**
   * Supply a set of dependencies a project should have to use this Framework Definition. The user will be prompted to install them if they are not found.
   * Optionally, supply different dependencies based on the chosen bundler.
   */
  dependencies: (bundler) => {
    return [stimulusDep]
  },

  /**
   * An SVG icon. Shown when configuring Component Testing for the first time.
   * Optional, but good for branding your Framework Definition.
   */
  icon: `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 340 340" xml:space="preserve" enable-background="new 0 0 340 340"><g><path d="M292.4,190.4h-22.2c-5.5,0-13.9,2.3-18.6,5.1L98.8,285.4c-4.7,2.8-13.1,5.1-18.6,5.1H48H10.2h-10v40c0,5.5,4.5,10,10,10 h320c5.5,0,10-4.5,10-10v-40h-10h-37.8h-32.2c-5.5,0-13.9-2.3-18.6-5.1l-45.8-26.9c-4.7-2.8-4.7-7.4,0-10.1l21.8-12.8 c4.7-2.8,12.5-2.8,17.2,0l16.8,9.9c4.7,2.8,13.1,5.1,18.6,5.1h22.2h37.8h10v-60h-10H292.4z"/><path d="M292.4,90.4h-22.2c-5.5,0-13.9,2.3-18.6,5.1L98.8,185.4c-4.7,2.8-13.1,5.1-18.6,5.1H48H10.2h-10v60h10H48h22.2 c5.5,0,13.9-2.3,18.6-5.1l152.8-89.9c4.7-2.8,13.1-5.1,18.6-5.1h32.2h37.8h10v-60h-10H292.4z"/><path d="M330.2,0.4h-320c-5.5,0-10,4.5-10,10v40h10H48h32.2c5.5,0,13.9,2.3,18.6,5.1l45.8,26.9c4.7,2.8,4.7,7.4,0,10.1l-21.8,12.8 c-4.7,2.8-12.5,2.8-17.2,0l-16.8-9.9c-4.7-2.8-13.1-5.1-18.6-5.1H48H10.2h-10v60h10H48h22.2c5.5,0,13.9-2.3,18.6-5.1l152.8-89.9 c4.7-2.8,13.1-5.1,18.6-5.1h32.2h37.8h10v-40C340.2,4.9,335.7,0.4,330.2,0.4z"/></g></svg>
  `,
})
