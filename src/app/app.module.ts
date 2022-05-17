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
import { HeroContentComponent } from './hero-content/hero-content.component';
import { HeroControlComponent } from './hero-control/hero-control.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';
import { KeepDrinkingComponent } from './keep-drinking/keep-drinking.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationBarComponent,
    UserAvatarComponent,
    PrimaryNavigationBarComponent,
    PlayButtonComponent,
    InfoButtonComponent,
    HeroContentComponent,
    HeroControlComponent,
    HeroImageComponent,
    DrinkAgainComponent,
    KeepDrinkingComponent,
    HeaderComponent,
    MainComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
