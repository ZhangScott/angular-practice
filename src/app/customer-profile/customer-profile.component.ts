import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['test', Validators.required],
    lastName: ['last name'],
    address: this.fb.group({
      street: ['street'],
      city: ['city'],
      state: ['state'],
      zip: ['zip']
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ])
  });

  name = new FormControl('');

  constructor(private fb: FormBuilder) { }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  ngOnInit() {
  }

  updateProfile(): void {
   this.profileForm.patchValue({
     firstName: 'Hello',
     address: {
       street: 'hello again'
     }
   });
  }
  onSubmit(): void {
    console.warn(this.profileForm.value);
  }

  addAlias(): void {
    this.aliases.push(new FormControl(''));
  }
}
