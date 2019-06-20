import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { GuestComponent } from './pages/guest/guest.component';
import { LoginComponent } from './pages/guest/login/login.component';
import { ForgotpasswordComponent } from './pages/guest/login/forgotpassword/forgotpassword.component';
import { InscriptionComponent } from './pages/guest/inscription/inscription.component';
import { ArticlesSectionComponent } from './pages/users/articles-section/articles-section.component';
import { PhotosSectionComponent } from './pages/users/photos-section/photos-section.component';
import { AnnoncesSectionComponent } from './pages/users/annonces-section/annonces-section.component';
import { BonsplansSectionComponent } from './pages/users/bonsplans-section/bonsplans-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingleArticleComponent } from './components/articles/single-article/single-article.component';
import { ArticleCommentComponent } from './components/articles/article-comment/article-comment.component';
import { NewArticleComponent } from './components/articles/new-article/new-article.component';
import { SinglePhotoComponent } from './components/photos/single-photo/single-photo.component';
import { PhotoCommentComponent } from './components/photos/photo-comment/photo-comment.component';
import { NewPhotoComponent } from './components/photos/new-photo/new-photo.component';
import { SingleAnnonceComponent } from './components/annonces/single-annonce/single-annonce.component';
import { AnnonceCommentComponent } from './components/annonces/annonce-comment/annonce-comment.component';
import { NewAnnonceComponent } from './components/annonces/new-annonce/new-annonce.component';
import { SingleBonplanComponent } from './components/bonsplans/single-bonplan/single-bonplan.component';
import { BonplanCommentComponent } from './components/bonsplans/bonplan-comment/bonplan-comment.component';
import { NewBonplanComponent } from './components/bonsplans/new-bonplan/new-bonplan.component';
import { HomeComponent } from './pages/users/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GuestComponent,
    LoginComponent,
    ForgotpasswordComponent,
    InscriptionComponent,
    ArticlesSectionComponent,
    PhotosSectionComponent,
    AnnoncesSectionComponent,
    BonsplansSectionComponent,
    NavbarComponent,
    SingleArticleComponent,
    ArticleCommentComponent,
    NewArticleComponent,
    SinglePhotoComponent,
    PhotoCommentComponent,
    NewPhotoComponent,
    SingleAnnonceComponent,
    AnnonceCommentComponent,
    NewAnnonceComponent,
    SingleBonplanComponent,
    BonplanCommentComponent,
    NewBonplanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
