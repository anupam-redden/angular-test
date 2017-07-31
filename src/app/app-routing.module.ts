import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { PhotoComponent } from './photo.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user',  component: UserComponent },
  { path: 'detail/:id',  component: UserDetailComponent },
  { path: 'album/:albumid',  component: PhotoComponent }
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}