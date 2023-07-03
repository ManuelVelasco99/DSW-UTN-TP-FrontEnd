import { CommonModule } from '@angular/common';
import { NgModule     } from '@angular/core';

//ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';

//COMPONENTS
import { LayoutGeneralComponent } from './components/layout/general/layout-general.component';


@NgModule({
  declarations: [
    LayoutGeneralComponent
  ],
  imports: [
    CommonModule,

    //ANGULAR MATERIAL
    MatToolbarModule,
  ],
  exports: [
    LayoutGeneralComponent,
  ]
})
export class BaseModule { }
