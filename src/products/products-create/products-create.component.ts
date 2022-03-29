import { Component } from '@angular/core';
import { ProductsServices} from '../../services/products.services';
import { OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit{
  ngOnInit(){
    this.productServices.createProduct({
      "id": 1,
      "nombre": "PS5", 
      "descripcion": "Consola de juegos", 
      "precio Q": 5000.00,
      "cantidad": 1,
      "idTipoProducto": 1


    })
  } 
  
  title = 'Agregar Producto';
  productos: any;
  constructor(private productServices: ProductsServices){
  }
}