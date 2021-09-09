import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintErrorComponent } from './print-error/print-error.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PrintErrorComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PrintErrorComponent,
    HeaderComponent,
  ],
})
export class UtilsModule { }
