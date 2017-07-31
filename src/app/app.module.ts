import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserService }          from './user.service';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { PhotoComponent } from './photo.component';

import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    

  ],
  providers: [UserService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
