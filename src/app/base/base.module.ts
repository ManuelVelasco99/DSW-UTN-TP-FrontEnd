import { CommonModule     } from '@angular/common';
import { NgModule         } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

//ANGULAR MATERIAL
import { MatButtonModule    } from '@angular/material/button';
import { MatCardModule      } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule     } from '@angular/material/input';
import { MatToolbarModule   } from '@angular/material/toolbar';

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
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
    ],
    exports: [
        LayoutGeneralComponent,
        LayoutFormularioComponent,

        //ANGULAR MATERIAL
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
    ]
})
export class BaseModule { }
