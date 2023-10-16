import { Component, OnInit } from '@angular/core';
//import { DataService } from './data.service';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-map-bond-configurations',
  templateUrl: './map-bond-configurations.component.html',
  styleUrls: ['./map-bond-configurations.component.css']
})

export class MapBondConfigurationsComponent {
  items = [
    { bondConfigurationName: 'Config 1', country: 'United States', description: 'Class 103, Obligee Name, User Uploaded Form', view: 'icons' },
    { bondConfigurationName: 'Config 2', country: 'Canada', description: 'Class 110, Obligee Name', view: 'icons' },
    { bondConfigurationName: 'Config 3', country: 'United States', description: 'Obligee Name', view: 'icons' },
  ];
  selectedItem: any;
  countries: any[] = [
    "US",
    "CA"
  ]; 
  profileForm = this.fb.group({
    fields: this.fb.array([])
  });
  fields: any[] = [
    {name: 'Country', validators: [Validators.required]}

  ];
  constructor(private fb: FormBuilder) {
    this.selectedItem = this.items[0];
  }
  ngOnInit() {

  }
  submit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      // Handle form invalid case
    }
  }
}
