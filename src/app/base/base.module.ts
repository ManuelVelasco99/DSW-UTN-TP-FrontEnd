import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, NgModule     } from '@angular/core';

//ANGULAR MATERIAL
import { MatCardModule    } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

//COMPONENTS
import { LayoutGeneralComponent    } from './components/layout/general/layout-general.component';
import { LayoutFormularioComponent } from './components/layout/formulario/layout-formulario.component';


@NgModule({
    declarations: [
        LayoutGeneralComponent,
        LayoutFormularioComponent
    ],
    imports: [
        CommonModule,

        //ANGULAR MATERIAL
        MatCardModule,
        MatToolbarModule,
    ],
    exports: [
        LayoutGeneralComponent,
        LayoutFormularioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ]
})
export class BaseModule { }
