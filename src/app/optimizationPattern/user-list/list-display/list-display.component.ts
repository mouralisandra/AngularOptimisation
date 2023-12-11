import { Component, Input } from '@angular/core';
import { User } from '../../users.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent {
  @Input() users: User[] = [];
}
