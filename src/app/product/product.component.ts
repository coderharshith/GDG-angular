import { Component } from '@angular/core';
import { ImageSectionComponent } from "../components/image-section/image-section.component";

@Component({
  selector: 'app-product',
  imports: [ImageSectionComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
