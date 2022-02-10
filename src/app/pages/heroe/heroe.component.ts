import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  poderes = ['Volar','Lanzar rayos','Super Fuerza','Invisibilidad','Magia'];

  modelo = new Heroe(13,'Spider-man',this.poderes[2],'Peter Parker');

  enviado = false;

  constructor() { }

  ngOnInit(): void {
  }

  //Metodo que se ejecuta cuando se envia el formulario
  onSubmit(){
    this.enviado=true;
  }

  //Metodo que resetea el modelo 
  newHeroe(){
    this.modelo = new Heroe(99,'','');
  }

}
