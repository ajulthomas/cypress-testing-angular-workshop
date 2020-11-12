/// <reference types="Cypress" />

describe("workshop test", () => {
  it("validates elements on the DOM", () => {
    // Visits our application
    cy.visit("/");
    // Selects the header banner and validates it contains the text 'conduit'
    cy.get(".banner > .container > .logo-font").should("have.text", "conduit");
    // Selects any other two elements on the page and validates the text or style of the element with an assertion
    cy.get(".sidebar > p").should("have.text", "Popular Tags");
    cy.get(".navbar").should("have.class", "navbar-light");
    // Bonus: Use cy.contains() to validate the subheading ('A place to share your Angular knowledge.') WITHOUT selecting a specific element
    cy.contains("A place to share your Angular knowledge.");
  });
});
