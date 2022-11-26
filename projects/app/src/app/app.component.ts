import { Component } from '@angular/core';
import {RandomService} from 'good-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private randomService: RandomService) {
    console.log(this.randomService.getRandomNumber());
  }
}
