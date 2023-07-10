import { Component } from '@angular/core';
import { Input     } from '@angular/core';

@Component({
    selector    : 'app-layout-formulario',
    templateUrl : './layout-formulario.component.html',
    styleUrls   : ['./layout-formulario.component.scss']
})
export class LayoutFormularioComponent {

    @Input()
    public tituloFormulario : string = '';
}
