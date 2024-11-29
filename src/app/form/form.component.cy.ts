import { Router, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  it('should fill details and submit the form', () => {
    cy.mount(FormComponent);
    cy.spy(FormComponent.prototype, 'onSubmit').as('submit');
    cy.spy(console, 'log').as('log');

    cy.get('[data-cy-form]').as('form');
    cy.get('[data-cy-firstName]').as('firstName');
    cy.get('[data-cy-lastName]').as('lastName');
    cy.get('[data-cy-email]').as('email');
    cy.get('[data-cy-phoneNumber]').as('phoneNumber');
    cy.get('[data-cy-submit]').as('submitButton');

    cy.get('@firstName').type('Venu');
    cy.get('@lastName').type('Vennu');
    cy.get('@email').type('vennuvenu2392@gmail.com');
    cy.get('@phoneNumber').type('6302264069');

    cy.get('@submitButton').click();
    cy.get('@submit').should('have.been.called');
    cy.get('@log').should('have.been.calledWith', {
      firstName: 'Venu',
      lastName: 'Vennu',
      email: 'vennuvenu2392@gmail.com',
      phoneNumber: '6302264069',
    });
  });
});
