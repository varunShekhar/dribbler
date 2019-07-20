import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//charts
import { Routes,RouterModule } from '@angular/router'
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes=[
  {path:'bar-chart', component:StocksComponent},
  {path:'**', component: StocksComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
