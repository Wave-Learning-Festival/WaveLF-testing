import { homepage } from '../../pageobjects/Homepage_PageObjects';

Given('I open wavelf homepage', () => {
    cy.visit('/');
    cy.viewport('macbook-15');
});

When('I click on {string} button', (button) => {
    homepage.clickButton(button);
});

then('Sign In form is displayed', () => {
    homepage.verifySignInForm();
});
