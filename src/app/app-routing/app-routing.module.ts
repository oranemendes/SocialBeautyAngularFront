import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/users/home/home.component';
import { PhotosComponent } from '../components/photos/photos.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
