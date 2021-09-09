import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apis/api.service';
import { Pintura } from 'src/app/dtos/Pintura';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.component.html',
  styleUrls: ['./pintura.component.css']
})
export class PinturaComponent implements OnInit {
  pintura: Pintura = {
    _id: '',
    titulo: '',
    descripcion: '',
    precio: '',
    imagenes: '',
    secciones: []
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.apiService.getPinturaId(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.pintura = res;
          },
          err => console.log(err)
        )
    }
  }

}
