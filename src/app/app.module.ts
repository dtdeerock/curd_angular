import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { LaptopEditFormComponent } from './laptop-edit-form/laptop-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LaptopListComponent,
    LaptopDetailsComponent,
    LaptopFormComponent,
    LaptopEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
