/// <reference types="Cypress" />

describe("workshop test", () => {
  it("uses commands to sign in and publish new article", () => {
    // Visits our application
    cy.visit("/");
    // Signs in with credentials
    cy.contains("Sign in").click();
    cy.get(":nth-child(2) > .form-control").type(
      "ngconfentcypress@testemail.com"
    );
    cy.get(":nth-child(3) > .form-control").type("ngConfEntCypress");
    cy.get(".btn").should("not.be", "disabled").click();
    // Publishes New Article
    cy.contains("New Article").click();
    cy.get(":nth-child(1) > .form-control").type("Article Title");
    cy.get(":nth-child(2) > .form-control").type("Article description");
    cy.get(":nth-child(3) > .form-control").type(
      "This is the text of my article!"
    );
    cy.get(":nth-child(4) > .form-control").type("tutorial");
    cy.get(".btn").should("not.be", "disabled").click();
  });
});
