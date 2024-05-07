import { Component } from '@angular/core';
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

  carro: Carro = new Carro();

  save(){
    alert('Salvo com sucesso!');
  }

}
