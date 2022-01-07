import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'nxworkspace-test-lib',
  templateUrl: './test-lib.component.html',
  styleUrls: ['./test-lib.component.css']
})
export class TestLibComponent implements OnInit {
  prod: Product[] = [
    { id: 1, name: 'One Plus 7 Pro', mfd: new Date('1-Jan-2019'), price: 500 },
    { id: 2, name: 'IPhone 11 Pro', mfd: new Date('1-Mar-2019'), price: 1000 },
    { id: 3, name: 'Pixel 3', mfd: new Date('1-Dec-2019'), price: 700 }
  ];
  inventory = [
    { id: 1, name: 'Phone', Stock: 500 },
    { id: 2, name: 'Clothing', Stock: 1000 },
    { id: 3, name: 'Shoes', Stock: 700 }
  ];
  staffs =[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
  ]
  manager = [
    {
      "id": "1",
      "firstName": "Tom",
      "lastName": "Cruise"
    },
    {
      "id": "2",
      "firstName": "Maria",
      "lastName": "Sharapova"
    },
    {
      "id": "3",
      "firstName": "James",
      "lastName": "Bond"
    }
  ]
  products: any;
  header:any;
  _taskName!: string;
  
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  
  @Input()
  set componentName(name:string){
    this._taskName=name;
    let k = name.toLowerCase()
    console.log("The received Key is : ", k);
    
    switch( k as any ) { 
      case "products": { 
        this.products = this.prod;
        this.header= Object.keys(this.products[0]);
        console.log(this.header);
        break; 
        } 
      case "inventory": { 
        this.products = this.inventory;
        this.header= Object.keys(this.products[0]);
        console.log(this.header);
        break; 
        }
        case "staffs": { 
          this.products = this.staffs;
          this.header= Object.keys(this.products[0]);
          console.log(this.header);
          break; 
          }
        case "manager": { 
            this.products = this.manager;
            this.header= Object.keys(this.products[0]);
            console.log(this.header);
            break; 
            }
      } 
   } 
  

  constructor() { }
  ngOnInit(): void {
  }

}
