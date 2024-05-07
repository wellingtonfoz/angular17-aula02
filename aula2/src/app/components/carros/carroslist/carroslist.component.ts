import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){
    let carro1 = new Carro();
    carro1.id = 1;
    carro1.nome ='Fiesta';

    let carro2 = new Carro();
    carro2.id = 2;
    carro2.nome ='abc';

    let carro3 = new Carro();
    carro3.id = 3;
    carro3.nome ='dfasdfadsf';

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
    
  }

}
