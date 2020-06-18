import { Component, OnInit, Input} from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.scss']
})
export class ListaCompraComponent implements OnInit {

  elementos = [];
  new: string;
  listTitle: string; 
  list = [];
  activated: boolean = true;
  router: Router;
  toggle: boolean = true;
  spliced: boolean = false;

  @Input() deviceXs: boolean;
  @Input() deviceSm: boolean;
  @Input() deviceMd: boolean;

  buttonStatus = 'Enable';

  constructor() { 
    this.elementos = [];
    this.activated = false;
  }

  defList(){
    this.elementos = ['Tomate', 'Lechuga', 'Cebolla', 'Manzana', 'Plátano', 'Frutos Secos', 'Pan', 'Agua', 'Leche', 'Vino', 'Cerveza'];
    this.activated = true;
    this.whenClicked = [false,false];
  }

  activar(){
    this.activated = true;
  }

  clearNew(){
  }

  addElement(elemento){
    if (elemento.value != ''){
    this.elementos.push(elemento.value);
    console.log("Se ha introducido el elemento: "+ elemento.value);
    elemento.value = '';
    this.new ='';
    elemento.focus();
    this.whenClicked[this.elementos.length -1] = false;
    return false;
    }
  }
  deleteElement(elemento){
    this.spliced = false;
    console.log("Se ha eliminado el elemento: "+ elemento.value);
    for(let i=0; i< this.elementos.length; i++) {
      if(elemento == this.elementos[i]){
        this.elementos.splice(i,1);
        this.spliced = true;
      }
      if (this.spliced == true){
        this.whenClicked[i] = this.whenClicked[i+1];
        if (i == this.elementos.length -1){
          this.spliced = false;
        }
      }
    };
  }

  whenClicked = [false,false];

  tracked(item, index){
    return index;
  }

  ngOnInit() {
  }

}