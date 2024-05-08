import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
     MdbModalModule, CarrosdetailsComponent],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {

  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalDetalhe") modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  lista: Carro[] = [];
  carroEdit!: Carro;

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

  new(){
    this.carroEdit = new Carro();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }
  
  edit(carro: Carro){
   // this.carroEdit = carro; //
    this.carroEdit = Object.assign({}, carro) ;  //CLONANDO O OBJETO PARA NÃO ZOAR A TABELA
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  retornoDetalhe(carro: Carro){
    this.lista.push(carro);
    this.modalRef.close();
  }

}
