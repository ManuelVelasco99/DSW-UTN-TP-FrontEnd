import { BaseModule                      } from '../base/base.module';
import { CaracteristicasAgregarComponent } from './components/agregar/caracteristicas-agregar.component';
import { CaracteristicasRoutingModule    } from './caracteristicas-routing.module';
import { CommonModule                    } from '@angular/common';
import { NgModule                        } from '@angular/core';
import { NO_ERRORS_SCHEMA                } from '@angular/core';


@NgModule({
    declarations: [
        CaracteristicasAgregarComponent
    ],
    imports: [
        BaseModule,
        CommonModule,
        CaracteristicasRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ]
})
export class CaracteristicasModule { }
