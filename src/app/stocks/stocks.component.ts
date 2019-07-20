import { Component, OnInit } from '@angular/core';
import {StockClass} from '../stock'
//import {STOCKS} from '../stock-stock'
import { StockService } from '../stock.service';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
//private stock: string='Google';
//private stocks: StockClass[]=STOCKS;
/*
private stock: StockClass={
  name:'google',
  price:'1,132.75 USD'
};
*/
//charts
public barChartOptions={
  scaleShowVerticalLines:false,
  responsive:true
};
//public barChartLabels=['2006','2007','2008','2009','2010','2011','2012'];
public barChartLabels=['2006','2007','2008','2009'];
public barChartType='bar';
public barChartLegend=true;
/* 

public barChartData=[
  {data:[65,59,80,81,56,55,40], label:'Series A'},
  {data:[28,19,8,18,26,5,34], label:'Series B'}
];

so use anchor tag, get click event listener and get a method called like below getStock() and there assign values
*/

private currentStock: StockClass;
//Task4
private pastStock:StockClass[]=[];
constructor(private stockservice:StockService){}

//constructor(){}
  ngOnInit() {
  }
  private currentStockPrice:Array <Object>;
  getStock(name:string):void{
    this.currentStock=this.stockservice.getStocks(name);
    //Task4
    this.currentStock.searchTime=(new Date()).toTimeString();
    this.pastStock.push(this.currentStock);
    //new change
    for(var i=0;i<this.currentStock.price.length;i++)
      this.currentStockPrice[i]=this.currentStock.price[i];

  }

  public barChartData=[
    {data:[].push(this.currentStockPrice), label:'Series A'}
  ];
  /*
  private currentStockPrice:Array <Object>;
  getStockData(name:string):void{
    this.currentStock=this.stockservice.getStocks(name);
    for(var i=0;i<this.currentStock.price.length;i++)
      this.currentStockPrice[i]=this.currentStock.price[i];
      /*
      for(var i in this.currentStock.price)
      console.log(this.currentStock.price[i]);  
  }

  public barChartData=[
    //{data:[65,59,80,81,56,55,40], label:'Series A'},
    {data[]=}
    //{data:[28,19,8,18,26,5,34], label:'Series B'}
  ];
*/
}
