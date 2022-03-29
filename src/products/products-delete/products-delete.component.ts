import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.scss']
})
export class ProductsDeleteComponent implements OnInit{
  ngOnInit(){
    this.productServices.deleteProduct()

  }
    

  title = 'Eliminar Producto';
  productos: any;
  constructor(private productServices: ProductsServices){
  }
}