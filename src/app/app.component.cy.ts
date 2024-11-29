import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
  it('should navigate to form page on click of button', () => {
    cy.mount(AppComponent, {
      imports: [
        RouterOutlet,
        RouterModule.forRoot([
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'form',
            component: FormComponent,
          },
        ]),
      ],
    });
  });
});
