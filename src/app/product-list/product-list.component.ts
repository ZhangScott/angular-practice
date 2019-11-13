import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: string[];

  constructor() {
    this.products = ["Woods", "metals", "plastics"]
  }

  ngOnInit() {
  }

}
