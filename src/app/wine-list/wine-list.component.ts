import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent  {
  @Input() isNew? = false;
  @Input() isFinished? = false;
}
