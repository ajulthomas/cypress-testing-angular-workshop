/// <reference types="Cypress" />

describe("workshop test", () => {
  it("asserts on the DOM after commands", () => {
    // Visits our application

    // -- Visits the baseUrl
    cy.visit("/");
    // -- Asserts the banner to confirm we are on the home page
    cy.get("[data-cy=banner-header]").should("have.text", "conduit");

    // Signs in with credentials

    // -- Inputs email address
    cy.contains("Sign in").click();
    cy.get(":nth-child(2) > .form-control").type(
      "ngconfentcypress@testemail.com"
    );
    // -- BONUS: Asserts the email address updated in the DOM
    cy.get(":nth-child(2) > .form-control").should(
      "have.value",
      "ngconfentcypress@testemail.com"
    );

    // -- Inputs password
    cy.get(":nth-child(3) > .form-control").type("ngConfEntCypress");

    // -- BONUS: Asserts password updated in the DOM
    cy.get(":nth-child(3) > .form-control").should(
      "have.value",
      "ngConfEntCypress"
    );

    // -- Clicks button to sign in
    cy.get(".btn").should("not.be", "disabled").click();

    // -- Asserts DOM changed on sign in
    cy.get(":nth-child(4) > .nav-link").should(
      "contain.text",
      "ngConfEntCypress"
    );

    // Publishes New Article

    // -- Navigates to New Article page
    cy.contains("New Article").click();

    // -- Asserts DOM changed on click
    cy.contains("Publish Article");

    // -- Adds New Article
    cy.get(":nth-child(1) > .form-control").type("Article Title");
    cy.get(":nth-child(2) > .form-control").type("Article description");
    cy.get(":nth-child(3) > .form-control").type(
      "This is the text of my article!"
    );
    cy.get(":nth-child(4) > .form-control").type("tutorial");
    cy.get(".btn").should("not.be", "disabled").click();

    // -- Asserts DOM changed on click
    cy.contains("Edit Article");
  });
});
