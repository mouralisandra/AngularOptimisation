import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];
  @Output() add = new EventEmitter<string>();
  userFullName: string = '';
  emitAddUser() {
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
}
