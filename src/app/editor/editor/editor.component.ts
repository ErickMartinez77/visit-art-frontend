import { Component, Inject, OnInit } from '@angular/core';
import { PinturaDto } from 'src/app/dtos/PinturaDto';
import { Pintura } from 'src/app/dtos/Pintura';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/apis/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public mostrarForm = false;
  public editando = false;
  public pinturaId = '';

  public pinturas: Array<Pintura> = [];
  public pintura: PinturaDto = <PinturaDto>{};
  public myForm: FormGroup = <FormGroup>{};
  listaSecciones: string[] = [
    "Internacional",
    "Nacional"
  ];

  constructor(
    public builder: FormBuilder,
    public api: ApiService,
  ) { }

  ngOnInit() {
    this.getPinturas();
    this.iniciarValidaciones();
  }

  async getPinturas() {
    this.pinturas = await this.api.get<Array<Pintura>>('/pintura').toPromise();
    console.log(this.pinturas);
  }

  iniciarValidaciones() {
    let validaciones = {
      vTitulo: ['', [
        Validators.required,
      ]],
      vDescripcion: ['', [
        Validators.required,
      ]],
      vImagenes: ['', [
        Validators.required,
      ]],
      vPrecio: ['', [
        Validators.required,
      ]],
      vSecciones: ['', [
        Validators.required,
      ]],
    }
    this.myForm = this.builder.group(validaciones);
  }

  get f(): any {
    return this.myForm.controls;
  }

  async postPintura() {
    try {
      let response: PinturaDto = await this.api.post<PinturaDto>('/pintura', this.pintura).toPromise();
      console.log(response);
      this.mostrarForm = false;
      this.ngOnInit();
    } catch {
      window.alert('Error');
    }
  }

  showForm() {
    this.mostrarForm = true;
    this.pintura = <PinturaDto>{};
  }

  ocultar() {
    this.mostrarForm = false;
  }

  async putPintura() {
    try {
      let response: PinturaDto = await this.api.put<PinturaDto>('/pintura/' + this.pinturaId, this.pintura).toPromise();
      console.log(response);
      this.mostrarForm = false;
      this.ngOnInit();
    } catch {
      window.alert('Error');
    }
  }

  editar(item: PinturaDto, id: string) {
    this.mostrarForm = true;
    this.pintura = item;
    this.editando = true;
    this.pinturaId = id;
  }

  async deletePintura(id: string) {
    await this.api.delete('/pintura/', id).toPromise();
    this.ngOnInit();
  }
}
