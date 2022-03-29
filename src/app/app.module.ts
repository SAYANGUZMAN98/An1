import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsCreateComponent } from '../products/products-create/products-create.component';
import { ProductsDeleteComponent } from '../products/products-delete/products-delete.component';
import { ProductsEditComponent } from '../products/products-edit/products-edit.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsCreateComponent,
    ProductsDeleteComponent,
    ProductsEditComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ProductsCreateComponent, ProductsDeleteComponent, ProductsEditComponent, ProductsListComponent]
})
export class AppModule { }
