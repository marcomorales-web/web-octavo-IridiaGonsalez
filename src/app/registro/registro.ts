import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acepta: boolean = false;

  constructor(private router: Router) {}

  registrar() {

    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!this.acepta) {
      alert("Debes aceptar los términos");
      return;
    }

    const usuario = {
      nombre: this.firstName + ' ' + this.lastName,
      email: this.email,
      password: this.password
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert("Cuenta creada correctamente 💙");

    this.router.navigate(['/login']);
  }
}