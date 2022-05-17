import { Component } from '@angular/core';
import { wines } from '../data';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  wines = wines;
  wineLists = this.wines;
  

}
