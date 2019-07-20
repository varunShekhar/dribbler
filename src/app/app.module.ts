import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StockService} from './stock.service';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
//charts
import {ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
//import { MyBarChartComponent } from './stocks/stocks.component'
/*
const routes: Routes=[
  {path:'bar-chart', component:StocksComponent},
  {path:'**', component: StocksComponent}
];
*/
@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    //for graph
    ChartsModule,
    AppRoutingModule
  ],
  providers : [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
