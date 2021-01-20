import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: ':: Angular10 Laboratory :: Home',
      titleHeader: 'Angular10 Laboratory'
    }
  },
  {
    path: 'credit-card-form',
    component: CreditCardComponent,
    data: {
      title: ':: Angular10 Laboratory :: Credit Card Form',
      titleHeader: 'Credit Card Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
