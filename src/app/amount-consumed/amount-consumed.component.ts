import { Component} from '@angular/core';
import {wines} from '../data';

@Component({
  selector: 'app-amount-consumed',
  templateUrl: './amount-consumed.component.html',
  styleUrls: ['./amount-consumed.component.css']
})
export class AmountConsumedComponent  {
  wines = wines
}
