import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormComponent } from '../form/form.component';

describe('HomeComponent', () => {
  it('should navigate to form page on click of button', () => {
    cy.mount(HomeComponent, {
      imports: [
        RouterModule.forRoot([{ path: 'form', component: FormComponent }]),
      ],
    });
    cy.spy(Router.prototype, 'navigate').as('navigate');
    cy.get('[data-cy-home]');
    cy.get('button').click();
    cy.get('@navigate').should('have.been.called');
  });
});
