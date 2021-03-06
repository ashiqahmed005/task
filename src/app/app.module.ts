import { NgModule, ApplicationRef }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './header/header.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { TasksComponent }      from './tasks/tasks.component';

import { AgmCoreModule } from '@agm/core';
import { httpInterceptorProviders } from './http-interceptors/index';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'Google API here'
    })

  ],
  declarations: [
    AppComponent,
 
    TasksComponent,
    LoginComponent,
    HeaderComponent,
  ],
  providers:[httpInterceptorProviders, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
