describe('Main page', () => {
  it('should display tree list', () => {
    // Start from the index page
    cy.visit('http://localhost:3000');

    // The new url should include "/about"
    cy.url().should('include', '/');

    cy.get('div').contains('Phones');
    cy.get('div').contains('Computers');
    cy.get('div').contains('Watches');
    cy.get('div').contains('TVs');
  });

  it('should correctly set tree state', () => {
    // Start from the index page
    cy.visit('http://localhost:3000');

    const iPhone12 = cy.contains('iPhone 12');

    iPhone12.click();

    iPhone12
      .should('not.have.class', 'checked')
      .and('not.have.class', 'indeterminated');

    const iPhone12Children = iPhone12.parent().next('ul').children();

    iPhone12Children
      .should('not.have.class', 'checked')
      .and('not.have.class', 'indeterminated');

    const apple = cy.contains('Apple');
    const phones = cy.contains('Phones');

    apple.should('have.class', 'indeterminated');
    phones.should('have.class', 'indeterminated');

    apple.click();

    iPhone12
      .should('have.class', 'checked')
      .and('not.have.class', 'indeterminated');

    iPhone12Children
      .get('div')
      .should('have.class', 'checked')
      .and('not.have.class', 'indeterminated');
  });
});
