import { mount } from "@cypress/react";
import App from "./app";

it('Renders the App', () => {
  mount(<App />);
  cy.get('.app');
});