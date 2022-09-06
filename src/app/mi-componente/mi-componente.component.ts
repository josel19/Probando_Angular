import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
   edad : number;
  constructor() { 
    this.edad = 18;
  }

  ngOnInit(): void {
    
  }

  aumentarEdad(){
    this.edad++;
  }
  disminuirEdad(){
    this.edad--;
  }

}
