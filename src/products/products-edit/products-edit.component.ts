import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit{
  ngOnInit(){
    this.productServices.editProduct({
      "id": 1,
      "nombre": "PS5", 
      "descripcion": "Consola de juegos", 
      "precio Q": 5000.00,
      "cantidad": 1,
      "idTipoProducto": 1


    })
  } 
  
  title = 'Editar Producto';
  products: any;
  constructor(private productServices: ProductsServices){
  }
}
