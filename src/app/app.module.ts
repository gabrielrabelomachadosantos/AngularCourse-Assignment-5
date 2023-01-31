import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUserComponent } from './components/active-user/active-user.component';
import { InactiveUserComponent } from './components/inactive-user/inactive-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
