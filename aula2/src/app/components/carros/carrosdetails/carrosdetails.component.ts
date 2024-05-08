import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carro } from '../../../models/carro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrosdetails',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './carrosdetails.component.html',
  styleUrl: './carrosdetails.component.scss'
})
export class CarrosdetailsComponent {

  @Input("carro") carro: Carro = new Carro();
  @Output("retorno") retorno: EventEmitter<any> = new EventEmitter();

  constructor(){
  }

  save(){
    alert('Salvo com sucesso!');
    this.carro.id = 4444;
    this.retorno.emit(this.carro);  
  }

}
