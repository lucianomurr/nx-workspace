describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productlistcomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-workspace-product-list').should('exist');
  });
});
