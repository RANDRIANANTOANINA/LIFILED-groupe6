import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NosActivitesComponent } from './component/nos-activites/nos-activites.component';
import { NosContactsComponent } from './component/nos-contacts/nos-contacts.component';
import { NosRealisationsComponent } from './component/nos-realisations/nos-realisations.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'navBar', component: NavBarComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'nosActivites', component: NosActivitesComponent },
  { path: 'nosRealisation', component: NosRealisationsComponent },
  { path: 'nosContact', component: NosContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
