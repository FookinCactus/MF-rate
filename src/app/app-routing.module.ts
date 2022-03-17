import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./Components/about-us/about-us.component";
import {LoginComponent} from "./Components/login/login.component";
import {MainPageComponent} from "./Components/main-page/main-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
