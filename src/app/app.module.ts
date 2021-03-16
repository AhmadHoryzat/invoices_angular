import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }