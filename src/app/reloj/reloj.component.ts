import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  public minutos: number = 10;
  public segundos: number = 59;
  public arrancado: boolean = false;
  public reiniciar: boolean = false;

  constructor() {
    console.log('En el constructor...');
    this.arrancarTemporizador();
    this.reiniciarTemporizador();
  }

  public arrancarTemporizador(): void {
    if (this.arrancado == false) {
      this.arrancado = true;

      setInterval(() => {
        this.segundos--;
        if (this.segundos == -1) {
          this.segundos = 59;
          this.minutos--;
        }
        if (this.minutos == 0 && this.segundos == 0) {
          this.reiniciarTemporizador;
        }
      }, 1000);
    }
  }

  public reiniciarTemporizador(): void {
    if (this.reiniciar == false) {
      this.reiniciar = true;
      this.minutos = 10;
      this.segundos = 59;
    }
  }

  //metodo
  ngOnInit(): void {}
}
