/// <reference types="cypress" />


describe('This test case validates the Plug Landing Page', () => {

  before('', () => {
    cy.goToPlug()
  })
  after('', () => {
    cy.log('All over')
  })

  it('Validates Landing Page upper portion', () => {
    cy.get('[class="jss9"]')
      .should('be.visible')
      .should('have.text', 'MADE BY')
    cy.get('[class="jss10"]')
      .invoke('attr', 'src')
      .should('eq', 'thunder.svg')

    cy.get('[class=jss15]')
      .should('be.visible')
      .invoke('attr', 'src')
      .should('eq', 'plug.svg')

    cy.get('[class="jss18"]')
      .should('be.visible')
      .should('have.text', "What’s good!")

    cy.get('[class="MuiTypography-root MuiTypography-h2"]')
      .should('be.visible')
      .should('have.text', 'Welcome to Plug. ')

    cy.get('[class="MuiTypography-root jss12 MuiTypography-subtitle1"]')
      .should('be.visible')
      .should('have.text', 'Choose if you want to import or create a wallet (Principal ID).')
  })
  it('Validates Import Wallet segment in the Landing Page', () => {
    cy.get('[class="jss20"]')
      .should('be.visible')
      .invoke('attr', 'src')
      .should('eq', 'importwallet.svg')

    cy.get('[class="MuiTypography-root MuiTypography-h3"]')
      .should('be.visible')
      .should('have.text', 'Import Wallet')

    cy.get('[class="MuiTypography-root MuiTypography-h5"]')
      .should('be.visible')
      .should('have.text', 'Import using 12 word Secret Recovery Phrase from an existing Plug wallet.')

    cy.get('[class="MuiButton-label"]')
      .should('be.visible')
      .should('have.css', 'width', '100%')
      .should('have.css', 'color', '(255,255,255)')

    cy.get('[class="jss28"]').click()
    cy.location('pathname').should('eq', '/options.html') //This might fails, I would need to run the code to confirm if this would pass

  })
  it('Validates Create Wallet segment in the Landing Page', () => {
    cy.get('[class="jss62"]')
      .should('be.visible')
      .invoke('attr', 'src')
      .should('eq', 'createwallet.svg')

    cy.get('[class="MuiTypography-root MuiTypography-h3"]').eq(1)
      .should('be.visible')
      .should('have.text', 'Create Wallet')

    cy.get('[class="MuiTypography-root MuiTypography-h5"]').eq(1)
      .should('be.visible')
      .should('have.text', 'Create a new wallet and Secret Recovery Phrase.')

    cy.get('[class="MuiButton-label"]').eq(1)
      .should('be.visible')
      .should('have.css', 'width', '100%')
      .should('have.css', 'color', '(255,255,255)')

    cy.get('[class="jss28"]').eq(1)
      .click()
    cy.location('pathname').should('eq', '/options.html') //This might fails, I would need to run the code to confirm if this would pass

  })
})
