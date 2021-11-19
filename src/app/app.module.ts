import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { IndexComponent } from './component/index/index.component';
import { SigninComponent } from './component/signin/signin.component';
import { QuizComponent } from './component/quiz/quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    IndexComponent,
    SigninComponent,
    QuizComponent
  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
