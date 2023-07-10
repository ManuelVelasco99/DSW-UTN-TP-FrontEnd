import { NgModule     } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes       } from '@angular/router';

const routes: Routes = [
    {
        path : '',
        children : [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
            },
        ]
    },
    {
        path : 'caracteristicas',
        children : [
            {
                path: '',
                loadChildren: () => import('./caracteristicas/caracteristicas.module').then(m => m.CaracteristicasModule),
            },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
