import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Pintura } from 'src/app/dtos/Pintura';
import { Event, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  pinturas: Pintura[]=[];
  //public mostrarBoton = this.login.mostrarBotonEdit;
  constructor(private apiService: ApiService, public router: Router, public login:LoginComponent) {

  }

  ngOnInit(): void {
    this.getPinturas();
    //console.log(this.login.mostrarBotonEdit);
  }
  getPinturas(): void{
    this.apiService.getPinturas()
    .subscribe(
      res => {this.pinturas=res},
      err => console.log(err)
    )
  }

  irAEdicion(){
    this.router.navigateByUrl("edit");
  }



}
