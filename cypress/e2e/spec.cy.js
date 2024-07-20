describe("test my react assessment", () => {
  it("check tab", () => {
    cy.visit("https://react-assessment-azure.vercel.app/");
    cy.get("#root > div > nav > ul > li:nth-child(2) > a").click();
    cy.get("#root > div > nav > ul > li:nth-child(1) > a").click();
    cy.get("#root > div > div > div > button:nth-child(2)").click();
    cy.get("#root > div > div > div > button:nth-child(1)").click();
  });

  it("add data", () => {
    cy.visit("https://react-assessment-azure.vercel.app/");
    cy.get("#root > div > div > div > button:nth-child(2)").click();
    cy.get(
      "#root > div > div > div:nth-child(3) > input[type=text]:nth-child(2)"
    ).type("Supavida");
    cy.get(
      "#root > div > div > div:nth-child(3) > input[type=text]:nth-child(3)"
    ).type("Itthirak");
    cy.get(
      "#root > div > div > div:nth-child(3) > input[type=text]:nth-child(4)"
    ).type("QA");
    //button save
    cy.get("#root > div > div > div:nth-child(3) > button").click();
    //check data at user home sector button
    cy.get("#root > div > div > div > button:nth-child(1)").click();
  });

  it("delete data", () => {
    cy.visit("https://react-assessment-azure.vercel.app/");
    cy.get("#root > div > nav > ul > li:nth-child(1) > a").click();
    cy.get("#root > div > div > div > button:nth-child(2)").click();
    cy.get(
      "#root > div > div > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(4) > button"
    ).click();
    cy.get(
      "#root > div > div > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(4) > button"
    ).click();
    cy.get("#root > div > div > div > button:nth-child(1)").click();
  });
});