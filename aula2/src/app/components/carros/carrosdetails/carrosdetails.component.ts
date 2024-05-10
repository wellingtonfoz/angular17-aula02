import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [FormsModule, CommonModule, MdbFormsModule],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss'
})
export class CarrosdetailsComponent {

  @Input("carro") carro: Carro = new Carro();
  @Output("retorno") retorno: EventEmitter<any> = new EventEmitter();

  router = inject(Router);

  constructor(){
  }

  save(){

    //alert('Carro salvo com sucesso!');
    Swal.fire('Carro salvo com sucesso!', '', 'success');
    
    // CHAMADA HTTP PRO BACK: save ou update

    this.retorno.emit(this.carro);  
    this.router.navigate(['admin/carros']);
  }

}
