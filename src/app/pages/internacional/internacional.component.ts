import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Pintura } from 'src/app/dtos/Pintura';

@Component({
  selector: 'app-internacional',
  templateUrl: './internacional.component.html',
  styleUrls: ['./internacional.component.css']
})
export class InternacionalComponent implements OnInit {
  public pinturas: Array<Pintura> = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getPinturas();
  }

  async getPinturas() {
    this.pinturas = await this.api.get<Array<Pintura>>('/pintura/seccion/Internacional').toPromise();
    console.log(this.pinturas);
  }

}
