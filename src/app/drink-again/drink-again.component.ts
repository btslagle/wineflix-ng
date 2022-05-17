import { Component, Input } from '@angular/core';
import { wines } from '../data';

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css']
})

export class DrinkAgainComponent {
  wine = wines;
  @Input() isNew?: boolean;
  @Input() imageUrl = "";
  @Input() label = "";
  new = "New";
}
