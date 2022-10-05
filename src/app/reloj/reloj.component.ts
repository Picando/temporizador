import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  public minutos: number = 10;
  public segundos: number = 59;
  /* Si las propiedades no se van a usar en el template (html), lo mejor es que las defina
  *  como privadas.
  *  Siempre es bueno nombrar a las variables booleanas usando verbos del tipo
  *  is, has, should.
  *  Asi se puede notar a simple vista que son booleanas, y les da un poco mas de contexto.
  */
  private debeArrancar: boolean = true;
  private debeReiniciarse: boolean = false;

  constructor() {
    console.log('En el constructor...');
    this.arrancarTemporizador();
    this.reiniciarTemporizador();
  }

  public arrancarTemporizador(): void {
    if (this.debeArrancar) {
      this.debeArrancar = false;

      setInterval(() => {
        this.segundos--;
        if (this.segundos === -1) {
          this.segundos = 59;
          this.minutos--;
        }
        if (this.minutos === 0 && this.segundos === 0) {
          /*
          *  En este caso, la funcion no se esta ejecutando debido a que
          *  solo esta usando el identificador, es como si hiciera lo siguiente:
          *  const variable = 1;
          *
          *  variable;
          *
          *  Lo unico que esta haciendo alli es referenciar la variable, pero nada mas.
          *  Para ejecutar la funcion, debe usar los parentesis, en este caso:
          *  this.reiniciarTemporizador();
          */
          // this.reiniciarTemporizador;
          this.reiniciarTemporizador();
        }
      }, 1000);
    }
  }

  public reiniciarTemporizador(): void {
    /* Para que funcione de la manera en que esta aca, debe primero setear la variable
    *  debeReiniciarse a true antes de que entre en el metodo.
    */
    // if (this.debeReiniciarse) {
    //   this.debeReiniciarse = false;
    //   this.minutos = 10;
    //   this.segundos = 59;
    // }

      /* Dado que el metodo es bastante explicito, y su funcion es reiniciar el contador
      *  no hace falta hacer ninguna validacion para reiniciar.
      *  Se puede, pero es innecesaria.
      */
      this.minutos = 10;
      this.segundos = 59;
  }

  //metodo
  ngOnInit(): void {}
}

/* Otras acotaciones:
*  - Trate de acostumbrarse a comparar usando el triple igual (===), en este caso no hay problema dado
*    que son comparaciones con un booleano, pero dependiendo del tipo de dato, el doble igual le puede
*    generar resultados inesperados. Recuerde que el operador de doble igualdad fuerza una conversion.
*  - El metodo para reiniciar no funcionaba debido a que cuando se ejecutaba, el metodo primero verificaba si
*    reiniciar era igual a false, y, la variable comenzaba en false, pero luego usted la seteaba en true, y luego
*    de eso nunca mas seteaba su valor a false nuevamente.
*/
