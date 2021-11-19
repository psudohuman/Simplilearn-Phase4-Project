import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { IndexComponent } from './component/index/index.component';
import { QuizComponent } from './component/quiz/quiz.component';

import { SigninComponent } from './component/signin/signin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path:'about',component:AboutComponent},
  {path:'',component:IndexComponent},
  {path: 'signin', component:SigninComponent },
  {path:'quizpage',component:QuizComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
