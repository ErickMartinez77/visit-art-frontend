import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor/editor.component';
import { InternacionalComponent } from './pages/internacional/internacional.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { PinturaComponent } from './pages/pintura/pintura.component'
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'edit', component: EditorComponent },
  { path: 'nacional', component: NacionalComponent },
  { path: 'internacional', component: InternacionalComponent },
  { path: ':id', component: PinturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
