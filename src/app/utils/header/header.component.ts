import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHeader: boolean = true;
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => this.modifyHeader(event));
  }

  modifyHeader(location: string | Event) {
    if (this.router.url == "/" )
      {
       this.showHeader= false;
      }
      else {
        this.showHeader= true;
      }
  }

  irInicio(){this.router.navigateByUrl('inicio')}
  irInternacional(){this.router.navigateByUrl('internacional')}
  irNacional(){this.router.navigateByUrl('nacional')}
  irALogin(){this.router.navigateByUrl('')}

}
