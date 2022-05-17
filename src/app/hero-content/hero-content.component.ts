import { Component, Input } from '@angular/core';
import { heroContent } from '../data';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent  {
  heroContent = heroContent;
  @Input() title = "";
  @Input() subtitle = "";
  @Input() imageUrl = "";
  @Input() description = "";

  wineImage = "/assets/wine-hero.webp";
  wineTitle = "Wine bottles";
}