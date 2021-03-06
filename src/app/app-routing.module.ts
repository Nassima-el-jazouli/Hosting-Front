import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component:  LandingComponent},
  { path: 'login', component:  SigninComponent},
  { path: 'signup', component:  SignupComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'help', component:  HelpComponent},
  { path: 'services', component:  ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
