import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { CarrosdetailsComponent } from '../carrosdetails/carrosdetails.component';
import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MdbModalModule,
    CarrosdetailsComponent,
    MdbAccordionModule
  ],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent {
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  lista: Carro[] = [];
  carroEdit!: Carro;

  constructor() {
    this.findAll();
  }

  findAll() {
    let carro1 = new Carro();
    carro1.id = 1;
    carro1.nome = 'Fiesta';

    let carro2 = new Carro();
    carro2.id = 2;
    carro2.nome = 'abc';

    let carro3 = new Carro();
    carro3.id = 3;
    carro3.nome = 'dfasdfadsf';

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
  }

  new() {
    this.carroEdit = new Carro();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  edit(carro: Carro) {
    // this.carroEdit = carro; //
    this.carroEdit = Object.assign({}, carro); //CLONANDO O OBJETO PARA NÃO ZOAR A TABELA
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  retornoDetalhe(carro: Carro) {
    if (this.carroEdit.id > 0) {
      //editando....
      let indice = this.lista.findIndex((carroa) => {
        return carroa.id == this.carroEdit.id;
      });
      this.lista[indice] = carro;
    } else {
      //cadastrar novo
      carro.id = 55;
      this.lista.push(carro);
    }
    this.modalRef.close();
  }

  deleteById(carro: Carro) {

    Swal.fire({
      title: 'Deseja realmente deletar este objeto?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {

        //REMOVER DA TABELA

        //busca a posição do objeto a ser deletado na tabela
        let indice = this.lista.findIndex((carroa) => {
          return carroa.id == carro.id;
        });

        // deletando o objeto da tabela
        this.lista.splice(indice, 1);

        Swal.fire('Carro deletado com sucesso!', '', 'success')
      }
    })


  }
}
