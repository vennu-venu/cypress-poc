import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
})
export class FormComponent implements OnInit {
  userDetailsForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    console.log(this.userDetailsForm.value);
  }
}
