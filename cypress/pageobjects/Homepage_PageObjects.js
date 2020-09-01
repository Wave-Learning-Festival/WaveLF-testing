const courses_button = 'a[href="/courses" and class="sign-up-link"]';

export const homepage = {
    clickButton(button) {
        switch (button) {
            case 'Courses':
                cy.get(courses_button).click();
                break;
        }
    },
    verifySignInForm() {
        cy.get('h1').first().should('have.text', 'Sign In');
    },
};
