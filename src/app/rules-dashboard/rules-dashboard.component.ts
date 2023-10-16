import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for template-driven forms
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // for reactive forms
import { Router } from '@angular/router';
//import { FormMappingComponent } from "./form-mapping/form-mapping.component";

@Component({
  selector: 'rules-dashboard-component',
  templateUrl: './rules-dashboard.component.html',
  styleUrls: ['./rules-dashboard.component.css']
})
export class RulesDashboardComponent {
  showConfigMapping = false;
  showFormMapping = false;

  constructor(private router: Router) { }

  rules: any[] = [
    {
      ruleName: "L&P Over 10K UW Rule",
      action: "Underwriting",
      attribute: "Bond Amount, Term Length",
      startDate: "1-Jan-23",
      endDate: "1-Jan-23",
      actions: "none"
    },
    {
      ruleName: "L&P Over 10K Rate Rule",
      action: "Rate",
      attribute: "Custom Question",
      startDate: "1-Jan-23",
      endDate: "1-Jan-23",
      actions: "none"
    }
  ];

  rulesForm = new FormGroup({
    ConfigurationName: new FormControl(''),
    ObligeeName: new FormControl(''),
    Country: new FormControl(''),
    ObligeeLocation: new FormControl(''),
    Class: new FormControl(''),
    Category: new FormControl(''),
    BondType: new FormControl(''),
    BondAmount: new FormControl(''),
    CancellationProvision: new FormControl(''),
  });

  submit() {
    // Handle the form submission here
    console.log(this.rulesForm.value);
  }

  editMapping(rule: any) {
    // Implement the logic for editing a mapping
    console.log("Editing mapping for rule:", rule);
  }

  goToCreateConfig() {
    this.router.navigate(['/app-create-config-component'], { queryParamsHandling: 'preserve', skipLocationChange: false });
  }
  
}
