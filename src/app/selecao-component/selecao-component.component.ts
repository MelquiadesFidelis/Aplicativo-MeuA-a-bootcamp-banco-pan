import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-selecao-component',
  templateUrl: './selecao-component.component.html',
  styleUrls: ['./selecao-component.component.css']
})

export class SelecaoComponentComponent {

  //contador: number = 0

  

  constructor() { }

  @Input() titulo: string = '';
  @Input() opcoes: string[] = [];
  @Input() escolhaAte: number;
  //@Input() contador: string;

  contador: string = ""
  variavel: number = 0;

  
  

 fieldsChange(values:any, i:number):void {
   
  //console.log(this.opcoes)
  if (values.currentTarget.checked ==  true) {
    this.variavel++
    this.contador = "( "+this.variavel+" selecionado)"
    //console.log(this.variavel);
  } else {
    this.contador = "( "+this.variavel+" selecionado)"
    this.variavel--
    this.contador = "( "+this.variavel+" selecionado)"
    //console.log(this.variavel);

    if(this.variavel == 0){
      this.contador = ""
    }
  }
  
}

}
