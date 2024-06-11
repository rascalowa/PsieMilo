import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './content/main/main.component';
import { ServicesComponent } from './content/services/services.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { LocalizationComponent } from './content/localization/localization.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const materials = [MatSidenavModule, MatButtonModule];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    LocalizationComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NoopAnimationsModule, ...materials],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
