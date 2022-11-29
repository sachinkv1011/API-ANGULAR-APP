import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PublicDataComponent } from './public-data/public-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"public",
    component:PublicDataComponent
  },
  {
    path:"todo",
    component:ToDoComponent
  },
  {
    path:"quotes",
    component:QuotesAppComponent
  },
  {
    path:"userdata",
    component:UserDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    PublicDataComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    ToDoComponent,
    QuotesAppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
