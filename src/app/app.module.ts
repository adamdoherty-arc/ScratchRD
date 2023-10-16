import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RulesDashboardComponent } from './rules-dashboard/rules-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateConfigComponent } from './create-config/create-config.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AdminUiComponent } from './admin-ui/admin-ui.component';
import { MapBondConfigurationsComponent } from './map-bond-configurations/map-bond-configurations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RulesDashboardComponent,
    CreateConfigComponent,
    AdminUiComponent,
    MapBondConfigurationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'rules-dashboard', component: RulesDashboardComponent, pathMatch: 'full' },
      { path: 'rules-dashboard', component: RulesDashboardComponent },
      { path: 'create-config', component: CreateConfigComponent },
      { path: 'map-bond-configurations', component: MapBondConfigurationsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
