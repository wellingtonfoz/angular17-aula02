import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login!: string;
  senha!: string;

  router = inject(Router);

  logar() {
    if (this.login == 'admin' && this.senha == 'admin') {
      //Swal.fire('Seja bem-vindo, administrador!', '', 'success');
      this.router.navigate(['admin/carros']);

    } else
      alert('Login ou senha incorretos');
  }
}
