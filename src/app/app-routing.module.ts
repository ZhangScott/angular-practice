import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { DynamicFormHostComponent } from './dynamic-form-host/dynamic-form-host.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'customerprofile', component: CustomerProfileComponent },
  { path: 'heroform', component: HeroFormComponent },
  { path: 'dynamicform', component: DynamicFormHostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
