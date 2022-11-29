import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    PublicDataComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    ToDoComponent,
    QuotesAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
