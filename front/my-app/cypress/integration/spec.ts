describe('tests', () => {
  
  it('first test', () => {
    cy.visit('http://localhost:4200');
    cy.get('p').contains(/[0-9]+/);
  })
});
