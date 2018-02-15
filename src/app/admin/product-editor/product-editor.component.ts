import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  editing = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository, private router: Router, public activeRoute: ActivatedRoute) {
    this.editing = this.activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(+this.activeRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

  ngOnInit() {
  }

}
