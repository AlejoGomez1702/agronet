import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
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
  public categorias: any[] = [
    // {value: 'electrodomestico', viewValue: 'Electrodomestico'},
    // {value: 'muebles', viewValue: 'Muebles'},
    // {value: 'decoracion', viewValue: 'Descoracion'}
  ];
  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadCategories();

  }

  loadCategories()
  {
    this.categoriesService.getAll().subscribe(
      res => {
        this.categorias = res.data
      }
    );
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
