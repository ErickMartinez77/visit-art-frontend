import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  //public mostrarBotonEdit = false;
  constructor(private fb: FormBuilder,public router: Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.verificarDatos();
  }

  verificarDatos(){
    if (this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      console.log("Login Exitoso")
      this.router.navigateByUrl('inicio');
    } else {
      console.log("Login sin éxito");
      alert("Usted no es el administrador, no puede ingresar");
    }
  }




}
