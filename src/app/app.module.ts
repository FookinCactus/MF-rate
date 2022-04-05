import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { NewAccountComponent } from './Components/new-account/new-account.component';
import { NewReviewComponent } from './Components/new-review/new-review.component';
import { YourProfileComponent } from './Components/your-profile/your-profile.component';
import { MatInputModule } from "@angular/material/input";
import { ImgUploadComponent } from './Components/img-upload/img-upload.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AboutUsComponent,
    LoginComponent,
    MainPageComponent,
    NewAccountComponent,
    NewReviewComponent,
    YourProfileComponent,
    ImgUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
