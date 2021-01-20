import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: ['/'] },
      {
        label: 'Characters',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/characters'],
      },
      {
        label: 'Films',
        icon: 'pi pi-fw pi-video',
        routerLink: ['/films'],
      },
    ];
  }
}
