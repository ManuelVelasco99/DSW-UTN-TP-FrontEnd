import { ActivatedRoute } from '@angular/router';
import { Component      } from '@angular/core';

@Component({
  selector    : 'app-caracteristicas-agregar',
  templateUrl : './caracteristicas-agregar.component.html',
  styleUrls   : ['./caracteristicas-agregar.component.scss']
})
export class CaracteristicasAgregarComponent {

    public idCaracteristica! : number;
    public tituloFormulario  : string = 'Agregar característica';
    public textoBoton        : string = 'Agregar';

    constructor(
        private route : ActivatedRoute
    ) {
        let paramId = route.snapshot.params['id'];
        if(paramId) {
            this.idCaracteristica = paramId;
            this.tituloFormulario = 'Editar característica';
            this.textoBoton       = 'Guardar';
        }
    }

}
