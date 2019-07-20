import { Injectable } from '@angular/core';
import { StockClass } from './stock';
import { STOCKS } from './stock-stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocks : StockClass[]=STOCKS;

  getStocks(stockName:string) : StockClass {
    
    for(var i=0;i<this.stocks.length;i++)
    {
      if(this.stocks[i].name==stockName)
        return this.stocks[i];//sends the object
        //alert(this.stocks[i].price);
    }
    /*
    for(var i=0;i<STOCKS.length;i++)
    {
      if(STOCKS[i].name==stockName){
        alert(STOCKS[i]);
        return STOCKS[i];}
    }*/
  }
  
/*
  addStock(name: string): void {
      var newStock = {name:name,keyCode:'A',price:'111 USD'};
      this.stocks.push(newStock);
  }
*/
  constructor() { }
}
