import { Component, OnInit, OnDestroy, OnChanges, AfterContentChecked, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, Input, SimpleChanges } from '@angular/core';
import { products } from '../products';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, tap, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BehaviorSubject<any> 
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  products: any[];
  @Input() state: any = {};
  constructor() {
    super({
      type: 'constructor',
      payload: {}
    });
    this.products = products;
    this.subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.setCyc('ngOnInit', this.state);
  }

  ngDoCheck() {
    this.setCyc('ngDoCheck', this.state);
  }

  ngOnChanges(changes: SimpleChanges){
    this.setCyc('ngOnChanges', this.state);
  }

  ngAfterContentInit() {
    this.setCyc('ngAfterContentInit', this.state);
  }

  ngAfterContentChecked() {
    this.setCyc('ngAfterContentChecked', this.state);
  }

  ngAfterViewInit() {
    this.setCyc('ngAfterViewInit', this.state);
  }

  ngAfterViewChecked() {
    this.setCyc('ngAfterViewChecked', this.state);
  }

  ngOnDestroy() {
    this.complete();
    this.unsubscribe();
  }

  setCyc(name: string, payload: any) {
    this.next({
      type: name,
      payload: payload
    });
  }

  getCyc(name: string): Observable<any> {
    return this.pipe(filter(res => {
      return res.type === name;
    }), pluck('payload'));
  }
}
