import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UsuarioserviceService } from 'src/app/services/usuarioservice.service';
import { Product } from '../../interfaces/interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() product;
  public codigo:any;

  public producer = {
    apellido: "",
    ciudad: "",
    created_at: "",
    departamento: "",
    email: "",
    nombre: "",
    telefono: "",
    updated_at: ""
  };
  constructor(
    private shoppingCartService: ShoppingCartService,
    public usuarioService: UsuarioserviceService,
    private productService: ProductserviceService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    console.log("Selected: ",this.product);
    this.getProducer();
  }

  getProducer(){
    this.usuarioService.producer(this.product.attributes.producer_id).subscribe(
      usuario => {
        console.log(usuario.data.attributes);
        this.producer = usuario.data.attributes;
        console.log(this.producer);
        
      }
    );
  }

  addProduct(product: Product)
  {
    this.shoppingCartService.addProduct(product);
  }

  deleteProduct(id)
  {
    this.productService.delete(id).subscribe(
      res => {
        this.toastrService.success("Borrado correctamente", "Producto");
      }
    );
  }

}
