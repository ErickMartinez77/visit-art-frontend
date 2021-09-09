import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Pintura } from 'src/app/dtos/Pintura';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  public noticias: Array<Pintura> = [];
  public mostrarDatos = false;
  public datos:any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getNoticias();
    console.log('f');
    this.getCovid();
  }

  async getNoticias() {
    this.noticias = await this.api.get<Array<Pintura>>('/noticia/seccion/covid').toPromise();
    console.log(this.noticias);
  }

  async getCovid() {
    this.datos = await this.api.getCovid<Object>().toPromise();
    console.log(this.datos);
  }

  mostrar(){
    this.mostrarDatos = true;
  }

  ocultar(){
    this.mostrarDatos = false;
  }

}
