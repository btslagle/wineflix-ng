import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { PrimaryNavigationBarComponent } from './primary-navigation-bar/primary-navigation-bar.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { InfoButtonComponent } from './info-button/info-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationBarComponent,
    UserAvatarComponent,
    PrimaryNavigationBarComponent,
    PlayButtonComponent,
    InfoButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
