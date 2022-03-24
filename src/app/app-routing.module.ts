import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./Components/about-us/about-us.component";
import {LoginComponent} from "./Components/login/login.component";
import {MainPageComponent} from "./Components/main-page/main-page.component";
import {NewAccountComponent} from "./Components/new-account/new-account.component";
import {NewReviewComponent} from "./Components/new-review/new-review.component";
import {YourProfileComponent} from "./Components/your-profile/your-profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: MainPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'new-review', component: NewReviewComponent },
  { path: 'profile', component: YourProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
