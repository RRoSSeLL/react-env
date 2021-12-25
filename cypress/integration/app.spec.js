describe("App E2E test", () => {
  it("Greets the world", () => {
    cy.visit("/");
    cy.contains("Hello World!");
  });
});