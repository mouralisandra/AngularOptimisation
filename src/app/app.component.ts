import { Component, NgZone } from '@angular/core';
import { TestService } from "./test/services/test.service";
import { Chart } from 'chart.js/auto';
import { User, UsersService } from './optimizationPattern/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nb = 3;
  title = 'advancedNg';


}
