# cypress-ct-stimulus

Framework Definition for testing Hotwired Stimulus with Cypress Component Testing.

https://docs.cypress.io/guides/component-testing/third-party-definitions

## Usage

**Install the npm package**

```bash
npm i cypress cypress-ct-stimulus @hotwired/stimulus
```

**Configure framework**

```bash
npx cypress open --component
```

Then select "Configure component" tests and select this library from the dropdown.

**Write a test**

```js
import CheckboxesController from '../../app/javascript/controllers/checkboxes_controller.js'

describe('CheckboxesController', () => {
  it('checks all child checkboxes when the check all button is clicked', () => {
    cy.mount(
      'checkboxes',
      CheckboxesController,
      `
        <div data-controller="checkboxes">
          <button data-action="checkboxes#selectAll">Check All</button>
          <button data-action="checkboxes#deselectAll">Uncheck All</button>
          <form>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </form>
        </div>
      `
    )

    cy.get('input[type="checkbox"]').should('not.be.checked')
    cy.contains('Check All').click()
    cy.get('input[type="checkbox"]').should('be.checked')
  })
})
```

## Using alongside testing React with Cypress

This package provides a `mount` function for registering Stimulus controllers, so you can create separate mount commands for React and Cypress:

```js
// cypress/support/component.js
import { mount as mountStimulus } from 'cypress-ct-stimulus'
import { mount as mountReact } from 'cypress/react'

Cypress.Commands.add('mountStimulus', mountStimulus)
Cypress.Commands.add('mountReact', mountReact)
```

## Contributing

Built by [RoleModel Software, Inc.](https://rolemodelsoftware.com/)

Bug reports and pull requests are welcome on GitHub at https://github.com/RoleModel/cypress-ct-stimulus

## License

[MIT](LICENSE)
