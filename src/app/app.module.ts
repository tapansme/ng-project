import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { FormcalculateComponent } from './formcalculate/formcalculate.component';

@NgModule({
  declarations: [
    AppComponent,
    TformComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    RegistrationComponent,
    GalleryComponent,
    CoursesComponent,
    ContactComponent,
    FormcalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
