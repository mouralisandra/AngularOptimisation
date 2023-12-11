import {ApplicationRef, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';
import {User, UsersService} from "../users.service";
import * as ChartJs from 'chart.js/auto';
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit {
  @ViewChild('chart') divChart!:ElementRef
  oddUsers: User[];
  evenUsers: User[];
  chart: any;
  constructor(private userService: UsersService,
              ar:ApplicationRef,private renderer: Renderer2,private zone:NgZone) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(()=>{this.createChart();})

  }
  addUser(list: User[], newUser: string) {
    this.userService.addUser(list, newUser);
  }
  createChart(){
    const data = [
      { users: 'Workers', count: this.oddUsers.length },
      { users: 'Boss', count: this.evenUsers.length },
    ];
    this.chart = new ChartJs.Chart("MyChart",
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.users),
          datasets: [
            {
              label: 'Entreprise stats',
              data: data.map(row => row.count)
            }
          ]
        }
      });
  }
}

