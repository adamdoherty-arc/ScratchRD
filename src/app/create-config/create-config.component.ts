import { Component, OnInit } from '@angular/core';
//import { DataService } from './data.service';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-config-component',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.css']
})

export class CreateConfigComponent implements OnInit {
  countries: any[] = [
    "US",
    "CA"
  ]; 
  obligeeLocations: any[] = [
    "1",
    "2"
  ];

  profileForm = this.fb.group({
    fields: this.fb.array([])
  });

  fields: any[] = [
    {name: 'ConfigurationName', validators: [Validators.required]},
    {name: 'ObligeeName', validators: [Validators.required]},
    {name: 'Country', validators: [Validators.required]},
    {name: 'ObligeeLocation', validators: [Validators.required]},
    {name: 'Class', validators: [Validators.required]},
    {name: 'Category', validators: [Validators.required]},
    {name: 'BondType', validators: [Validators.required]},
    {name: 'BondAmount', validators: [Validators.required]},
    {name: 'CancellationProvision', validators: [Validators.required]},

  ];
  
  trackByFn(index: number, item: unknown) {
    return (item as any).id;
  }
  constructor(
    private fb: FormBuilder) {} // ,private dataService: DataService

  ngOnInit() {
    //this.fields.forEach(field => {
      //this.fieldsArray.push(new FormControl(null, field.validators));
    //});
    //this.dataService.getCountries().subscribe(data => {
   //   this.countries = data;
   // });
   // this.dataService.getObligeeLocations().subscribe(data => {
    //  this.obligeeLocations = data;
    //});
  }

  get fieldsArray() {
    return this.profileForm.get('fields') as FormArray;
  }

  submit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      // Handle form invalid case
    }
  }

  classes: any[] = [
    "1",
    "2"
  ];
  categories: any[] = [
    "1",
    "2"
  ];  
  bondTypes: any[] = [
    "1",
    "2"
  ]; 
  bondAmounts: any[] = [
    "1",
    "2"
  ];   
  cancellationProvisions: any[] = [
    "1",
    "2"
  ];

}