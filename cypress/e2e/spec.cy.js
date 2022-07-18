describe('testing of telnyx framework', () => {
  
  it('checking of url', () => {
    cy.visit('https://telnyx.com/')
    //cy.get('[class*="eUnEoi itIjRb"]').click()
    cy.url().should('include', '/telnyx')
  })

  it('shall fill the textarea', () => {
    cy.visit('https://telnyx.com/')
    cy.get('[class="sc-df34c536-3 dkdqrP"]').click({force: true}).type('fake@email.com', {force: true})
    cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-12 cSsJix UYAGn eUnEoi bTZeHd"]').click({force: true})
  })

  it('scroll to button and cheks a visibility of an element', () => {
    cy.visit('https://telnyx.com/')
    //cy.get('[class*="eUnEoi itIjRb"]').click()
    cy.scrollTo('bottom')
    cy.get('[class="sc-7b6c9f9b-12 cHxUkN"]').should('contain', 'Telnyx')
  })

  it('checking how our framework looks like at other devices', () => {
    cy.visit('https://telnyx.com/')
    //cy.get('[class*="eUnEoi itIjRb"]').click()
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('samsung-note9')
    cy.wait(200)
    cy.viewport('samsung-s10')
  })
})
