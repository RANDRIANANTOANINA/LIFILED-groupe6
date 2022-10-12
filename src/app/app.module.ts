import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { FooterComponent } from './component/footer/footer.component';
import { NosActivitesComponent } from './component/nos-activites/nos-activites.component';
import { NosContactsComponent } from './component/nos-contacts/nos-contacts.component';
import { NosRealisationsComponent } from './component/nos-realisations/nos-realisations.component';
import { CarouselHomeComponent } from './component/carousel-home/carousel-home.component';
import { CarteComponent } from './component/acceuil/carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AcceuilComponent,
    FooterComponent,
    NosActivitesComponent,
    NosContactsComponent,
    NosRealisationsComponent,
    CarouselHomeComponent,
    CarteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
