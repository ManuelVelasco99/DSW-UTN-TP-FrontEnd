import { CaracteristicasAgregarComponent } from './components/agregar/caracteristicas-agregar.component';
import { NgModule                        } from '@angular/core';
import { RouterModule                    } from '@angular/router';
import { Routes                          } from '@angular/router';

const routes: Routes = [
    {
		path: 'agregar',
		component: CaracteristicasAgregarComponent
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CaracteristicasRoutingModule { }
