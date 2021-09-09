import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Pintura } from 'src/app/dtos/Pintura';


@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.css']
})
export class NacionalComponent implements OnInit {

  public pinturas: Array<Pintura> = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  async getNoticias() {
    this.pinturas = await this.api.get<Array<Pintura>>('/pintura/seccion/Nacional').toPromise();
    console.log(this.pinturas);
  }

}

