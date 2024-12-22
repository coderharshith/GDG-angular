import { Component } from '@angular/core';
import { HeroComponent } from "../components/hero/hero.component";
import { ImageSectionComponent } from "../components/image-section/image-section.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ImageSectionComponent, NavbarComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
