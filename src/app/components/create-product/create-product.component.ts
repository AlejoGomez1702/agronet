import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup;
  categorias: Categoria[] = [
    {value: 'electrodomestico', viewValue: 'Electrodomestico'},
    {value: 'muebles', viewValue: 'Muebles'},
    {value: 'decoracion', viewValue: 'Descoracion'}
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  createProduct() {
    console.log(this.form.value);
  }

  exit() {
    console.log('Bye');
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      categoria: [''],
      precio: ['']
    });
  }

}
